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
      
      {/* Bridge: Metrics -> Services (Cyan Dominant) */}
      <div className="absolute top-[25%] left-[-10%] w-[15%] h-[300px] bg-[var(--color-accent-cyan)]/5 blur-[60px] mix-blend-screen opacity-10 pointer-events-none -z-10" />
      <Services />

      {/* Bridge: Services -> Portfolio (Violet Accent - Rare Emotional Moment) */}
      <div className="absolute top-[50%] right-[-5%] w-[20%] h-[400px] bg-[var(--color-accent-violet)]/5 blur-[80px] mix-blend-screen opacity-10 pointer-events-none -z-10" />
      <Portfolio />
      
      <Testimonials />
      
      {/* Bridge: Process -> FAQ (Cyan Return) */}
      <div className="absolute top-[80%] left-[10%] w-[15%] h-[300px] bg-[var(--color-accent-cyan)]/5 blur-[60px] mix-blend-screen opacity-10 pointer-events-none -z-10" />
      <Process />
      <FAQ />
      <Footer />
      </div>
    </main>
  );
}