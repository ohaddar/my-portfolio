"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export const Experience = () => {
  return (
    <section id="experience" className="bg-gray-900 text-white py-16 px-6">
      <motion.h2
        className="text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Expériences Professionnelles
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-10">
        <motion.div
          className="bg-gray-800 rounded-xl p-6 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div>
              <h3 className="text-xl font-semibold text-teal-400">
                Développeur Full Stack @ onRuntime Studio
              </h3>
              <p className="text-sm text-gray-400">
                NOVEMBRE 2024 - AVRIL 2025 ·{" "}
                <a
                  href="https://onruntime.com"
                  className="underline hover:text-white"
                  target="_blank"
                >
                  Site officiel
                </a>
              </p>
            </div>
          </div>

          {/* Projet 1 */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-1">
              <Image
                src="/icons/tonight.png"
                alt="Tonight Pass"
                width={24}
                height={24}
              />
              <h4 className="text-lg font-semibold text-white">
                <a
                  href="https://tonightpass.com"
                  target="_blank"
                  className="text-teal-300 underline hover:text-white"
                >
                  Tonight Pass
                </a>
              </h4>
            </div>
            <p className="text-sm text-gray-400 mb-2">
              NOVEMBRE 2024 - FÉVRIER 2025
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              <li>Interfaces utilisateur avec Next.js et Styled Components.</li>
              <li>Tests unitaires & end-to-end (E2E).</li>
              <li>Conduite de projets en méthodologie Agile/Scrum.</li>
              <li>Automatisation des déploiements via CI/CD.</li>
            </ul>
          </div>

          {/* Projet 2 */}
          <div>
            <div className="flex items-center gap-3 mb-1">
              <Image
                src="/icons/onruntime.png"
                alt="Site onRuntime"
                width={24}
                height={24}
              />
              <h4 className="text-lg font-semibold text-white">
                <a
                  href="https://onruntime.com"
                  target="_blank"
                  className="text-teal-300 underline hover:text-white"
                >
                  Site officiel onRuntime Studio
                </a>
              </h4>
            </div>
            <p className="text-sm text-gray-400 mb-2">MARS 2024 - AVRIL 2025</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              <li>Développement d’API REST & intégration front-end.</li>
              <li>Revue de code et amélioration de la qualité.</li>
              <li>Collaboration étroite avec les équipes design & produit.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
