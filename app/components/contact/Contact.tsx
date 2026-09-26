"use client";

import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Ingresa tu nombre")
    .max(100, "El nombre es demasiado largo"),

  email: z
    .string()
    .email("Ingresa un correo válido"),

  business: z
    .string()
    .min(2, "Ingresa el nombre de tu negocio")
    .max(100, "El nombre es demasiado largo"),

  service: z
    .string()
    .min(1, "Selecciona un servicio"),

  message: z
    .string()
    .min(10, "Cuéntanos un poco más sobre tu proyecto")
    .max(2000, "El mensaje es demasiado largo"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Ocurrió un error.");
    }

    reset();

    alert("¡Gracias! Nos pondremos en contacto contigo.");
  } catch (error) {
    console.error(error);

    alert(
      "No pudimos enviar tu mensaje. Inténtalo nuevamente."
    );
  }
};

  return (
    <section
      id="contacto"
      className="bg-black px-6 py-32 text-white md:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 md:grid-cols-[1fr_1.2fr]">
          {/* Información */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-white/40">
              Hablemos
            </p>

            <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-7xl">
              ¿Tienes un
              <br />
              proyecto?
            </h2>

            <p className="mt-8 max-w-md text-base leading-relaxed text-white/50 md:text-lg">
              Cuéntanos sobre tu negocio, tu idea o lo que necesitas.
              Revisaremos tu proyecto y te contactaremos para conversar.
            </p>

            <a
              href="mailto:hola@blstudio.dev"
              className="mt-10 inline-block text-lg text-white transition-colors hover:text-white/60"
            >
              hola@blstudio.dev
            </a>
          </motion.div>

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Nombre */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-3 block text-sm text-white/50"
                >
                  Nombre
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Tu nombre"
                  {...register("name")}
                  className="w-full border-b border-white/20 bg-transparent px-0 py-3 text-white outline-none transition-colors placeholder:text-white/30 focus:border-white"
                />

                {errors.name && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-3 block text-sm text-white/50"
                >
                  Correo electrónico
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  {...register("email")}
                  className="w-full border-b border-white/20 bg-transparent px-0 py-3 text-white outline-none transition-colors placeholder:text-white/30 focus:border-white"
                />

                {errors.email && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Empresa */}
              <div>
                <label
                  htmlFor="business"
                  className="mb-3 block text-sm text-white/50"
                >
                  Negocio / Empresa
                </label>

                <input
                  id="business"
                  type="text"
                  placeholder="Nombre de tu negocio"
                  {...register("business")}
                  className="w-full border-b border-white/20 bg-transparent px-0 py-3 text-white outline-none transition-colors placeholder:text-white/30 focus:border-white"
                />

                {errors.business && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.business.message}
                  </p>
                )}
              </div>

              {/* Servicio */}
              <div>
                <label
                  htmlFor="service"
                  className="mb-3 block text-sm text-white/50"
                >
                  ¿Qué necesitas?
                </label>

                <select
                  id="service"
                  {...register("service")}
                  className="w-full border-b border-white/20 bg-black px-0 py-3 text-white outline-none transition-colors focus:border-white"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>

                  <option value="sitio-web">Sitio web</option>
                  <option value="sistema-web">Sistema web</option>
                  <option value="rediseño">Rediseño de sitio</option>
                  <option value="mantenimiento">Mantenimiento</option>
                  <option value="otro">Otro</option>
                </select>

                {errors.service && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.service.message}
                  </p>
                )}
              </div>

              {/* Mensaje */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-3 block text-sm text-white/50"
                >
                  Cuéntanos sobre tu proyecto
                </label>

                <textarea
                  id="message"
                  rows={5}
                  placeholder="¿Qué tienes en mente?"
                  {...register("message")}
                  className="w-full resize-none border-b border-white/20 bg-transparent px-0 py-3 text-white outline-none transition-colors placeholder:text-white/30 focus:border-white"
                />

                {errors.message && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Botón */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:bg-white/80 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}