"use client";

import React from "react";
import { motion } from "framer-motion";
import { IndustryService } from "@/types/service";
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
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[var(--color-accent-violet)]/[0.04] blur-[150px] rounded-full pointer-events-none" />
      
      {/* Architectural Grid & Beams for visual depth */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
      <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--color-accent-cyan)]/20 to-transparent opacity-50" />
      <div className="absolute right-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--color-accent-violet)]/20 to-transparent opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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

          {/* Visual Element (Wireframe/Abstract Representation) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative h-[350px] lg:h-[450px] rounded-3xl border border-white/10 bg-[#050812]/80 backdrop-blur-md flex items-center justify-center overflow-hidden shadow-2xl"
          >
            {/* Inner blueprint texture */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
            
            {/* Dynamic radar / orbit element */}
            <div className="relative size-48 rounded-full border border-white/20 flex items-center justify-center">
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-[-20px] rounded-full border border-dashed border-[var(--color-accent-cyan)]/30"
               />
               <motion.div 
                 animate={{ rotate: -360 }}
                 transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-[20px] rounded-full border border-dotted border-[var(--color-accent-violet)]/40"
               />
               <Icon className="size-16 text-white/70 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
               
               <motion.div 
                 className="absolute w-[2px] h-[50px] bg-gradient-to-b from-[var(--color-accent-cyan)] to-transparent"
                 animate={{ rotate: 360, transformOrigin: "bottom center", top: "-50px" }}
                 transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
               />
            </div>

            {/* Corner tech accents */}
            <div className="absolute top-4 left-4 size-2 border-t border-l border-[var(--color-accent-cyan)]/50" />
            <div className="absolute top-4 right-4 size-2 border-t border-r border-[var(--color-accent-cyan)]/50" />
            <div className="absolute bottom-4 left-4 size-2 border-b border-l border-[var(--color-accent-cyan)]/50" />
            <div className="absolute bottom-4 right-4 size-2 border-b border-r border-[var(--color-accent-cyan)]/50" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
