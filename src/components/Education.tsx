"use client";
import { motion } from "framer-motion";

export const Education = () => {
  return (
    <section id="education" className="bg-gray-900 text-white py-16 px-6">
      <motion.h2
        className="text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Parcours Académique
      </motion.h2>

      <div className="max-w-3xl mx-auto space-y-6">
        {[
          {
            title: "Développeur Full Stack — Bac+4",
            date: "JUIN 2024 - MARS 2025",
            place: "Doranco",
            link: "#",
          },
          {
            title: "Initiation en développement web",
            date: "AOÛT 2023 - MAI 2024",
            place: "OpenClassrooms",
            link: "#",
          },
          {
            title: "Licence en éducation et enseignement — Bac+3",
            date: "SEPTEMBRE 2020 - JUIN 2023",
          },
          {
            title: "Baccalauréat Scientifique",
            date: "JUIN 2020",
          },
        ].map((edu, i) => (
          <motion.div
            key={i}
            className="bg-gray-800 rounded-xl p-5 shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <h3 className="text-lg font-semibold text-teal-600">{edu.title}</h3>
            <p className="text-sm text-gray-500">{edu.date}</p>
            {edu.place && (
              <p className="text-sm mt-1">
                {edu.link ? (
                  <a
                    href={edu.link}
                    className="underline text-gray-700 hover:text-black"
                  >
                    {edu.place}
                  </a>
                ) : (
                  edu.place
                )}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
