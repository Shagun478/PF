import { Mail, Linkedin, Github, Link as LinkIcon } from "lucide-react";
import { links } from "../../constants";

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-12">
      <div className="rounded-3xl p-6 md:p-10 bg-slate-900/70 ring-1 ring-white/10">
        <h2 className="text-2xl md:text-3xl font-semibold">Let’s build something great</h2>
        <p className="mt-2 text-slate-300/90 max-w-2xl">
          Open to UI/UX internships and frontend roles. I love solving real user problems with clear, delightful interfaces.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={links.email} className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white text-slate-900 hover:opacity-90 transition shadow">
            <Mail className="h-5 w-5"/> Email
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-800 ring-1 ring-white/10 hover:bg-slate-700 transition">
            <Linkedin className="h-5 w-5"/> LinkedIn
          </a>
          <a href={links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-800 ring-1 ring-white/10 hover:bg-slate-700 transition">
            <Github className="h-5 w-5"/> GitHub
          </a>
          <a href={links.resume} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-fuchsia-500/20 ring-1 ring-fuchsia-400/40 hover:bg-fuchsia-500/30 transition">
            Resume <LinkIcon className="h-5 w-5"/>
          </a>
        </div>
      </div>
    </section>
  );
}
