"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            alt="about-img"
            src="/portfolio-overview.jpg"
            width={500}
            height={500}
            className="rounded-2xl shadow-2xl"
          />
        </motion.div>

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-base lg:text-lg text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Je suis développeuse web full stack, passionnée par la création
            d&apos;applications web interactives et réactives. J&apos;ai de
            l&apos;expérience avec JavaScript, TypeScript, React, Node.js et
            Java. J&apos;apprends rapidement et je cherche constamment à élargir
            mes connaissances et mes compétences. J&apos;aime le travail en
            équipe et je suis enthousiaste à l&apos;idée de collaborer avec
            d&apos;autres pour créer des applications exceptionnelles.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
