"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Chatbot intelligent",
      description:
        "Chatbot intelligent répondant aux questions sur React.js, facilitant ainsi l’apprentissage de la bibliothèque.",
      link: "https://react-kitchn-chat.vercel.app/",
      preview: "/chat-bot.png",
    },
    {
      title: "Restaurant Vitrine",
      description:
        "Site vitrine animé pour un restaurant, conçu pour mettre en valeur son ambiance et son menu avec un design interactif et attractif.",
      link: "https://restaurant-project-6i9a.vercel.app/#Accueil",
      preview: "/restaurant.png",
    },
    {
      title: "To-Do List",
      description:
        "Une application simple et efficace de to-do list avec React.",
      link: "https://todo-list-theta-brown.vercel.app/",
      preview: "/todo-list.png",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-900 text-white" id="projects">
      <motion.h2
        className="text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Mes Projets
      </motion.h2>

      <div className="flex flex-col gap-10 items-center">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-3xl bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-teal-500 transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            whileHover={{ scale: 1.01 }}
          >
            <div className="md:flex">
              <motion.div
                className="md:w-1/2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={project.preview}
                  alt={`Aperçu de ${project.title}`}
                  width={500}
                  height={300}
                  className="object-cover w-full h-60 md:h-full"
                />
              </motion.div>
              <div className="p-6 md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
