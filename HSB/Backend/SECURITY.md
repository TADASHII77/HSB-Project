# Security Guide

## 🔒 Environment Variables

### ✅ DO:
- Use `.env` files for sensitive configuration
- Add `.env` to `.gitignore`
- Use placeholder values in `.env.example`
- Rotate credentials regularly
- Use strong, unique passwords

### ❌ DON'T:
- Commit `.env` files to version control
- Hardcode credentials in source code
- Share credentials in documentation
- Use default or weak passwords
- Store production credentials in development files

## 🔐 MongoDB Security

### Atlas (Cloud):
- Use strong passwords (min 12 characters, mixed case, numbers, symbols)
- Enable IP whitelisting (avoid 0.0.0.0/0 in production)
- Use database users with minimal required permissions
- Enable audit logging in production

### Local MongoDB:
- Enable authentication: `mongod --auth`
- Create database users with specific roles
- Use SSL/TLS in production
- Regular security updates

## 📧 Email Security

### Gmail App Passwords:
- Enable 2-Factor Authentication
- Generate app-specific passwords
- Revoke unused app passwords
- Monitor account activity

### Best Practices:
- Use environment variables for credentials
- Implement rate limiting for email sending
- Validate email addresses before sending
- Use professional email service for production

## 🔍 Credential Management

### Development:
```bash
# Copy example file
cp .env.example .env

# Edit with your actual credentials
nano .env

# Never commit .env
git add .gitignore  # ✅ Good
git add .env        # ❌ Never do this
```

### Production:
- Use cloud secret management (AWS Secrets Manager, Azure Key Vault)
- Set environment variables through hosting platform
- Use CI/CD pipeline for secure deployments
- Regular credential rotation

## 🚨 If Credentials Are Exposed

### Immediate Actions:
1. **Rotate all exposed credentials immediately**
2. **Check for unauthorized access**
3. **Update all affected systems**
4. **Remove credentials from git history**

### MongoDB Atlas:
1. Change database password
2. Update IP whitelist
3. Check database access logs
4. Create new database user if needed

### Email:
1. Revoke exposed app password
2. Generate new app password
3. Update application configuration
4. Monitor email account for suspicious activity

## 🛡️ Prevention

### Code Reviews:
- Check for hardcoded credentials
- Verify .gitignore includes sensitive files
- Ensure environment variables are used properly

### Automated Security:
- Use tools like GitGuardian or GitHub's secret scanning
- Set up pre-commit hooks to check for secrets
- Regular security audits

### Team Guidelines:
- Never share credentials via chat/email
- Use secure password managers
- Regular security training
- Incident response procedures

## 📋 Security Checklist

- [ ] `.env` files are in `.gitignore`
- [ ] No hardcoded credentials in source code
- [ ] Strong passwords for all services
- [ ] 2FA enabled where possible
- [ ] Regular credential rotation schedule
- [ ] Security monitoring in place
- [ ] Team trained on security practices
- [ ] Incident response plan documented

## 🆘 Emergency Contacts

If you discover a security issue:
1. **Don't commit/push** any fixes immediately
2. **Rotate credentials** first
3. **Document the incident**
4. **Review and improve** security practices

Remember: Security is everyone's responsibility! 🛡️ 