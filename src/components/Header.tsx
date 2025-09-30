"use client";

import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#accueil", label: "Accueil" },
    { href: "#a-propos", label: "À propos" },
    { href: "#projets", label: "Projets" },
    { href: "#experience", label: "Expérience" },
    { href: "#formation", label: "Formation" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
      style={{
        backgroundColor: "var(--bg-primary)",
        borderBottom: isScrolled ? "1px solid var(--border-primary)" : "none",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="relative">
            <span
              className="text-2xl font-bold"
              style={{ color: "var(--accent)" }}
            >
              Oumaima
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="relative text-sm font-medium transition-all duration-300 group"
                style={{ color: "var(--text-secondary)" }}
              >
                <span className="hover:text-[var(--accent)] transition-colors">
                  {item.label}
                </span>
                <div
                  className="absolute -bottom-1 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: "var(--accent)" }}
                ></div>
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <a href="#contact" className="hidden md:block btn-primary text-sm">
              Collaborons
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center space-y-1"
          >
            <div
              className={`w-5 h-0.5 transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
              style={{ backgroundColor: "var(--text-primary)" }}
            ></div>
            <div
              className={`w-5 h-0.5 transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
              style={{ backgroundColor: "var(--text-primary)" }}
            ></div>
            <div
              className={`w-5 h-0.5 transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
              style={{ backgroundColor: "var(--text-primary)" }}
            ></div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg transition-all duration-300 hover:bg-[var(--bg-secondary)]"
                style={{ color: "var(--text-secondary)" }}
              >
                {item.label}
              </a>
            ))}
            <div className="px-4 pt-4">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block btn-primary text-center text-sm"
              >
                Collaborons
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
