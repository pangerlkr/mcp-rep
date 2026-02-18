# Deploying to Netlify

This guide walks you through deploying the MCP Server Builder Platform to Netlify.

## Prerequisites

- A [Netlify account](https://app.netlify.com/signup) (free tier works perfectly)
- A GitHub/GitLab/Bitbucket account with this repository

## Deployment Methods

### Method 1: Deploy via Netlify UI (Recommended for beginners)

1. **Connect Your Repository**
   - Log in to [Netlify](https://app.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Choose your Git provider (GitHub/GitLab/Bitbucket)
   - Authorize Netlify to access your repositories
   - Select the `mcp-rep` repository

2. **Configure Build Settings**

   Netlify will automatically detect the `netlify.toml` configuration file. The settings will be:

   - **Base directory**: `frontend`
   - **Build command**: `npm install && npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 18

3. **Deploy**
   - Click "Deploy site"
   - Wait for the build to complete (typically 1-2 minutes)
   - Your site will be live at a URL like `https://random-name-123456.netlify.app`

4. **Custom Domain (Optional)**
   - Go to "Site settings" → "Domain management"
   - Click "Add custom domain"
   - Follow instructions to configure your domain

### Method 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize and Deploy**
   ```bash
   # From the root of the repository
   cd /path/to/mcp-rep

   # Initialize Netlify site
   netlify init

   # Deploy
   netlify deploy --prod
   ```

### Method 3: Deploy with One Click

Click the button below to deploy directly to Netlify:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/pangerlkr/mcp-rep)

## Configuration Details

The `netlify.toml` file in the root directory contains all the necessary configuration:

- **Build settings**: Specifies the build command and publish directory
- **Redirects**: Configures client-side routing for the React SPA
- **Security headers**: Sets important security headers (X-Frame-Options, CSP, etc.)
- **Cache control**: Optimizes caching for static assets

## Environment Variables

This application runs entirely client-side and doesn't require any environment variables for basic operation.

## Post-Deployment

After deployment:

1. **Test the Site**: Visit your Netlify URL to ensure everything works
2. **Check Routing**: Navigate to different sections to verify SPA routing works
3. **Test MCP Builder**: Try selecting integrations and building configurations
4. **Configure Custom Domain**: Set up your custom domain if desired

## Continuous Deployment

Once connected, Netlify automatically deploys:
- **Production**: Every push to the main branch
- **Preview**: Every pull request gets a preview URL

## Troubleshooting

### Build Fails

- Check build logs in the Netlify dashboard
- Ensure Node.js version 18 or higher is being used
- Verify all dependencies are in `package.json`

### 404 Errors on Refresh

- Ensure `netlify.toml` is in the repository root
- Check that `_redirects` file exists in `frontend/public/`
- Verify publish directory is set to `dist`

### Slow Build Times

- Enable build caching in Netlify settings
- Consider using Netlify's build plugin ecosystem

## Support

For deployment issues:
- Check [Netlify Documentation](https://docs.netlify.com/)
- Visit [Netlify Community](https://answers.netlify.com/)
- Open an issue in this repository

## Cost

Netlify's free tier includes:
- 100 GB bandwidth/month
- Unlimited personal and commercial projects
- Continuous deployment from Git
- HTTPS on custom domains
- Deploy previews for pull requests

This is more than sufficient for most use cases.
