import {
  ArrowDown,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

import { heroData } from "@/src/data/hero";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[var(--accent)]/5 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl items-center px-6 pb-20 pt-28 sm:pt-32">

        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

          {/* Left */}
          <div>

            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--accent)]" />

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent-light)]">
                {heroData.eyebrow}
              </p>
            </div>

            {/* Heading */}
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.03em] text-[var(--foreground)] sm:text-6xl lg:text-7xl">
              {heroData.title}

              <span className="mt-2 block text-[var(--accent)]">
                {heroData.highlight}
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              {heroData.description}
            </p>

            {/* Actions */}
            <div className="mt-10 flex flex-wrap items-center gap-3">
              {heroData.actions.map((action) => {
                const isPrimary = action.variant === "primary";

                return (
                  <a
                    key={action.label}
                    href={action.href}
                    className={
                      isPrimary
                        ? "group inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--accent-light)]"
                        : "group inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-3 text-sm font-medium text-[var(--foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]/40"
                    }
                  >
                    {action.label}

                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                );
              })}
            </div>

            {/* Availability */}
            <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--card)]/60 px-3.5 py-2 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--cyan)] opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--cyan)]" />
              </span>

              <span className="text-xs text-[var(--muted)]">
                {heroData.status.label}
              </span>
            </div>
          </div>

          {/* Right - Developer Window */}
          <div className="relative hidden lg:block">

            {/* Glow */}
            <div className="absolute -inset-8 rounded-full bg-[var(--accent)]/5 blur-3xl" />

            <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-2xl shadow-black/20">

              {/* Window Header */}
              <div className="flex h-12 items-center justify-between border-b border-[var(--border)] px-5">

                <div className="flex items-center gap-2">
                  {heroData.developmentDots.map((item) => (
                    <span
                      key={item}
                      className="h-2.5 w-2.5 rounded-full bg-[var(--border-hover)]"
                    />
                  ))}
                </div>

                <span className="font-mono text-[11px] text-[var(--subtle)]">
                  {heroData.code.filename}
                </span>

              </div>

              {/* Code */}
              <div className="overflow-x-auto p-6 sm:p-7">
                <div className="min-w-[390px] font-mono text-[13px] leading-7">

                  <p className="text-[var(--subtle)]">
                    {heroData.code.comment}
                  </p>

                  <div className="mt-2">
                    <span className="text-[var(--accent-light)]">
                      const
                    </span>{" "}

                    <span className="text-[var(--cyan)]">
                      developer
                    </span>{" "}

                    <span className="text-[var(--muted)]">
                      =
                    </span>{" "}

                    <span className="text-[var(--foreground)]">
                      {"{"}
                    </span>
                  </div>

                  {heroData.code.properties.map((property) => (
                    <p
                      key={property.key}
                      className="pl-6"
                    >
                      <span className="text-[var(--foreground)]">
                        {property.key}
                      </span>

                      <span className="text-[var(--subtle)]">
                        :
                      </span>{" "}

                      <span className="text-[var(--accent-light)]">
                        "{property.value}"
                      </span>

                      <span className="text-[var(--subtle)]">
                        ,
                      </span>
                    </p>
                  ))}

                  <p className="pl-6 text-[var(--foreground)]">
                    stack:
                    <span className="text-[var(--subtle)]"> [</span>
                  </p>

                  {heroData.code.stack.map((technology) => (
                    <p
                      key={technology}
                      className="pl-12 text-[var(--cyan)]"
                    >
                      "{technology}",
                    </p>
                  ))}

                  <p className="pl-6 text-[var(--subtle)]">
                    ]
                  </p>

                  <p className="text-[var(--foreground)]">
                    {"}"}
                  </p>
                </div>
              </div>

              {/* Status */}
              <div className="border-t border-[var(--border)] px-6 py-4">
                <div className="flex items-center justify-between">

                  <span className="font-mono text-[11px] text-[var(--subtle)]">
                    status
                  </span>

                  <span className="flex items-center gap-2 text-xs text-[var(--muted)]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[var(--cyan)]" />
                    {heroData.code.status}
                  </span>

                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[var(--subtle)] transition-colors hover:text-[var(--foreground)] sm:flex"
        >
          <span className="text-[10px] uppercase tracking-[0.2em]">
            Scroll
          </span>

          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>

      </div>
    </section>
  );
}