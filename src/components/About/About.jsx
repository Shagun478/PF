import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Phone, ArrowUpRight } from "lucide-react";
import { links, avatarFallback } from "../../constants";

export default function About() {
  return (
    <section id="hero" className="max-w-6xl mx-auto px-4 pt-16 pb-10">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-fuchsia-300/80 tracking-widest uppercase text-xs mb-3">
            UI/UX Designer • Frontend Developer
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I’m <span className="text-fuchsia-300">Shagun</span> — I craft usable, delightful interfaces.
          </h1>
          <p className="mt-5 text-slate-300/90 max-w-xl">
            I blend <span className="text-white">design thinking</span> with{" "}
            <span className="text-white">code</span> to ship clean, accessible products.
            Community builder at CU’s largest tech club.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white text-slate-900 hover:opacity-90 transition shadow"
            >
              <Linkedin className="h-5 w-5" /> LinkedIn
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-800 ring-1 ring-white/10 hover:bg-slate-700 transition"
            >
              <Github className="h-5 w-5" /> GitHub
            </a>
            <a
              href={links.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-fuchsia-500/20 ring-1 ring-fuchsia-400/40 hover:bg-fuchsia-500/30 transition"
            >
              Resume <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-5 flex items-center gap-5 text-sm text-slate-300/80">
            <a href={links.email} className="inline-flex items-center gap-2 hover:text-white">
              <Mail className="h-4 w-4" /> shagunr478@gmail.com
            </a>
            <a href={links.phone} className="inline-flex items-center gap-2 hover:text-white">
              <Phone className="h-4 w-4" /> +91 90153 75603
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:justify-self-end"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-tr from-fuchsia-500/30 via-purple-500/20 to-cyan-400/20 blur-2xl"></div>
            <img
              alt="Portrait of Shagun Rana"
              src={avatarFallback}
              className="relative w-full max-w-sm rounded-[2rem] ring-1 ring-white/10 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
