import React from "react";
import Head from "next/head";
import About from "@/components/about";
import TechSkills from "@/components/techSkills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mon Portfolio</title>
        <meta name="description" content="Portfolio de développeur junior" />
      </Head>
      <main className="min-h-screen bg-gray-100 text-gray-900">
        <header className="p-6 bg-blue-600 text-white text-center">
          <h1 className="text-4xl font-bold">Bienvenue sur mon portfolio</h1>
        </header>

        <About />
        <TechSkills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
