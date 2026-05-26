"use client";

import React from "react";
import { motion } from "framer-motion";
import { Network } from "lucide-react";

export default function ServiceHero() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden border-b border-white/[0.05]">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[var(--color-accent-cyan)]/[0.03] blur-[120px] rounded-full pointer-events-none" />
      
      {/* Architectural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent-cyan)]/20 bg-[var(--color-accent-cyan)]/5 px-4 py-1.5 uppercase tracking-[0.25em] text-[11px] text-[var(--color-accent-cyan)] mb-8">
            <Network className="size-3.5" />
            <span>Services Ecosystem</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1] text-white mb-6">
            Industry-Focused
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-500">
              Digital Infrastructure
            </span>
          </h1>
          
          <p className="text-zinc-400 text-lg lg:text-xl leading-relaxed max-w-2xl">
            Enterprise-grade web systems tailored for modern MSMEs and scalable businesses. We architect the operational foundations for your industry.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
