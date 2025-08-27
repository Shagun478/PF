import { Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Education</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-3xl p-6 bg-slate-900/70 ring-1 ring-white/10">
          <div className="flex items-center gap-3 mb-1">
            <Award className="h-5 w-5 text-fuchsia-300"/>
            <div className="font-medium">Chandigarh University — B.E. CSE (Pursuing)</div>
          </div>
          <div className="text-sm text-slate-400 mb-3">Mohali, Punjab</div>
          <ul className="list-disc pl-5 space-y-1 text-slate-200/90">
            <li>Cumulative GPA: 6.83/10.0</li>
            <li>C Square Club (Community Head)</li>
          </ul>
        </div>
        <div className="rounded-3xl p-6 bg-slate-900/70 ring-1 ring-white/10">
          <div className="font-medium">Adharshila Senior Secondary School — Intermediate (CBSE)</div>
          <div className="text-sm text-slate-400 mb-3">Palampur, Himachal Pradesh (2020–2021)</div>
          <ul className="list-disc pl-5 space-y-1 text-slate-200/90">
            <li>Percentage: 81%</li>
            <li>Science Club — collaborative projects & research</li>
            <li>Project Exhibition Winner</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
