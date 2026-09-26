const principles = [
  {
    number: "01",
    title: "Producto local",
    description: "Ingredientes seleccionados de productores de la zona.",
  },
  {
    number: "02",
    title: "Cocina de temporada",
    description: "Una carta que cambia con lo que ofrece cada estación.",
  },
  {
    number: "03",
    title: "Hecho en Aurora",
    description: "Cada plato preparado en nuestra cocina.",
  },
];

export default function Philosophy() {
  return (
    <section
      id="filosofia"
      className="bg-[#1c1b18] px-6 py-24 text-[#f5f1e8] md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-24">
          {/* Título */}
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/40">
              Nuestra filosofía
            </p>

            <h2 className="text-4xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              Del producto
              <br />
              <span className="text-white/40">a la mesa.</span>
            </h2>
          </div>

          {/* Principios */}
          <div className="border-t border-white/15">
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="grid grid-cols-[3rem_1fr] gap-4 border-b border-white/15 py-8 md:py-10"
              >
                <span className="pt-1.5 text-sm text-white/30">
                  {principle.number}
                </span>

                <div>
                  <h3 className="text-2xl font-medium md:text-3xl">
                    {principle.title}
                  </h3>

                  <p className="mt-3 max-w-md text-base leading-relaxed text-white/55 md:text-lg">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}