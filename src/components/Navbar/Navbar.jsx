// components/Navbar/Navbar.jsx
import { ArrowUpRight, Sparkles } from "lucide-react";
import { links } from "../../constants";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/70 border-b border-white/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#hero" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-fuchsia-500/20 ring-1 ring-fuchsia-400/40">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="font-semibold tracking-wide">Shagun Rana</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#projects" className="hover:text-white/90">Projects</a>
          <a href="#experience" className="hover:text-white/90">Experience</a>
          <a href="#skills" className="hover:text-white/90">Skills</a>
          <a href="#achievements" className="hover:text-white/90">Achievements</a>
          <a href="#contact" className="hover:text-white/90">Contact</a>
          <a href={links.resume} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-fuchsia-500/20 ring-1 ring-fuchsia-400/40 hover:bg-fuchsia-500/30">
            Resume <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </nav>
    </header>
  );
}
