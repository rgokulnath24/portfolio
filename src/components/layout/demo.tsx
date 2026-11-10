import {
  ArrowRight,
  Mail,
  MessageCircleIcon,
  User
} from "lucide-react";

export default function Demo() {
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <header className="fixed top-0 left-0 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          
          <div className="flex justify-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-yellow-400 to-orange-500 font-bold text-slate-950 shadow-lg">
              G
            </span>

            <div>
              <p className="font-semibold">Gokulnath</p>
              <p className="text-xs text-slate-400">Developer</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 sm:flex ">
            <a
              href="#home"
              className="text-sm text-slate-300 transition hover:text-yellow-400"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-sm text-slate-300 transition hover:text-yellow-400"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-sm text-slate-300 transition hover:text-yellow-400"
            >
              Contact
            </a>

            <a
              href="#services"
              className="text-sm text-slate-300 transition hover:text-yellow-400"
            >
              Services
            </a>
          </nav>

          <button className="hidden rounded-full bg-yellow-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-yellow-300 sm:block">
            Let's Talk
          </button>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-4 pt-20 sm:px-6"
      >
        {/* Background decoration */}
        <div className="absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-500/20 blur-[120px]" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          
          {/* Hero text */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-sm text-yellow-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              Available for work
            </div>

            <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
              Hi, I'm{" "}
              <span className="text-yellow-400">
                Gokulnath
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              I build modern, responsive and user-friendly web applications
              with clean code and beautiful interfaces.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-yellow-300">
                View My Work
                <ArrowRight className="h-5 w-5" />
              </button>

              <button className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:border-yellow-400 hover:text-yellow-400">
                <Mail className="h-5 w-5" />
                Contact Me
              </button>
            </div>

            {/* Social links */}
            <div className="mt-10 flex gap-4">
              <a
                href="#"
                className="rounded-full border border-white/10 p-3 text-slate-400 transition hover:border-yellow-400 hover:text-yellow-400"
              >
                {/* <Socialmed className="h-5 w-5" /> */}
              </a>

              <a
                href="#"
                className="rounded-full border border-white/10 p-3 text-slate-400 transition hover:border-yellow-400 hover:text-yellow-400"
              >
                {/* <Linkedin className="h-5 w-5" /> */}
              </a>
            </div>
          </div>

          {/* Hero card */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 rounded-3xl bg-yellow-400/20 blur-3xl" />

            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <div className="flex h-72 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400/20 to-orange-500/10">
                <User className="h-32 w-32 text-yellow-400/80" />
              </div>

              <div className="mt-6">
                <p className="text-sm text-slate-400">
                  {/* Currently focusing on */}
                </p>

                <h3 className="mt-1 text-2xl font-semibold text-center">
                  Full Stack Development
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-t border-white/5 bg-slate-900/50 px-4 py-24 sm:px-6"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-yellow-400">
            About Me
          </p>

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Turning ideas into{" "}
            <span className="text-yellow-400">digital experiences.</span>
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-slate-400">
            I enjoy creating websites and applications that are fast,
            responsive and easy to use. My goal is to combine good design with
            reliable technology.
          </p>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="px-4 py-24 sm:px-6"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-yellow-400">
            Services
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            What I can do
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Frontend Development",
              "Backend Development",
              "Responsive Web Design",
            ].map((service) => (
              <div
                key={service}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-2 hover:border-yellow-400/40"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400">
                  <ArrowRight />
                </div>

                <h3 className="text-xl font-semibold">
                  {service}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Building clean, scalable and responsive solutions tailored
                  to your needs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="px-4 py-24 sm:px-6"
      >
        <div className="mx-auto max-w-4xl rounded-3xl border border-yellow-400/20 bg-yellow-400/10 p-8 text-center sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-yellow-300">
            Get In Touch
          </p>

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Have a project in mind?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-slate-400">
            Let's discuss your idea and create something awesome together.
          </p>

          <button className="mt-8 rounded-full bg-yellow-400 px-7 py-3 font-semibold text-slate-950 transition hover:bg-yellow-300">
            Start a Conversation
          </button>
        </div>
      </section>

      {/* Floating Chat */}
      <button className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-yellow-400 px-5 py-3 font-semibold text-slate-950 shadow-2xl shadow-yellow-400/20 transition hover:-translate-y-1 hover:bg-yellow-300">
        <MessageCircleIcon className="h-5 w-5" />
        <span>Chat</span>
      </button>
    </div>
  );
}
