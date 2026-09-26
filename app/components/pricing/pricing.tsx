"use client";

import { motion } from "motion/react";

const plans = [
  {
    name: "Esencial",
    price: "$199.000",
    description:
      "Para negocios que necesitan una presencia web profesional y clara.",
    features: [
      "Sitio web de hasta 5 secciones",
      "Diseño responsive",
      "Formulario de contacto",
      "Optimización básica para buscadores",
      "Configuración de dominio",
    ],
  },
  {
    name: "Profesional",
    price: "$399.000",
    description:
      "Para negocios que quieren una web más completa, personalizada y orientada a crecer.",
    features: [
      "Sitio web personalizado",
      "Diseño responsive avanzado",
      "Formulario de contacto",
      "Animaciones y microinteracciones",
      "Optimización SEO",
      "Integración con herramientas externas",
    ],
    featured: true,
  },
  {
    name: "A medida",
    price: "Desde $900.000",
    description:
      "Para proyectos que necesitan funcionalidades específicas o sistemas web personalizados.",
    features: [
      "Desarrollo personalizado",
      "Sistemas y funcionalidades avanzadas",
      "Integraciones con APIs",
      "Base de datos",
      "Autenticación de usuarios",
      "Arquitectura adaptada al proyecto",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="precios"
      className="bg-black px-6 py-32 text-white md:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-white/40">
            Planes y precios
          </p>

          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl md:text-7xl">
            Una solución para
            <br />
            cada <span className="text-white/40">etapa.</span>
          </h2>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-white/50 md:text-lg">
            Cada proyecto es diferente. Estos planes sirven como punto de
            partida para encontrar la solución adecuada para tu negocio.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-5 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.25 },
              }}
              className={`relative flex flex-col rounded-3xl border p-8 md:p-10 ${
                plan.featured
                  ? "border-white/40 bg-white text-black"
                  : "border-white/15 bg-white/[0.03] text-white"
              }`}
            >
              {plan.featured && (
                <div className="absolute right-6 top-6 rounded-full bg-black px-3 py-1.5 text-xs font-medium text-white">
                  Más elegido
                </div>
              )}

              <div>
                <p
                  className={`text-sm font-medium ${
                    plan.featured ? "text-black/50" : "text-white/40"
                  }`}
                >
                  {plan.name}
                </p>

                <h3 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
                  {plan.price}
                </h3>

                <p
                  className={`mt-6 max-w-sm text-sm leading-relaxed md:text-base ${
                    plan.featured ? "text-black/60" : "text-white/50"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <div
                className={`my-10 h-px ${
                  plan.featured ? "bg-black/10" : "bg-white/10"
                }`}
              />

              <div className="flex-1">
                <p
                  className={`mb-5 text-xs font-medium uppercase tracking-[0.15em] ${
                    plan.featured ? "text-black/40" : "text-white/30"
                  }`}
                >
                  Incluye
                </p>

                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-relaxed"
                    >
                      <span
                        className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                          plan.featured ? "bg-black" : "bg-white"
                        }`}
                      />

                      <span
                        className={
                          plan.featured ? "text-black/70" : "text-white/60"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contacto"
                className={`mt-10 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium transition ${
                  plan.featured
                    ? "bg-black text-white hover:bg-black/80"
                    : "border border-white/20 text-white hover:border-white/40 hover:bg-white/5"
                }`}
              >
                Comenzar proyecto
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-sm text-white/30"
        >
          * Los precios son referenciales. El valor final depende del alcance
          y las funcionalidades de cada proyecto.
        </motion.p>
      </div>
    </section>
  );
}