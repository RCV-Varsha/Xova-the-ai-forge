"use client";

import React from "react";
import { motion } from "framer-motion";
import { IndustryService } from "@/types/service";
import { Server, Activity } from "lucide-react";

export default function TechnologiesGrid({ industry }: { industry: IndustryService }) {
  return (
    <section className="relative py-24 lg:py-32 bg-transparent border-t border-white/[0.05] overflow-hidden">
      {/* Background Active Infrastructure Nodes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ x: ["-10%", "110%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-[var(--color-accent-cyan)]/30 to-transparent blur-[1px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--color-accent-cyan)] blur-[150px] rounded-full"
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
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent-cyan)]/20 bg-[var(--color-accent-cyan)]/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent-cyan)] mb-6">
              <Server className="size-3" />
              <span>Core Infrastructure</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6">
              Deployed Technologies
            </h2>
            <p className="text-zinc-400 text-[17px] font-light leading-relaxed">
              We provision reliable, highly available, and secure operational foundations engineered specifically to handle enterprise-grade scaling and throughput.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {industry.technologies.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-8 rounded-2xl border border-white/5 bg-[#050811]/60 backdrop-blur-md shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] flex flex-col gap-6 items-start hover:-translate-y-1 transition-transform duration-500 overflow-hidden"
            >
              {/* Conic Border Sweep on Hover */}
              <div className="absolute inset-0 z-0 bg-[conic-gradient(from_0deg,transparent,transparent,var(--color-accent-violet),transparent,transparent)] opacity-0 group-hover:opacity-20 animate-[spin_3s_linear_infinite]" />
              
              {/* Active Signal Sweep (Subtle internal horizontal scan) */}
              <motion.div 
                animate={{ top: ["-100%", "200%"] }}
                transition={{ duration: 4, delay: idx * 0.8, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-[20%] bg-gradient-to-b from-transparent via-[var(--color-accent-cyan)]/[0.03] to-transparent pointer-events-none z-10 skew-y-12"
              />

              <div className="relative z-20 flex w-full items-center justify-between">
                <div className="size-14 shrink-0 rounded-xl border border-[var(--color-accent-cyan)]/20 bg-[var(--color-accent-cyan)]/10 flex items-center justify-center group-hover:bg-[var(--color-accent-cyan)]/20 transition-colors shadow-[0_0_20px_rgba(34,211,238,0.15)] group-hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] duration-500">
                  <Server className="size-6 text-[var(--color-accent-cyan)]" />
                </div>
                {/* Active Infrastructure Dot */}
                <div className="flex items-center gap-2">
                  <span className="text-[9px] uppercase tracking-widest text-zinc-500 group-hover:text-zinc-300 transition-colors">Active</span>
                  <div className="size-2 rounded-full border border-[var(--color-accent-cyan)]/30 bg-[#02040a] flex items-center justify-center shrink-0">
                    <motion.div 
                      animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, delay: idx * 0.2, repeat: Infinity, ease: "easeInOut" }}
                      className="size-1 rounded-full bg-[var(--color-accent-cyan)] shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                    />
                  </div>
                </div>
              </div>

              <div className="relative z-20">
                <h3 className="text-xl font-medium text-white tracking-tight mb-2 group-hover:text-[var(--color-accent-cyan)] transition-colors duration-300">
                  {tech.name}
                </h3>
                <p className="text-[15px] font-light text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
