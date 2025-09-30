"use client";

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section pt-16 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Contactez-moi
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Discutons de votre prochain projet ou d&apos;opportunités de
            collaboration
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fadeInUp">
            <h3
              className="text-2xl font-bold mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              Parlons ensemble
            </h3>
            <p
              className="mb-8 leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Je suis toujours intéressée par de nouveaux défis et des projets
              innovants. N&apos;hésitez pas à me contacter pour discuter de vos
              besoins en développement ou pour toute opportunité de
              collaboration.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                  style={{ backgroundColor: "var(--bg-tertiary)" }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: "var(--accent)" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4
                    className="font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Email
                  </h4>
                  <p style={{ color: "var(--text-secondary)" }}>
                    oumaima.haddar.pro@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                  style={{ backgroundColor: "var(--bg-tertiary)" }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: "var(--accent)" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4
                    className="font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Localisation
                  </h4>
                  <p style={{ color: "var(--text-secondary)" }}>
                    Paris, France
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                  style={{ backgroundColor: "var(--bg-tertiary)" }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: "var(--accent)" }}
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <h4
                    className="font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    LinkedIn
                  </h4>
                  <a
                    href="https://www.linkedin.com/in/oumaima-haddar"
                    className="hover:opacity-80 transition-opacity"
                    style={{ color: "var(--accent)" }}
                  >
                    @oumaima-haddar
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
            <form onSubmit={handleSubmit} className="card p-8 shadow-lg">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-opacity-50"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    color: "var(--text-primary)",
                    border: `1px solid var(--border-primary)`,
                  }}
                  placeholder="Votre nom"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-opacity-50"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    color: "var(--text-primary)",
                    border: `1px solid var(--border-primary)`,
                  }}
                  placeholder="votre@email.com"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-opacity-50 resize-none"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    color: "var(--text-primary)",
                    border: `1px solid var(--border-primary)`,
                  }}
                  placeholder="Parlez-moi de votre projet..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
