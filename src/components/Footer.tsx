import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-center text-white py-6 mt-12">
      <p>
        &copy; {new Date().getFullYear()} Oumaima HADDAR. Tous droits réservés.
      </p>
    </footer>
  );
};

export default Footer;
