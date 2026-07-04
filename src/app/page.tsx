import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Nosotros } from "@/components/sections/nosotros";
import { Diferencial } from "@/components/sections/diferencial";
import { Presencia } from "@/components/sections/presencia";
import { Cifras } from "@/components/sections/cifras";
import { Servicios } from "@/components/sections/servicios";
import { Contacto } from "@/components/sections/contacto";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Nosotros />
        <Diferencial />
        <Presencia />
        <Cifras />
        <Servicios />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
