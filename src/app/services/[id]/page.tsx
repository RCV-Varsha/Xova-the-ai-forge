import React from 'react'
import { PlatformTimeline } from '@/components/services/PlatformTimeline'
import { OperationalLivePreview } from '@/components/services/OperationalLivePreview'
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { notFound } from 'next/navigation'

const SERVICE_DATA: Record<string, { title: string; subtitle: string; desc: string; timeline: any[] }> = {
  hospitality: {
    title: "Reservation Orchestration",
    subtitle: "HOSPITALITY_ENGINE_v4.1",
    desc: "Rebuilding slow, fragmented guest portals into ultra-low latency transaction and synchronization networks.",
    timeline: [
      { phase: "01", title: "API Gateway & Global State Cache", duration: "Week 1-2", desc: "Forging secure real-time sync nodes and reservation state webhooks.", deliverables: ["Redis cluster integration", "Webhook concurrency testing"] },
      { phase: "02", title: "Dynamic Modular UI Calibration", duration: "Week 3-4", desc: "Constructing ultra-responsive interactive client booking interfaces with zero layout shift.", deliverables: ["Fluid component canvas layer", "Framer Motion state optimization"] },
      { phase: "03", title: "Logic Fusion & Production Launch", duration: "Week 5-7", desc: "Connecting secure Node.js/Express controller logic and staging zero-downtime edge deployments.", deliverables: ["API throughput performance optimization", "Zero-downtime orchestration scripts"] }
    ]
  },
  educare: {
    title: "Institutional Data Pipelines",
    subtitle: "EDUCARE_CORE_v2.0",
    desc: "Modernizing student intake systems, admissions processing, and multi-tenant high-throughput analytics.",
    timeline: [
      { phase: "01", title: "Relational Database Schema Design", duration: "Week 1-2", desc: "Structuring secure multi-tenant data storage clusters.", deliverables: ["PostgreSQL indexing architecture", "Data access optimization profiling"] },
      { phase: "02", title: "Admissions Workflow Automation", duration: "Week 3-5", desc: "Forging background processing systems to isolate student application pipelines.", deliverables: ["Automated document processing engines", "State machine controllers"] }
    ]
  },
  healthcare: {
    title: "Clinical-Grade Data Infrastructure",
    subtitle: "HEALTHCARE_INTELLIGENCE_v1.0",
    desc: "Replacing slow medical networks with secure, sub-100ms compliant patient data handling layers.",
    timeline: [
      { phase: "01", title: "Transport Encryption Layers", duration: "Week 1-2", desc: "Configuring production network pathways for zero exposure.", deliverables: ["Data payload hashing", "Secure network access controllers"] }
    ]
  }
};

type Props = {
  params: Promise<{ id: string }>
}

export default async function ServicePage({ params }: Props) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  // Fallback gracefully to hospitality if not found
  const data = SERVICE_DATA[id] || SERVICE_DATA["hospitality"];

  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col bg-transparent relative overflow-hidden pt-32 pb-24">
        {/* Asymmetric 60/40 Grid Layout */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10 relative mt-12 md:mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* 60% Left Side - Typography-led Whitepaper */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.04] bg-white/[0.02] px-3.5 py-1.5 uppercase tracking-[0.25em] text-[10px] text-[var(--color-accent-cyan)] mb-8 backdrop-blur-sm self-start">
                <span className="size-1.5 bg-[var(--color-accent-cyan)] rounded-full shadow-[0_0_10px_var(--color-accent-cyan)] animate-pulse" />
                {data.subtitle}
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-semibold tracking-tighter leading-[0.95] text-white mb-8">
                {data.title}
              </h1>
              
              <p className="text-zinc-400 text-lg lg:text-xl font-light leading-relaxed max-w-2xl mb-16">
                {data.desc}
              </p>

              {/* Operational Live Preview Module */}
              <OperationalLivePreview />

              {/* Timeline Integration */}
              <div className="mt-8">
                <h2 className="text-2xl font-semibold text-white tracking-tight mb-4">Implementation Architecture</h2>
                <div className="w-12 h-px bg-white/20 mb-8" />
                <PlatformTimeline timeline={data.timeline} />
              </div>
            </div>

            {/* 40% Right Side - Operational Metadata / Secondary Visuals */}
            <div className="lg:col-span-5 relative">
              <div className="sticky top-32 p-8 rounded-3xl border border-white/[0.05] bg-[#050811]/40 backdrop-blur-md shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-6">System Parameters</h3>
                
                <div className="flex flex-col gap-6">
                  <div className="flex justify-between items-center border-b border-white/[0.05] pb-4">
                    <span className="text-sm font-light text-zinc-400">Target Latency</span>
                    <span className="font-mono text-xs text-[var(--color-accent-cyan)]">SUB-50MS</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/[0.05] pb-4">
                    <span className="text-sm font-light text-zinc-400">Architecture</span>
                    <span className="font-mono text-xs text-white">EDGE-CACHED</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/[0.05] pb-4">
                    <span className="text-sm font-light text-zinc-400">Security</span>
                    <span className="font-mono text-xs text-white">ZERO-TRUST</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-light text-zinc-400">Deployment</span>
                    <span className="font-mono text-xs text-white">ZERO-DOWNTIME</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
