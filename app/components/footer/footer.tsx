"use client";

import { motion } from "motion/react";

const navigation = [
  {
    title: "Explorar",
    links: [
      { label: "Servicios", href: "#servicios" },
      { label: "Proceso", href: "#proceso" },
      { label: "Nosotros", href: "#nosotros" },
      { label: "Precios", href: "#precios" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: "Hablemos", href: "#contacto" },
      { label: "Email", href: "mailto:hola@blstudio.dev" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black px-6 pb-8 pt-24 text-white md:pt-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="grid gap-16 border-b border-white/15 pb-20 md:grid-cols-[1.5fr_1fr] md:pb-24"
        >
          <div>
            <a
              href="/"
              className="text-5xl font-semibold tracking-[-0.05em] transition-opacity hover:opacity-70 sm:text-6xl md:text-8xl"
            >
              BLstudio
            </a>

            <p className="mt-8 max-w-md text-base leading-relaxed text-white/40 md:text-lg">
              Diseño y desarrollo web para negocios que quieren crecer,
              destacar y tener una presencia digital profesional.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10">
            {navigation.map((group) => (
              <div key={group.title}>
                <p className="mb-5 text-xs font-medium uppercase tracking-[0.15em] text-white/30">
                  {group.title}
                </p>

                <nav className="flex flex-col items-start gap-3">
                  {group.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex flex-col gap-4 pt-8 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between"
        >
          <p>
            © {new Date().getFullYear()} BLstudio. Todos los derechos
            reservados.
          </p>

          <p>Chile · Desarrollo web</p>
        </motion.div>
      </div>
    </footer>
  );
}