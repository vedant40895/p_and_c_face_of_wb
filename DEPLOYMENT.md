# Deployment Guide for P&C Face of West Bengal

## ✅ Issues Fixed

### 1. Resend API Key Error
**Problem**: `Error: Missing API key. Pass it to the constructor 'new Resend("re_123")'`

**Solution**: 
- Moved Resend initialization inside the POST functions instead of module level
- Added proper API key validation with error handling
- Environment variables are now only accessed at runtime, not during build

### 2. Build Configuration
- Simplified `next.config.mjs` to remove invalid experimental configurations
- Build now completes successfully without errors

## 🚀 Vercel Deployment Steps

### 1. Environment Variables Setup
In your Vercel dashboard, add these environment variables:

```
RESEND_API_KEY=re_d1sDTLKw_GxYCgoX9y44P8sttBEabDNTT
ADMIN_EMAIL=faceofwestbengal@gmail.com
```

**How to add environment variables in Vercel:**
1. Go to your project dashboard
2. Click on "Settings"
3. Click on "Environment Variables"
4. Add each variable with the values above

### 2. Resend Configuration (Important!)
For production deployment, you need to:

1. **Verify your domain** in Resend dashboard:
   - Go to https://resend.com/domains
   - Add and verify `faceofwestbengal.co.in` domain
   - Update DNS records as instructed

2. **Update email addresses** in the code to use your verified domain:
   ```typescript
   // In both route files, change from:
   from: 'P&C Face of West Bengal <noreply@faceofwestbengal.co.in>'
   
   // To your actual verified domain:
   from: 'P&C Face of West Bengal <noreply@yourdomain.com>'
   ```

### 3. Production Checklist
- [ ] Environment variables added to Vercel
- [ ] Resend domain verified
- [ ] Email addresses updated to verified domain
- [ ] Test deployment completed
- [ ] Email functionality tested in production

## 🔧 Local Development
1. Copy `.env.example` to `.env`
2. Fill in your actual API keys and email addresses
3. Run `npm run dev` to start development server

## 📧 Email Flow
1. **User submits form** → Receives confirmation email
2. **Admin gets notification** → Detailed application email to `ADMIN_EMAIL`

## 🚨 Common Issues & Solutions

### Issue: "Email service configuration error"
- **Cause**: `RESEND_API_KEY` environment variable not set
- **Solution**: Add the environment variable in Vercel settings

### Issue: "Failed to send email" in production
- **Cause**: Domain not verified in Resend
- **Solution**: Verify your domain in Resend dashboard and update email addresses

### Issue: Emails not being received
- **Cause**: Using unverified domain or incorrect email format
- **Solution**: Use verified domain and proper email format with display name

## 📱 Features Included
- ✅ Mobile responsive design
- ✅ Form validation
- ✅ Dual email system (user confirmation + admin notification)
- ✅ Loading states and error handling
- ✅ Toast notifications
- ✅ Professional email templates

The application is now ready for production deployment! 🎉