"use client";

import { motion } from "motion/react";

const services = [
  {
    number: "01",
    title: "Diseño web",
    description:
      "Diseñamos experiencias digitales modernas, claras y pensadas para que tu negocio destaque.",
  },
  {
    number: "02",
    title: "Desarrollo web",
    description:
      "Construimos sitios rápidos, responsivos y optimizados para ofrecer una experiencia excelente en cualquier dispositivo.",
  },
  {
    number: "03",
    title: "Sistemas web",
    description:
      "Desarrollamos soluciones personalizadas para negocios que necesitan algo más que una página web tradicional.",
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="bg-black px-6 py-32 text-white md:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-white/40"
          >
            Lo que hacemos
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl md:text-6xl"
          >
            Todo lo que necesitas
            <br />
            para crecer <span className="text-white/40">online.</span>
          </motion.h2>
        </div>

        <div className="border-t border-white/15">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              className="group border-b border-white/15 py-10 transition-colors duration-300 hover:bg-white/[0.03] md:py-14"
            >
              <div className="grid gap-8 md:grid-cols-[100px_1fr_1fr] md:items-start">
                <span className="text-sm font-medium text-white/30">
                  {service.number}
                </span>

                <h3 className="text-3xl font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-2 md:text-4xl">
                  {service.title}
                </h3>

                <p className="max-w-md text-base leading-relaxed text-white/50 md:text-lg">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}