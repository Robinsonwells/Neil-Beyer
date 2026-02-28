# Netlify Deployment Setup

## Environment Variables

Your site needs these environment variables configured in Netlify:

1. Go to your Netlify dashboard
2. Select your site
3. Go to Site settings > Environment variables
4. Add these variables:

### Required Variables:

- `VITE_SUPABASE_URL` = `https://lldhzoomflvxvategttl.supabase.co`
- `VITE_SUPABASE_ANON_KEY` = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsZGh6b29tZmx2eHZhdGVndHRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIzMDIwNTIsImV4cCI6MjA4Nzg3ODA1Mn0.yUZtJHnkRKCaZGlXmRxNIrY0mKpyn54B5KuH_S-RYMU`

## Build Settings

These are already configured in `netlify.toml`:
- Build command: `npm run build`
- Publish directory: `dist`

## After Setup

Once environment variables are added, trigger a new deploy by:
1. Going to Deploys tab
2. Click "Trigger deploy" > "Clear cache and deploy site"
