# Vercel Deployment Guide

## Quick Deploy via CLI

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy from project root:
```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? (select your account)
- Link to existing project? **N**
- What's your project name? **codeweb** (or your choice)
- In which directory is your code located? **./** (press Enter)
- Want to override settings? **N**

4. For production deployment:
```bash
vercel --prod
```

## Deploy via Vercel Website

1. Go to https://vercel.com
2. Sign up/login with GitHub
3. Click "Add New" → "Project"
4. Import your `igenkov/codeweb` repository
5. Click "Deploy" (Vercel auto-detects Next.js settings)

## Your Live URLs

After deployment you'll get:
- **Preview URL**: `codeweb-xxx.vercel.app` (for each commit)
- **Production URL**: `codeweb.vercel.app` (main deployment)

## Custom Domain (Optional)

In Vercel dashboard:
1. Go to Project Settings → Domains
2. Add your custom domain (e.g., `moiakniga.bg`)
3. Update DNS records as instructed

## Auto-Deploy

Once connected, every push to your branch will automatically deploy a preview. Push to `main` branch for production deployments.

## Environment Variables

If you add backend integrations later:
1. Go to Project Settings → Environment Variables
2. Add your API keys (Stripe, Mailchimp, etc.)
3. Redeploy for changes to take effect
