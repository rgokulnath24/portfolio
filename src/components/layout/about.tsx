import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";

import { aboutData } from "@/src/data/about";

export function About() {
  return (
    <section
      id="about"
      className="border-t border-[var(--border)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">

        <div className="grid items-center gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">

          {/* Profile */}
          <div className="relative mx-auto w-full max-w-sm lg:mx-0">

            {/* Image */}
            <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]">

              <Image
                src="/profile.jpg"
                alt="Gokulnath - Full Stack Developer"
                fill
                priority
                className="object-cover object-center grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Location */}
              <div className="absolute bottom-5 left-5">
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-2 text-xs text-white/80 backdrop-blur-md">
                  <MapPin className="h-3.5 w-3.5" />
                  Chennai, India
                </div>
              </div>
            </div>

            {/* Decorative border */}
            <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-3xl border border-[var(--accent)]/20 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />
          </div>

          {/* Content */}
          <div>

            {/* Eyebrow */}
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent-light)]">
              {aboutData.eyebrow}
            </p>

            {/* Heading */}
            <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
              {aboutData.title}
            </h2>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              {aboutData.description}
            </p>

            {/* Details */}
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {aboutData.details.map((detail) => (
                <div
                  key={detail.label}
                  className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]/30"
                >
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--subtle)]">
                    {detail.label}
                  </p>

                  <p className="mt-2 text-sm font-medium text-[var(--foreground)]">
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Optional CTA */}
            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:text-[var(--accent-light)]"
            >
              Let's work together

              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}