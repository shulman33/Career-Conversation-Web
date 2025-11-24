// Mock data for development - will be replaced with Sanity CMS data later

export const mockHero = {
  name: "Sam Shulman",
  tagline: "Building intelligent solutions that bridge technology and human potential",
  chatbotCta: "Chat about my career journey",
}

export const mockProjects = [
  {
    _id: "1",
    title: "Career Conversation AI",
    description: "An intelligent chatbot that engages users in meaningful conversations about career development and professional growth",
    longDescription: "Built with LangChain and deployed on Hugging Face Spaces, this AI assistant provides personalized career guidance through natural language conversations.",
    technologies: ["Python", "LangChain", "Hugging Face", "Gradio"],
    featured: true,
    demoUrl: "https://huggingface.co/spaces/shulman33/career_conversation",
    githubUrl: "https://github.com/shulman33/career-conversation",
  },
  {
    _id: "2",
    title: "Enterprise Data Pipeline",
    description: "Scalable data processing system handling millions of records with real-time analytics capabilities",
    longDescription: "Designed and implemented a distributed data pipeline using Apache Spark and Kafka for real-time data ingestion and processing.",
    technologies: ["Apache Spark", "Kafka", "Python", "PostgreSQL", "Docker"],
    featured: true,
    demoUrl: null,
    githubUrl: null,
  },
  {
    _id: "3",
    title: "ML Model Deployment Platform",
    description: "Cloud-native platform for deploying and monitoring machine learning models at scale",
    longDescription: "Built a comprehensive MLOps platform with automated model versioning, A/B testing, and monitoring capabilities.",
    technologies: ["Python", "FastAPI", "Docker", "Kubernetes", "MLflow"],
    featured: false,
    demoUrl: null,
    githubUrl: null,
  },
  {
    _id: "4",
    title: "Real-time Analytics Dashboard",
    description: "Interactive dashboard providing real-time insights into business metrics and KPIs",
    longDescription: "Developed a modern React-based dashboard with WebSocket integration for live data updates and beautiful data visualizations.",
    technologies: ["React", "TypeScript", "D3.js", "WebSocket", "Tailwind CSS"],
    featured: true,
    demoUrl: null,
    githubUrl: null,
  },
  {
    _id: "5",
    title: "API Gateway Service",
    description: "High-performance API gateway with rate limiting, authentication, and request routing",
    longDescription: "Built a robust API gateway service handling 10k+ requests per second with comprehensive security features.",
    technologies: ["Node.js", "Express", "Redis", "MongoDB", "Docker"],
    featured: false,
    demoUrl: null,
    githubUrl: null,
  },
  {
    _id: "6",
    title: "Automated Testing Framework",
    description: "Comprehensive testing framework for end-to-end test automation across web applications",
    longDescription: "Created a flexible testing framework with parallel execution, visual regression testing, and detailed reporting.",
    technologies: ["Python", "Selenium", "Pytest", "Docker", "CI/CD"],
    featured: false,
    demoUrl: null,
    githubUrl: null,
  },
]

export const mockTechnologies = [
  // Frontend
  { name: "React", category: "frontend", proficiencyLevel: "expert" },
  { name: "TypeScript", category: "frontend", proficiencyLevel: "expert" },
  { name: "Next.js", category: "frontend", proficiencyLevel: "advanced" },
  { name: "Tailwind CSS", category: "frontend", proficiencyLevel: "expert" },
  { name: "Vue.js", category: "frontend", proficiencyLevel: "intermediate" },

  // Backend
  { name: "Python", category: "backend", proficiencyLevel: "expert" },
  { name: "Node.js", category: "backend", proficiencyLevel: "advanced" },
  { name: "FastAPI", category: "backend", proficiencyLevel: "advanced" },
  { name: "Express", category: "backend", proficiencyLevel: "advanced" },
  { name: "Django", category: "backend", proficiencyLevel: "intermediate" },

  // Database
  { name: "PostgreSQL", category: "database", proficiencyLevel: "advanced" },
  { name: "MongoDB", category: "database", proficiencyLevel: "advanced" },
  { name: "Redis", category: "database", proficiencyLevel: "intermediate" },
  { name: "MySQL", category: "database", proficiencyLevel: "intermediate" },

  // AI/ML
  { name: "LangChain", category: "ai-ml", proficiencyLevel: "advanced" },
  { name: "TensorFlow", category: "ai-ml", proficiencyLevel: "intermediate" },
  { name: "PyTorch", category: "ai-ml", proficiencyLevel: "intermediate" },
  { name: "Hugging Face", category: "ai-ml", proficiencyLevel: "advanced" },
  { name: "OpenAI API", category: "ai-ml", proficiencyLevel: "advanced" },

  // DevOps
  { name: "Docker", category: "devops", proficiencyLevel: "advanced" },
  { name: "Kubernetes", category: "devops", proficiencyLevel: "intermediate" },
  { name: "AWS", category: "devops", proficiencyLevel: "advanced" },
  { name: "CI/CD", category: "devops", proficiencyLevel: "advanced" },
  { name: "Git", category: "devops", proficiencyLevel: "expert" },

  // Tools
  { name: "VS Code", category: "tools", proficiencyLevel: "expert" },
  { name: "Figma", category: "tools", proficiencyLevel: "intermediate" },
  { name: "Postman", category: "tools", proficiencyLevel: "advanced" },
  { name: "Jira", category: "tools", proficiencyLevel: "advanced" },
]

export const mockContact = {
  email: "sam@example.com",
  phone: "+1 (555) 123-4567",
  linkedinUrl: "https://linkedin.com/in/samshulman",
  githubUrl: "https://github.com/shulman33",
  twitterUrl: "https://twitter.com/samshulman",
  location: "San Francisco, CA",
}

export const categoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  "ai-ml": "AI & Machine Learning",
  devops: "DevOps & Cloud",
  tools: "Tools & Workflows",
}

export const proficiencyColors: Record<string, string> = {
  expert: "cyan",
  advanced: "purple",
  intermediate: "pink",
  beginner: "yellow",
}
