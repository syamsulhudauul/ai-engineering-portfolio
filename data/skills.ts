export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "AI / LLM",
    skills: [
      "LLM Integration (OpenAI, Anthropic)",
      "Multi-Agent Systems (CrewAI)",
      "Retrieval-Augmented Generation (RAG)",
      "MCP (Model Context Protocol)",
      "Vector Databases (ChromaDB, Qdrant, pgvector)",
      "Prompt Engineering",
    ],
  },
  {
    name: "Backend Engineering",
    skills: [
      "Go (gRPC, microservices, DDD)",
      "Python (FastAPI, async)",
      "Protocol Buffers / gRPC",
      "Hexagonal Architecture",
      "REST API Design",
    ],
  },
  {
    name: "Databases & Messaging",
    skills: ["PostgreSQL", "MongoDB", "Redis", "MQTT", "Google Pub/Sub"],
  },
  {
    name: "Frontend",
    skills: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Material-UI"],
  },
  {
    name: "DevOps / Infrastructure",
    skills: ["Docker", "Docker Compose", "CI/CD (Jenkins)", "Datadog", "SonarQube"],
  },
];
