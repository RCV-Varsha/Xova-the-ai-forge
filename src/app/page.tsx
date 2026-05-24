import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="bg-[#020617] text-white min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
    </main>
  );
}