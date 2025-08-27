import { skills } from "../../constants";

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Skills</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {skills.map((s) => (
          <div key={s.group} className="rounded-3xl p-6 bg-slate-900/70 ring-1 ring-white/10">
            <div className="text-sm uppercase tracking-widest text-fuchsia-300/80 mb-3">{s.group}</div>
            <div className="flex flex-wrap gap-2">
              {s.items.map((it) => (
                <span key={it} className="text-xs px-2 py-1 rounded-xl bg-slate-800/60 ring-1 ring-white/10">{it}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
