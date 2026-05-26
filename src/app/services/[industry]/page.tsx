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
      <main className="flex-1 flex flex-col bg-[#02040a]">
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
      </main>
      <Footer />
    </>
  );
}
