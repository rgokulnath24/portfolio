import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { projectsData } from "@/src/data/projects";

export function Projects() {
  const [featuredProject, ...otherProjects] = projectsData;

  return (
    <section
      id="work"
      className="border-t border-[var(--border)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Section Header */}
        <div className="mb-16 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent-light)]">
              Selected Work
            </p>

            <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
              Projects built with purpose.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[var(--muted)]">
            A selection of products and applications I've designed and
            developed across frontend and full-stack development.
          </p>
        </div>

        {/* Featured Project */}
        {featuredProject && (
          <article className="group overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)] transition-all duration-500 hover:border-[var(--accent)]/30">

            <div className="grid lg:grid-cols-[1.25fr_0.75fr]">

              {/* Project Screenshot */}
              <div className="relative min-h-[360px] overflow-hidden bg-[var(--surface)] sm:min-h-[500px]">

                {featuredProject.image ? (
                  <Image
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl font-semibold text-[var(--border)]">
                      01
                    </span>
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                {/* Project Number */}
                <div className="absolute left-6 top-6">
                  <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 font-mono text-xs text-white/70 backdrop-blur-md">
                    01
                  </span>
                </div>
              </div>

              {/* Project Information */}
              <div className="flex flex-col justify-between p-7 sm:p-10">

                <div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent-light)]">
                      {featuredProject.category}
                    </span>

                    <span className="font-mono text-xs text-[var(--subtle)]">
                      {featuredProject.year}
                    </span>
                  </div>

                  <h3 className="mt-7 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
                    {featuredProject.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-[var(--muted)] sm:text-base">
                    {featuredProject.description}
                  </p>

                  {/* Case Study */}
                  {featuredProject.problem && (
                    <div className="mt-8 border-t border-[var(--border)] pt-7">

                      <div className="grid gap-6 sm:grid-cols-2">

                        <div>
                          <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--subtle)]">
                            Challenge
                          </p>

                          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                            {featuredProject.problem}
                          </p>
                        </div>

                        <div>
                          <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--subtle)]">
                            Solution
                          </p>

                          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                            {featuredProject.solution}
                          </p>
                        </div>

                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom */}
                <div className="mt-10">

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-medium text-[var(--muted)]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-8 border-t border-[var(--border)] pt-6">
                    <a
                      href={featuredProject.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:text-[var(--accent-light)]"
                    >
                      View case study

                      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </article>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div className="mt-8 grid gap-8 md:grid-cols-2">

            {otherProjects.map((project, index) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)] transition-all duration-500 hover:-translate-y-1 hover:border-[var(--accent)]/30"
              >

                {/* Screenshot */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface)]">

                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-7xl font-semibold text-[var(--border)]">
                        0{index + 2}
                      </span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                  <div className="absolute left-5 top-5">
                    <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 font-mono text-xs text-white/70 backdrop-blur-md">
                      0{index + 2}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">

                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--accent-light)]">
                      {project.category}
                    </span>

                    <span className="font-mono text-xs text-[var(--subtle)]">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--muted)]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <div className="mt-7 border-t border-[var(--border)] pt-5">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:text-[var(--accent-light)]"
                    >
                      View project
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>

                </div>
              </article>
            ))}

          </div>
        )}
      </div>
    </section>
  );
}