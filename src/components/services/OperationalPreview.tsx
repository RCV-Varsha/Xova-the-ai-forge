"use client";

import React from "react";
import { motion } from "framer-motion";
import { IndustryService, OperationalPreview as PreviewType } from "@/types/service";
import { Activity, Clock, CheckCircle2, ChevronRight, BarChart3, ListTree } from "lucide-react";
import { cn } from "@/lib/utils";

// ----------------------------------------------------------------------
// WIREFRAME SUB-COMPONENTS
// ----------------------------------------------------------------------

const PipelineWireframe = () => (
  <div className="flex flex-col gap-3 w-full">
    {[1, 2, 3].map((step, i) => (
      <div key={i} className="flex items-center gap-4 relative">
        {i !== 2 && <div className="absolute left-3 top-6 bottom-[-16px] w-px bg-white/10" />}
        <div className="relative size-6 rounded-full border border-[var(--color-accent-cyan)]/30 bg-[#02040a] flex items-center justify-center shrink-0">
          <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
            className="size-1.5 rounded-full bg-[var(--color-accent-cyan)]"
          />
        </div>
        <div className="flex-1 h-10 rounded bg-white/5 border border-white/5 flex items-center px-4 relative overflow-hidden">
          <motion.div 
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 3, delay: i * 0.4, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg]"
          />
          <div className="w-1/3 h-1.5 rounded-full bg-white/10" />
        </div>
      </div>
    ))}
  </div>
);

const MetricsWireframe = () => (
  <div className="flex items-end gap-2 h-32 w-full pt-4">
    {[40, 70, 45, 90, 60, 85, 50].map((height, i) => (
      <div key={i} className="flex-1 bg-white/5 border border-white/5 rounded-t relative overflow-hidden group" style={{ height: `${height}%` }}>
        <motion.div 
          animate={{ opacity: [0.1, 0.5, 0.1] }}
          transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-b from-[var(--color-accent-violet)]/20 to-transparent"
        />
      </div>
    ))}
  </div>
);

const ListWireframe = () => (
  <div className="flex flex-col gap-2 w-full">
    {[1, 2, 3, 4].map((item, i) => (
      <div key={i} className="flex items-center justify-between p-3 rounded bg-white/5 border border-white/5">
        <div className="flex items-center gap-3">
          <div className="size-2 rounded-full bg-amber-500/50" />
          <div className="w-24 sm:w-32 h-2 rounded bg-white/10" />
        </div>
        <div className="w-12 h-2 rounded bg-white/5" />
      </div>
    ))}
  </div>
);

const DashboardWireframe = () => (
  <div className="flex flex-col gap-4 w-full">
    <div className="grid grid-cols-2 gap-4">
      <div className="h-16 rounded border border-white/5 bg-white/5 p-3 flex flex-col justify-between">
        <div className="w-1/2 h-1.5 rounded bg-white/10" />
        <div className="w-3/4 h-3 rounded bg-white/20" />
      </div>
      <div className="h-16 rounded border border-[var(--color-accent-cyan)]/20 bg-[var(--color-accent-cyan)]/5 p-3 flex flex-col justify-between relative overflow-hidden">
        <motion.div 
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-accent-cyan)]/10 to-transparent skew-x-[-20deg]"
        />
        <div className="w-1/2 h-1.5 rounded bg-[var(--color-accent-cyan)]/30" />
        <div className="w-3/4 h-3 rounded bg-[var(--color-accent-cyan)]/50" />
      </div>
    </div>
    <div className="h-20 rounded border border-white/5 bg-white/5" />
  </div>
);

// ----------------------------------------------------------------------
// RENDER SWITCHER
// ----------------------------------------------------------------------

const renderWireframe = (type: PreviewType["type"]) => {
  switch (type) {
    case "pipeline":
    case "crm-pipeline":
    case "logistics-flow":
      return <PipelineWireframe />;
    case "metrics":
      return <MetricsWireframe />;
    case "list":
    case "reservation-queue":
      return <ListWireframe />;
    case "dashboard":
    case "lms-progress":
      return <DashboardWireframe />;
    default:
      return <ListWireframe />;
  }
};

const getTypeIcon = (type: PreviewType["type"]) => {
  switch (type) {
    case "pipeline":
    case "crm-pipeline":
    case "logistics-flow":
      return <ListTree className="size-4" />;
    case "metrics":
      return <BarChart3 className="size-4" />;
    case "dashboard":
    case "lms-progress":
      return <Activity className="size-4" />;
    case "list":
    case "reservation-queue":
    default:
      return <ListTree className="size-4" />;
  }
};

// ----------------------------------------------------------------------
// MAIN COMPONENT
// ----------------------------------------------------------------------

export default function OperationalPreview({ industry }: { industry: IndustryService }) {
  if (!industry.operationalPreviews || industry.operationalPreviews.length === 0) return null;

  return (
    <section className="py-24 bg-[#02040a] relative overflow-hidden border-t border-white/[0.05]">
      {/* Background Depth */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-zinc-400 mb-6">
            <Activity className="size-3" />
            <span>Infrastructure Telemetry</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            System Previews
          </h2>
          <p className="text-zinc-400 font-light">
            Abstract wireframes representing the operational modules typically deployed within the {industry.title} ecosystem.
          </p>
        </div>

        {/* Previews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {industry.operationalPreviews.map((preview, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col"
            >
              {/* Monitor Frame */}
              <div className="rounded-xl border border-white/10 bg-[#050811] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] overflow-hidden flex-1 flex flex-col group">
                
                {/* Fake OS Header */}
                <div className="h-10 border-b border-white/5 bg-[#02040a] flex items-center px-4 gap-4">
                  <div className="flex gap-1.5">
                    <div className="size-2.5 rounded-full bg-white/10" />
                    <div className="size-2.5 rounded-full bg-white/10" />
                    <div className="size-2.5 rounded-full bg-white/10" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500">
                      SYS_MOD_{idx + 1}
                    </span>
                  </div>
                </div>

                {/* Wireframe Body */}
                <div className="p-6 md:p-8 flex-1 flex flex-col items-center justify-center relative overflow-hidden">
                  {/* Subtle Background Glow inside the monitor */}
                  <div className={cn(
                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] blur-[40px] opacity-10 pointer-events-none rounded-full transition-opacity duration-1000 group-hover:opacity-20",
                    idx % 2 === 0 ? "bg-[var(--color-accent-cyan)]" : "bg-[var(--color-accent-violet)]"
                  )} />
                  
                  <div className="w-full relative z-10">
                    {renderWireframe(preview.type)}
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="mt-6 px-2">
                <h3 className="text-sm font-semibold text-white tracking-tight flex items-center gap-2 mb-1.5">
                  <span className="text-[var(--color-accent-cyan)]">{getTypeIcon(preview.type)}</span>
                  {preview.title}
                </h3>
                <p className="text-[13px] font-light text-zinc-400">
                  {preview.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
