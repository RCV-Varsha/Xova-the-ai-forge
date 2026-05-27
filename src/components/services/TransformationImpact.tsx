"use client";

import React from "react";
import { motion } from "framer-motion";
import { IndustryService } from "@/types/service";
import { TrendingUp } from "lucide-react";

export default function TransformationImpact({ industry }: { industry: IndustryService }) {
  if (!industry.transformationImpacts || industry.transformationImpacts.length === 0) return null;

  return (
    <section className="py-16 lg:py-24 bg-[#050811] border-y border-white/[0.05]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
          
          <div className="md:w-1/3">
            <div className="inline-flex items-center gap-2 rounded-sm border border-[var(--color-accent-violet)]/20 bg-[var(--color-accent-violet)]/5 px-3 py-1.5 uppercase tracking-[0.25em] text-[10px] text-[var(--color-accent-violet)] mb-6">
              <TrendingUp className="size-3.5" />
              <span>Business Value</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
              Operational Transformation
            </h2>
            <p className="text-sm font-light text-zinc-400">
              Measurable improvements to your bottom line and daily workflows.
            </p>
          </div>

          <div className="md:w-2/3">
            <div className="grid gap-6">
              {industry.transformationImpacts.map((impact, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="p-6 rounded-xl border border-white/5 bg-[#02040a] relative overflow-hidden group hover:border-white/10 transition-colors duration-500 shadow-[0_5px_20px_rgba(0,0,0,0.3)]"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--color-accent-cyan)]/20 group-hover:bg-[var(--color-accent-cyan)] transition-colors duration-500" />
                  
                  {/* Live Data Throughput Simulation */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent-violet)]/50 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                    />
                    {/* Animated Analytics Bars */}
                    <div className="absolute bottom-4 right-4 flex items-end gap-1 opacity-20">
                      {[1, 2, 3].map((bar) => (
                        <motion.div 
                          key={bar}
                          className="w-1 bg-[var(--color-accent-cyan)] rounded-t-sm"
                          animate={{ height: [4, Math.random() * 20 + 10, 4] }}
                          transition={{ duration: Math.random() * 1.5 + 1, repeat: Infinity, ease: "easeInOut" }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="pl-4 relative z-10">
                    <h3 className="text-lg font-medium text-white tracking-tight mb-1">{impact.title}</h3>
                    <p className="text-[15px] font-light text-zinc-400 leading-relaxed">
                      {impact.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
