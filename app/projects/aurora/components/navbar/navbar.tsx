export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-transparent backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <a
          href="#inicio"
          className="text-white text-xl font-semibold tracking-tight"
        >
          AURORA
        </a>

        {/* Links */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#nosotros"
            className="text-sm text-white/60 transition-colors hover:text-black"
          >
            Nosotros
          </a>

          <a
            href="#menu"
            className="text-sm text-white/60 transition-colors hover:text-black"
          >
            Menú
          </a>

          <a
            href="#experiencia"
            className="text-sm text-white/60 transition-colors hover:text-black"
          >
            Experiencia
          </a>

          <a
            href="#reserva"
            className="rounded-full bg-[#1c1b18] px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-105"
          >
            Reservar mesa
          </a>
        </div>
      </div>
    </nav>
  );
}