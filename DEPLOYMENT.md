# Deployment Guide for GitHub Pages

This guide will help you deploy your HVAC Technician Directory to GitHub Pages.

## 📋 Prerequisites

- Git installed on your computer
- GitHub account
- Node.js and npm installed

## 🚀 Quick Deployment Steps

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `HSB-Frontend` (or any name you prefer)
3. Set it to **Public** (required for free GitHub Pages)
4. Don't initialize with README (we already have one)

### Step 2: Update Configuration

**Important**: If your repository name is different from `HSB-Frontend`, update these files:

1. **vite.config.js** - Line 7:
```javascript
base: process.env.NODE_ENV === 'production' ? '/YOUR-REPO-NAME/' : '/',
```

2. **package.json** - Line 6:
```json
"homepage": "https://yourusername.github.io/YOUR-REPO-NAME",
```

### Step 3: Initialize Git and Push

```bash
# Navigate to the Frontend directory
cd HSB/Frontend

# Initialize git repository
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: HVAC Technician Directory"

# Add your GitHub repository as origin
git remote add origin https://github.com/yourusername/HSB-Frontend.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically trigger and deploy your site

### Step 5: Access Your Site

After deployment (usually 2-5 minutes), your site will be available at:
```
https://yourusername.github.io/HSB-Frontend
```

## 🔄 Alternative: Manual Deployment

If you prefer manual deployment using gh-pages:

```bash
# Build and deploy in one command
npm run deploy
```

This will:
1. Run the build process
2. Deploy the `dist` folder to the `gh-pages` branch
3. Update your live site

## 🛠️ Troubleshooting

### Common Issues

1. **404 Error on deployment**:
   - Check that the `base` path in `vite.config.js` matches your repository name
   - Ensure the repository is public

2. **Assets not loading**:
   - Verify the `homepage` URL in `package.json` is correct
   - Check that `.nojekyll` file exists in the `public` folder

3. **Workflow fails**:
   - Ensure GitHub Pages is enabled in repository settings
   - Check that the repository has the correct permissions

### Checking Deployment Status

1. Go to your repository on GitHub
2. Click the **Actions** tab
3. Check the latest workflow run for any errors

## 📝 Updating Your Site

To update your deployed site:

1. Make your changes locally
2. Test with `npm run dev`
3. Commit and push changes:
```bash
git add .
git commit -m "Update: description of changes"
git push origin main
```

The GitHub Action will automatically rebuild and deploy your site.

## 🎯 Performance Tips

- The site is optimized for static hosting
- All assets are properly bundled and minified
- Images are optimized for web delivery
- CSS is purged of unused styles

## 📞 Need Help?

If you encounter issues:
1. Check the GitHub Actions logs for error details
2. Ensure all files are properly committed
3. Verify repository settings are correct
4. Check that Node.js dependencies are properly installed

Your HVAC Technician Directory is now ready for the world! 🎉 