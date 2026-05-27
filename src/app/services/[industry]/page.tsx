import React from "react";
import { notFound } from "next/navigation";
import { industries } from "@/data/industries";
import { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import IndustryHero from "@/components/services/IndustryHero";
import BusinessProblems from "@/components/services/BusinessProblems";
import SolutionsSection from "@/components/services/SolutionsSection";
import FeatureShowcase from "@/components/services/FeatureShowcase";
import TimelineEngine from "@/components/services/TimelineEngine";
import DeliverablesPanel from "@/components/services/DeliverablesPanel";
import TechnologiesGrid from "@/components/services/TechnologiesGrid";
import BusinessOutcomes from "@/components/services/BusinessOutcomes";
import TransformationImpact from "@/components/services/TransformationImpact";
import OperationalPreview from "@/components/services/OperationalPreview";
import CTASection from "@/components/services/CTASection";

type Props = {
  params: Promise<{ industry: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry: industrySlug } = await params;
  const industryData = industries.find((i) => i.slug === industrySlug);

  if (!industryData) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${industryData.title} Systems | XOVA`,
    description: industryData.shortDescription,
  };
}

export default async function IndustryPage({ params }: Props) {
  const { industry: industrySlug } = await params;
  const industryData = industries.find((i) => i.slug === industrySlug);

  if (!industryData) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col bg-[#02040a] relative overflow-hidden">
        {/* GLOBAL CONTINUOUS ENVIRONMENT */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Continuous Blueprint Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px]" />
          
          {/* Layered Environmental Fog & Lighting */}
          <div className="absolute top-0 left-0 w-[50vw] h-[50vh] bg-[var(--color-accent-cyan)]/[0.03] blur-[150px] rounded-full mix-blend-screen" />
          <div className="absolute bottom-0 right-0 w-[60vw] h-[60vh] bg-[var(--color-accent-violet)]/[0.03] blur-[200px] rounded-full mix-blend-screen" />
          
          {/* Diagonal Haze */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-transparent" />
        </div>

        <div className="relative z-10 flex flex-col">
          <IndustryHero industry={industryData} />
          <BusinessProblems industry={industryData} />
          <SolutionsSection industry={industryData} />
          <FeatureShowcase industry={industryData} />
          <TransformationImpact industry={industryData} />
          <OperationalPreview industry={industryData} />
          <TimelineEngine industry={industryData} />
          <DeliverablesPanel industry={industryData} />
          <TechnologiesGrid industry={industryData} />
          <BusinessOutcomes industry={industryData} />
          <CTASection industry={industryData} />
        </div>
      </main>
      <Footer />
    </>
  );
}
