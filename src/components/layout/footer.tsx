import { ArrowUpRight, ArrowUp } from "lucide-react";
import { footerData } from "@/src/data/footer";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">

      <div className="mx-auto max-w-6xl px-6">

        {/* Main Footer */}
        <div className="flex flex-col gap-10 py-12 sm:flex-row sm:items-end sm:justify-between">

          {/* Brand */}
          <div>
            <a
              href="#"
              className="group inline-flex items-center text-sm font-semibold tracking-tight text-[var(--foreground)]"
            >
              {footerData.name}
              <span className="text-[var(--accent)] transition-colors group-hover:text-[var(--accent-light)]">
                .
              </span>
            </a>

            <p className="mt-2 max-w-xs text-xs leading-5 text-[var(--subtle)]">
              {footerData.description}
            </p>
          </div>

          {/* Social Links */}
          <nav
            aria-label="Social links"
            className="flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            {footerData.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-xs font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                {link.label}

                <ArrowUpRight
                  className="h-3 w-3 opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                />
              </a>
            ))}
          </nav>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-5 border-t border-[var(--border)] py-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-[var(--subtle)]">
            {footerData.copyright}
          </p>

          {/* Back To Top */}
          <a
            href="#"
            className="group inline-flex w-fit items-center gap-2 text-xs font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            Back to top

            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-200 group-hover:border-[var(--accent)]/40 group-hover:text-[var(--accent-light)]">
              <ArrowUp className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
            </span>
          </a>

        </div>

      </div>

    </footer>
  );
}
