"use client";

import React from "react";
import { motion } from "framer-motion";
import { IndustryService } from "@/types/service";
import { CheckCircle2 } from "lucide-react";

export default function SolutionsSection({ industry }: { industry: IndustryService }) {
  return (
    <section className="py-16 lg:py-24 bg-[#050811] border-t border-white/[0.05]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row-reverse gap-12 lg:gap-24">
          
          <div className="md:w-1/3 relative">
            <div className="absolute -right-8 top-2 bottom-0 w-px bg-gradient-to-b from-[var(--color-accent-cyan)]/50 to-transparent" />
            <motion.div 
               animate={{ y: [0, 100, 0] }}
               transition={{ duration: 3.5, repeat: Infinity, ease: "linear", delay: 1 }}
               className="absolute -right-[33px] top-2 size-2 rounded-full bg-[var(--color-accent-cyan)] shadow-[0_0_10px_rgba(34,211,238,0.8)]"
            />
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">
              XOVA Solutions
            </h2>
            <p className="text-sm font-light text-zinc-400">
              Architectural interventions to resolve operational friction.
            </p>
          </div>

          <div className="md:w-2/3">
            <div className="grid gap-6">
              {industry.solutions.map((solution, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-4 p-6 rounded-xl border border-[var(--color-accent-cyan)]/10 bg-[#02040a] relative overflow-hidden group hover:border-[var(--color-accent-cyan)]/30 transition-colors duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent-cyan)]/[0.02] to-transparent pointer-events-none group-hover:from-[var(--color-accent-cyan)]/[0.05] transition-colors duration-500" />
                  
                  {/* Glow propagation between nodes */}
                  <motion.div 
                    animate={{ opacity: [0, 0.5, 0], scale: [0.8, 1.2, 0.8] }}
                    transition={{ duration: 3, delay: idx * 0.4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute right-4 top-4 size-1.5 rounded-full bg-[var(--color-accent-cyan)]/50"
                  />

                  {/* Horizontal traversal particles */}
                  <motion.div 
                    className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent-cyan)]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />

                  <div className="relative z-10 bg-[var(--color-accent-cyan)]/10 p-2 rounded-lg shrink-0 group-hover:bg-[var(--color-accent-cyan)]/20 transition-colors duration-300">
                    <CheckCircle2 className="size-5 text-[var(--color-accent-cyan)]" />
                  </div>
                  <p className="text-[15px] font-light text-zinc-300 leading-relaxed relative z-10 pt-1 group-hover:text-white transition-colors duration-300">
                    {solution}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
