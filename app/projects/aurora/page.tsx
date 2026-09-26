import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import About from "./components/about/about"
import Menu from "./components/menu/menu";
import Experience from "./components/Experience/Experience";
import Philosophy from "./components/Philosophy/Philosophy";
import Reservations from "./components/Reservations/Reservations";
import VisitInfo from "./components/VisitInfo/VisitInfo";

export default function AuroraPage() {
  return (
    <main className="min-h-screen bg-[#f5f1e8] text-[#1c1b18]">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Experience />
      <Philosophy />
      <Reservations />
      <VisitInfo />

    </main>
  );
}