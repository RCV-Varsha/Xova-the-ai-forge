"use client";

import React from "react";
import { motion } from "framer-motion";
import { IndustryService } from "@/types/service";
import { Target, Activity } from "lucide-react";

export default function BusinessOutcomes({ industry }: { industry: IndustryService }) {
  return (
    <section className="relative py-24 lg:py-32 bg-transparent border-t border-white/[0.05] overflow-hidden">
      {/* Background Active Infrastructure */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-accent-violet)] blur-[150px] rounded-full"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent-violet)]/20 bg-[var(--color-accent-violet)]/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent-violet)] mb-6">
              <Activity className="size-3" />
              <span>Performance Metrics</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6">
              Operational Outcomes
            </h2>
            <p className="text-zinc-400 text-[17px] font-light leading-relaxed">
              Transformational business impact driven directly by optimized architecture and automated telemetry processing.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industry.businessOutcomes.map((outcome, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-10 rounded-2xl border border-white/5 bg-[#050811]/60 backdrop-blur-md flex flex-col items-center text-center overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-transform duration-500"
            >
              {/* Conic Border Sweep on Hover */}
              <div className="absolute inset-0 z-0 bg-[conic-gradient(from_0deg,transparent,transparent,var(--color-accent-cyan),transparent,transparent)] opacity-0 group-hover:opacity-20 animate-[spin_4s_linear_infinite]" />
              
              {/* Internal Glass Reflection */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none z-10" />

              {/* Fluctuating Graph Motion Overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-16 flex items-end justify-center gap-1 opacity-20 group-hover:opacity-40 transition-opacity duration-500 z-0">
                 {[...Array(12)].map((_, barIdx) => (
                    <motion.div 
                      key={barIdx}
                      animate={{ height: ["10%", `${Math.random() * 80 + 20}%`, "10%"] }}
                      transition={{ duration: Math.random() * 2 + 1.5, repeat: Infinity, ease: "easeInOut", delay: Math.random() }}
                      className="w-1.5 bg-[var(--color-accent-violet)] rounded-t-sm"
                    />
                 ))}
              </div>

              <div className="relative z-20 flex flex-col items-center">
                <div className="relative mb-6">
                  <div className="size-16 rounded-2xl border border-[var(--color-accent-violet)]/20 bg-[var(--color-accent-violet)]/10 flex items-center justify-center relative shadow-[0_0_20px_rgba(139,92,246,0.15)] group-hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-shadow duration-500">
                    <Target className="size-7 text-[var(--color-accent-violet)] relative z-10" />
                    
                    {/* Pulsing Target Ring */}
                    <motion.div 
                       animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                       transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: idx * 0.3 }}
                       className="absolute inset-0 rounded-2xl border border-[var(--color-accent-violet)]/40"
                    />
                  </div>

                  {/* Active Telemetry Dot */}
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-1 -right-1 size-3 rounded-full bg-[var(--color-accent-cyan)] shadow-[0_0_10px_var(--color-accent-cyan)] border-2 border-[#050811]"
                  />
                </div>

                <p className="text-xl font-medium text-white tracking-tight leading-snug group-hover:text-[var(--color-accent-violet)] transition-colors duration-300">
                  {outcome}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
