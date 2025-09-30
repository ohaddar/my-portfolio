"use client";

import React, { useState } from "react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "En ligne":
        return "#10b981";
      case "Terminé":
        return "#3b82f6";
      case "En développement":
        return "#f59e0b";
      default:
        return "#64748b";
    }
  };

  const projects = [
    {
      title: "Trading AI",
      description:
        "Application mobile React Native avec API FastAPI pour l'analyse et la génération de signaux de trading. Intégration d'agents intelligents pour l'aide à la décision.",
      technologies: ["React Native", "FastAPI", "IA", "Cloud", "Expo"],
      link: "#",
      gradient: "linear-gradient(135deg, #10b981, #059669)",
      status: "En développement",
      category: "Mobile & IA",
    },
    {
      title: "TonightPass",
      description:
        "Plateforme de réservation complète avec interfaces responsives et API REST. Tests unitaires et end-to-end pour garantir la qualité.",
      technologies: ["React", "Node.js", "API REST", "Tests E2E"],
      link: "#",
      gradient: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
      status: "Terminé",
      category: "Web Platform",
    },
    {
      title: "Âme En Harmonie",
      description:
        "Solution complète d'évaluation psychologique en ligne avec génération de rapports personnalisés et tableaux de bord d'administration.",
      technologies: ["React", "Node.js", "MongoDB", "Analytics"],
      link: "https://front-ame-en-harmonie.vercel.app/",
      gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
      status: "En ligne",
      category: "Healthcare Tech",
    },
    {
      title: "Chatbot intelligent React",
      description:
        "Chatbot intelligent spécialisé dans l'aide à l'apprentissage de React.js, facilitant la compréhension de la bibliothèque.",
      technologies: ["React", "IA", "Chat", "Education"],
      link: "https://react-kitchn-chat.vercel.app/",
      gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
      status: "En ligne",
      category: "AI & Education",
    },
  ];

  return (
    <section id="projets" className="section section-alt pt-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Mes{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projets
            </span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Une collection de projets qui allient innovation technique et impact
            utilisateur
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card group animate-fadeInUp overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Status Badge */}
              <div className="relative z-10 flex justify-end">
                <div
                  className="px-3 py-1 rounded-full text-xs font-bold text-white mt-6 mr-6"
                  style={{ backgroundColor: getStatusColor(project.status) }}
                >
                  {project.status}
                </div>
              </div>

              {/* Project Visual */}
              <div
                className="relative h-48 rounded-t-2xl overflow-hidden"
                style={{ background: project.gradient }}
              >
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/40 text-5xl font-bold">
                    {project.title
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </div>
                </div>

                {/* Hover Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-all duration-300 ${
                    hoveredProject === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="absolute bottom-4 left-4 right-4">
                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-all duration-300"
                      >
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        Explorer
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <span
                    className="text-xs font-medium uppercase tracking-wider"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    {project.category}
                  </span>
                </div>

                <h3
                  className="text-xl font-bold mb-3 group-hover:text-[var(--accent)] transition-colors"
                  style={{ color: "var(--text-primary)" }}
                >
                  {project.title}
                </h3>

                <p
                  className="mb-6 leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-full text-sm font-medium transition-all duration-300"
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
