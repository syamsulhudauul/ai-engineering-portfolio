import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Expertise
          </p>
          <h2 className="text-4xl font-bold text-white">Skills</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-violet-500/30 transition-colors duration-200"
            >
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 inline-block" />
                {category.name}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-sm text-slate-400">
                    <span className="text-violet-500">&#10003;</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
