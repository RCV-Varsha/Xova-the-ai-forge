"use client";

import React from "react";
import { motion } from "framer-motion";
import { IndustryService } from "@/types/service";
import { Globe } from "@/components/ui/globe";
import { 
  ShoppingCart, Building2, Utensils, Sprout, 
  GraduationCap, Activity, Briefcase, CloudCog, Check
} from "lucide-react";

const IconMap: Record<string, any> = {
  ShoppingCart, Building2, Utensils, Sprout, 
  GraduationCap, Activity, Briefcase, CloudCog
};

export default function IndustryHero({ industry }: { industry: IndustryService }) {
  const Icon = IconMap[industry.iconName] || Building2;

  return (
    <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden border-b border-white/[0.05]">
      {/* Atmospheric Background Globe (Subtle Fragment) */}
      <div className="absolute -top-[400px] right-[-200px] w-[1200px] h-[1200px] opacity-[0.25] pointer-events-none z-0">
         <Globe />
      </div>

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[var(--color-accent-violet)]/[0.04] blur-[150px] rounded-full pointer-events-none z-0" />
      
      {/* Architectural Grid & Beams for visual depth */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none z-0" />
      <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--color-accent-cyan)]/20 to-transparent opacity-50 z-0" />
      <div className="absolute right-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--color-accent-violet)]/20 to-transparent opacity-50 z-0" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(10px)", clipPath: "inset(100% 0 0 0)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent-cyan)]/20 bg-[var(--color-accent-cyan)]/5 px-4 py-1.5 uppercase tracking-[0.25em] text-[11px] text-[var(--color-accent-cyan)] mb-8">
              <Icon className="size-3.5" />
              <span>{industry.title}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-white mb-6">
              {industry.heroTagline || industry.subtitle}
            </h1>
            
            <p className="text-zinc-400 text-lg lg:text-xl leading-relaxed max-w-xl mb-10">
              {industry.shortDescription}
            </p>

            {/* Metadata Row */}
            {industry.heroMetadata && industry.heroMetadata.length > 0 && (
              <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
                {industry.heroMetadata.map((meta, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="size-4 text-[var(--color-accent-violet)]" />
                    <span className="text-xs uppercase font-mono tracking-widest text-zinc-300">{meta}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Visual Element (Holographic Institutional Sphere) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative h-[400px] lg:h-[500px] rounded-3xl border border-white/10 bg-[#050812]/80 backdrop-blur-md flex items-center justify-center overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.05)] group"
          >
            {/* Subtle environmental pulse */}
            <motion.div
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-cyan)]/10 to-[var(--color-accent-violet)]/10 pointer-events-none"
            />
            
            {/* Inner blueprint texture */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
            
            {/* Telemetry Beam Traversal */}
            <motion.div 
               animate={{ top: ["-10%", "110%"] }}
               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
               className="absolute left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-[var(--color-accent-cyan)]/50 to-transparent blur-[2px] opacity-50 z-20"
            />

            {/* Dynamic radar / orbit element */}
            <div className="relative size-48 md:size-64 rounded-full border border-white/20 flex items-center justify-center shadow-[inset_0_0_40px_rgba(34,211,238,0.1)]">
               <motion.div 
                 animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                 transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
                 className="absolute inset-[-20px] md:inset-[-30px] rounded-full border border-dashed border-[var(--color-accent-cyan)]/30"
               />
               <motion.div 
                 animate={{ rotate: -360, scale: [1, 0.95, 1] }}
                 transition={{ rotate: { duration: 40, repeat: Infinity, ease: "linear" }, scale: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
                 className="absolute inset-[20px] md:inset-[30px] rounded-full border border-dotted border-[var(--color-accent-violet)]/40"
               />
               <Icon className="size-16 md:size-20 text-white/80 drop-shadow-[0_0_20px_rgba(34,211,238,0.4)] relative z-10" />
               
               <motion.div 
                 className="absolute w-[2px] h-[50px] md:h-[70px] bg-gradient-to-b from-[var(--color-accent-cyan)] to-transparent"
                 animate={{ rotate: 360, top: "-50px" }}
                 transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                 style={{ top: "calc(50% - 70px)", transformOrigin: "bottom center" }}
               />
            </div>

            {/* Floating Infrastructure Cards */}
            <motion.div
               animate={{ y: [-5, 5, -5] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-10 right-10 bg-white/5 border border-white/10 backdrop-blur-md rounded-lg p-3 flex items-center gap-3 shadow-xl"
            >
               <div className="size-2 rounded-full bg-emerald-400 animate-pulse" />
               <div className="flex flex-col gap-1">
                 <div className="w-12 h-1 bg-white/20 rounded" />
                 <div className="w-8 h-1 bg-white/10 rounded" />
               </div>
            </motion.div>

            <motion.div
               animate={{ y: [5, -5, 5] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute bottom-10 left-10 bg-white/5 border border-white/10 backdrop-blur-md rounded-lg p-3 flex items-center gap-3 shadow-xl"
            >
               <div className="flex flex-col gap-1">
                 <div className="w-16 h-1.5 bg-[var(--color-accent-cyan)]/40 rounded" />
                 <div className="w-10 h-1 bg-white/10 rounded" />
               </div>
            </motion.div>

            {/* Corner tech accents */}
            <div className="absolute top-6 left-6 size-3 border-t border-l border-[var(--color-accent-cyan)]/40" />
            <div className="absolute top-6 right-6 size-3 border-t border-r border-[var(--color-accent-cyan)]/40" />
            <div className="absolute bottom-6 left-6 size-3 border-b border-l border-[var(--color-accent-cyan)]/40" />
            <div className="absolute bottom-6 right-6 size-3 border-b border-r border-[var(--color-accent-cyan)]/40" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
