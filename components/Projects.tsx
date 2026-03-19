import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Featured Work
          </p>
          <h2 className="text-4xl font-bold text-white">Projects</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Production-grade AI and software systems, from multi-agent
            architectures to RAG pipelines and backend microservices.
          </p>
        </div>

        {/* Project cards */}
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-violet-500/30 transition-all duration-300"
            >
              {/* Project number */}
              <div className="absolute top-6 right-8 text-5xl font-black text-white/[0.04] select-none group-hover:text-white/[0.07] transition-colors">
                {String(idx + 1).padStart(2, "0")}
              </div>

              <div className="grid md:grid-cols-[1fr_auto] gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 pr-16">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-5 leading-relaxed">
                    {project.longDescription}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-6">
                    {project.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm text-slate-400"
                      >
                        <span className="text-violet-400 mt-0.5 shrink-0">
                          &#8227;
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.badges.map((badge) => (
                      <span
                        key={badge}
                        className="bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium px-2.5 py-1 rounded-md"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex md:flex-col gap-3 items-start md:items-end justify-end shrink-0">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200"
                    >
                      Live Demo
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Tech stack footer */}
              <div className="mt-6 pt-5 border-t border-white/[0.05] flex flex-wrap gap-x-4 gap-y-1">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-xs text-slate-500">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
