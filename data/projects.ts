export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  highlights: string[];
  badges: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "trading-floor",
    title: "The Trading Floor — Multi-Agent Market Analysis Council",
    description:
      "A multi-agent AI council of 5 specialized agents that debate and reach consensus on stock investment decisions in real time.",
    longDescription:
      "A multi-agent AI council of 5 specialized agents — Quant Analyst, Sentiment Scout, Macro Strategist, Risk Manager, and Portfolio Chief — that debate and reach consensus on stock investment decisions in real time. Streams live agent reasoning via SSE and integrates live market data from yFinance.",
    techStack: ["Python", "CrewAI", "FastAPI", "Next.js 14", "TypeScript", "Tailwind CSS", "SSE", "yFinance", "GPT-4"],
    highlights: [
      "5 AI agents with defined roles, debate mechanism, and consensus logic",
      "Real-time streaming responses via Server-Sent Events (SSE)",
      "Integrates live market data (yFinance) + technical + sentiment + macro analysis",
      "Full-stack: FastAPI backend + Next.js 14 frontend",
    ],
    badges: ["Multi-Agent AI", "CrewAI", "LLM", "FastAPI", "Next.js", "Real-time"],
  },
  {
    id: "mcp-grpc-bridge",
    title: "MCP-gRPC Bridge Server",
    description:
      "A dynamic MCP server that auto-discovers gRPC microservices and exposes their methods as AI-callable tools.",
    longDescription:
      "A dynamic MCP (Model Context Protocol) server that auto-discovers gRPC microservices and exposes their methods as AI-callable tools, with access control, JSON Schema generation, and Datadog observability. Bridges LLMs like Claude and GPT-4 directly to backend microservices.",
    techStack: ["Go", "MCP Protocol", "gRPC", "Protocol Buffers", "Datadog"],
    highlights: [
      "Dynamic tool registration from protobuf service definitions",
      "Whitelist/blacklist access control per tool",
      "Full observability: logging, metrics, distributed tracing via Datadog",
      "Bridges LLMs (Claude, GPT-4) directly to backend microservices",
    ],
    badges: ["MCP Protocol", "Go", "gRPC", "LLM Tooling", "Observability"],
  },
  {
    id: "astro-ai-backend",
    title: "Production AI Assistant Backend (Astro AI)",
    description:
      "Production-grade Go backend for an LLM-powered e-commerce assistant, built with hexagonal architecture.",
    longDescription:
      "Production-grade Go backend for an LLM-powered e-commerce assistant, built with hexagonal (ports & adapters) architecture. Supports multi-provider LLM routing, session management, real-time MQTT messaging, and MCP tool integrations. Deployed in production with SonarQube quality gates and Jenkins CI/CD.",
    techStack: ["Go 1.24", "gRPC", "PostgreSQL", "Redis", "MongoDB", "MQTT", "OpenAI API", "Anthropic API", "DDD"],
    highlights: [
      "Hexagonal architecture (interface → application → domain → adapters)",
      "Dual-binary: gRPC server + background MQTT worker",
      "Multi-LLM provider support (OpenAI + Anthropic)",
      "SonarQube quality gates + Jenkins CI/CD in production",
    ],
    badges: ["Go", "gRPC", "DDD", "LLM", "Production", "Microservices"],
  },
  {
    id: "rag-mta-ai",
    title: "RAG System — MTA AI (Full-Stack)",
    description:
      "Full-stack Retrieval-Augmented Generation system with PDF ingestion, vector embeddings, and source citations.",
    longDescription:
      "Full-stack Retrieval-Augmented Generation (RAG) system. Ingests PDF documents, generates vector embeddings, stores in a vector database, and serves an interactive chat interface with source citations. Fully Dockerized with a React frontend and Go backend.",
    techStack: ["Go", "React", "JavaScript", "Vector DB", "Docker"],
    highlights: [
      "PDF ingestion pipeline with chunking and embedding",
      "Semantic similarity search for relevant context retrieval",
      "Source citation tracking in LLM responses",
      "Full-stack with React frontend + Dockerized deployment",
    ],
    badges: ["RAG", "Vector DB", "Go", "React", "LLM", "Full-Stack"],
  },
  {
    id: "vdb-poc",
    title: "Vector Database POC — Multi-Backend Evaluation",
    description:
      "Proof-of-concept evaluating Qdrant, ChromaDB, and pgvector for AI-powered product search with benchmark comparisons.",
    longDescription:
      "Proof-of-concept evaluating multiple vector database backends (Qdrant, ChromaDB, PostgreSQL+pgvector) for AI-powered product search. Includes a data ingestion pipeline from gRPC services, embedding generation, and semantic similarity search benchmarks.",
    techStack: ["Go", "Qdrant", "ChromaDB", "pgvector", "Docker Compose"],
    highlights: [
      "Side-by-side comparison of 3 vector DB backends",
      "Automated product data crawling from gRPC microservices",
      "Semantic search over product descriptions",
      "Benchmark-driven decision framework",
    ],
    badges: ["Vector DB", "RAG", "Qdrant", "ChromaDB", "pgvector", "Go"],
  },
];
