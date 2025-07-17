# Vercel Deployment Guide

This guide will help you deploy your HVAC Technicians Directory to Vercel.

## Prerequisites

1. A Vercel account (free tier available at [vercel.com](https://vercel.com))
2. Your project code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Quick Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Configure for Vercel deployment"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a Vite project

3. **Configure deployment:**
   - **Framework Preset:** Vite
   - **Root Directory:** `HSB/Frontend` (important!)
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `dist` (auto-detected)
   - **Install Command:** `npm install` (auto-detected)

4. **Deploy:**
   - Click "Deploy"
   - Your app will be live in ~2 minutes!

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Navigate to your frontend directory:**
   ```bash
   cd HSB/Frontend
   ```

3. **Login and deploy:**
   ```bash
   vercel login
   vercel
   ```

4. **Follow the prompts:**
   - Select your scope
   - Link to existing project or create new
   - Confirm settings

## Configuration Files

Your project now includes these Vercel-optimized files:

- **`vercel.json`**: Handles SPA routing and build configuration
- **`vite.config.js`**: Updated for Vercel deployment
- **`package.json`**: Cleaned up GitHub Pages dependencies
- **`.gitignore`**: Includes Vercel-specific entries

## Environment Variables

If you need to add environment variables:

1. In Vercel Dashboard: Project Settings → Environment Variables
2. Add variables for different environments (Development, Preview, Production)
3. Redeploy if needed

## Custom Domain

To use a custom domain:

1. Go to Project Settings → Domains
2. Add your domain
3. Configure DNS records as shown

## Automatic Deployments

Vercel automatically deploys:
- **Production:** When you push to your main/master branch
- **Preview:** When you create pull requests

## Performance Optimizations

Your build is already optimized with:
- Tree shaking
- Code splitting
- Asset optimization
- Gzip compression

## Troubleshooting

### Common Issues:

1. **Build fails:**
   - Check that root directory is set to `HSB/Frontend`
   - Verify all dependencies are in `package.json`
   - Ensure all image files are in the `public/` folder (not `src/public/`)

2. **404 on refresh:**
   - The `vercel.json` file handles this with SPA rewrites

3. **Assets not loading:**
   - Ensure `base: '/'` in `vite.config.js`
   - Use absolute paths for images in `public/` folder (e.g., `src="/image.png"`)

4. **Image import errors:**
   - All images should be in `public/` folder and referenced with absolute paths
   - Don't import images from `src/public/` - this was fixed in the configuration

### Support:
- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#vercel)

## Post-Deployment

After successful deployment:
1. Test your live URL thoroughly
2. Update any hardcoded URLs to use your new domain
3. Consider setting up analytics
4. Monitor performance with Vercel Analytics

Your HVAC Directory is now ready for production! 🚀 