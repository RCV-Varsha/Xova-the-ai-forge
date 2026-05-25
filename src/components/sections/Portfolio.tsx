"use client"

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { DiaTextReveal } from "@/components/animations/DiaTextReveal";
import { Highlighter } from "@/components/animations/Highlighter";

// Premium magnetic following inspection HUD container
// Tracks the mouse relative to the card dimensions and moves a micro-hud display with visual delay.
interface InspectionContainerProps {
  children: React.ReactNode;
  className?: string;
}

const InspectionContainer = ({ children, className }: InspectionContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const hudRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    const hud = hudRef.current;
    if (!container || !hud) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = Math.round(e.clientX - rect.left);
      const y = Math.round(e.clientY - rect.top);

      setCoords({ x, y });

      // Hardware accelerated translation with slow damping transition
      hud.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      hud.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      hud.style.opacity = "0";
    };

    container.addEventListener("mousemove", handleMouseMove, { passive: true });
    container.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
    >
      {/* Monospace Telemetry Coordinate HUD (Lagging softly behind cursor) */}
      <div
        ref={hudRef}
        className="absolute z-30 pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded border border-white/10 bg-[#080d1a]/95 backdrop-blur px-2.5 py-1 text-[8px] font-mono tracking-widest text-[#00ffd0]/80 shadow-[0_4px_12px_rgba(0,0,0,0.6)] flex items-center gap-2 opacity-0 transition-opacity duration-300 ease-out"
        style={{
          left: 0,
          top: 0,
          transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease",
        }}
      >
        <span className="size-1 rounded-full bg-[#00ffd0] animate-ping" />
        <span>SYS_INSPECT // X:{coords.x} Y:{coords.y}</span>
      </div>
      {children}
    </div>
  );
};

