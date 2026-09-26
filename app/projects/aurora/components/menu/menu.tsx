const menuCategories = [
  {
    name: "Para comenzar",
    items: [
      {
        name: "Tártaro de salmón",
        description:
          "Salmón fresco, palta, cítricos y aceite de hierbas.",
        price: "$12.900",
        image: "/aurora/menu/tartaro.jpg",
      },
      {
        name: "Burrata Aurora",
        description:
          "Burrata cremosa, tomates asados, albahaca y aceite de oliva.",
        price: "$11.900",
        image: "/aurora/menu/burrata.jpg",
      },
    ],
  },
  {
    name: "Platos principales",
    items: [
      {
        name: "Pesca del día",
        description:
          "Pesca fresca, vegetales de estación y salsa de mantequilla cítrica.",
        price: "$18.900",
        image: "/aurora/menu/pesca.jpg",
      },
      {
        name: "Risotto de hongos",
        description:
          "Arroz arborio, hongos silvestres, parmesano y aceite de trufa.",
        price: "$16.900",
        image: "/aurora/menu/risotto.jpg",
      },
      {
        name: "Filete Aurora",
        description:
          "Filete de vacuno, puré rústico, vegetales y reducción de vino.",
        price: "$21.900",
        image: "/aurora/menu/filete.jpg",
      },
    ],
  },
  {
    name: "Para terminar",
    items: [
      {
        name: "Tarta de chocolate",
        description:
          "Chocolate 70%, crema de vainilla y sal de mar.",
        price: "$8.900",
        image: "/aurora/menu/chocolate.jpg",
      },
    ],
  },
];

function MenuCarousel({
  items,
}: {
  items: {
    name: string;
    description: string;
    price: string;
    image: string;
  }[];
}) {
  /*
   * Duplicamos los platos para crear un movimiento
   * continuo sin que se note el reinicio del carrusel.
   */
  const repeats = Math.ceil(6 / items.length);
  const half = Array.from({ length: repeats }, () => items).flat();
  const duplicatedItems = [...half, ...half];

  return (
    <div className="menu-carousel overflow-hidden">
      <div className="menu-carousel-track">
        {duplicatedItems.map((item, index) => (
          <article
            key={`${item.name}-${index}`}
            className="menu-card group relative w-[82vw] shrink-0 sm:w-[55vw] md:w-[420px]"
          >
            {/* Imagen */}
            <div className="relative aspect-[4/5] overflow-hidden bg-white/5">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Degradado */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Precio */}
              <span className="absolute right-5 top-5 rounded-full bg-white px-4 py-2 text-sm font-medium text-black">
                {item.price}
              </span>

              {/* Información sobre la imagen */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                <h4 className="text-2xl font-medium md:text-3xl">
                  {item.name}
                </h4>

                <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/65">
                  {item.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function Menu() {
  return (
    <section
      id="menu"
      className="overflow-hidden bg-[#1c1b18] py-28 text-[#f5f1e8] md:py-40"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Encabezado */}
        <div className="max-w-3xl">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/40">
            Nuestra carta
          </p>

          <h2 className="text-5xl font-medium leading-[0.95] tracking-[-0.04em] md:text-7xl">
            Sabores que
            <br />
            hablan por sí solos.
          </h2>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-white/50 md:text-lg">
            Una selección de platos preparados con ingredientes de temporada,
            técnica y una mirada contemporánea.
          </p>
        </div>
      </div>

      {/* Carruseles */}
      <div className="mt-20 space-y-24">
        {menuCategories.map((category) => (
          <div key={category.name}>
            {/* Nombre de categoría */}
            <div className="mx-auto mb-8 max-w-7xl px-6">
              <div className="flex items-center gap-5">
                <span className="text-sm uppercase tracking-[0.25em] text-white/40">
                  {category.name}
                </span>

                <div className="h-px flex-1 bg-white/10" />
              </div>
            </div>

            {/* Carrusel */}
            <MenuCarousel items={category.items} />
          </div>
        ))}
      </div>

      {/* Nota */}
      <div className="mx-auto mt-20 max-w-7xl px-6">
        <p className="text-xs text-white/30">
          * Nuestra carta puede variar según la disponibilidad de ingredientes
          de temporada.
        </p>
      </div>
    </section>
  );
}