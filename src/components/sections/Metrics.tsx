"use client"

import React from "react";
import { motion } from "framer-motion";

export default function Metrics() {
  const metrics = [
    {
      value: "2+",
      label: "Deployed Systems",
      signature: "[ SYS_CORE ]"
    },
    {
      value: "40+",
      label: "Workflow Automations",
      signature: "[ INTEGRATION_FLOWS ]"
    },
    {
      value: "99.9%",
      label: "Pipeline Stability",
      signature: "[ TELEMETRY_STABLE ]"
    },
    {
      value: "Real",
      label: "Collaborations",
      signature: "[ VERIFIED_CLIENTS ]"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.98, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  return (
    <section className="relative w-full bg-transparent overflow-hidden">
      {/* Layer 1: Void + Architectural Vector Grid */}
      <div className="absolute inset-0 bg-[#02040a] pointer-events-none -z-20" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none -z-10" />
      
      {/* Layer 2: Atmospheric Fog Gradients */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-[var(--color-accent-cyan)]/10 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-[var(--color-accent-violet)]/10 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />
      
      {/* Layer 3: Telemetry Particles */}
      <motion.div animate={{ y: [-15, 15], opacity: [0.1, 0.4, 0.1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/4 left-[15%] size-1 bg-[var(--color-accent-cyan)] rounded-full shadow-[0_0_10px_var(--color-accent-cyan)] pointer-events-none" />
      <motion.div animate={{ y: [20, -20], opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-1/4 right-[20%] size-1.5 bg-[var(--color-accent-violet)] rounded-full shadow-[0_0_10px_var(--color-accent-violet)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 py-16 lg:py-24">
        
        {/* Floating Connector Label */}
        <div className="absolute top-8 left-8 hidden lg:flex items-center gap-3 opacity-40">
          <div className="w-8 h-px bg-white/30" />
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white">DATA_YIELD</span>
        </div>

        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center rounded-3xl border border-white/[0.04] bg-[#050811]/40 backdrop-blur-md py-12 lg:py-16 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02),0_40px_80px_-20px_rgba(0,0,0,0.8)] relative overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >
          
          {/* Active Signal Animation behind panel */}
          <motion.div 
            animate={{ x: ["-100%", "200%"] }} 
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }} 
            className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-[var(--color-accent-cyan)]/30 to-transparent z-20 opacity-50" 
          />

          {metrics.map((metric, index) => (
            <React.Fragment key={metric.label}>
              {/* Metric Item */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col items-center text-center md:items-start md:text-left px-8 lg:px-12 group relative flex-1"
              >
                {/* Subtle hover tracing glow (Layer 8) */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.06)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10" />

                <span className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-500 mb-4 select-none transition-colors duration-500 group-hover:text-[var(--color-accent-cyan)]/70">
                  <span className="size-1 rounded-full bg-zinc-700 transition-colors duration-500 group-hover:bg-[var(--color-accent-cyan)] shadow-[0_0_10px_transparent] group-hover:shadow-[var(--color-accent-cyan)]" />
                  {metric.signature}
                </span>
                
                {/* Typography System Upgrade (Layer 9) */}
                <span className="font-sans text-5xl font-semibold tracking-tighter text-white sm:text-6xl lg:text-7xl mb-3 leading-[0.9] transition-colors duration-500 group-hover:text-zinc-100">
                  {metric.value}
                </span>
                <span className="font-sans text-[11px] uppercase tracking-widest text-zinc-600 transition-colors duration-500 group-hover:text-zinc-400">
                  {metric.label}
                </span>
              </motion.div>

              {/* Vertical Separator between items */}
              {index < metrics.length - 1 && (
                <motion.div 
                  variants={{ hidden: { opacity: 0, scaleY: 0 }, visible: { opacity: 1, scaleY: 1, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } } }}
                  className="hidden h-24 w-px bg-white/[0.04] self-center md:block origin-top" 
                />
              )}
            </React.Fragment>
          ))}

        </motion.div>
      </div>
    </section>
  );
}
