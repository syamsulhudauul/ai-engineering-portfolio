export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-950/40 via-[#0a0a0f] to-blue-950/30" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-medium px-4 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          Available for freelance &amp; full-time roles
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
          Building{" "}
          <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            Intelligent Systems
          </span>{" "}
          That Ship to Production
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          AI Engineer &amp; Software Engineer specializing in LLM integration,
          multi-agent systems, RAG pipelines, and high-throughput Go/Python
          backend services.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200"
          >
            Get In Touch
          </a>
        </div>

        {/* Tech pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-14">
          {["LLM Systems", "Multi-Agent AI", "RAG Pipelines", "Go / Python", "gRPC", "MCP Protocol"].map(
            (tag) => (
              <span
                key={tag}
                className="bg-white/5 border border-white/10 text-slate-400 text-xs px-3 py-1.5 rounded-full"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600">
        <span className="text-xs">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </div>
    </section>
  );
}
