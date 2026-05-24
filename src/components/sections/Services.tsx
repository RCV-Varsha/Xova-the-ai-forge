"use client"

import React from "react"
import Link from "next/link"

const services = [
  {
    index: "01",
    title: "Digital Infrastructure Systems",
    description: "We build the underlying virtual foundations that keep your critical operations running. By organizing databases and server clusters into stable custom systems, we ensure your enterprise applications remain active, secure, and ready to expand.",
    techSpecs: ["ISOLATED_VPC", "CUSTOM_API_GATEWAYS", "BACKEND_TELEMETRY", "AUTO_SCALE"],
    outcome: "SCALABLE ARCHITECTURE",
    colSpan: "lg:col-span-3",
    minHeight: "min-h-[360px]"
  },
  {
    index: "02",
    title: "AI Workflow Automation",
    description: "We map, engineer, and deploy autonomous pipelines that handle repetitive administrative and data processes. By wiring custom language models and routing algorithms into your business tools, we liberate hours of human attention.",
    techSpecs: ["AGENTIC_ROUTING", "VECTOR_DATABASES", "NLP_INGESTION", "CUSTOM_RAG"],
    outcome: "AUTOMATION-ENABLED WORKFLOWS",
    colSpan: "lg:col-span-3",
    minHeight: "min-h-[380px]"
  },
  {
    index: "03",
    title: "Brand Identity Systems",
    description: "We translate complex technological processes into clear, striking visual identities. By creating sharp typographic frameworks, minimalist digital guidelines, and custom code design tokens, your business commands technical authority.",
    techSpecs: ["TYPOGRAPHY_GUIDES", "GEOMETRIC_TRADEMARKS", "DESIGN_TOKENS", "HIGH_CONTRAST"],
    outcome: "BRAND IDENTITY ASSETS",
    colSpan: "lg:col-span-2",
    minHeight: "min-h-[330px]"
  },
  {
    index: "04",
    title: "Performance Optimization",
    description: "We isolate, analyze, and speed up bottlenecks across your digital applications. By optimizing database queries and cleaning core bundle structures, we make system latency almost imperceptible.",
    techSpecs: ["QUERY_TUNING", "BUNDLE_SHRINKING", "EDGE_CACHING", "ZERO_HYDRATION"],
    outcome: "DEPLOYMENT-READY SYSTEMS",
    colSpan: "lg:col-span-2",
    minHeight: "min-h-[310px]"
  },
  {
    index: "05",
    title: "MSME Digital Transformation",
    description: "We bridge the gap between traditional operations and modern software. By porting legacy databases and automating invoice/billing streams into custom dashboards, your enterprise is instantly modernized.",
    techSpecs: ["LEGACY_PORTING", "BILLING_AUTOMATION", "INVENTORY_SYNC", "ERP_INTEGRATION"],
    outcome: "INTEGRATED OPERATIONS",
    colSpan: "lg:col-span-2",
    minHeight: "min-h-[340px]"
  }
]

export default function Services() {
  return (
    <section className="relative bg-[#020617] pt-24 pb-44 border-b border-white/[0.04]" id="services">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-20 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.02] px-3.5 py-1 text-[10px] font-mono font-medium tracking-[0.25em] text-zinc-400 uppercase select-none mb-6">
            [ CAPABILITIES & SYSTEMS ]
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-150 to-zinc-300 font-sans">
            Engineered Systems & Operating Infrastructure
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-300 font-light tracking-wide leading-relaxed">
            We design, engineer, and deploy high-performance virtual architecture and automated operations designed to help emerging enterprises execute at scale.
          </p>
        </div>

        {/* Blueprints Drafting Grid Mesh - High Contrast Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 border-t border-l border-white/12 rounded-xl overflow-hidden bg-zinc-950/20 backdrop-blur-md">
          {services.map((service) => (
            <div
              key={service.index}
              className={cn(
                "py-12 px-9 flex flex-col justify-between border-r border-b border-white/12 transition-colors duration-300 hover:bg-white/[0.015]",
                service.colSpan,
                service.minHeight
              )}
            >
              {/* Card Header & Process Index */}
              <div>
                <div className="flex items-center justify-between font-mono text-[9px] tracking-widest text-zinc-400 uppercase mb-8 select-none">
                  <span>[ CAP_{service.index} // SYS ]</span>
                  <span className="text-zinc-500">ACTIVE_NODE</span>
                </div>
                <h3 className="text-lg font-medium text-white tracking-wide mb-3 font-sans">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal tracking-wide">
                  {service.description}
                </p>
              </div>

              {/* Card Footer: Layered Metadata */}
              <div className="mt-10 pt-6 border-t border-white/[0.04] flex flex-col gap-4">
                
                {/* Secondary Monospace Technical Specs - Brightened */}
                <div className="flex flex-wrap gap-x-3 gap-y-1.5 font-mono text-[8px] tracking-wider text-zinc-400 uppercase select-none">
                  {service.techSpecs.map((spec) => (
                    <span key={spec} className="flex items-center gap-1">
                      <span className="size-1 rounded-full bg-zinc-500" />
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Outcome operational status metric - High Readability */}
                <div className="flex items-center justify-between border-t border-white/[0.02] pt-2.5 font-mono text-[9px] select-none">
                  <span className="text-zinc-400">STATE // METRIC</span>
                  <span className="text-zinc-200 tracking-wider font-semibold">
                    [ OUTCOME: {service.outcome} ]
                  </span>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  )
}

// Minimal inline utility mapping to avoid importing cn if not required elsewhere
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ")
}
