import { skillsData } from "@/src/data/skills";

export function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-[var(--border)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">

        <div className="mb-14 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent-light)]">
            Skills & Technologies
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Tools I use to build digital products.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {skillsData.map((group) => {
            const Icon = group.icon;

            return (
              <div
                key={group.category}
                className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/40"
              >
                {/* Subtle glow */}
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[var(--accent)]/5 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--accent-light)]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-[var(--foreground)]">
                        {group.category}
                      </h3>

                      <p className="mt-1 text-xs text-[var(--subtle)]">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs text-[var(--subtle)]">
                    {String(group.skills.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="my-6 h-px bg-[var(--border)]" />

                {/* Skills */}
                <div className="relative grid grid-cols-2 gap-x-4 gap-y-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 text-sm text-[var(--muted)] transition-colors duration-200 hover:text-[var(--foreground)]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]/60" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}