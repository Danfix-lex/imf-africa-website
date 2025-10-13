# Cloudinary Environment Variables Setup for Render

The error you're seeing indicates that the Cloudinary environment variables are not properly configured in your Render dashboard, even though they're defined in your `render.yaml` file with `sync: false`.

## Current Configuration in render.yaml

Your `render.yaml` file has the following environment variables set to `sync: false`:

```yaml
# Frontend service
- key: NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  sync: false

# Backend service  
- key: CLOUDINARY_API_KEY
  sync: false
- key: CLOUDINARY_API_SECRET
  sync: false
```

The `sync: false` setting means these variables need to be manually set in your Render dashboard.

## How to Set Environment Variables in Render Dashboard

1. Go to your Render dashboard: https://dashboard.render.com/

2. Navigate to your IMF Africa website services:
   - Find your frontend service (likely named "imf-africa-frontend")
   - Find your backend service (likely named "imf-africa-backend")

3. For each service, click on it and go to "Environment Variables" section

4. Add the following environment variables with their actual values:

### For Frontend Service (imf-africa-frontend):
- Key: `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
- Value: Your actual Cloudinary cloud name (e.g., "your-cloud-name")

### For Backend Service (imf-africa-backend):
- Key: `CLOUDINARY_API_KEY`
- Value: Your actual Cloudinary API key
- Key: `CLOUDINARY_API_SECRET`  
- Value: Your actual Cloudinary API secret

## Where to Find Your Cloudinary Credentials

1. Log in to your Cloudinary account at https://cloudinary.com/console

2. In your Cloudinary dashboard, you'll see:
   - Cloud name (in the header)
   - API Key (in the Account Details section)
   - API Secret (in the Account Details section - click the eye icon to reveal it)

## After Setting the Variables

1. After adding these environment variables, you need to redeploy both services:
   - Go to each service in your Render dashboard
   - Click "Manual Deploy" or make a small code change to trigger a new deployment

2. The new deployments will pick up the environment variables and your gallery should start working.

## Verification

After redeployment, you can verify the variables are set by:
1. Checking the logs of your deployed services
2. Looking for the "Cloudinary configured with cloud name:" message in the logs
3. Testing the gallery page to see if it loads properly

If you continue to have issues, please check:
1. That all three environment variables are correctly set with the right values
2. That there are no typos in the variable names
3. That the Cloudinary folder "gallery" exists and has media in it