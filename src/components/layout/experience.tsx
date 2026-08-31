import { ArrowUpRight, MapPin } from "lucide-react";
import { experienceData } from "@/src/data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-[var(--border)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent-light)]">
            Experience
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
            Experience that shaped how I build.
          </h2>

          <p className="mt-5 text-sm leading-7 text-[var(--muted)] sm:text-base">
            My journey across web development, product interfaces, and
            full-stack application development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-[7px] top-0 hidden h-full w-px bg-[var(--border)] sm:block" />

          <div className="space-y-6">
            {experienceData.map((experience, index) => {
              const isCurrent = index === 0;

              return (
                <article
                  key={`${experience.company}-${experience.role}`}
                  className="relative pl-0 sm:pl-12"
                >

                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-2 top-8 hidden h-[15px] w-[15px] -translate-x-1/2 rounded-full border-2 sm:block ${
                      isCurrent
                        ? "border-[var(--accent)] bg-[var(--accent)] shadow-[0_0_0_5px_var(--accent)]/10"
                        : "border-[var(--border-hover)] bg-[var(--surface)]"
                    }`}
                  />

                  {/* Card */}
                  <div
                    className={`group rounded-2xl border p-6 transition-all duration-300 sm:p-8 ${
                      isCurrent
                        ? "border-[var(--accent)]/25 bg-[var(--card)]"
                        : "border-[var(--border)] bg-[var(--card)] hover:border-[var(--border-hover)]"
                    }`}
                  >

                    {/* Top */}
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

                      <div>
                        <div className="flex flex-wrap items-center gap-3">

                          <h3 className="text-xl font-semibold tracking-tight text-[var(--foreground)] sm:text-2xl">
                            {experience.role}
                          </h3>

                          {isCurrent && (
                            <span className="rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-[var(--accent-light)]">
                              Current
                            </span>
                          )}
                        </div>

                        <p className="mt-2 text-sm font-medium text-[var(--accent-light)]">
                          {experience.company}
                        </p>
                      </div>

                      {/* Period */}
                      <div className="shrink-0 sm:text-right">
                        <p className="font-mono text-xs text-[var(--foreground)]">
                          {experience.period}
                        </p>

                        <div className="mt-2 flex items-center gap-1.5 text-xs text-[var(--subtle)] sm:justify-end">
                          <MapPin className="h-3.5 w-3.5" />
                          {experience.location}
                        </div>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="my-6 h-px bg-[var(--border)]" />

                    {/* Description */}
                    <p className="max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-7 flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-medium text-[var(--muted)] transition-colors duration-200 group-hover:border-[var(--border-hover)]"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    {/* Optional Link */}
                    {experience.href && (
                      <div className="mt-7 border-t border-[var(--border)] pt-5">
                        <a
                          href={experience.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:text-[var(--accent-light)]"
                        >
                          View company
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}