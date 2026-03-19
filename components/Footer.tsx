export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Syamsul Huda. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/syamsulhudauul" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com/in/syamsulhudauul" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="mailto:syamsulhuda@example.com" className="hover:text-white transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
