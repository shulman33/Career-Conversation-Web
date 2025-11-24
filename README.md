# AI-Powered Career Landing Page

> A modern, interactive portfolio website featuring an intelligent AI chatbot that engages with recruiters and potential employers in real-time.

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Sanity](https://img.shields.io/badge/Sanity-CMS-red?style=flat&logo=sanity)](https://www.sanity.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=flat&logo=vercel)](https://vercel.com)

[🚀 **View Live Demo**](#) | [🤖 **AI Backend Repository**](https://github.com/shulman33/Career-Conversation-Agent)

---

## 📖 Overview

This project is a full-stack career landing page that goes beyond traditional portfolios by integrating an **intelligent AI chatbot** powered by OpenAI's GPT-4. The chatbot serves as an interactive intermediary between me and recruiters, answering questions about my experience, skills, and projects while capturing contact information and logging unknown questions for follow-up.

**What makes this unique:**
- 🧠 AI agent that can search a Q&A database, learn from new questions, and maintain conversation quality
- 📱 Fully responsive design with modern animations and glassmorphic UI elements
- 🎨 Content managed through Sanity CMS for easy updates without code deployments
- ⚡ Optimized for performance with edge-deployed server actions and smart caching strategies
- 🔔 Real-time push notifications when recruiters engage or ask new questions

---

## ✨ Key Features

### Frontend
- **Dynamic Content Management**: All portfolio content (projects, tech stack, contact info) managed through Sanity CMS
- **Responsive Design**: Mobile-first approach with floating chat button and adaptive layouts
- **Modern UI/UX**: Memphis Design aesthetic with smooth animations via Motion library
- **SEO Optimized**: Dynamic metadata generation, Open Graph tags, and Google Analytics integration
- **Performance Focused**: Tag-based cache revalidation and Next.js image optimization

### AI Chatbot Backend
- **Intelligent Agent Architecture**: 6 specialized tools for Q&A search, database management, and user tracking
- **Dual-Model Quality Control**: GPT-4o-mini for responses, Gemini 2.0 Flash for quality evaluation
- **Semantic Search**: AI-powered matching of recruiter questions to pre-answered responses
- **Dynamic Learning**: Logs unknown questions and sends push notifications for manual answers
- **Persistent Knowledge Base**: SQLite database auto-seeded from markdown summaries

---

## 🏗️ Architecture Overview

This project consists of two primary components:

### **Frontend** (This Repository)
The Next.js application handles the user interface, content management, and chatbot integration.

**Tech Stack:**
- **Framework**: Next.js 16 with App Router and Server Components
- **UI Library**: Shadcn/ui components with Tailwind CSS v4
- **CMS**: Sanity v4 for headless content management
- **Animations**: Motion v12 for smooth transitions
- **Deployment**: Vercel with edge-optimized performance

### **AI Backend** ([Career Conversation Agent](https://github.com/shulman33/Career-Conversation-Agent))
The AI chatbot is a separate Gradio application deployed on Hugging Face Spaces.

**Tech Stack:**
- **AI Models**: OpenAI GPT-4 (primary) + Gemini 2.0 Flash (quality evaluator)
- **Database**: SQLite with semantic search capabilities
- **Framework**: Gradio for web interface
- **Notifications**: Pushover API for real-time alerts
- **Deployment**: Hugging Face Spaces (CPU-basic)

**Intelligent Tools:**
1. `search_qa_database` - Semantic search across Q&A pairs
2. `add_qa_to_database` - Dynamically expand knowledge base
3. `list_recent_qa` - Context awareness from recent conversations
4. `update_qa_answer` - Update existing answers
5. `record_user_details` - Capture recruiter contact info
6. `record_unknown_question` - Log unanswered questions with notifications

---

## 🛠️ Tech Stack

### Frontend Framework
| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.0.3 | React framework with App Router |
| React | 19.2.0 | UI library |
| TypeScript | 5 | Type safety |

### Styling & UI
| Technology | Version | Purpose |
|------------|---------|---------|
| Tailwind CSS | v4 | Utility-first styling |
| Shadcn/ui | Latest | Accessible component library |
| Motion | 12.23.24 | Animation library |
| Lucide React | Latest | Icon system |

### Content Management
| Technology | Version | Purpose |
|------------|---------|---------|
| Sanity | 4.18.0 | Headless CMS |
| next-sanity | 11.6.8 | Next.js integration |

### AI Integration
| Technology | Purpose |
|------------|---------|
| Gradio Embed | Chatbot iframe integration |
| OpenAI GPT-4 | Primary AI model (backend) |
| Gemini 2.0 Flash | Quality control evaluator (backend) |

### Deployment & Infrastructure
| Technology | Purpose |
|------------|---------|
| Vercel | Frontend hosting |
| Hugging Face Spaces | AI backend hosting |
| Google Analytics | Usage tracking |

---

## 🤖 How the AI Chatbot Works

The chatbot uses an **agentic loop pattern** where the AI autonomously decides when to call tools, process results, and continue conversations.

### Workflow:
1. **Recruiter asks a question** → GPT-4 receives context from resume, LinkedIn, and Q&A database
2. **Semantic search** → `search_qa_database` finds relevant pre-answered questions
3. **Response generation** → GPT-4 crafts a professional response using retrieved context
4. **Quality evaluation** → Gemini 2.0 Flash validates tone, accuracy, and consistency
5. **Auto-retry on failure** → If quality check fails, GPT-4 regenerates with feedback
6. **Unknown questions** → Logged to database with placeholder flag + push notification sent

### Quality Control System:
- Validates professional tone and factual accuracy
- Ensures character consistency across conversations
- Checks proper tool usage
- Pydantic-based structured outputs for reliable parsing
- Max retry limit prevents infinite loops

### Data Persistence:
- SQLite database stores all Q&A pairs
- Auto-seeds from `summary.md` on initialization
- Tracks timestamps and flags for questions awaiting answers
- Enables consistent knowledge across conversations

**[📚 View Full AI Backend Documentation →](https://github.com/shulman33/Career-Conversation-Agent)**

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm/bun
- Sanity account ([sanity.io](https://www.sanity.io/))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shulman33/career-landing-page.git
   cd career-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:
   ```env
   # Sanity Configuration (Required)
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_api_token
   SANITY_REVALIDATE_SECRET=your_secret_key

   # Optional
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
   NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

### Accessing Sanity Studio

The content management system is available at:
```
http://localhost:3000/studio
```

Use Sanity Studio to manage:
- Hero section content
- Projects portfolio
- Tech stack items
- Contact information
- Site settings (SEO, Gradio embed URL, etc.)

---

## 📁 Project Structure

```
career-landing-page/
├── app/
│   ├── page.tsx                 # Main landing page (server component)
│   ├── layout.tsx               # Root layout with metadata
│   ├── studio/                  # Sanity Studio CMS interface
│   └── api/
│       └── revalidate/          # Webhook for cache invalidation
├── components/
│   ├── sections/                # Page sections (Hero, Chatbot, Projects, etc.)
│   ├── ui/                      # Shadcn/ui components
│   ├── FloatingChatButton.tsx   # Mobile chat navigation
│   ├── GradioEmbed.tsx          # AI chatbot embed wrapper
│   └── GoogleAnalytics.tsx      # GA4 integration
├── sanity/
│   ├── schemas/                 # Content schemas (hero, project, tech, etc.)
│   ├── queries/                 # GROQ queries for data fetching
│   ├── lib/
│   │   ├── client.ts           # Sanity client configuration
│   │   └── fetch.ts            # Smart caching with tag revalidation
│   └── sanity.config.ts        # Main Sanity configuration
├── lib/
│   └── utils.ts                # Utility functions
└── public/
    └── images/                  # Static assets
```

---

## 🎨 Design System

### Visual Identity
- **Style**: Memphis Design aesthetic with rounded shapes and bold colors
- **Color Palette**: Cyan, Pink, Purple, Orange, Yellow
- **Effects**: Glassmorphism and neo-neumorphic elements
- **Typography**: Geist font family (optimized via next/font)

### Component Philosophy
- Accessibility-first with Shadcn/ui components
- Consistent spacing and visual hierarchy
- Smooth animations with reduced motion support
- Mobile-first responsive design

---

## 📊 Performance & SEO

### Caching Strategy
- **Force-cache** with tag-based revalidation
- On-demand revalidation via Sanity webhooks
- Fallback time-based revalidation (60s default)

### Image Optimization
- Sanity CDN for optimized image delivery
- WebP format with automatic fallback
- Responsive sizes for different devices
- Minimum cache TTL: 60 seconds

### SEO Features
- Dynamic metadata generation from Sanity
- Open Graph and Twitter card support
- Structured data for search engines
- Sitemap and robots.txt configuration
- Google Analytics integration

---

## 🔗 Related Links

- **[AI Chatbot Backend Repository](https://github.com/shulman33/Career-Conversation-Agent)** - Full source code and documentation for the intelligent agent
- **[Live Demo](#)** - View the deployed landing page
- **[Sanity CMS](https://www.sanity.io/)** - Learn about the headless CMS powering this site

---

## 📬 Contact

Interested in discussing this project or potential opportunities?

- **Try the AI Chatbot** - Ask questions directly on the landing page
- **Email** - [Configured via Sanity CMS]
- **LinkedIn** - [Your LinkedIn URL]
- **GitHub** - [@shulman33](https://github.com/shulman33)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built with ❤️ using Next.js, Sanity CMS, and OpenAI GPT-4**

[⬆ Back to Top](#ai-powered-career-landing-page)

</div>
