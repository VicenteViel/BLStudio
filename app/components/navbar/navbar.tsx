"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Precios", href: "#precios" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isLightSection, setIsLightSection] = useState(false);

  useEffect(() => {
    const lightSections = document.querySelectorAll(
      '[data-navbar-theme="light"]'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleLightSection = entries.some(
          (entry) => entry.isIntersecting
        );

        setIsLightSection(visibleLightSection);
      },
      {
        rootMargin: "-10% 0px -80% 0px",
      }
    );

    lightSections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed left-0 top-0 z-50 w-full"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a
          href="/"
          className={`text-xl font-semibold tracking-tight transition-colors duration-300 ${
            isLightSection ? "text-black" : "text-white"
          }`}
        >
          BLstudio
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors duration-300 ${
                isLightSection
                  ? "text-black/60 hover:text-black"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contacto"
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
              isLightSection
                ? "bg-black text-white hover:bg-black/80"
                : "bg-white text-black hover:bg-white/80"
            }`}
          >
            Hablemos
          </a>
        </div>
      </div>
    </motion.nav>
  );
}