import { navItems } from "@/src/data/navbarItems";
import { ArrowUpRight } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--background)]/75 px-5 shadow-lg shadow-black/5 backdrop-blur-xl sm:px-6">

        {/* Logo */}
        <a
          href="#"
          className="text-sm font-semibold tracking-tight text-[var(--foreground)]"
        >
          GOKULNATH
          <span className="text-[var(--accent)]">.</span>
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-medium text-[var(--muted)] transition-colors duration-200 hover:text-[var(--foreground)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="group inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-medium text-[var(--foreground)] transition-all duration-200 hover:border-[var(--accent)]/40 hover:text-[var(--accent-light)]"
        >
          Let's talk

          <ArrowUpRight
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </div>
    </header>
  );
}