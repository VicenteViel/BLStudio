"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Hablamos",
    description:
      "Comenzamos con una conversación para entender tu negocio, tus objetivos y lo que necesitas.",
  },
  {
    number: "02",
    title: "Diseñamos",
    description:
      "Definimos la estructura, el contenido y la dirección visual que tendrá tu sitio.",
  },
  {
    number: "03",
    title: "Desarrollamos",
    description:
      "Convertimos el diseño en una experiencia web rápida, responsiva y funcional.",
  },
  {
    number: "04",
    title: "Publicamos",
    description:
      "Conectamos tu dominio, configuramos todo lo necesario y ponemos tu sitio online.",
  },
  {
    number: "05",
    title: "Te acompañamos",
    description:
      "Seguimos disponibles para mantener, actualizar y mejorar tu presencia digital.",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 30%"],
  });

  const progressHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <section
      ref={sectionRef}
      id="proceso"
      data-navbar-theme="light"
      className="relative overflow-hidden bg-[#f4f4f0] px-6 py-32 text-black md:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-black/40"
          >
            Nuestro proceso
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
            className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl md:text-7xl"
          >
            Del primer mensaje
            <br />
            al sitio <span className="text-black/30">publicado.</span>
          </motion.h2>
        </div>

        <div className="relative mt-24">
          {/* Línea base */}
          <div className="absolute left-4 top-0 h-full w-px bg-black/15 md:left-1/2 md:-translate-x-1/2" />

          {/* Línea de progreso */}
          <motion.div
            style={{ height: progressHeight }}
            className="absolute left-4 top-0 w-px bg-black md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-16 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="relative md:min-h-[260px]"
              >
                {/* Punto */}
                <motion.div
                  initial={{
                    scale: 0,
                    opacity: 0,
                  }}
                  whileInView={{
                    scale: 1,
                    opacity: 1,
                  }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: index * 0.08,
                  }}
                  className="absolute left-[10px] top-1 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-black md:left-1/2"
                />

                {/* Contenido */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08 + 0.1,
                    ease: "easeOut",
                  }}
                  className={`pl-12 md:w-1/2 ${
                    index % 2 === 0
                      ? "md:pr-20"
                      : "md:ml-auto md:pl-20"
                  }`}
                >
                  <span className="text-sm font-medium text-black/35">
                    {step.number}
                  </span>

                  <h3 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                    {step.title}
                  </h3>

                  <p className="mt-5 max-w-md text-base leading-relaxed text-black/55 md:text-lg">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}