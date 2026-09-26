"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <section
      id="nosotros"
      className="relative overflow-hidden bg-black px-6 py-32 text-white md:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 md:grid-cols-[1fr_1.2fr] md:items-center">
          {/* Elemento visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex min-h-[320px] items-center justify-center md:min-h-[500px]"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1.2,
                delay: 0.1,
                ease: "easeOut",
              }}
              className="absolute h-64 w-64 rounded-full border border-white/10 md:h-96 md:w-96"
            />

            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1,
                delay: 0.25,
                ease: "easeOut",
              }}
              className="relative text-[180px] font-semibold leading-none tracking-[-0.12em] text-white/5 md:text-[280px]"
            >
              BL
            </motion.span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: "easeOut",
              }}
              style={{ transformOrigin: "center" }}
              className="absolute bottom-10 left-1/2 h-px w-24 -translate-x-1/2 bg-white/20"
            />
          </motion.div>

          {/* Contenido */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-white/40"
            >
              Sobre BLstudio
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
              className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl md:text-6xl"
            >
              Tecnología con
              <br />
              <span className="text-white/40">intención.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              className="mt-10 max-w-xl space-y-6 text-base leading-relaxed text-white/55 md:text-lg"
            >
              <p>
                BLstudio nace con una idea simple: las pequeñas empresas
                también merecen experiencias digitales de primer nivel.
              </p>

              <p>
                Combinamos diseño, desarrollo y tecnología para crear sitios
                web que no solo se ven bien, sino que ayudan a los negocios a
                presentarse mejor y conectar con sus clientes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.7,
                delay: 0.4,
              }}
              className="mt-12 grid max-w-xl grid-cols-2 gap-y-8 border-t border-white/15 pt-8"
            >
              <div>
                <p className="text-sm text-white/35">Especialidad</p>
                <p className="mt-2 text-sm font-medium text-white">
                  Desarrollo web
                </p>
              </div>

              <div>
                <p className="text-sm text-white/35">Base</p>
                <p className="mt-2 text-sm font-medium text-white">Chile</p>
              </div>

              <div>
                <p className="text-sm text-white/35">Enfoque</p>
                <p className="mt-2 text-sm font-medium text-white">
                  Diseño + Tecnología
                </p>
              </div>

              <div>
                <p className="text-sm text-white/35">Disponibilidad</p>
                <p className="mt-2 text-sm font-medium text-white">
                  Proyectos seleccionados
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}