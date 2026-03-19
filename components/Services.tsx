import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3">
            What I Offer
          </p>
          <h2 className="text-4xl font-bold text-white">Services</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Available for freelance projects and consulting engagements in AI
            engineering and backend development.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-violet-500/30 transition-all duration-200 group"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-white font-semibold mb-3 group-hover:text-violet-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25"
          >
            Discuss Your Project
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
