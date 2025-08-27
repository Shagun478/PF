import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, links } from "../../constants";

export default function Work() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Selected Projects</h2>
        <a href={links.github} target="_blank" rel="noreferrer" className="text-sm inline-flex items-center gap-1 opacity-80 hover:opacity-100">
          See all <ArrowUpRight className="h-4 w-4"/>
        </a>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.article key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="group rounded-3xl overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 ring-1 ring-white/10 hover:ring-fuchsia-400/50 hover:shadow-fuchsia-500/10 hover:shadow-2xl">
            <div className="relative">
              <img src={p.image} alt={p.title} className="h-44 w-full object-cover opacity-90 group-hover:opacity-100 transition"/>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"/>
            </div>
            <div className="p-5">
              <div className="text-xs uppercase tracking-widest text-fuchsia-300/80 mb-1">{p.role}</div>
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300/90">{p.blurb}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li key={t} className="text-xs px-2 py-1 rounded-xl bg-slate-800/60 ring-1 ring-white/10">{t}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-3">
                {p.links.map((l) => (
                  <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:underline">
                    <l.icon className="h-4 w-4"/> {l.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
