# Troubleshooting: Content Not Rendering

This guide helps you diagnose and fix issues when your Sanity content is not displaying on the frontend.

## Quick Diagnosis

If your Hero, Contact, Projects, or Technologies sections are not showing:

### Step 1: Check Debug Logs

Open your terminal where the dev server is running. You should see log output like:

```
=== Sanity Data Fetch Results ===
Hero data: null
Projects count: 0
Technologies count: 0
Contact data: null
================================
```

- If all values are `null` or `0`, **content hasn't been created yet in Sanity Studio**
- If some values have data, check which specific fields are missing

### Step 2: Check Your Browser

Visit `http://localhost:3000` and you should see helpful yellow warning boxes that indicate:
- Which sections are missing
- What specific fields are required
- A link to `/studio` to create the content

## Common Issues & Solutions

### Issue 1: "Hero Section Not Configured"

**Symptoms:**
- Yellow warning box appears instead of hero section
- Message shows "Hero document not found" or lists missing fields

**Solution:**

1. Navigate to [http://localhost:3000/studio](http://localhost:3000/studio)
2. **Log in** with your Sanity account (Google, GitHub, or Email)
3. Click **Hero** in the sidebar
4. Fill in ALL required fields:
   - Name
   - Tagline
   - Professional Photo (with alt text)
   - Chatbot CTA
5. Click **Publish** (not just Save)
6. Refresh your homepage

### Issue 2: "Contact Section Not Configured"

**Symptoms:**
- Contact section doesn't appear at the bottom of the page
- Yellow warning box shows "Contact document not found"

**Solution:**

1. Navigate to [http://localhost:3000/studio](http://localhost:3000/studio)
2. Click **Contact** in the sidebar
3. Fill in at minimum the **Email** field (required)
4. Optionally add: phone, LinkedIn, GitHub, Twitter, location, resume
5. Click **Publish**
6. Refresh your homepage

### Issue 3: "No Projects Found"

**Symptoms:**
- Projects section shows only the header
- Yellow warning box with "No Projects Found"

**Solution:**

1. Navigate to [http://localhost:3000/studio](http://localhost:3000/studio)
2. Click **Projects** in the sidebar
3. Click the **+** button to create a new project
4. Fill in required fields:
   - Title
   - Description
   - Toggle **Featured** to ON (to show on homepage)
5. Optionally add technologies, demo URL, GitHub URL, images
6. Click **Publish**
7. Refresh your homepage

### Issue 4: "No Technologies Found"

**Symptoms:**
- Tech stack section shows only the header and legend
- Yellow warning box with "No Technologies Found"

**Solution:**

1. Navigate to [http://localhost:3000/studio](http://localhost:3000/studio)
2. Click **Technologies** in the sidebar
3. Click the **+** button to create a new technology
4. Fill in fields:
   - Name (e.g., "React")
   - Category (select from dropdown)
   - Proficiency Level (beginner, intermediate, advanced, expert)
5. Click **Publish**
6. Repeat for more technologies
7. Refresh your homepage

### Issue 5: "Studio Shows Login Page"

**Symptoms:**
- Visiting `/studio` shows a login screen
- Cannot access the Studio interface

**This is normal!** You need to log in first.

**Solution:**

1. Click one of the login options:
   - **Google** (recommended)
   - **GitHub**
   - **Email/Password**
2. Authorize the application
3. You'll be redirected back to the Studio
4. You should now see the Studio interface with your content types in the sidebar

### Issue 6: "Content Exists but Not Showing"

**Symptoms:**
- You created content in Studio
- It's published
- But it's still not appearing on the frontend

**Possible Causes & Solutions:**

**A. Content is saved as Draft (not Published)**
- In Studio, check if the document shows "Draft" badge
- Click **Publish** to make it live

**B. Missing Required Fields**
- Check the yellow warning boxes on the frontend
- They'll tell you exactly which fields are missing
- Go back to Studio and fill in those fields

**C. Browser Cache**
- Hard refresh the page: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+F5` (Windows)
- Or clear browser cache and reload

**D. Development Server Not Restarted**
- Stop your dev server (`Ctrl+C`)
- Restart it: `npm run dev`

**E. CDN Caching (shouldn't happen in development)**
- Check [sanity/client.ts](../sanity/client.ts:8)
- Verify `useCdn: process.env.NODE_ENV === 'production'`
- This ensures CDN is disabled in development

## Understanding the Console Logs

When you run your dev server, you'll see logs like this:

```bash
=== Sanity Data Fetch Results ===
Hero data: {
  "_id": "hero",
  "name": "Sam Shulman",
  "tagline": "Building intelligent solutions",
  "chatbotCta": "Chat about my career"
}
Projects count: 3
Technologies count: 12
Contact data: {
  "_id": "contact",
  "email": "sam@example.com"
}
================================
```

### What to Look For:

- **`null` values** → Document doesn't exist or not published
- **Missing fields** → Check the object structure for required fields
- **Count: 0** → No documents of that type exist

## Step-by-Step First-Time Setup

If this is your first time setting up content:

1. **Start Development Server**
   ```bash
   npm run dev
   ```

2. **Access Sanity Studio**
   - Open browser to [http://localhost:3000/studio](http://localhost:3000/studio)
   - Log in with Google, GitHub, or Email

3. **Create Hero (Required)**
   - Click "Hero" in sidebar
   - Fill: Name, Tagline, Photo (with alt text), Chatbot CTA
   - Click "Publish"

4. **Create Contact (Required)**
   - Click "Contact" in sidebar
   - Fill: Email (minimum)
   - Click "Publish"

5. **Create Projects (Recommended)**
   - Click "Projects" in sidebar
   - Click "+" to add new project
   - Fill details, toggle "Featured" ON
   - Click "Publish"
   - Repeat for 2-3 projects

6. **Create Technologies (Recommended)**
   - Click "Technologies" in sidebar
   - Click "+" to add new technology
   - Fill: Name, Category, Proficiency Level
   - Click "Publish"
   - Repeat for 5-10 technologies

7. **Verify Frontend**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - All sections should now display
   - Yellow warning boxes should be gone

## Still Having Issues?

### Check Environment Variables

Verify your `.env.local` file has:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your-token-here
```

- Get Project ID from [sanity.io/manage](https://sanity.io/manage)
- Make sure there are no extra spaces or quotes

### Restart Everything

Sometimes a fresh start helps:

```bash
# Stop dev server (Ctrl+C)

# Clear Next.js cache
rm -rf .next

# Restart dev server
npm run dev
```

### Check Sanity Project Status

1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Select your project
3. Verify:
   - Project is active
   - Dataset exists (usually "production")
   - You have Editor permissions

## Additional Resources

- [Sanity Setup Guide](./sanity-setup-guide.md) - Complete setup walkthrough
- [Content Guide](./content-guide.md) - Detailed content creation instructions
- [Sanity Documentation](https://www.sanity.io/docs)

## Getting Help

If you're still stuck:

1. Check the browser console for errors (F12)
2. Check the terminal logs for server errors
3. Review the Sanity Studio console for validation errors
4. Consult the [Sanity Community](https://www.sanity.io/community)