export default function Portfolio() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // tighter stagger
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.98, filter: "blur(2px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.0,
        ease: [0.25, 1, 0.5, 1] as const
      }
    }
  };

  const imageWrapperVariants = {
    hidden: { opacity: 0, scale: 0.96, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.25, 1, 0.5, 1] as const
      }
    }
  };

  return (
    <section className="relative w-full bg-transparent py-20 lg:py-24 overflow-hidden" id="portfolio">
      
      {/* Deep atmospheric backdrop - structural lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.015)_0%,transparent_80%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 max-w-3xl mx-auto text-center flex flex-col items-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),_0_0_15px_rgba(255,255,255,0.01)] border border-white/5 bg-white/[0.02] px-3.5 py-1.5 rounded-full">
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-500"></span>
            [ PRODUCTION DEPLOYMENTS ]
          </div>
          <h2 className="mb-6 font-sans text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">
            <DiaTextReveal text="Verified Production Systems" />
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
            Case studies of <Highlighter>operational architecture</Highlighter> developed for
            rapid-growth ventures and institutional pipelines.
          </p>
        </motion.div>

        {/* Case Study 1 - PrintMaania */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12 items-center mb-36 lg:mb-48"
        >
          {/* Mockup */}
          <motion.div variants={imageWrapperVariants} className="lg:col-span-8 order-1 relative group">
            {/* Atmospheric glow behind mockup */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-white/[0.03] to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <InspectionContainer className="relative overflow-hidden rounded-xl border border-white/[0.12] bg-[#050914] p-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_30px_60px_rgba(0,0,0,0.8)] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:border-white/20 group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_40px_80px_rgba(0,0,0,0.9)] group-hover:-translate-y-1">
              
              {/* Technical Runtime Overlay */}
              <div className="absolute top-4 left-4 z-20 flex flex-col gap-1.5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <div className="inline-flex items-center gap-1.5 rounded border border-white/10 bg-[#080d1a]/80 backdrop-blur px-2 py-1 shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                  <span className="size-1 rounded-full bg-white/60 animate-pulse" />
                  <span className="font-mono text-[8px] tracking-widest text-white/80">RUNTIME: ACTIVE</span>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded border border-white/10 bg-[#080d1a]/80 backdrop-blur px-2 py-1 shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                  <span className="font-mono text-[8px] tracking-widest text-zinc-400">LATENCY: 14MS</span>
                </div>
              </div>

              <div className="relative w-full overflow-hidden rounded-lg bg-zinc-900 border border-black/50">
                <Image
                  src="/portfolio/printmaania.png"
                  alt="PrintMaania Customized Commerce Website"
                  width={1920}
                  height={1080}
                  unoptimized
                  className="w-full h-auto rounded-lg object-cover object-top opacity-90 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.015] group-hover:opacity-100"
                  priority
                />
              </div>
            </InspectionContainer>
          </motion.div>

          {/* Info */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center lg:col-span-4 order-2 space-y-8 pl-0 lg:pl-4">
            <div className="space-y-4">
              <div className="font-mono text-[9px] uppercase tracking-widest text-zinc-500">
                [ CASE_01 // COMMERCE_INFRASTRUCTURE ]
              </div>
              <h3 className="font-sans text-3xl font-medium tracking-tight text-white">
                PrintMaania
              </h3>
              <p className="text-base text-zinc-300 font-normal leading-snug">
                Commerce infrastructure for personalized printing.
              </p>
              <p className="text-sm leading-relaxed text-zinc-400 font-normal tracking-wide">
                Engineered a complete digital foundation mapping user flows from landing to bulk order placement. Focus on catalog routing and secure checkout pipelines.
              </p>
            </div>

            {/* Testimonial */}
            <div className="border-l-2 border-white/10 pl-6 py-1 space-y-2 group cursor-default">
              <p className="italic text-zinc-400 text-sm leading-relaxed transition-colors duration-500 group-hover:text-zinc-300">
                “Xova Digital Solutions provided the best solution for reaching customers with a customized website. We would like to continue working with them for future expansion.”
              </p>
              <span className="block font-mono text-[9px] uppercase tracking-widest text-zinc-500 transition-colors duration-500 group-hover:text-zinc-400">
                — Co-Founder, Print Maania
              </span>
            </div>

            {/* Services provided */}
            <div className="space-y-3 pt-2">
              <span className="block font-mono text-[9px] uppercase tracking-widest text-zinc-500">
                System Components
              </span>
              <div className="flex flex-wrap gap-2">
                {["Website Design", "Admin Dashboard", "Product Management", "Operational Customization"].map((svc) => (
                  <span key={svc} className="rounded border border-white/5 bg-white/[0.02] px-3 py-1 font-mono text-[9px] text-zinc-400 hover:bg-white/[0.05] hover:border-white/10 transition-colors duration-300">
                    {svc}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Case Study 2 - Inventum Publishers */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12 items-center"
        >
          {/* Info */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center lg:col-span-4 order-2 lg:order-1 space-y-8 pr-0 lg:pr-4">
            <div className="space-y-4">
              <div className="font-mono text-[9px] uppercase tracking-widest text-zinc-500">
                [ CASE_02 // PUBLISHING_SYSTEMS ]
              </div>
              <h3 className="font-sans text-3xl font-medium tracking-tight text-white">
                Inventum Publishers
              </h3>
              <p className="text-base text-zinc-300 font-normal leading-snug">
                Editorial publishing platform and journal workflow interface.
              </p>
              <p className="text-sm leading-relaxed text-zinc-400 font-normal tracking-wide">
                Restructured manuscript submission routing and journal directory systems, delivering a unified portal and clear information architecture for academic processing.
              </p>
            </div>

            {/* Testimonial */}
            <div className="border-l-2 border-white/10 pl-6 py-1 space-y-2 group cursor-default">
              <p className="italic text-zinc-400 text-sm leading-relaxed transition-colors duration-500 group-hover:text-zinc-300">
                “Now the page alignment is fixed. Looks professional.”
              </p>
              <span className="block font-mono text-[9px] uppercase tracking-widest text-zinc-500 transition-colors duration-500 group-hover:text-zinc-400">
                — Inventum Publishers
              </span>
            </div>

            {/* Services provided */}
            <div className="space-y-3 pt-2">
              <span className="block font-mono text-[9px] uppercase tracking-widest text-zinc-500">
                System Components
              </span>
              <div className="flex flex-wrap gap-2">
                {["Editorial UI/UX", "Publishing Workflow Design", "Information Architecture", "Journal Navigation Systems"].map((svc) => (
                  <span key={svc} className="rounded border border-white/5 bg-white/[0.02] px-3 py-1 font-mono text-[9px] text-zinc-400 hover:bg-white/[0.05] hover:border-white/10 transition-colors duration-300">
                    {svc}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Mockup */}
          <motion.div variants={imageWrapperVariants} className="lg:col-span-8 order-1 lg:order-2 relative group">
            {/* Atmospheric glow behind mockup */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-white/[0.03] to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <InspectionContainer className="relative overflow-hidden rounded-xl border border-white/[0.12] bg-[#050914] p-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_30px_60px_rgba(0,0,0,0.8)] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:border-white/20 group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_40px_80px_rgba(0,0,0,0.9)] group-hover:-translate-y-1">
              
              {/* Technical Runtime Overlay */}
              <div className="absolute top-4 right-4 z-20 flex flex-col gap-1.5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 items-end">
                <div className="inline-flex items-center gap-1.5 rounded border border-white/10 bg-[#080d1a]/80 backdrop-blur px-2 py-1 shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                  <span className="font-mono text-[8px] tracking-widest text-white/80">SYSTEM: DEPLOYED</span>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded border border-white/10 bg-[#080d1a]/80 backdrop-blur px-2 py-1 shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                  <span className="font-mono text-[8px] tracking-widest text-zinc-400">INDEX: SYNCED</span>
                </div>
              </div>

              <div className="relative w-full overflow-hidden rounded-lg bg-zinc-900 border border-black/50">
                <Image
                  src="/portfolio/inventum.png"
                  alt="Inventum Publishers Publication Portal"
                  width={1024}
                  height={473}
                  unoptimized
                  className="w-full h-auto rounded-lg object-cover object-top opacity-90 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.015] group-hover:opacity-100"
                />
              </div>
            </InspectionContainer>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
