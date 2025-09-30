"use client";

import React from "react";

const Hero = () => {
  return (
    <section
      id="accueil"
      className="section min-h-screen flex items-center justify-center relative pt-24 md:pt-28"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Profile Avatar */}
        <div className="mb-12 animate-fadeInUp">
          <div className="w-32 h-32 mx-auto relative">
            <div
              className="w-full h-full rounded-full flex items-center justify-center text-white text-4xl font-bold animate-float"
              style={{
                background: "linear-gradient(135deg, var(--accent), #8b5cf6)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
            >
              O
            </div>
            <div
              className="absolute -inset-2 rounded-full opacity-20 animate-pulse"
              style={{ background: "var(--accent)" }}
            ></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
          <h1
            className="text-5xl md:text-7xl font-black mb-6 leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Oumaima
            </span>{" "}
            Haddar
          </h1>

          <h2
            className="text-xl md:text-3xl font-light mb-6"
            style={{ color: "var(--text-secondary)" }}
          >
            Développeuse Full Stack
          </h2>

          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span
              className="text-sm font-medium"
              style={{ color: "var(--text-tertiary)" }}
            >
              Disponible pour nouveaux projets
            </span>
          </div>

          <p
            className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Passionnée par l&apos;innovation technologique, je transforme vos
            idées en{" "}
            <span style={{ color: "var(--accent)", fontWeight: "600" }}>
              solutions digitales exceptionnelles
            </span>
            . Spécialisée en React, Next.js et architectures cloud scalables.
          </p>
          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "MongoDB",
              "Python",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "var(--bg-tertiary)",
                  color: "var(--text-tertiary)",
                  border: "1px solid var(--border-primary)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#projets"
              className="btn-primary inline-flex items-center group"
            >
              Découvrir mes projets
              <svg
                className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>

            <a
              href="#contact"
              className="btn-secondary inline-flex items-center group"
            >
              Collaborons ensemble
              <svg
                className="ml-2 w-5 h-5 transform group-hover:rotate-12 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
