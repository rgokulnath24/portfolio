import { ArrowUpRight, Mail } from "lucide-react";
import { contactData } from "@/src/data/contact";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-[var(--border)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">

        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">

          {/* Main CTA */}
          <div>

            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--accent)]" />

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent-light)]">
                {contactData.eyebrow}
              </p>
            </div>

            {/* Heading */}
            <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              {contactData.title}
            </h2>

            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              {contactData.description}
            </p>

            {/* Availability */}
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--cyan)] opacity-40" />

                <span className="relative h-2 w-2 rounded-full bg-[var(--cyan)]" />
              </span>

              <span className="text-xs text-[var(--muted)]">
                Available for new opportunities
              </span>
            </div>

          </div>

          {/* Contact Links */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-2">

            {contactData.links.map((link) => {
              const isExternal = link.href.startsWith("http");

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-xl px-4 py-5 transition-all duration-300 hover:bg-[var(--surface)] sm:px-5"
                >

                  {/* Icon */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-xs font-semibold text-[var(--muted)] transition-colors group-hover:border-[var(--accent)]/30 group-hover:text-[var(--accent-light)]">

                    {link.label === "Email" ? (
                      <Mail className="h-4 w-4" />
                    ) : (
                      link.label.charAt(0)
                    )}

                  </div>

                  {/* Information */}
                  <div className="min-w-0 flex-1">

                    <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--subtle)]">
                      {link.label}
                    </p>

                    <p className="mt-1 truncate text-sm font-medium text-[var(--foreground)] transition-colors group-hover:text-[var(--accent-light)]">
                      {link.value}
                    </p>

                  </div>

                  {/* Arrow */}
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-[var(--subtle)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent-light)]" />

                </a>
              );
            })}

          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col justify-between gap-6 border-t border-[var(--border)] pt-8 sm:flex-row sm:items-center">

          <p className="text-sm text-[var(--subtle)]">
            Have an idea, opportunity, or project?
          </p>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:text-[var(--accent-light)]"
          >
            Start a conversation

            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

        </div>

      </div>
    </section>
  );
}
