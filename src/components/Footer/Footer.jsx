export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-6 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-3">
        <span>© {new Date().getFullYear()} Shagun Rana. All rights reserved.</span>
        <span>Palampur, H.P., India</span>
      </div>
    </footer>
  );
}
