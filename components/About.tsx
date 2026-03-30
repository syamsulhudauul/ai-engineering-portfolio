const focusAreas = [
  { label: "Go Backend Engineering", detail: "gRPC, microservices, DDD, hexagonal architecture" },
  { label: "LLM Application Development", detail: "OpenAI, Anthropic APIs, multi-provider routing" },
  { label: "Agentic AI Systems", detail: "Multi-agent, tool use, MCP protocol" },
  { label: "Retrieval-Augmented Generation", detail: "RAG pipelines, vector search, embeddings" },
  { label: "AI Code Quality & Review", detail: "SonarQube, CI/CD, production standards" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3">
              About Me
            </p>
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
              Go Engineer Building Production LLM Systems
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              3+ years building production-grade backend systems in Go — from
              gRPC microservices and MCP protocol bridges to LLM-powered
              assistants and multi-agent AI architectures. I validate and review
              AI-generated code against production standards using SonarQube
              quality gates, hexagonal architecture, and Jenkins CI/CD.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I bridge the gap between LLM capabilities and reliable backend
              engineering. My systems handle real traffic in production with full
              observability (Datadog), multi-provider LLM routing, and
              battle-tested Go patterns.
            </p>
          </div>

          {/* Focus areas */}
          <div className="space-y-3">
            {focusAreas.map((area) => (
              <div
                key={area.label}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-violet-500/30 transition-colors duration-200"
              >
                <div className="w-2 h-2 rounded-full bg-violet-400 mt-1.5 shrink-0" />
                <div>
                  <div className="text-white font-medium text-sm">{area.label}</div>
                  <div className="text-slate-500 text-xs mt-0.5">{area.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
