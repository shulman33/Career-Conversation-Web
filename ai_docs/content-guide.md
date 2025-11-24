# Sanity Content Creation Guide

This guide provides step-by-step instructions for populating your Sanity CMS with initial content for your Career Landing Page.

## Prerequisites

- Sanity setup completed (see [Setup Guide](./sanity-setup-guide.md))
- Access to Sanity Studio at `/studio`

## Content Structure Overview

Your CMS has five main content types:

1. **Hero** (Singleton) - Your name, tagline, and chatbot CTA
2. **Contact** (Singleton) - Contact information and social links
3. **Site Settings** (Singleton) - SEO metadata and site-wide settings
4. **Projects** (List) - Portfolio projects with details
5. **Technologies** (List) - Your tech stack and proficiency levels

## Step-by-Step Content Creation

### 1. Create Hero Section

The Hero section appears at the top of your landing page.

1. Navigate to `/studio`
2. Click on **Hero** in the sidebar
3. Fill in the fields:
   - **Name:** Your full name (e.g., "Sam Shulman")
   - **Tagline:** Your professional tagline (e.g., "Building intelligent solutions that bridge technology and human potential")
   - **Professional Photo:**
     - Click "Upload" or drag and drop an image
     - Recommended: Professional headshot, square aspect ratio
     - Size: At least 800x800px for best quality
     - Format: JPG or PNG
     - After upload, set the **Alt text** (e.g., "Professional photo of Sam Shulman")
     - Optional: Adjust the hotspot (focal point) by dragging the circle
   - **Chatbot CTA:** Call-to-action text for the chatbot (e.g., "Chat about my career journey")
4. Click **Publish** (bottom right)

### 2. Create Contact Information

1. Click on **Contact** in the sidebar
2. Fill in your contact details:
   - **Email:** Your email address (validated format)
   - **Phone:** Your phone number (optional, e.g., "+1 (555) 123-4567")
   - **LinkedIn URL:** Full URL (e.g., "https://linkedin.com/in/samshulman")
   - **GitHub URL:** Full URL (e.g., "https://github.com/shulman33")
   - **Twitter URL:** Full URL (optional)
   - **Location:** City and state/country (e.g., "San Francisco, CA")
   - **Resume File:** Upload your resume as a PDF
     - Click "Upload"
     - Select your PDF resume file
     - Add a title (e.g., "Sam Shulman - Resume 2024")
3. Click **Publish**

### 3. Create Site Settings

1. Click on **Site Settings** in the sidebar
2. Configure your site metadata:
   - **Site Title:** Browser tab title (e.g., "Sam Shulman - Software Engineer")
   - **Site Description:** Meta description for SEO (150-160 characters)
     - Example: "Portfolio of Sam Shulman, a software engineer specializing in AI/ML, full-stack development, and data engineering."
   - **Site Keywords:** Array of SEO keywords
     - Click "Add item" for each keyword
     - Examples: "software engineer", "machine learning", "full stack", "Python", "React"
   - **OG Image:** Social media preview image (optional)
     - Recommended: 1200x630px
     - Shows when sharing your site on social media
   - **Favicon:** Browser tab icon (optional)
     - Recommended: 32x32px or 512x512px PNG
   - **Gradio Embed URL:** URL for your Career Conversation chatbot
     - Example: "https://shulman33-career-conversation.hf.space"
     - This is used in the ChatbotSection component
   - **Google Analytics ID:** Your GA4 measurement ID (optional)
     - Format: "G-XXXXXXXXXX"
3. Click **Publish**

### 4. Create Technologies

Add your tech stack with proficiency levels. Start with your strongest skills.

**Example: React (Expert Level)**

1. Click on **Technologies** in the sidebar
2. Click **Create new Technology** (+ button)
3. Fill in the fields:
   - **Name:** "React"
   - **Category:** Select "frontend" from dropdown
   - **Icon:** Upload an icon image (optional)
     - Use SVG or PNG
     - Recommended: 64x64px minimum
   - **Icon Identifier:** Icon library identifier (optional)
     - If using an icon library like Lucide, enter the icon name (e.g., "react")
     - This takes precedence over uploaded icon
   - **Proficiency Level:** Select "expert"
     - Options: beginner, intermediate, advanced, expert
   - **Description:** Brief description of your experience (optional)
     - Example: "5+ years building production React applications with hooks, context, and modern patterns"
   - **Order Rank:** Number for sorting (optional)
     - Leave blank for automatic ordering
     - Lower numbers appear first
4. Click **Publish**

**Recommended Technologies to Add:**

Based on the mock data, here are suggested technologies to create:

**Frontend:**
- React (expert)
- TypeScript (expert)
- Next.js (advanced)
- Tailwind CSS (expert)
- Vue.js (intermediate)

**Backend:**
- Python (expert)
- Node.js (advanced)
- FastAPI (advanced)
- Express (advanced)
- Django (intermediate)

**Database:**
- PostgreSQL (advanced)
- MongoDB (advanced)
- Redis (intermediate)
- MySQL (intermediate)

**AI/ML:**
- LangChain (advanced)
- TensorFlow (intermediate)
- PyTorch (intermediate)
- Hugging Face (advanced)
- OpenAI API (advanced)

