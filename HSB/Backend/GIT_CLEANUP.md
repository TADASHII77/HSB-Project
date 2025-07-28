# Git History Cleanup Guide

## 🚨 If Credentials Were Committed to Git

If sensitive information (like MongoDB connection strings) was accidentally committed to your git repository, follow these steps:

### ⚠️ Important Notes:
- These operations **rewrite git history**
- **Coordinate with your team** before proceeding
- **Create a backup** before starting
- **Force push will be required** (affects all collaborators)

## 🔧 Method 1: Remove Specific Files from History

### Step 1: Install git-filter-repo (Recommended)
```bash
# Install git-filter-repo
pip install git-filter-repo

# Or on macOS
brew install git-filter-repo
```

### Step 2: Remove Sensitive Files
```bash
# Remove a specific file from entire history
git filter-repo --path setup-mongodb.js --invert-paths

# Remove multiple files
git filter-repo --path setup-mongodb.js --path MONGODB_SETUP.md --invert-paths

# Remove files matching a pattern
git filter-repo --path-glob '*.env' --invert-paths
```

## 🔧 Method 2: Remove Specific Content

### Remove specific text/patterns:
```bash
# Remove lines containing sensitive patterns
git filter-repo --replace-text replacements.txt
```

Create `replacements.txt`:
```
mongodb+srv://username:password@cluster.mongodb.net/==>[REMOVED]
your_actual_password==>[REMOVED]
sensitive_api_key==>[REMOVED]
```

## 🔧 Method 3: Using BFG Repo-Cleaner

### Step 1: Install BFG
```bash
# Download from: https://rtyley.github.io/bfg-repo-cleaner/
# Or use brew on macOS
brew install bfg
```

### Step 2: Clean Repository
```bash
# Remove files
bfg --delete-files setup-mongodb.js

# Remove text patterns
bfg --replace-text replacements.txt

# Clean up
git reflog expire --expire=now --all && git gc --prune=now --aggressive
```

## 🔧 Method 4: Interactive Rebase (Recent Commits Only)

If the sensitive commit is recent (last few commits):

```bash
# Interactive rebase for last 5 commits
git rebase -i HEAD~5

# In the editor, change 'pick' to 'drop' for commits to remove
# Or 'edit' to modify the commit
```

## 🚀 After Cleanup

### Step 1: Force Push (⚠️ Dangerous)
```bash
# Force push to update remote repository
git push --force-with-lease origin main

# Or if you're sure (more dangerous)
git push --force origin main
```

### Step 2: Notify Team Members
All team members need to:
```bash
# Delete their local repository
rm -rf project-folder

# Clone fresh copy
git clone https://github.com/username/repo.git
```

### Step 3: Rotate Compromised Credentials
- Change MongoDB Atlas passwords
- Regenerate API keys
- Update environment variables
- Check for unauthorized access

## 🛡️ Prevention for Future

### Pre-commit Hook
Create `.git/hooks/pre-commit`:
```bash
#!/bin/sh
# Check for common secrets
if git diff --cached --name-only | xargs grep -l "mongodb+srv://\|password.*=.*[^example]"; then
    echo "❌ Potential secrets detected!"
    echo "Please review your changes and use environment variables."
    exit 1
fi
```

Make it executable:
```bash
chmod +x .git/hooks/pre-commit
```

### GitHub Secret Scanning
- Enable secret scanning in repository settings
- Set up notifications for detected secrets
- Use GitHub's push protection feature

## 🆘 Emergency Checklist

If secrets are detected:
- [ ] **STOP** - Don't make more commits
- [ ] Rotate all exposed credentials immediately
- [ ] Check for unauthorized access
- [ ] Clean git history using methods above
- [ ] Force push cleaned history
- [ ] Notify all team members
- [ ] Update security practices
- [ ] Document the incident

## 📞 Need Help?

If you're unsure about any of these steps:
1. **Create a backup** of your repository first
2. **Test on a clone** before applying to main repo
3. **Coordinate with your team**
4. Consider using a new repository if cleanup is too complex

Remember: **Prevention is better than cleanup!** 🛡️ 