"use client";

import React from "react";

const Formation = () => {
  const education = [
    {
      title: "Développeur Full Stack — Bac+4",
      date: "2024",
      place: "Doranco",
      link: "#",
    },
    {
      title: "Baccalauréat Scientifique",
      date: "2020",
    },
  ];

  return (
    <section id="formation" className="section pt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 animate-fadeInUp">
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <span
                  className="text-sm font-medium"
                  style={{ color: "var(--accent)" }}
                >
                  Parcours académique
                </span>
              </div>
              <h3
                className="text-3xl md:text-4xl font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                Formation
              </h3>
            </div>

            {/* Education Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div
                className="absolute left-8 top-0 bottom-0 w-0.5 hidden md:block"
                style={{ backgroundColor: "var(--border-primary)" }}
              ></div>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="relative animate-fadeInUp"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Timeline Dot */}
                    <div
                      className="absolute left-6 w-4 h-4 rounded-full border-4 hidden md:block"
                      style={{
                        backgroundColor: "var(--bg-primary)",
                        borderColor: "var(--accent)",
                        top: "1.5rem",
                        transform: "translateX(-50%)",
                      }}
                    ></div>

                    {/* Education Card */}
                    <div className="md:ml-16 card p-6 group hover:shadow-xl transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div className="flex-1">
                          <h4
                            className="text-xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300"
                            style={{ color: "var(--text-primary)" }}
                          >
                            {edu.title}
                          </h4>
                          {edu.place && (
                            <div className="flex items-center mb-2">
                              <svg
                                className="w-4 h-4 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                style={{ color: "var(--text-secondary)" }}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                />
                              </svg>
                              <span style={{ color: "var(--text-secondary)" }}>
                                {edu.place}
                              </span>
                            </div>
                          )}
                        </div>

                        <div
                          className="px-4 py-2 rounded-full font-bold text-sm"
                          style={{
                            backgroundColor: "var(--bg-tertiary)",
                            color: "var(--accent)",
                            border: "2px solid var(--accent)",
                            minWidth: "fit-content",
                          }}
                        >
                          {edu.date}
                        </div>
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                        <svg
                          className="w-8 h-8"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          style={{ color: "var(--accent)" }}
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formation;
