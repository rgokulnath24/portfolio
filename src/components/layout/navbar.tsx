import { navItems } from "@/src/data/navbarItems";
import { group } from "console";
import { ArrowUpRight } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-4">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--background)]/75 px-5 shadow-lg shadow-black/5 backdrop-blur-xl sm:px-6">

        <a
          href="#"
          className="inline-block text-sm font-semibold tracking-tight text-[var(--foreground)] transition-all duration-200 hover:-translate-y-0.5 hover:text-[var(--accent-light)]"
        >
          GOKULNATH
        </a>


        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-medium text-[var(--muted)]"
            >
              {item.label}
            </a>
          ))}
        </nav>


        <a
          href="#contact"
          className="group inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-medium text-[var(--foreground)] transition-all hover:border-[var(--accent)]/40 hover:text-[var(--accent-light)]"
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
