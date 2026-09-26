import Image from "next/image";

/*
 * Cambia este número por el real.
 * Formato: código de país + número, sin "+", espacios ni guiones.
 * Ejemplo para Chile: 56912345678
 */
const WHATSAPP_NUMBER = "569XXXXXXXX";

/*
 * Mensaje que aparecerá escrito en WhatsApp.
 * Cada elemento del array es una línea.
 */
const WHATSAPP_MESSAGE = [
  "Hola, quisiera reservar una mesa en Restaurante Aurora. ¿Tienen disponibilidad?",
  "",
  "Personas:",
  "Fecha:",
  "Hora:",
].join("\n");

/*
 * encodeURIComponent convierte espacios, tildes y saltos de línea
 * a un formato válido para usar dentro de una URL.
 */
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export default function Reservations() {
  return (
    <section
      id="reservas"
      className="relative overflow-hidden bg-[#1c1b18] px-6 py-32 text-[#f5f1e8] md:py-48"
    >
      {/* Imagen de fondo */}
      <Image
        src="/aurora/reservas.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />

      {/* Capa oscura para que el texto se lea */}
      <div className="absolute inset-0 bg-[#1c1b18]/75" />

      <div className="relative mx-auto max-w-7xl">
        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/50">
          Reservas
        </p>

        <h2 className="max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-8xl lg:text-9xl">
          ¿Nos vemos
          <br />
          <span className="text-white/45">esta noche?</span>
        </h2>

        <p className="mt-10 max-w-md text-lg leading-relaxed text-[#f5f1e8]/70 md:text-xl">
          Reserva tu mesa y déjanos preparar el resto.
        </p>

        <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#f5f1e8] px-8 py-4 text-base font-medium text-[#1c1b18] transition duration-300 hover:bg-white"
          >
            Reservar por WhatsApp
          </a>

          <p className="text-sm text-white/50">
            Martes a domingo · 19:00 a 00:00
          </p>
        </div>
      </div>
    </section>
  );
}