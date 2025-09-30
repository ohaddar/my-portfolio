"use client";

import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Développeur Full Stack - Entrepreneur",
      company: "Trading AI",
      period: "Juin 2025 à Aujourd'hui",
      type: "Entrepreneuriat",
      description: [
        "Développement d'une application mobile React Native (Expo) pour l'interface et la visualisation",
        "Création d'une API FastAPI robuste pour l'analyse, la génération et la diffusion de signaux de trading",
        "Intégration d'agents intelligents et de services d'analyse automatisée pour l'aide à la décision",
        "Déploiement de l'ensemble de la solution sur une infrastructure cloud scalable",
        "Utilisation des bonnes pratiques Agile/SCRUM pour la gestion du projet",
      ],
      technologies: [
        "React Native",
        "FastAPI",
        "Python",
        "Cloud",
        "Agile/SCRUM",
      ],
    },
    {
      title: "Développeur Full Stack",
      company: "OnRuntime Studio",
      period: "Mars 2025 – Avril 2025",
      type: "Bénévolat",
      description: [
        "Maintenance et évolution du site onRuntime.com",
        "Amélioration des performances et du SEO",
        "Collaboration en équipe Agile avec revues de code et normes clean code",
      ],
      technologies: ["React", "Next.js", "SEO", "Clean Code"],
    },
    {
      title: "Développeuse Full Stack",
      company: "OnRuntime Studio",
      period: "Nov. 2024 – Fév. 2025",
      type: "Stage",
      description: [
        "Conception et développement de la plateforme de réservation TonightPass.com",
        "Création d'interfaces responsives et optimisées pour mobile",
        "Développement d'API REST et gestion des états côté front-end",
        "Tests unitaires et tests end-to-end pour garantir la qualité",
      ],
      technologies: ["React", "Node.js", "API REST", "Tests E2E", "Mobile"],
    },
    {
      title: "Développeur Full Stack",
      company: "Âme en Harmonie - Doranco",
      period: "Juil. 2024 – Mars 2025",
      type: "Projet académique",
      description: [
        "Développement d'une application web de suivi psychologique",
        "Génération dynamique de rapports personnalisés et tableaux de bord d'administration",
        "Intégration d'analyses statistiques et d'outils de gestion de contenu",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Analytics", "Reporting"],
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getTypeStyle = (type: string) => {
    const baseStyle = {
      backgroundColor: "var(--bg-tertiary)",
      color: "var(--accent)",
    };
    return baseStyle;
  };

  return (
    <section id="experience" className="section pt-16 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Expérience Professionnelle
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Mon parcours diversifié entre entrepreneuriat, stages et projets
            innovants
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="card p-8 hover:shadow-lg transition-shadow animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {exp.title}
                  </h3>
                  <p
                    className="text-lg font-medium"
                    style={{ color: "var(--accent)" }}
                  >
                    {exp.company}
                  </p>
                  <p style={{ color: "var(--text-secondary)" }}>{exp.period}</p>
                </div>
                <span
                  className="mt-4 md:mt-0 px-4 py-2 rounded-full text-sm font-medium self-start"
                  style={getTypeStyle(exp.type)}
                >
                  {exp.type}
                </span>
              </div>

              <div className="mb-6">
                <ul className="space-y-3">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div
                        className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                        style={{ backgroundColor: "var(--accent)" }}
                      ></div>
                      <span
                        className="leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm rounded-full font-medium"
                    style={{
                      backgroundColor: "var(--bg-tertiary)",
                      color: "var(--accent)",
                      border: `1px solid var(--border-primary)`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
