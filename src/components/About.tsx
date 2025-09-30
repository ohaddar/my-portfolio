"use client";

import React from "react";

const About = () => {
  const skills = [
    {
      category: "Front-end",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "JavaScript",
      ],
    },
    {
      category: "Back-end",
      items: [
        "Node.js",
        "Express.js",
        "API REST",
        "Spring Boot",
        "Python",
        "FastAPI",
      ],
    },
    {
      category: "Bases de données",
      items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
    },
    {
      category: "DevOps & Outils",
      items: ["Git", "Docker", "GitHub Actions", "Railway", "Jenkins"],
    },
    {
      category: "Méthodologies",
      items: [
        "Agile SCRUM",
        "Agile Kanban",
        "Clean Code",
        "Tests Unitaires",
        "CI/CD",
      ],
    },
  ];

  return (
    <section id="a-propos" className="section pt-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="animate-fadeInUp">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center px-4 py-2 rounded-full mb-6"
              style={{
                backgroundColor: "var(--bg-tertiary)",
                border: "1px solid var(--border-primary)",
              }}
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ color: "var(--accent)" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              <span
                className="text-sm font-medium"
                style={{ color: "var(--accent)" }}
              >
                Stack technique
              </span>
            </div>
            <h3
              className="text-3xl md:text-4xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              Compétences{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                techniques
              </span>
            </h3>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="card p-8 group hover:shadow-2xl hover:scale-105 transition-all duration-500 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Gradient Effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, var(--accent), #8b5cf6)`,
                  }}
                ></div>

                {/* Category Header */}
                <div className="relative z-10 mb-6">
                  <div className="flex items-center mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: "var(--bg-tertiary)" }}
                    >
                      {/* Dynamic Icons based on category */}
                      {skillGroup.category === "Front-end" && (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          style={{ color: "var(--accent)" }}
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      )}
                      {skillGroup.category === "Back-end" && (
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          style={{ color: "var(--accent)" }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 12h14M5 12l4-4m-4 4l4 4"
                          />
                        </svg>
                      )}
                      {skillGroup.category === "Bases de données" && (
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          style={{ color: "var(--accent)" }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 7v10c0 2 4.5 4 8 4s8-2 8-4V7M4 7c0 2 4.5 4 8 4s8-2 8-4M4 7c0-2 4.5-4 8-4s8 2 8 4"
                          />
                        </svg>
                      )}
                      {skillGroup.category === "DevOps & Outils" && (
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          style={{ color: "var(--accent)" }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      )}
                      {skillGroup.category === "Méthodologies" && (
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          style={{ color: "var(--accent)" }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      )}
                    </div>
                    <h4
                      className="text-xl font-bold group-hover:text-[var(--accent)] transition-colors duration-300"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {skillGroup.category}
                    </h4>
                  </div>

                  {/* Skills Count Badge */}
                  <div
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold"
                    style={{
                      backgroundColor: "var(--bg-tertiary)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {skillGroup.items.length} compétence
                    {skillGroup.items.length > 1 ? "s" : ""}
                  </div>
                </div>

                {/* Skills Tags */}
                <div className="relative z-10 flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 text-sm rounded-xl font-medium transition-all duration-300 hover:scale-110 hover:shadow-lg group-hover:shadow-md"
                      style={{
                        backgroundColor: "var(--bg-secondary)",
                        color: "var(--accent)",
                        border: "1px solid var(--border-primary)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
