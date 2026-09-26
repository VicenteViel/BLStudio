import Image from "next/image";

export default function About() {
  return (
    <section
      id="nosotros"
      className="bg-[#f5f1e8] px-6 py-28 text-[#1c1b18] md:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 md:grid-cols-2 md:items-center md:gap-24">
          
          {/* Imagen */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/aurora/pexels-thien-binh-451964862-18980542.jpg"
              alt="Interior de Restaurante Aurora"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Texto */}
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-black/40">
              Nuestra cocina
            </p>

            <h2 className="text-5xl font-medium leading-[0.95] tracking-[-0.04em] md:text-7xl">
              Una mesa,
              <br />
              muchas historias.
            </h2>

            <div className="mt-10 max-w-lg space-y-6 text-base leading-relaxed text-black/60 md:text-lg">
              <p>
                En Aurora creemos que comer es mucho más que sentarse a la
                mesa. Es descubrir sabores, compartir momentos y crear
                recuerdos.
              </p>

              <p>
                Nuestra cocina toma ingredientes locales y los transforma en
                platos contemporáneos, respetando sus sabores y su origen.
              </p>
            </div>

            <div className="mt-12 border-t border-black/15 pt-6">
              <p className="text-sm uppercase tracking-[0.2em] text-black/40">
                Cocina contemporánea
              </p>

              <p className="mt-2 text-lg">
                Ingredientes locales · Técnica · Creatividad
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}