"use client";

import React from "react";
import { motion } from "framer-motion";
import { IndustryService } from "@/types/service";
import { Package, CheckCircle2 } from "lucide-react";

export default function DeliverablesPanel({ industry }: { industry: IndustryService }) {
  return (
    <section className="relative py-24 lg:py-32 bg-transparent border-t border-white/[0.05] overflow-hidden">
      {/* Background Depth */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[var(--color-accent-violet)] blur-[150px] opacity-10 rounded-full"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <div className="w-full lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent-violet)]/20 bg-[var(--color-accent-violet)]/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent-violet)] mb-6">
                <Package className="size-3" />
                <span>Finalized Assets</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
                Deployment Deliverables
              </h2>
              <p className="text-zinc-400 font-light leading-relaxed">
                The tangible operational infrastructure, compiled codebases, and systems architecture documentation you receive upon finalized deployment.
              </p>
            </motion.div>
          </div>

          <div className="w-full lg:w-2/3 grid gap-6 grid-cols-1 sm:grid-cols-2 relative">
            {/* Shimmering Traversal Background Beam linking the cards */}
            <motion.div 
              className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent-cyan)]/20 to-transparent pointer-events-none z-0"
              animate={{ opacity: [0, 1, 0], x: ["-100%", "100%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />

            {industry.deliverables.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-8 rounded-2xl border border-white/5 bg-[#050811]/80 backdrop-blur-md overflow-hidden flex flex-col gap-5 hover:-translate-y-1 transition-transform duration-500 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
              >
                {/* Conic Border Sweep on Hover */}
                <div className="absolute inset-0 z-0 bg-[conic-gradient(from_0deg,transparent,transparent,var(--color-accent-cyan),transparent,transparent)] opacity-0 group-hover:opacity-20 animate-[spin_4s_linear_infinite]" />
                
                {/* Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none z-10" />

                <div className="relative z-20 flex items-center justify-between">
                  <div className="size-12 rounded-xl border border-[var(--color-accent-violet)]/20 bg-[var(--color-accent-violet)]/10 flex items-center justify-center relative shadow-[0_0_20px_rgba(139,92,246,0.15)] group-hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-shadow duration-500">
                    <Package className="size-5 text-[var(--color-accent-violet)] relative z-10" />
                    {/* Pulsing indicator ring */}
                    <motion.div 
                       animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                       transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: idx * 0.5 }}
                       className="absolute inset-0 rounded-xl border border-[var(--color-accent-violet)]/50"
                    />
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[var(--color-accent-cyan)] bg-[var(--color-accent-cyan)]/10 px-2 py-1 rounded">
                    <CheckCircle2 className="size-3" />
                    Ready
                  </div>
                </div>

                <div className="relative z-20">
                  <h3 className="text-xl font-medium text-white tracking-tight mb-2 group-hover:text-[var(--color-accent-cyan)] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[15px] font-light text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