**DevOps:**
- Docker (advanced)
- Kubernetes (intermediate)
- AWS (advanced)
- CI/CD (advanced)
- Git (expert)

**Tools:**
- VS Code (expert)
- Figma (intermediate)
- Postman (advanced)
- Jira (advanced)

### 5. Create Projects

Add your portfolio projects, highlighting your best work.

**Example: Career Conversation AI**

1. Click on **Projects** in the sidebar
2. Click **Create new Project** (+ button)
3. Fill in the fields:
   - **Title:** "Career Conversation AI"
   - **Slug:**
     - Click "Generate" to auto-generate from title
     - Result: "career-conversation-ai"
     - This is used in the URL
   - **Description:** Short description (1-2 sentences)
     - Example: "An intelligent chatbot that engages users in meaningful conversations about career development and professional growth"
   - **Long Description:** Detailed description with rich text
     - Click to open the rich text editor
     - Add paragraphs, headings, lists, etc.
     - Example: "Built with LangChain and deployed on Hugging Face Spaces, this AI assistant provides personalized career guidance through natural language conversations. Features include context-aware responses, multi-turn dialogue, and integration with professional development frameworks."
   - **Technologies:** Link to technology documents
     - Click "Add item"
     - Search and select: Python, LangChain, Hugging Face, Gradio
     - These must be created first in the Technologies section
   - **Featured:** Toggle ON (shows on homepage)
   - **Demo URL:** "https://shulman33-career-conversation.hf.space"
   - **GitHub URL:** "https://github.com/shulman33/career-conversation"
   - **Images:** Project screenshots/images
     - Click "Upload" to add images
     - Add multiple images to create a gallery
     - For each image:
       - Set Alt text (required for accessibility)
       - Add Caption (optional, shown below image)
       - Adjust hotspot if needed
   - **Order Rank:** Leave blank or set to prioritize
4. Click **Publish**

**Additional Projects to Create:**

Based on the mock data, consider creating these projects:

1. **Enterprise Data Pipeline** (Featured)
   - Technologies: Apache Spark, Kafka, Python, PostgreSQL, Docker

2. **ML Model Deployment Platform**
   - Technologies: Python, FastAPI, Docker, Kubernetes, MLflow

3. **Real-time Analytics Dashboard** (Featured)
   - Technologies: React, TypeScript, D3.js, WebSocket, Tailwind CSS

4. **API Gateway Service**
   - Technologies: Node.js, Express, Redis, MongoDB, Docker

5. **Automated Testing Framework**
   - Technologies: Python, Selenium, Pytest, Docker, CI/CD

## Content Best Practices

### Images
- **Format:** Use WebP or PNG for best quality
- **Size:** Optimize images before uploading (use tools like TinyPNG)
- **Alt Text:** Always provide descriptive alt text for accessibility
- **Hotspot:** Adjust the focal point for responsive cropping

### Text Content
- **Clarity:** Keep descriptions clear and concise
- **Keywords:** Include relevant keywords naturally for SEO
- **Formatting:** Use rich text formatting in long descriptions (headings, lists, bold)
- **Consistency:** Maintain consistent tone across all content

### Organization
- **Featured Projects:** Mark 3-5 best projects as featured
- **Technology Order:** Order technologies by proficiency or importance
- **Project Order:** Use orderRank to prioritize your best work

## Verifying Your Content

After creating content, verify it's displaying correctly:

1. **Check TypeGen:** Run `npm run typegen` to ensure types are updated
2. **View Frontend:** Navigate to `http://localhost:3000`
3. **Check Sections:**
   - Hero section displays your name and tagline
   - Projects section shows your featured projects
   - Tech stack shows all technologies grouped by category
   - Contact section displays your information

## Updating Content

To update existing content:

1. Navigate to `/studio`
2. Click on the content type in the sidebar
3. For singletons (Hero, Contact, Site Settings): Click to edit
4. For lists (Projects, Technologies): Click on the item in the list
5. Make your changes
6. Click **Publish** to save

If you have webhooks configured, your Next.js site will automatically revalidate and show the updated content within seconds.

## Troubleshooting

### Content not showing on frontend
- Verify the document is **Published** (not just saved as draft)
- Check browser console for errors
- Run `npm run typegen` to ensure types are current
- Restart your dev server

### Images not displaying
- Verify image is uploaded successfully in Studio
- Check that alt text is provided
- Ensure Sanity project ID is correct in `.env.local`

### Technologies not showing in projects
- Ensure technologies are created and published first
- When adding technologies to a project, search for the exact name
- Check that the reference is properly linked

## Next Steps

Once your content is populated:

1. Test the webhook revalidation (if configured)
2. Verify SEO metadata is correct
3. Test responsive display on mobile devices
4. Consider adding more projects and technologies over time
5. Deploy to production!

## Additional Resources

- [Sanity Content Modeling](https://www.sanity.io/docs/content-modelling)
- [Rich Text Editor Guide](https://www.sanity.io/docs/block-content)
- [Image Handling in Sanity](https://www.sanity.io/docs/image-type)
