const focusAreas = [
  { label: "LLM Application Development", detail: "OpenAI, Anthropic APIs" },
  { label: "Agentic AI Systems", detail: "Multi-agent, tool use, MCP" },
  { label: "Retrieval-Augmented Generation", detail: "RAG pipelines, vector search" },
  { label: "Backend Engineering", detail: "Go, Python, gRPC, microservices" },
  { label: "Real-time Systems", detail: "SSE streaming, MQTT, Pub/Sub" },
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
              AI Engineer with Software Engineering Foundations
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              I&apos;m an AI Engineer and Software Engineer with hands-on
              experience building production-grade intelligent systems — from
              multi-agent LLM orchestration and RAG pipelines to gRPC
              microservices and MCP protocol integrations.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I bridge the gap between cutting-edge AI research and reliable,
              scalable software engineering. My work spans the full stack — from
              designing agent architectures to shipping production Go backends
              with hexagonal architecture and full observability.
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
