import Navbar from "@/components/layout/Navbar";
import GlobalEnvironment from "@/components/layout/GlobalEnvironment";
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
    <main className="bg-[#02040a] text-white min-h-screen overflow-hidden relative">
      {/* Global Environmental Intelligence Layer */}
      <GlobalEnvironment />

      <div className="relative z-10">
        <Navbar />
      <Hero />
      <Metrics />
      <Services />
      <Portfolio />
      <Testimonials />
      <Process />
      <FAQ />
      <Footer />
      </div>
    </main>
  );
}