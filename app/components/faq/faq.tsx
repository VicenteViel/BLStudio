"use client";

import { motion } from "motion/react";

const faqs = [
  {
    question: "¿Cuánto demora en estar lista una página web?",
    answer:
      "Depende del alcance del proyecto. Un sitio web estándar puede estar listo en aproximadamente 1 a 3 semanas, mientras que proyectos más personalizados pueden requerir más tiempo.",
  },
  {
    question: "¿Qué necesito entregar para comenzar?",
    answer:
      "Principalmente información sobre tu negocio, textos, imágenes, logotipo y cualquier referencia visual que quieras utilizar. Si todavía no tienes todo preparado, podemos ayudarte a definir qué necesitas.",
  },
  {
    question: "¿El dominio y el hosting están incluidos?",
    answer:
      "La configuración técnica puede formar parte del proyecto. El dominio y los servicios de hosting se contratan a nombre del cliente, para que mantengas el control de tus servicios.",
  },
  {
    question: "¿Puedo solicitar cambios durante el desarrollo?",
    answer:
      "Sí. El proyecto contempla rondas de revisión para ajustar el diseño y contenido antes de publicarlo. Los cambios adicionales o fuera del alcance inicial pueden cotizarse por separado.",
  },
  {
    question: "¿Pueden mantener mi sitio después de publicarlo?",
    answer:
      "Sí. Ofrecemos planes de mantenimiento para actualizaciones, cambios de contenido, soporte técnico y mejoras posteriores al lanzamiento.",
  },
  {
    question: "¿Trabajan con negocios de cualquier parte de Chile?",
    answer:
      "Sí. Trabajamos de forma remota, por lo que podemos desarrollar proyectos para negocios ubicados en cualquier parte de Chile.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      data-navbar-theme="light"
      className="bg-[#f4f4f0] px-6 py-32 text-black md:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-black/40">
              Preguntas frecuentes
            </p>

            <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-5xl md:text-7xl">
              Antes de
              <br />
              <span className="text-black/30">comenzar.</span>
            </h2>

            <p className="mt-8 max-w-sm text-base leading-relaxed text-black/50 md:text-lg">
              Algunas respuestas a las preguntas que nuestros clientes suelen
              tener antes de comenzar un proyecto.
            </p>
          </motion.div>

          <div className="border-t border-black/15">
            {faqs.map((faq, index) => (
              <motion.details
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.07,
                }}
                className="group border-b border-black/15"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-8 py-7 md:py-8">
                  <div className="flex items-start gap-5">
                    <span className="pt-1 text-xs font-medium text-black/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="text-lg font-medium tracking-tight md:text-xl">
                      {faq.question}
                    </h3>
                  </div>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/15 text-xl font-light leading-none transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>

                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-open:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-8 pl-10 text-base leading-relaxed text-black/55 md:pl-12 md:text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}