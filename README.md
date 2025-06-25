# Nimtec Solution Website

Modern and responsive website for Nimtec Solutions, showcasing their software development services and portfolio.

## Technologies Used

- React with TypeScript
- Vite for fast builds
- Express.js for API routes
- TailwindCSS for styling
- Framer Motion for animations
- Vercel for deployment

## Deployment Guide

### Deploying to Vercel

1. **Push your code to GitHub**

2. **Connect your Vercel account**
   - Log in to [Vercel](https://vercel.com)
   - Click "Import Project"
   - Select "Import Git Repository"
   - Choose your repository

3. **Configure project settings**
   - Framework preset: Vite
   - Root directory: ./
   - Build command: `npm run vercel-build`
   - Output directory: `dist/public`
   - Install command: `npm install`

4. **Configure environment variables**
   - NODE_ENV: production
   - VERCEL: 1

5. **Deploy**
   - Click "Deploy"

### Troubleshooting Deployment Issues

If you encounter 404 errors after deployment:

1. **Check routing configuration**
   - Ensure `vercel.json` has proper route handling
   - Verify API routes are working correctly

2. **Verify asset paths**
   - Make sure all asset paths are relative and work correctly in the production build

3. **Check console for errors**
   - Use browser developer tools to identify any JavaScript errors

4. **Clear deployment cache**
   - In your Vercel dashboard, go to the deployment settings
   - Find and click "Clear Cache and Redeploy"

## Development

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn package manager

### Installation

```bash
npm install
```

### Running development server

```bash
npm run dev
```

### Building for production

```bash
npm run build
```

### Starting production server locally

```bash
npm run start
```

### Optimizing images

```bash
npm run optimize:images
```

## Project Structure

- `/client`: Front-end React application
  - `/assets`: Images and static assets
  - `/src`: React components and code
    - `/components`: Reusable UI components
    - `/pages`: Page components
    - `/hooks`: Custom React hooks
    - `/utils`: Utility functions

- `/api`: Serverless API functions for Vercel

- `/server`: Express.js server for API routes
  - Only used in development and non-Vercel deployments

## License

MIT
