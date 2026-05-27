"use client";

import React, { useRef, useState, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { IndustryService } from "@/types/service";
import Link from "next/link";
import { 
  ShoppingCart, Building2, Utensils, Sprout, 
  GraduationCap, Activity, Briefcase, CloudCog,
  ChevronRight, ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const IconMap: Record<string, any> = {
  ShoppingCart,
  Building2,
  Utensils,
  Sprout,
  GraduationCap,
  Activity,
  Briefcase,
  CloudCog,
};

export default function IndustryCard({ industry }: { industry: IndustryService }) {
  const Icon = IconMap[industry.iconName] || Building2;
  
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [3, -3]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-3, 3]);

  const glowX = useTransform(mouseXSpring, (v) => (v + 0.5) * 100);
  const glowY = useTransform(mouseYSpring, (v) => (v + 0.5) * 100);

  const glowBackground = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255, 255, 255, 0.08), transparent 40%)`;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <Link href={`/services/${industry.slug}`} className="group block h-full">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={cn(
          "relative h-full rounded-2xl border border-white/[0.05] bg-[#0A0F1D]/40 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.1),inset_0_0_20px_rgba(255,255,255,0.02)] overflow-hidden transition-all duration-700",
          isHovered ? "border-white/[0.12] bg-[#0D1426]/60 shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.15),inset_0_0_30px_rgba(255,255,255,0.04)] scale-[1.015] -translate-y-1" : ""
        )}
      >
        {/* Conic Gradient Border Sweep */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0%,transparent_70%,rgba(34,211,238,0.3)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{ transformOrigin: "center center" }}
        />
        <div className="absolute inset-[1px] rounded-2xl bg-[#0A0F1D] z-0" />

        {/* Subtle Reflective Corner Illumination */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.04),transparent_50%)]" />
        {/* Dynamic Glow */}
        <motion.div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{ opacity: isHovered ? 1 : 0, background: glowBackground }}
        />
        
        {/* Subtle Telemetry Scanline (Only on Hover) */}
        <motion.div 
          className={cn(
            "absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent-cyan)]/20 to-transparent pointer-events-none z-0 transition-opacity duration-700",
            isHovered ? "opacity-100" : "opacity-0"
          )}
          animate={{ top: ["-10%", "110%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-10 flex flex-col h-full p-6 lg:p-8" style={{ transform: "translateZ(30px)" }}>
          {/* Header */}
          <div className="flex justify-between items-start mb-5">
            <div className="p-2.5 rounded-lg border border-white/5 bg-white/[0.02]">
              <Icon className="size-6 text-zinc-300" />
            </div>
            <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[var(--color-accent-cyan)]">View</span>
              <ArrowRight className="size-3 text-[var(--color-accent-cyan)]" />
            </div>
          </div>
          
          <div className="mb-4">
             <h3 className="text-xl font-medium text-white tracking-tight mb-1.5">{industry.title}</h3>
             <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-zinc-500">{industry.subtitle}</p>
          </div>

          <p className="text-sm font-light text-zinc-400 leading-relaxed mb-8 flex-grow">
            {industry.shortDescription}
          </p>

          {/* Business Outcomes */}
          <div className="border-t border-white/[0.06] pt-5">
            <h4 className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 mb-3">Outcomes</h4>
            <ul className="space-y-2">
              {industry.businessOutcomes.slice(0, 3).map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                  <ChevronRight className="size-3.5 text-[var(--color-accent-violet)] mt-0.5 shrink-0" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* CTA Footer */}
          <div className="mt-6 pt-5 border-t border-white/[0.06] flex justify-between items-center">
            <span className="text-[11px] font-medium tracking-wide text-white/90 group-hover:text-white transition-colors">
              {industry.ctaText}
            </span>
            <div className="size-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[var(--color-accent-cyan)]/50 group-hover:bg-[var(--color-accent-cyan)]/10 transition-all duration-300">
              <ArrowRight className="size-3 text-zinc-400 group-hover:text-[var(--color-accent-cyan)]" />
            </div>
          </div>

        </div>
      </motion.div>
    </Link>
  );
}
