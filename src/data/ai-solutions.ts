export interface AISolution {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  category: 'rag-agent' | 'multi-agent' | 'local-llm' | 'voice-ai' | 'automation';
  price: number;
  featured: boolean;
  architecture: string;
  badge?: string;
  techStack: string[];
  features: string[];
  useCases: string[];
}

export const aiSolutions: AISolution[] = [
  {
    id: 'support-rag-agent',
    name: 'Autonomous Support & RAG Agent',
    slug: 'support-rag-agent',
    tagline: 'Production-Ready Enterprise Document Ingestion & Chat Widget',
    description: 'Plug-and-play RAG solution that ingests your documentation, Notion docs, and OpenAPI specs to answer customer support queries with precise citation links and fallback human handover.',
    category: 'rag-agent',
    price: 39,
    featured: true,
    architecture: 'Vector DB (Pinecone/Qdrant) + LangChain + OpenAI GPT-4o / Claude 3.5 + Next.js Widget',
    badge: 'High Impact',
    techStack: ['Pinecone', 'LangChain', 'OpenAI API', 'FastAPI', 'Next.js 15', 'TypeScript'],
    features: [
      'Includes Complete Learning & Step-by-Step Integration Guide (PDF + Code)',
      'Automatic PDF, Markdown, and Web Crawling Vector Ingestion',
      'Hybrid Vector + Keyword Search Reranking (Cohere Rerank)',
      'Embeddable Floating Chat Widget with Source Citations',
      'Human-in-the-Loop Handover Trigger via Slack/Zendesk',
      'Hallucination Guardrails & Token Usage Dashboard'
    ],
    useCases: [
      '24/7 SaaS Customer Support Automation',
      'Internal Knowledge Base AI Search',
      'Developer API Documentation Assistant'
    ]
  },
  {
    id: 'multi-agent-content-engine',
    name: 'Multi-Agent Content Pipeline',
    slug: 'multi-agent-content-engine',
    tagline: 'Autonomous Research, Drafting, SEO Optimization & Image Generation Engine',
    description: 'CrewAI / AutoGen based multi-agent workflow that takes a topic prompt, researches live web sources, drafts long-form SEO articles, generates visual assets, and formats social media posts.',
    category: 'multi-agent',
    price: 39,
    featured: true,
    architecture: 'CrewAI Multi-Agent Framework + Tavily Web Search + Flux.1 Image Gen + Astro MDX Sync',
    badge: 'Turnkey AI Workflow',
    techStack: ['CrewAI', 'Python', 'Tavily API', 'Flux.1', 'Next.js 16', 'Node.js'],
    features: [
      'Includes Complete Learning & Step-by-Step Integration Guide (PDF + Code)',
      'Researcher Agent: Gathers real-time web facts & citations',
      'Writer Agent: Drafts structured, engaging long-form posts',
      'SEO Auditor Agent: Evaluates keyword density & readability',
      'Art Director Agent: Produces featured images via Flux API',
      'Automated Git Commit & Astro MDX Publishing'
    ],
    useCases: [
      'Automated Tech Blog & Content Marketing Engine',
      'Daily Industry News Roundup Generator',
      'Social Media Content Scheduler'
    ]
  },
  {
    id: 'local-llm-wrapper',
    name: 'Local LLM Desktop & Web Boilerplate',
    slug: 'local-llm-wrapper',
    tagline: '100% Private, Zero-Cloud Costs AI Workspace powered by Ollama',
    description: 'Turnkey local AI application stack for developers and enterprises with strict data privacy requirements. Runs Llama 3.3, DeepSeek R1, or Qwen 2.5 locally on Mac/PC or private GPU instances.',
    category: 'local-llm',
    price: 39,
    featured: true,
    architecture: 'Ollama Backend API + Tauri / Electron + Next.js UI + Local Vector SQLite',
    badge: '100% Privacy First',
    techStack: ['Ollama', 'Llama 3.3', 'DeepSeek R1', 'Tauri', 'React', 'TypeScript'],
    features: [
      'Includes Complete Learning & Step-by-Step Integration Guide (PDF + Code)',
      'Zero API Cost: Runs entirely on local hardware',
      'Offline Vector Database with SQLite VSS',
      'Cross-platform Desktop App (macOS Apple Silicon & Windows GPU)',
      'Model Manager & One-click Ollama pull UI',
      'Privacy Shield: No data ever leaves the local machine'
    ],
    useCases: [
      'HIPAA & GDPR Compliant Medical/Legal AI Assistant',
      'Offline Code & Architecture Review Companion',
      'Confidential Enterprise Document Analyzer'
    ]
  },
  {
    id: 'voice-ai-sales-rep',
    name: 'Voice AI Real-Time Agent',
    slug: 'voice-ai-sales-rep',
    tagline: 'Ultra-low Latency WebRTC Voice Assistant with Tool Calling',
    description: 'Sub-400ms latency voice agent capable of conducting interactive discovery calls, qualifying leads, and booking appointments directly into Google Calendar or HubSpot.',
    category: 'voice-ai',
    price: 39,
    featured: false,
    architecture: 'LiveKit WebRTC + OpenAI Realtime API / Deepgram + ElevenLabs + Cal.com API',
    badge: 'Real-Time Voice',
    techStack: ['LiveKit', 'OpenAI Realtime API', 'Deepgram STT', 'ElevenLabs TTS', 'Next.js 15'],
    features: [
      'Includes Complete Learning & Step-by-Step Integration Guide (PDF + Code)',
      'Sub-400ms Full Duplex Conversational Response',
      'Interruption Handling: User can speak anytime',
      'Live Tool Calling for Cal.com Booking & CRM Sync',
      'WebRTC Phone & Browser Audio Pipeline',
      'Call Transcript & Sentiment Score Webhooks'
    ],
    useCases: [
      'Inbound Lead Qualification Voice Agent',
      'Customer Onboarding & Appointment Scheduler',
      'Interactive Voice Support Desk'
    ]
  }
];
