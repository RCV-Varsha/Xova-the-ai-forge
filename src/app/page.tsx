import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Metrics from "@/components/sections/Metrics";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-[#020617] text-white min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <Metrics />
      <Services />
      <Portfolio />
      <Testimonials />
      <Process />
      <FAQ />
      <Footer />
    </main>
  );
}