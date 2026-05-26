"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IndustryService } from "@/types/service";

export default function CTASection({ industry }: { industry?: IndustryService }) {
  const ctaText = industry?.ctaText || "Initiate Infrastructure Planning";
  
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#02040a] z-0" />
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-[var(--color-accent-violet)]/[0.05] blur-[120px] rounded-full pointer-events-none z-0" />
      
      {/* Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="p-12 md:p-16 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] relative overflow-hidden"
        >
          {/* Internal subtle glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-cyan)]/[0.03] to-[var(--color-accent-violet)]/[0.03] pointer-events-none" />
          
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Architect Your Digital Systems
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto font-light">
            Discuss your operational bottlenecks with our engineering team. We’ll design a high-performance infrastructure tailored specifically to your {industry ? industry.title.toLowerCase() : "business"} workflows.
          </p>
          
          <Link 
            href="/initiate"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm bg-white text-black font-semibold uppercase tracking-[0.15em] text-[12px] transition-all hover:bg-zinc-200 hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            {ctaText}
            <ArrowRight className="size-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
