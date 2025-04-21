import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/about";
import TechSkills from "@/components/techSkills";
import Projects from "@/components/projects";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      <Head>
        <title>Oumaima HADDAR</title>
        <meta name="description" content="Portfolio de développeur junior" />
      </Head>

      <Navbar />

      <main className="container mx-auto px-6 py-38">
        <section id="parcours">
          <About />
        </section>

        <section id="skills">
          <TechSkills />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="formation">
          <Education />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </main>

      <Footer />
    </div>
  );
}
