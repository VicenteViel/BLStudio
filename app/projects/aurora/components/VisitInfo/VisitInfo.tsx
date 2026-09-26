/*
 * Cuando tengas la dirección real, cámbiala aquí y en el array de abajo.
 * El botón "Cómo llegar" abre Google Maps buscando esta dirección.
 */
const ADDRESS = "Restaurante Aurora, Talca, Chile";

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  ADDRESS
)}`;

const info = [
  {
    title: "Dirección",
    lines: ["Av. [dirección]", "Talca, Chile"],
  },
  {
    title: "Horarios",
    lines: ["Martes — Domingo", "19:00 — 00:00"],
  },
  {
    title: "Contacto",
    lines: ["+56 9 XXXX XXXX", "hola@restauranteaurora.cl"],
  },
];

export default function VisitInfo() {
  return (
    <section
      id="visitanos"
      className="bg-[#f5f1e8] px-6 py-24 text-[#1c1b18] md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Encabezado */}
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-black/40">
              Visítanos
            </p>

            <h2 className="text-4xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              Te esperamos
              <br />
              <span className="text-black/35">en Aurora.</span>
            </h2>
          </div>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center self-start rounded-full bg-[#1c1b18] px-7 py-3.5 text-sm font-medium text-[#f5f1e8] transition duration-300 hover:bg-black/80 md:self-auto"
          >
            Cómo llegar
          </a>
        </div>

        {/* Datos */}
        <div className="mt-16 grid gap-10 border-t border-black/15 pt-10 md:mt-20 md:grid-cols-3 md:gap-10">
          {info.map((block) => (
            <div key={block.title}>
              <p className="text-sm uppercase tracking-[0.2em] text-black/40">
                {block.title}
              </p>

              <div className="mt-4 space-y-1 text-lg md:text-xl">
                {block.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}