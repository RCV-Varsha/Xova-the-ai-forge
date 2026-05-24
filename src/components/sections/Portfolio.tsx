import React from "react";
import Image from "next/image";

export default function Portfolio() {
  return (
    <section className="relative w-full bg-[#020617] py-32 lg:py-48 border-t border-white/[0.08]" id="portfolio">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-32 max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
            <span className="h-px w-4 bg-zinc-500"></span>
            [ PRODUCTION DEPLOYMENTS ]
          </div>
          <h2 className="mb-6 font-sans text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
            Selected Systems
          </h2>
          <p className="text-base text-zinc-300 font-normal tracking-wide leading-relaxed">
            Realized architectures and bespoke software systems designed and deployed for enterprise operations.
          </p>
        </div>

        {/* Case Study 1 - PrintMaania */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24 items-start mb-36 lg:mb-48">
          {/* Mockup */}
          <div className="lg:col-span-7 order-1">
            <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-zinc-950/40 p-2 shadow-[0_0_50px_-12px_rgba(255,255,255,0.02)] transition-all duration-700 hover:border-white/20 hover:shadow-[0_0_50px_-12px_rgba(255,255,255,0.05)]">
              <div className="relative w-full overflow-hidden rounded-md bg-zinc-900">
                <Image
                  src="/portfolio/printmaania.png"
                  alt="PrintMaania Customized Commerce Website"
                  width={1920}
                  height={1080}
                  unoptimized
                  className="w-full h-auto rounded-md object-cover object-top opacity-100 transition-all duration-700 ease-out group-hover:scale-[1.005]"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center lg:col-span-5 order-2 space-y-8">
            <div className="space-y-4">
              <div className="font-mono text-[9px] uppercase tracking-widest text-zinc-500">
                [ CASE_01 // COMMERCE_INFRASTRUCTURE ]
              </div>
              <h3 className="font-sans text-3xl font-medium tracking-tight text-white">
                PrintMaania
              </h3>
              <p className="text-base text-zinc-200 font-normal leading-snug">
                Customized commerce infrastructure for a growing personalized printing business.
              </p>
              <p className="text-sm leading-relaxed text-zinc-300 font-normal tracking-wide">
                We engineered a complete digital commerce foundation for PrintMaania, mapping user flows from landing to bulk order placement. The project focused on catalog navigation, product listings, and custom checkout integrations.
              </p>
            </div>

            {/* Testimonial */}
            <div className="border-l-2 border-white/10 pl-6 py-1 space-y-2">
              <p className="italic text-zinc-300 text-sm leading-relaxed">
                “Xova Digital Solutions provided the best solution for reaching customers with a customized website. We would like to continue working with them for future expansion.”
              </p>
              <span className="block font-mono text-[9px] uppercase tracking-widest text-zinc-500">
                — Co-Founder, Print Maania
              </span>
            </div>

            {/* Services provided */}
            <div className="space-y-3 pt-2">
              <span className="block font-mono text-[9px] uppercase tracking-widest text-zinc-500">
                Services Provided
              </span>
              <div className="flex flex-wrap gap-2">
                {["Website Design", "Admin Dashboard", "Product Management", "Operational Customization"].map((svc) => (
                  <span key={svc} className="rounded border border-white/5 bg-white/[0.02] px-3 py-1 font-mono text-[9px] text-zinc-400">
                    {svc}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Case Study 2 - Inventum Publishers */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24 items-start">
          {/* Info */}
          <div className="flex flex-col justify-center lg:col-span-5 order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <div className="font-mono text-[9px] uppercase tracking-widest text-zinc-500">
                [ CASE_02 // PUBLISHING_SYSTEMS ]
              </div>
              <h3 className="font-sans text-3xl font-medium tracking-tight text-white">
                Inventum Publishers
              </h3>
              <p className="text-base text-zinc-200 font-normal leading-snug">
                Editorial publishing platform and journal workflow interface system.
              </p>
              <p className="text-sm leading-relaxed text-zinc-300 font-normal tracking-wide">
                We restructured the manuscript submission and journal directory systems for Inventum Publishers. The engagement delivered an improved editorial interface, clear navigation hierarchy for academic journals, and a unified portal for paper submissions.
              </p>
            </div>

            {/* Testimonial */}
            <div className="border-l-2 border-white/10 pl-6 py-1 space-y-2">
              <p className="italic text-zinc-300 text-sm leading-relaxed">
                “Now the page alignment is fixed. Looks professional.”
              </p>
              <span className="block font-mono text-[9px] uppercase tracking-widest text-zinc-500">
                — Inventum Publishers
              </span>
            </div>

            {/* Services provided */}
            <div className="space-y-3 pt-2">
              <span className="block font-mono text-[9px] uppercase tracking-widest text-zinc-500">
                Services Provided
              </span>
              <div className="flex flex-wrap gap-2">
                {["Editorial UI/UX", "Publishing Workflow Design", "Information Architecture", "Journal Navigation Systems"].map((svc) => (
                  <span key={svc} className="rounded border border-white/5 bg-white/[0.02] px-3 py-1 font-mono text-[9px] text-zinc-400">
                    {svc}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Mockup */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-zinc-950/40 p-2 shadow-[0_0_50px_-12px_rgba(255,255,255,0.02)] transition-all duration-700 hover:border-white/20 hover:shadow-[0_0_50px_-12px_rgba(255,255,255,0.05)]">
              <div className="relative w-full overflow-hidden rounded-md bg-zinc-900">
                <Image
                  src="/portfolio/inventum.png"
                  alt="Inventum Publishers Publication Portal"
                  width={1024}
                  height={473}
                  unoptimized
                  className="w-full h-auto rounded-md object-cover object-top opacity-100 transition-all duration-700 ease-out group-hover:scale-[1.005]"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
