"use client";
import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./Button";

const CATEGORIES = [
  {
    id: "frontend",
    title: "Front-end",
    skills: [
      { name: "JavaScript", icon: "/icons/js.png" },
      { name: "TypeScript", icon: "/icons/ts.png" },
      { name: "React.js", icon: "/icons/react.png" },
      { name: "Next.js", icon: "/icons/next.png" },
    ],
  },
  {
    id: "backend",
    title: "Back-end",
    skills: [
      { name: "Node.js", icon: "/icons/node.png" },
      { name: "Express.js", icon: "/icons/express.png" },
      { name: "Java", icon: "/icons/java.png" },
      { name: "Spring Boot", icon: "/icons/spring-boot.png" },
    ],
  },
  {
    id: "database",
    title: "Base de données",
    skills: [
      { name: "MongoDB", icon: "/icons/mongo-db.png" },
      { name: "MySQL", icon: "/icons/my-sql.png" },
      { name: "PostgreSQL", icon: "/icons/postgresql.png" },
    ],
  },
  {
    id: "tools",
    title: "Outils & Tests",
    skills: [
      { name: "Git", icon: "/icons/git.png" },
      { name: "GitHub", icon: "/icons/github.png" },
      { name: "Figma", icon: "/icons/figma.png" },
      { name: "Jest", icon: "/icons/jest.png" },
      { name: "Vitest", icon: "/icons/vitest.png" },
      { name: "JUnit", icon: "/icons/junit.png" },
    ],
  },
  {
    id: "ci-cd",
    title: "CI/CD & Déploiement",
    skills: [
      { name: "GitHub Actions", icon: "/icons/github-actions.png" },
      { name: "Docker", icon: "/icons/docker.png" },
      { name: "Vercel", icon: "/icons/vercel.png" },
    ],
  },
];

export default function TechSkills() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setActiveCategory(id);
    });
  };

  const selected = CATEGORIES.find((c) => c.id === activeCategory);

  return (
    <section id="skills" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Mes Compétences
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {CATEGORIES.map((cat) => (
            <Button
              key={cat.id}
              selectTab={() => handleTabChange(cat.id)}
              active={activeCategory === cat.id}
            >
              {cat.title}
            </Button>
          ))}
        </div>

        {!isPending && (
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <ul className="w-full max-w-md flex flex-col gap-4 items-center">
              {selected?.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center gap-4 bg-gray-800 px-4 py-3 rounded-lg shadow border border-gray-700 w-full"
                >
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                  {skill.icon && (
                    <span className="text-base text-white">{skill.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </section>
  );
}
