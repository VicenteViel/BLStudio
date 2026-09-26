"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black text-white">
      <div className="mx-auto w-full max-w-7xl px-6 pt-32 pb-20">
        <div className="max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-white/50"
          >
            BLstudio.dev
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="text-6xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-7xl md:text-8xl lg:text-9xl"
          >
            Tu negocio,
            <br />
            pero <span className="text-white/40">mejor.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="mt-10 max-w-xl text-lg leading-relaxed text-white/60 md:text-xl"
          >
            Diseñamos y desarrollamos sitios web modernos, rápidos y
            profesionales para empresas que quieren crecer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.45,
              ease: "easeOut",
            }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition duration-300 hover:bg-white/80"
            >
              Comenzar proyecto
            </a>

            <a
              href="/projects"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white transition duration-300 hover:border-white/40 hover:bg-white/5"
            >
              Ver proyectos
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}