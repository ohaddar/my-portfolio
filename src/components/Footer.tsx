"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="py-12" style={{ backgroundColor: "var(--bg-tertiary)" }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="animate-fadeInUp">
            <h3
              className="text-xl font-bold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Oumaima
            </h3>
            <p
              className="leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Développeuse Full Stack passionnée par l&apos;innovation et les
              technologies modernes.
            </p>
          </div>

          <div className="animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
            <h4
              className="text-lg font-semibold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#accueil"
                  className="transition-colors hover:opacity-80"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#a-propos"
                  className="transition-colors hover:opacity-80"
                  style={{ color: "var(--text-secondary)" }}
                >
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="#projets"
                  className="transition-colors hover:opacity-80"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Projets
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="transition-colors hover:opacity-80"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Expérience
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="pt-8 text-center animate-fadeInUp"
          style={{
            borderTop: `1px solid var(--border-primary)`,
            animationDelay: "0.3s",
          }}
        >
          <p style={{ color: "var(--text-secondary)" }}>
            © 2025 Oumaima. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
