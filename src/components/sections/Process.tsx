"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const stages = [
  {
    id: "01",
    name: "Discover",
    desc: "We conduct a complete operational audit of your current business workflows. By mapping bottleneck points and identifying scaling limits, we isolate your core engineering opportunities.",
    specs: ["CORE_AUDIT", "LATENCY_MAPPING", "RISK_EVAL"]
  },
  {
    id: "02",
    name: "Architect",
    desc: "We draft custom virtual blueprints and code structures. You receive a complete layout plan detailing every database, API gateway, and server stack before a single line of production code is written.",
    specs: ["SCHEMA_DRAFTING", "VPC_BLUEPRINTS", "API_SPECS"]
  },
  {
    id: "03",
    name: "Engineer",
    desc: "We build, compile, and configure your system components. By engineering custom integration layers and automated data pipelines, we establish your proprietary core operating software.",
    specs: ["COMPUTE_ASSEMBLY", "DB_CLUSTERING", "RAG_DEV"]
  },
  {
    id: "04",
    name: "Deploy",
    desc: "We migrate your operations to isolated production environments. By deploying staging mirrors and conducting rigorous load tests, we guarantee a completely secure transition.",
    specs: ["SANDBOX_MIRROR", "PENETRATION_TEST", "ZERO_DOWNTIME"]
  },
  {
    id: "05",
    name: "Optimize",
    desc: "We continuously refine and tune system performance. By reviewing runtime console logs and scaling edge caching arrays, we keep your infrastructure operational and fast.",
    specs: ["LATENCY_TUNING", "EDGE_CACHING", "AUTO_SCALE"]
  }
];

export default function Process() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % stages.length);
  };

  const handleSelect = (idx: number) => {
    setActiveIndex(idx);
  };

  return (
    <section className="relative w-full bg-transparent py-24 lg:py-40 overflow-hidden" id="process">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-20 max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[var(--color-accent-violet)] rounded-full border border-[var(--color-accent-violet)]/20 bg-[var(--color-accent-violet)]/5 px-4 py-1.5">
            PIPELINE PROTOCOL
          </div>
          <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white md:text-5xl">
            System Execution Pipeline
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] font-light leading-relaxed">
            Mapping how projects are initiated, designed, and executed with extreme architectural restraint.
          </p>
        </div>

        {/* Card Swap Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 h-[600px] items-center">
          
          {/* Left Column: Progress List */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {stages.map((stage, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={stage.id}
                  onClick={() => handleSelect(idx)}
                  className={`group relative w-full flex items-center justify-between p-5 rounded-xl border transition-all duration-500 text-left ${
                    isActive 
                      ? "bg-white/10 border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.05)]" 
                      : "bg-transparent border-transparent hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-mono text-[10px] tracking-widest transition-colors duration-500 ${isActive ? "text-white" : "text-zinc-600 group-hover:text-zinc-400"}`}>
                      {stage.id}
                    </span>
                    <span className={`font-sans text-lg font-medium tracking-wide transition-colors duration-500 ${isActive ? "text-white" : "text-zinc-500 group-hover:text-zinc-300"}`}>
                      {stage.name}
                    </span>
                  </div>
                  {isActive && (
                    <motion.div layoutId="active-indicator" className="size-2 rounded-full bg-[var(--color-accent-cyan)] shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Stacked Cards Display */}
          <div className="lg:col-span-7 relative h-[450px] w-full perspective-1000">
            <div className="absolute inset-0 flex items-center justify-center">
              <AnimatePresence mode="popLayout">
                {stages.map((stage, idx) => {
                  // Calculate relative offset from active card
                  // 0 = active, 1 = next, 2 = next after, etc.
                  let offset = idx - activeIndex;
                  if (offset < 0) offset += stages.length; // Wrap around for infinite loop feel
                  
                  // Only render the first 3 visible cards for performance/aesthetics
                  if (offset > 2 && offset !== stages.length - 1) return null;
                  
                  // If it's the one right behind the last (effectively leaving), we can animate it out
                  const isLeaving = offset === stages.length - 1;

                  return (
                    <motion.div
                      key={stage.id}
                      layout
                      initial={
                        isLeaving 
                          ? { opacity: 1, scale: 1, y: 0, zIndex: 50 } 
                          : { opacity: 0, scale: 0.8, y: 100, zIndex: 10 }
                      }
                      animate={{
                        opacity: isLeaving ? 0 : 1 - offset * 0.2,
                        scale: isLeaving ? 1.05 : 1 - offset * 0.05,
                        y: isLeaving ? -50 : offset * 30,
                        zIndex: 50 - offset,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 1.05,
                        y: -50,
                      }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute w-full max-w-lg origin-top"
                      style={{ pointerEvents: offset === 0 ? "auto" : "none" }}
                    >
                      <div className="rounded-2xl border border-white/10 bg-[#0A1020]/90 backdrop-blur-xl p-8 md:p-10 shadow-2xl shadow-black/50">
                        <div className="mb-8 flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-zinc-500 border-b border-white/10 pb-4">
                          <span className="text-[var(--color-accent-cyan)]">PHASE_{stage.id} // {stage.name}</span>
                          <span>{offset === 0 ? "ACTIVE" : "QUEUED"}</span>
                        </div>
                        
                        <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">
                          {stage.name} Phase
                        </h3>
                        
                        <p className="text-[var(--color-text-secondary)] leading-relaxed mb-10 min-h-[100px]">
                          {stage.desc}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-8">
                          {stage.specs.map(spec => (
                            <span key={spec} className="px-2 py-1 rounded border border-white/5 bg-white/5 font-mono text-[9px] text-zinc-400 tracking-wider">
                              {spec}
                            </span>
                          ))}
                        </div>

                        {offset === 0 && (
                          <button 
                            onClick={handleNext}
                            className="w-full py-4 rounded-xl border border-white/10 bg-white/5 font-mono text-[10px] tracking-[0.2em] text-white uppercase hover:bg-white/10 transition-colors"
                          >
                            Proceed to Next Phase
                          </button>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
