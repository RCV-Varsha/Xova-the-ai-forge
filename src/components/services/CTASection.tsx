"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Activity, Network } from "lucide-react";
import { IndustryService } from "@/types/service";

import { Globe } from "@/components/ui/globe";
import { ProjectScopingConsole } from "@/components/services/ProjectScopingConsole";

// Magnetic Button Wrapper
function MagneticButton({ children, href }: { children: React.ReactNode, href: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // Magnetic pull strength
    x.set(distanceX * 0.2);
    y.set(distanceY * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div style={{ x: springX, y: springY }} className="inline-block z-20 relative">
      <Link
        ref={ref}
        href={href}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative inline-flex items-center justify-center gap-3 px-8 py-5 rounded bg-white text-black font-semibold uppercase tracking-[0.15em] text-[12px] transition-all hover:bg-zinc-100 overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.15)]"
      >
        {/* Shimmer Sweep inside Button */}
        <motion.div 
          animate={{ left: ["-100%", "200%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
          className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]"
        />
        <span className="relative z-10">{children}</span>
        <ArrowRight className="size-4 relative z-10 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}

export default function CTASection({ industry }: { industry?: IndustryService }) {
  const ctaText = industry?.ctaText || "Initiate Infrastructure Planning";
  
  return (
    <section className="relative py-32 lg:py-48 bg-transparent border-t border-white/[0.05]">
      
      {/* 1. Giant Atmospheric Globe & Fog */}
      {/* Moved down and right, scaled down: 1100px Desktop, 900px Tablet, 700px Mobile */}
      <div className="absolute top-[62%] left-[58%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] md:w-[900px] md:h-[900px] lg:w-[1100px] lg:h-[1100px] z-0 flex items-center justify-center">
        
        {/* Layer 1: Reduced backlight halo */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-radial from-[var(--color-accent-cyan)]/15 via-[var(--color-accent-violet)]/5 to-transparent blur-[120px] rounded-full pointer-events-none z-0"
        />

        {/* Layer 2: Masked Operational Globe */}
        <div 
          className="absolute inset-[-50px] opacity-85 z-10 flex items-center justify-center pointer-events-auto relative rounded-full"
          style={{ maskImage: "radial-gradient(circle at center, black 40%, transparent 75%)", WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 75%)" }}
        >
          <Globe />
          
          {/* Layer 3: Foreground Telemetry Arcs & Wireframe structure */}
          {/* Softened edge rims */}
          <div className="absolute inset-10 rounded-full border border-white/[0.01] shadow-[inset_0_0_40px_rgba(34,211,238,0.1)] pointer-events-none" />
          
          {/* Orbital Lat/Long wireframes - Softened */}
          <motion.div 
             animate={{ rotateX: 360, rotateY: 360 }}
             transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
             className="absolute inset-[15%] rounded-full border border-[var(--color-accent-cyan)]/5 border-dashed pointer-events-none opacity-20"
             style={{ transformStyle: "preserve-3d" }}
          />
          <motion.div 
             animate={{ rotateX: -360, rotateZ: 360 }}
             transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
             className="absolute inset-[25%] rounded-full border border-[var(--color-accent-violet)]/5 pointer-events-none opacity-20"
             style={{ transformStyle: "preserve-3d" }}
          />

          {/* Layer 4: Soft Light Sweep */}
          <motion.div
             animate={{ rotate: [0, 360] }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             className="absolute inset-0 rounded-full opacity-20 pointer-events-none mix-blend-overlay"
             style={{ background: "linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.7) 50%, transparent 60%)", maskImage: "radial-gradient(circle, transparent 20%, black 100%)" }}
          />

          {/* Pulsing UI Markers overlaying the globe - Removed or reduced */}
          <div className="absolute inset-0 pointer-events-none opacity-30">
             <motion.div 
               animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-[30%] left-[60%] size-1.5 rounded-full bg-[var(--color-accent-cyan)] shadow-[0_0_10px_var(--color-accent-cyan)]"
             />
          </div>
        </div>
      </div>
      
      {/* Blueprint Grid - Reduced Opacity for less competition */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none z-0" />

      {/* Floating Institutional Infrastructure Lines - reduced opacity */}
      <motion.div 
        className="absolute left-0 right-0 top-1/3 h-px bg-gradient-to-r from-transparent via-[var(--color-accent-cyan)]/5 to-transparent z-0 hidden md:block"
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute left-0 right-0 bottom-1/3 h-px bg-gradient-to-r from-transparent via-[var(--color-accent-violet)]/5 to-transparent z-0 hidden md:block"
        animate={{ opacity: [0.1, 0.2, 0.1], x: [-30, 30, -30] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center mt-10 md:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="p-12 md:p-16 rounded-3xl border border-white/5 bg-[#050811]/40 backdrop-blur-md shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.05)] relative overflow-hidden"
        >
          {/* Shimmering Traversal Beam in Panel */}
          <motion.div 
            animate={{ left: ["-100%", "200%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 h-[2px] w-1/3 bg-gradient-to-r from-transparent via-[var(--color-accent-cyan)] to-transparent blur-[1px]"
          />

          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent-violet)]/20 bg-[var(--color-accent-violet)]/5 px-4 py-1.5 uppercase tracking-[0.2em] text-[11px] text-[var(--color-accent-violet)] mb-8">
             <Network className="size-3.5" />
             <span>Enterprise Deployment</span>
          </div>
          
          <div className="w-full relative z-20">
            <ProjectScopingConsole />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
