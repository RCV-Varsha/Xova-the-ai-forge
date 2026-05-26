import React from "react";
import ServiceHero from "@/components/services/ServiceHero";
import IndustryGrid from "@/components/services/IndustryGrid";
import CTASection from "@/components/services/CTASection";
import { industries } from "@/data/industries";
import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Services Ecosystem",
  description: "Industry-focused digital infrastructure. Enterprise-grade web systems tailored for modern MSMEs and scalable businesses.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col bg-[#02040a]">
        <ServiceHero />
        <IndustryGrid industries={industries} />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
