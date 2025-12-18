# Deployment Guide for DevConnect

This guide explains how to deploy the DevConnect application using different hosting platforms.

## Table of Contents
1. [Environment Variables](#environment-variables)
2. [Deployment to Render (Backend)](#deployment-to-render-backend)
3. [Deployment to Vercel (Full Stack)](#deployment-to-vercel-full-stack)
4. [Deployment to Render (Frontend Separately)](#deployment-to-render-frontend-separately)

## Environment Variables

Before deploying, make sure to set the following environment variables:

```
DB_CONNECTION_STRING=mongodb+srv://username:password@cluster.mongodb.net/database
NODE_ENV=production
PORT=10000  # For Render
```

## Deployment to Render (Backend)

1. Fork this repository to your GitHub account
2. Sign up at [Render](https://render.com)
3. Click "New +" and select "Web Service"
4. Connect your GitHub repository
5. Configure the service:
   - Name: devconnect-backend
   - Region: Choose your preferred region
   - Branch: main
   - Root Directory: Leave empty
   - Environment: Node
   - Build Command: `npm install`
   - Start Command: `npm start`
6. Add environment variables in the "Advanced" section
7. Click "Create Web Service"

## Deployment to Vercel (Full Stack)

1. Fork this repository to your GitHub account
2. Sign up at [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure the project:
   - Framework Preset: Other
   - Root Directory: ./
   - Build Command: `cd server && npm install && cd ../client && npm install && npm run build`
   - Output Directory: `client/dist`
   - Install Command: `npm install`
6. Add environment variables in the "Environment Variables" section
7. Click "Deploy"

## Deployment to Render (Frontend Separately)

If you want to deploy the frontend separately:

1. Build the frontend locally: `cd client && npm run build`
2. Deploy the `dist` folder to Render as a static site
3. Configure the static site with the provided render-frontend.yaml

## Notes

- The application uses MongoDB as its database
- Make sure to update the API endpoints in the frontend to point to your deployed backend
- The PORT environment variable is used by hosting platforms to set the listening port
- NODE_ENV should be set to "production" for deployed environments