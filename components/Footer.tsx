export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-foreground/60 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Syamsul Huda. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/syamsulhudauul"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/syamsulhudauul"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:syamsulhuda.uul@gmail.com"
            className="hover:text-foreground transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
