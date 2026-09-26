"use client";

import { motion } from "motion/react";

const benefits = [
  {
    number: "01",
    title: "Diseño que representa tu marca",
    description:
      "Tu sitio web no debería parecerse al de cualquier otro negocio. Creamos una experiencia visual alineada con tu identidad.",
  },
  {
    number: "02",
    title: "Rendimiento desde el primer día",
    description:
      "Construimos sitios rápidos, responsivos y optimizados para ofrecer una buena experiencia en cualquier dispositivo.",
  },
  {
    number: "03",
    title: "Pensado para convertir",
    description:
      "Cada sección tiene un propósito: presentar tu negocio, generar confianza y facilitar que tus clientes te contacten.",
  },
];

export default function WhyBLstudio() {
  return (
    <section
      id="porque-blstudio"
      className="bg-black px-6 py-32 text-white md:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-white/40"
        >
          Por qué BLstudio
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl md:text-6xl"
        >
          No hacemos simplemente páginas.
          <br />
          <span className="text-white/40">
            Construimos herramientas para crecer.
          </span>
        </motion.h2>

        <div className="mt-24">
          {benefits.map((benefit, index) => (
            <div key={benefit.number} className="relative">
              {/* Línea superior */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                style={{ transformOrigin: "left" }}
                className="h-px w-full bg-white/15"
              />

              <div className="grid gap-8 py-10 md:grid-cols-[100px_1fr_1fr] md:items-start md:py-14">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08 + 0.15,
                  }}
                  className="text-sm font-medium text-white/30"
                >
                  {benefit.number}
                </motion.span>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08 + 0.2,
                    ease: "easeOut",
                  }}
                  className="max-w-md text-2xl font-medium tracking-tight sm:text-3xl"
                >
                  {benefit.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08 + 0.3,
                    ease: "easeOut",
                  }}
                  className="max-w-md text-base leading-relaxed text-white/50 md:text-lg"
                >
                  {benefit.description}
                </motion.p>
              </div>
            </div>
          ))}

          {/* Línea final */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            style={{ transformOrigin: "left" }}
            className="h-px w-full bg-white/15"
          />
        </div>
      </div>
    </section>
  );
}