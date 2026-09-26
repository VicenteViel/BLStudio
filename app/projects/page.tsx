const projects = [
  {
    name: "Restaurante Aurora",
    category: "Gastronomía",
    description:
      "Sitio web para un restaurante de cocina contemporánea, enfocado en experiencia visual y reservas.",
    href: "/projects/aurora",
    status: "Disponible",
  },
  {
    name: "Clínica Nova",
    category: "Salud",
    description:
      "Experiencia digital para una clínica moderna, con información de servicios y gestión de pacientes.",
    href: "#",
    status: "Próximamente",
  },
  {
    name: "Forge Construcciones",
    category: "Construcción",
    description:
      "Sitio web corporativo para una empresa de construcción y proyectos inmobiliarios.",
    href: "#",
    status: "Próximamente",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#f5f1e8] px-6 py-20 text-[#1c1b18]">
      <div className="mx-auto max-w-7xl">
        {/* Encabezado */}
        <div className="max-w-3xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-black/40">
            Proyectos
          </p>

          <h1 className="text-6xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-8xl">
            Diseños hechos
            <br />
            para <span className="text-black/40">crecer.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-black/50">
            Una selección de proyectos conceptuales desarrollados para
            demostrar diferentes estilos, industrias y soluciones digitales.
          </p>
        </div>

        {/* Tarjetas */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => {
            const isAvailable = project.status === "Disponible";

            return (
              <article
                key={project.name}
                className="group overflow-hidden border border-black/10 bg-white"
              >
                {/* Imagen / Placeholder */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#dedbd2]">
                  <div className="flex h-full items-center justify-center">
                    <span className="text-7xl font-semibold tracking-[-0.06em] text-black/10">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Estado */}
                  <div className="absolute left-5 top-5">
                    <span
                      className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                        isAvailable
                          ? "bg-black text-white"
                          : "bg-white/80 text-black/50 backdrop-blur-sm"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Información */}
                <div className="p-7">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/40">
                    {project.category}
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                    {project.name}
                  </h2>

                  <p className="mt-4 min-h-[72px] text-sm leading-relaxed text-black/50">
                    {project.description}
                  </p>

                  {isAvailable ? (
                    <a
                      href={project.href}
                      className="mt-7 inline-flex rounded-full bg-[#1c1b18] px-5 py-3 text-sm font-medium text-white transition-transform duration-300 hover:scale-105"
                    >
                      Ver proyecto
                      <span className="ml-2">→</span>
                    </a>
                  ) : (
                    <span className="mt-7 inline-flex rounded-full border border-black/10 px-5 py-3 text-sm text-black/30">
                      Próximamente
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}