"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, PenTool, Code2, Rocket, Zap, ArrowRight } from "lucide-react";
import { TextReveal } from "@/components/animations/TextReveal";

function TerminalSimulation({ activeStageId }: { activeStageId: string }) {
  const [logs, setLogs] = useState<string[]>([]);
  
  const logMap: Record<string, string[]> = {
    "01": ["[SYS_THREAD] initiating system audit...", "[TELEMETRY] measuring base latency", "[DIAGNOSTIC] mapping bottlenecks", "[OK] risk evaluation complete"],
    "02": ["[SYS_THREAD] drafting virtual schemas...", "[ARCHITECT] compiling VPC bounds", "[SECURITY] validating API gateways", "[OK] blueprint secured"],
    "03": ["[SYS_THREAD] assembling compute nodes...", "[DATABASE] clustering primary DBs", "[AI_CORE] building RAG pipelines", "[OK] engineering finalized"],
    "04": ["[SYS_THREAD] mirroring production sandbox...", "[SECURITY] running automated pen-tests", "[ROUTING] establishing zero-downtime", "[OK] deployed to production"],
    "05": ["[SYS_THREAD] tuning runtime latency...", "[NETWORK] warming edge caches", "[COMPUTE] scaling node arrays", "[OK] system optimized"],
  };

  useEffect(() => {
    setLogs([]);
    const currentLogs = logMap[activeStageId] || [];
    let i = 0;
    const interval = setInterval(() => {
      if (i < currentLogs.length) {
        setLogs(prev => [...prev, currentLogs[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 600);
    return () => clearInterval(interval);
  }, [activeStageId]);

  return (
    <div className="mt-2 p-5 rounded-xl border border-white/[0.12] bg-[#050914] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_20px_40px_rgba(0,0,0,0.6)] h-36 overflow-hidden relative flex flex-col justify-end">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />
      <div className="font-mono text-[10px] text-zinc-500 uppercase flex flex-col gap-2.5">
        <AnimatePresence>
          {logs.map((log, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="flex gap-3">
              <span className="text-zinc-700">{`>`}</span>
              <span className={log?.includes("[OK]") ? "text-zinc-300" : "text-zinc-500"}>{log}</span>
            </motion.div>
          ))}
        </AnimatePresence>
        <div className="flex gap-3 mt-1">
          <span className="text-zinc-700">{`>`}</span>
          <motion.div animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-1.5 h-3 bg-zinc-500" />
        </div>
      </div>
    </div>
  );
}

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
    <section className="relative w-full bg-transparent py-16 lg:py-20 overflow-x-clip" id="process">
      {/* Architectural vertical beam bridging from previous section */}
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-px h-[300px] bg-gradient-to-b from-transparent via-[var(--color-accent-cyan)]/40 to-transparent pointer-events-none z-0" />
      
      {/* Background ambient lighting */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[var(--color-accent-violet)] rounded-full border border-[var(--color-accent-violet)]/20 bg-[var(--color-accent-violet)]/5 px-4 py-1.5">
            PIPELINE PROTOCOL
          </div>
          <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white md:text-5xl">
            System Execution Pipeline
          </h2>
          <div className="text-lg text-[var(--color-text-secondary)] font-light leading-relaxed">
            <TextReveal text="We execute sequentially via our Pipeline Protocol. A rigid operational framework designed to eliminate ambiguity, ensure rapid deployment, and guarantee architectural integrity." />
          </div>
        </div>

        {/* Card Swap Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 h-[600px] items-center">
          
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

          {/* Terminal Simulation Panel */}
          <div className="lg:col-span-3 flex flex-col justify-end h-full">
            <div className="text-[9px] font-mono tracking-widest text-zinc-600 uppercase mb-3 px-2">Live Telemetry Stream</div>
            <TerminalSimulation activeStageId={stages[activeIndex].id} />
          </div>

          {/* Right Column: Stacked Cards Display */}
          <div className="lg:col-span-4 relative h-[450px] w-full perspective-1000">
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
                      <div className="rounded-2xl border border-white/[0.12] bg-[#050914] p-6 md:p-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_30px_60px_rgba(0,0,0,0.8)]">
                        <div className="mb-6 flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-zinc-500 border-b border-white/10 pb-4">
                          <span className="text-[var(--color-accent-cyan)]">PHASE_{stage.id} // {stage.name}</span>
                          <span>{offset === 0 ? "ACTIVE" : "QUEUED"}</span>
                        </div>
                        
                        <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">
                          {stage.name} Phase
                        </h3>
                        
                        <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6 min-h-[100px]">
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
