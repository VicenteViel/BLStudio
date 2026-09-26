import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-end overflow-hidden bg-[#1c1b18] text-white"
    >
      {/* Imagen de fondo */}
      <Image
  src="/aurora/tt.jpg"
  alt="Restaurante Aurora"
  fill
  priority
  className="object-cover"
  sizes="100vw"
/>

      {/* Oscurecimiento de la imagen */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Degradado inferior */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32 md:pb-24">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/70">
            Restaurante · Talca
          </p>

          <h1 className="text-6xl font-medium leading-[0.9] tracking-[-0.04em] sm:text-7xl md:text-8xl lg:text-9xl">
            Cocina que
            <br />
            <span className="text-white/60">se recuerda.</span>
          </h1>

          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
            <a
              href="#reserva"
              className="inline-flex w-fit items-center rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-transform duration-300 hover:scale-105"
            >
              Reservar mesa
            </a>

            <a
              href="#menu"
              className="inline-flex w-fit items-center text-sm text-white/80 transition-colors hover:text-white"
            >
              Ver nuestro menú
              <span className="ml-2">↓</span>
            </a>
          </div>
        </div>

        {/* Información inferior */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/20 pt-5 text-xs uppercase tracking-[0.2em] text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>Cocina contemporánea</span>
          <span>Martes — Domingo</span>
          <span>19:00 — 00:00</span>
        </div>
      </div>
    </section>
  );
}