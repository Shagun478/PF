import { Briefcase } from "lucide-react";
import { experience } from "../../constants";

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Experience & Leadership</h2>
      <div className="space-y-6">
        {experience.map((e) => (
          <div key={e.org} className="rounded-3xl p-6 bg-slate-900/70 ring-1 ring-white/10">
            <div className="flex items-center gap-3 mb-2">
              <Briefcase className="h-5 w-5 text-fuchsia-300"/>
              <div className="font-medium">{e.role} · {e.org}</div>
            </div>
            <div className="text-sm text-slate-400 mb-3">{e.time}</div>
            <ul className="list-disc pl-5 space-y-1 text-slate-200/90">
              {e.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
