"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const details = [
  {
    title: "Ambiente",
    description:
      "Luz cálida, mesas de madera y una sala pensada para conversar sin apuro.",
  },
  {
    title: "Atención",
    description:
      "Un equipo cercano que te recomienda, te acompaña y cuida cada detalle.",
  },
  {
    title: "Concepto",
    description:
      "Cocina contemporánea con identidad local, en un espacio íntimo y acogedor.",
  },
];

type ParallaxImageProps = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  speed?: number;
};

/*
 * Imagen con desplazamiento sutil (parallax).
 * La capa interior es 30% más alta que el contenedor y se mueve
 * un poco más lento que el scroll. El contenedor recorta lo que sobra.
 */
function ParallaxImage({
  src,
  alt,
  sizes,
  className = "",
  speed = 0.06,
}: ParallaxImageProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    let frame = 0;

    const update = () => {
      frame = 0;

      const wrapper = wrapperRef.current;
      const layer = layerRef.current;

      if (!wrapper || !layer) return;

      const rect = wrapper.getBoundingClientRect();
      const viewport = window.innerHeight;

      // Si no está en pantalla, no calculamos nada
      if (rect.bottom < 0 || rect.top > viewport) return;

      // Distancia entre el centro de la imagen y el centro de la pantalla
      const distance = rect.top + rect.height / 2 - viewport / 2;

      // Nunca movemos más de lo que sobra (15% del alto) para evitar huecos
      const limit = rect.height * 0.15;
      const offset = Math.max(-limit, Math.min(limit, -distance * speed));

      layer.style.transform = `translate3d(0, ${offset}px, 0)`;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);

      if (frame) cancelAnimationFrame(frame);
    };
  }, [speed]);

  return (
    <div
      ref={wrapperRef}
      className={`relative overflow-hidden bg-black/5 ${className}`}
    >
      <div
        ref={layerRef}
        className="absolute inset-x-0 -top-[15%] h-[130%] will-change-transform"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experiencia"
      className="overflow-hidden bg-[#f5f1e8] px-6 py-28 text-[#1c1b18] md:py-40"
    >
      <div className="mx-auto max-w-7xl">
        {/* Frase principal */}
        <div className="max-w-5xl">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-black/40">
            La experiencia
          </p>

          <h2 className="text-5xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-8xl">
            No vienes
            <br />
            solamente <span className="text-black/35">a comer.</span>
          </h2>
        </div>

        {/* Fotografías */}
        <div className="mt-20 grid gap-6 md:mt-28 md:grid-cols-12 md:items-start md:gap-8">
          <ParallaxImage
            src="/aurora/sala.jpg"
            alt="Sala principal de Restaurante Aurora"
            sizes="(max-width: 768px) 100vw, 58vw"
            className="aspect-[4/5] md:col-span-7"
          />

          <ParallaxImage
            src="/aurora/barra.jpg"
            alt="Barra de Restaurante Aurora"
            sizes="(max-width: 768px) 100vw, 42vw"
            speed={0.09}
            className="aspect-[4/5] md:col-span-5 md:mt-32"
          />

          <ParallaxImage
            src="/aurora/mesa.jpg"
            alt="Mesa preparada en Restaurante Aurora"
            sizes="(max-width: 768px) 100vw, 42vw"
            speed={0.09}
            className="aspect-[3/4] md:col-span-5"
          />

          <ParallaxImage
            src="/aurora/detalle.jpg"
            alt="Detalle de la cocina de Restaurante Aurora"
            sizes="(max-width: 768px) 100vw, 58vw"
            className="aspect-[4/3] md:col-span-7 md:mt-24"
          />
        </div>

        {/* Ambiente, atención y concepto */}
        <div className="mt-24 grid gap-12 border-t border-black/15 pt-10 md:mt-32 md:grid-cols-3 md:gap-10">
          {details.map((detail) => (
            <div key={detail.title}>
              <h3 className="text-2xl font-medium md:text-3xl">
                {detail.title}
              </h3>

              <p className="mt-4 max-w-sm text-base leading-relaxed text-black/60 md:text-lg">
                {detail.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}