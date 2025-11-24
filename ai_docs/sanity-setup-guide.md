# Sanity CMS Setup Guide

This guide walks you through setting up Sanity CMS for your Career Landing Page.

## Prerequisites

- Node.js installed
- All dependencies installed (`npm install`)
- A Sanity.io account (free tier is sufficient)

## Step 1: Create a Sanity Project

1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Click "Create project" or select an existing project
3. Choose a project name (e.g., "Career Landing Page")
4. Select a dataset name (default: `production`)
5. Note your **Project ID** - you'll need this for the next step

## Step 2: Configure Environment Variables

1. Copy the `.env.example` file to create a `.env.local` file:
   ```bash
   cp .env.example .env.local
   ```

2. Fill in your Sanity credentials in `.env.local`:

   ```bash
   # Required: Your Sanity Project ID
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-here

   # Dataset name (usually 'production')
   NEXT_PUBLIC_SANITY_DATASET=production

   # API version (use current date or keep default)
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01

   # Optional but recommended: API token for Studio
   SANITY_API_TOKEN=your-token-here

   # Webhook secret for revalidation (generate a random string)
   SANITY_REVALIDATE_SECRET=your-random-secret-here
   ```

## Step 3: Create API Token (Optional but Recommended)

The API token is used for authenticated operations in Sanity Studio.

1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Select your project
3. Navigate to **API** → **Tokens**
4. Click "Add API token"
5. Give it a name (e.g., "Studio Editor")
6. Select permissions: **Editor** (for full Studio access)
7. Copy the token and add it to your `.env.local` as `SANITY_API_TOKEN`

## Step 4: Generate Webhook Secret

The webhook secret is used to securely validate revalidation requests from Sanity.

1. Generate a random string (you can use any method):
   ```bash
   # On macOS/Linux
   openssl rand -base64 32

   # Or use an online generator
   # https://generate-secret.vercel.app/32
   ```

2. Add the generated secret to your `.env.local` as `SANITY_REVALIDATE_SECRET`

## Step 5: Access Sanity Studio

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to [http://localhost:3000/studio](http://localhost:3000/studio)

3. Sign in with your Sanity account

4. You should see the Sanity Studio interface with your content types:
   - Hero
   - Contact
   - Site Settings
   - Projects
   - Technologies

## Step 6: Configure Webhook for On-Demand Revalidation (Optional)

This enables automatic page revalidation when you update content in Sanity.

1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Select your project
3. Navigate to **API** → **Webhooks**
4. Click "Create webhook"
5. Configure the webhook:
   - **Name:** Next.js Revalidation
   - **URL:** `https://your-domain.com/api/revalidate` (use your production URL)
     - For local testing, you can use a tool like [ngrok](https://ngrok.com/) or [localtunnel](https://localtunnel.github.io/www/)
   - **Dataset:** production
   - **Trigger on:** Create, Update, Delete
   - **Filter:** Leave empty (or customize if needed)
   - **HTTP method:** POST
   - **API version:** v2021-06-07 (or latest)
   - **Secret:** Your `SANITY_REVALIDATE_SECRET` value
6. Save the webhook

## Step 7: Verify Setup

1. Access Studio at `/studio`
2. Create a test document (see [Content Guide](./content-guide.md))
3. Verify TypeGen works:
   ```bash
   npm run typegen
   ```
4. Check that `sanity.types.ts` is updated

## Troubleshooting

### "Project ID not found" error
- Verify your `NEXT_PUBLIC_SANITY_PROJECT_ID` in `.env.local`
- Make sure there are no extra spaces or quotes

### Studio not loading
- Check that all environment variables are set correctly
- Restart your development server after changing `.env.local`
- Clear your browser cache and try again

### TypeGen not working
- Make sure you have the Sanity CLI installed: `npm install`
- Run `npm run typegen` manually to see any error messages
- Check that your schemas are valid TypeScript files

### Webhook not triggering revalidation
- Verify the webhook URL is correct (must be publicly accessible)
- Check that the secret matches your `SANITY_REVALIDATE_SECRET`
- Look at webhook logs in Sanity dashboard for error messages

## Next Steps

Once your setup is complete, proceed to the [Content Guide](./content-guide.md) to learn how to populate your CMS with content.

## Additional Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [Next Sanity Documentation](https://github.com/sanity-io/next-sanity)
- [Sanity Studio Documentation](https://www.sanity.io/docs/sanity-studio)
