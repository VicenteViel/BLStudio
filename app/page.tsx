import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Services from "./components/services/services";
import WhyBLstudio from "./components/why-blstudio/WhyBlstudio";
import Process from "./components/process/process";
import About from "./components/about/about";
import Pricing from "./components/pricing/pricing";
import FAQ from "./components/faq/faq";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Services />
      <WhyBLstudio />
      <Process />
      <About />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}