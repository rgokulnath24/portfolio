import { About } from "../components/layout/about";
import { Contact } from "../components/layout/contact";
import { Experience } from "../components/layout/experience";
import { Footer } from "../components/layout/footer";
import { Hero } from "../components/layout/hero";
import { Navbar } from "../components/layout/navbar";
import { Projects } from "../components/layout/projects";
import { Skills } from "../components/layout/skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}