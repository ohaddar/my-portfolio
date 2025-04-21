import React from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const items = [
    { label: "Compétences", id: "skills" },
    { label: "Projets", id: "projects" },
    { label: "Témoignage", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className="bg-gray-800 fixed top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Image
            src="/avatar4.webp"
            width={50}
            height={50}
            style={{ borderRadius: "9999px" }}
            alt="Avatar de Oumaima"
          />
          <h1 className="text-xl font-bold text-white">Oumaima HADDAR</h1>
        </div>{" "}
        <ul className="flex space-x-6">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-white hover:text-teal-400 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
