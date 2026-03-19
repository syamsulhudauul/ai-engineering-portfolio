export interface Service {
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: "LLM Application Development",
    description:
      "Build production-grade chatbots, assistants, and agents using OpenAI and Anthropic APIs with robust session management and streaming.",
    icon: "🤖",
  },
  {
    title: "RAG System Design & Implementation",
    description:
      "End-to-end RAG pipelines — document ingestion, chunking, embedding, vector storage, and retrieval-augmented generation with citations.",
    icon: "📚",
  },
  {
    title: "Multi-Agent AI Architecture",
    description:
      "Design and build multi-agent systems with specialized roles, debate mechanisms, consensus logic, and real-time streaming.",
    icon: "🧠",
  },
  {
    title: "Backend API Development",
    description:
      "High-throughput Go and Python backends with gRPC, microservices patterns, DDD/hexagonal architecture, and production-grade observability.",
    icon: "⚙️",
  },
  {
    title: "AI Integration (MCP & gRPC)",
    description:
      "Integrate LLMs into existing backend systems via MCP protocol or gRPC bridges, enabling AI agents to call your internal services.",
    icon: "🔗",
  },
  {
    title: "Vector DB Consulting",
    description:
      "Evaluate and select the right vector database (Qdrant, ChromaDB, pgvector) for your use case with benchmarks and migration support.",
    icon: "🔍",
  },
];
