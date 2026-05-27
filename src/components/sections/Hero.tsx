"use client"

import React, { useEffect, useRef } from "react"
import Link from "next/link"
import { motion, useAnimation, useInView, Variants } from "framer-motion"
import { ArrowUpRight, Activity, Terminal, Shield } from "lucide-react"
import { Meteors } from "@/components/animations/Meteors"
import { TypingAnimation } from "@/components/animations/TypingAnimation"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Entrance Animation Setup
  const controls = useAnimation()
  const inView = useInView(containerRef, { once: true, margin: "-10%" })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [inView, controls])

  // Framer Motion Variants
  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  }

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(12px)", clipPath: "inset(0 0 100% 0)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      clipPath: "inset(0 0 0% 0)",
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const } 
    },
  }

  return (
    <section 
      ref={containerRef}
      aria-label="Hero — XOVA Core Systems"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">
          
          {/* LEFT: Typography & CTAs */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate={controls}
            className="flex flex-col items-start text-left pt-12 lg:pt-0 max-w-[640px]"
          >
            {/* Status Badge */}
            <motion.div variants={fadeUp} className="mb-4 relative group">
              <div aria-hidden="true" className="absolute -inset-1.5 bg-[var(--color-accent-cyan)]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div
                role="status"
                aria-label="System status: Engine online"
                className="relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#080d1a]/80 backdrop-blur-md px-3.5 py-1.5 text-[10px] font-mono tracking-widest text-zinc-400 uppercase select-none transition-colors hover:border-[var(--color-accent-cyan)]/30"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent-cyan)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--color-accent-cyan)] shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                </span>
                <span>XOVA_CORE_SYS</span>
                <span className="text-[var(--color-accent-cyan)]/80 font-medium">ONLINE</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              variants={fadeUp}
              className="text-[3.5rem] sm:text-6xl lg:text-7xl font-semibold tracking-tighter text-white leading-[0.95] max-w-[680px]"
            >
              Engineering the <br className="hidden lg:block"/> 
              <span className="text-zinc-300">digital engines</span> <br className="hidden lg:block"/>
              of modern enterprise.
            </motion.h1>

            {/* Description */}
            <motion.div 
              variants={fadeUp}
              className="mt-6 text-base sm:text-lg text-[var(--color-text-secondary)] font-light tracking-wide max-w-[540px] leading-relaxed"
            >
              We build high-performance virtual architecture and agentic pipelines. System-native platforms engineered for precision, scale, and operational velocity.
            </motion.div>

            {/* CTAs */}
            <motion.div 
              variants={fadeUp}
              className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto relative z-30 pointer-events-auto items-center"
            >
              <div className="relative group">
                {/* Breathing Radial Glow */}
                <motion.div 
                  animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -inset-2 rounded-full bg-gradient-to-r from-[var(--color-accent-cyan)]/20 to-[var(--color-accent-violet)]/20 blur-md pointer-events-none"
                />
                <Link
                  href="/services"
                  className="relative inline-flex items-center justify-center gap-2 rounded-full bg-white text-black hover:bg-zinc-100 font-semibold text-xs tracking-wider uppercase px-8 h-12 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.25)] hover:-translate-y-0.5 active:scale-95 overflow-hidden"
                >
                  <motion.div 
                    animate={{ x: ["-150%", "250%"] }} 
                    transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                    className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12" 
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Services
                    <ArrowUpRight className="size-4" />
                  </span>
                </Link>
              </div>

              <Link
                href="/initiate"
                className="inline-flex items-center justify-center rounded-full border border-white/[0.08] bg-transparent text-zinc-300 hover:bg-white/[0.03] hover:text-white hover:border-white/[0.15] font-medium text-xs tracking-wider uppercase px-8 h-12 transition-all duration-300 active:scale-95 backdrop-blur-sm"
              >
                Initiate Project
              </Link>
            </motion.div>

            {/* Trust / Metadata Metrics Marquee */}
            <motion.div
              variants={fadeUp}
              className="mt-12 w-[120%] -ml-[10%] sm:w-[150%] sm:-ml-[25%] lg:w-full lg:ml-0 overflow-hidden relative z-30 pt-6 border-t border-white/[0.04]"
            >
              {/* Fade Edges for Marquee */}
              <div className="absolute inset-y-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-[#030509] to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-[#030509] to-transparent z-10" />
              
              <div className="flex w-full relative h-6 opacity-60">
                <motion.div
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ duration: 40, ease: "linear", repeat: Infinity }}
                  className="flex whitespace-nowrap items-center gap-10 font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-zinc-400 uppercase w-max"
                >
                  <span className="flex items-center gap-10">Hospitality • Educare • B2B Systems • Agriculture • E-Commerce • SaaS Platforms • Healthcare • Professional Services • AI Infrastructure • Enterprise Automation</span>
                  <span className="flex items-center gap-10">Hospitality • Educare • B2B Systems • Agriculture • E-Commerce • SaaS Platforms • Healthcare • Professional Services • AI Infrastructure • Enterprise Automation</span>
                </motion.div>
              </div>
            </motion.div>

          </motion.div>

          {/* RIGHT: Floating Dashboard & Telemetry */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full mt-16 lg:mt-0 z-10 relative flex justify-end items-center"
          >
            {/* HERO TOPOLOGY BACKGROUND */}
            <div className="absolute right-[-10%] top-[5%] w-[800px] max-w-[80vw] z-0 pointer-events-none opacity-[0.15] mix-blend-screen select-none hidden lg:block">
              <div className="absolute inset-0 bg-[var(--color-accent-cyan)]/5 blur-[80px] rounded-full pointer-events-none" />
              <img src="/images/hero-topology.png" alt="" className="w-full h-full object-contain" style={{ maskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 40%, transparent 70%)", WebkitMaskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 40%, transparent 70%)" }} />
            </div>

            {/* Background Glow for Dashboard */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[var(--color-accent-blue)]/5 blur-[150px] rounded-full pointer-events-none z-0" />
            
            {/* TELEMETRY SWEEP */}
            <motion.div
              animate={{ left: ["-100%", "200%"] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 bottom-0 w-[40%] bg-gradient-to-r from-transparent via-[var(--color-accent-cyan)] to-transparent opacity-[0.03] blur-[40px] pointer-events-none z-0"
            />

            {/* Faint Architectural Grid behind console */}
            <div className="absolute inset-[-20%] bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_10%,transparent_80%)] z-0" />

            {/* Structural Container - Synchronized Float */}
            <motion.div 
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-lg mx-auto flex flex-col gap-6 z-10"
            >

              {/* Depth Card 1: Live Metrics (Top Left, behind) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  opacity: { duration: 1.2, delay: 0.5 },
                  x: { duration: 1.2, delay: 0.5 } 
                }}
                className="absolute left-0 top-0 translate-x-6 -translate-y-[24px] w-48 h-28 rounded-lg border border-white/5 bg-[#050816]/60 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_0_0_15px_rgba(255,255,255,0.01)] z-10 hidden md:flex flex-col p-4"
              >
                <div className="font-mono text-[10px] text-zinc-500 tracking-[0.2em] mb-auto">CLUSTER_NODE_A</div>
                <div className="flex gap-1.5 items-end h-10 mt-4">
                   <motion.div animate={{ height: ["40%", "80%", "40%"] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="w-1.5 bg-white/20 rounded-sm" />
                   <motion.div animate={{ height: ["60%", "30%", "60%"] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="w-1.5 bg-white/20 rounded-sm" />
                   <motion.div animate={{ height: ["80%", "50%", "80%"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="w-1.5 bg-[var(--color-accent-cyan)]/50 rounded-sm shadow-[0_0_8px_rgba(34,211,238,0.3)]" />
                   <motion.div animate={{ height: ["30%", "90%", "30%"] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} className="w-1.5 bg-white/20 rounded-sm" />
                   <motion.div animate={{ height: ["50%", "70%", "50%"] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} className="w-1.5 bg-white/20 rounded-sm" />
                </div>
              </motion.div>

              {/* Depth Card 2: AI Routing (Bottom Right, behind) */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
                transition={{ 
                  opacity: { duration: 1.2, delay: 0.7 },
                  x: { duration: 1.2, delay: 0.7 } 
                }}
                className="absolute right-0 bottom-0 translate-x-10 translate-y-[18px] w-56 h-auto rounded-lg border border-[var(--color-accent-violet)]/10 bg-[#050816]/60 backdrop-blur-md shadow-[0_20px_40px_rgba(0,0,0,0.5),inset_0_0_15px_rgba(139,92,246,0.02)] z-10 hidden md:flex flex-col p-4"
              >
                <div className="flex justify-between items-center mb-4">
                   <div className="font-mono text-[10px] text-zinc-500 tracking-[0.2em]">AGENTIC_ROUTER</div>
                   <div className="size-1.5 rounded-full bg-[var(--color-accent-violet)]/80 animate-pulse shadow-[0_0_8px_rgba(139,92,246,0.5)]" />
                </div>
                <div className="flex flex-col gap-3">
                   <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="h-full w-1/2 bg-[var(--color-accent-violet)]/50 rounded-full" />
                   </div>
                   <div className="h-1.5 w-[70%] bg-white/5 rounded-full overflow-hidden">
                      <motion.div animate={{ x: ["-100%", "250%"] }} transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.5 }} className="h-full w-1/2 bg-white/30 rounded-full" />
                   </div>
                </div>
              </motion.div>
              
              {/* Unified Telemetry Console (Dominant Center, z-20) */}
              <motion.div 
                className="relative w-full rounded-xl border border-white/5 bg-[#050816]/30 backdrop-blur-md shadow-[0_30px_60px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(255,255,255,0.01)] z-20 overflow-hidden flex flex-col pointer-events-auto"
              >
                {/* Top Bar */}
                <div className="h-9 border-b border-white/[0.05] bg-white/[0.02] flex items-center justify-between px-4">
                  <div className="flex gap-1.5">
                    <div className="size-2 rounded-full bg-zinc-700" />
                    <div className="size-2 rounded-full bg-zinc-700" />
                    <div className="size-2 rounded-full bg-zinc-700" />
                  </div>
                  <div className="font-mono text-[10px] text-zinc-500 tracking-[0.2em] flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[var(--color-accent-cyan)] animate-pulse" />
                    SYSTEM_CONSOLE
                  </div>
                </div>
                
                {/* Unified Internal Grid */}
                <div className="flex flex-col sm:flex-row relative">
                  {/* Subtle moving scanline over entire console */}
                  <motion.div 
                    animate={{ top: ["0%", "100%", "0%"] }} 
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }} 
                    className="absolute left-0 right-0 h-[1px] bg-[var(--color-accent-cyan)]/20 z-50 pointer-events-none" 
                  />
                  
                  {/* Left Column: Graph & Stats */}
                  <div className="p-5 relative flex-1 border-b sm:border-b-0 sm:border-r border-white/[0.05]">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
                    <div className="flex justify-between items-start z-10 relative mb-8">
                      <div>
                        <div className="font-mono text-[10px] text-zinc-400 tracking-wider">THROUGHPUT</div>
                        <div className="text-2xl font-bold text-white tracking-tight mt-1">1.4<span className="text-sm text-zinc-500 font-normal"> GB/s</span></div>
                      </div>
                      <div className="flex items-center gap-1.5 rounded border border-[var(--color-accent-cyan)]/20 bg-[var(--color-accent-cyan)]/10 px-2 py-0.5">
                        <Activity className="size-3 text-[var(--color-accent-cyan)]" />
                        <span className="font-mono text-[9px] text-[var(--color-accent-cyan)] tracking-wider">STABLE</span>
                      </div>
                    </div>
                    {/* Graph Line */}
                    <div className="h-[120px] flex items-end relative z-10">
                      <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <path d="M0,100 L0,50 L10,60 L20,30 L30,45 L40,15 L50,40 L60,10 L70,35 L80,5 L90,20 L100,0 L100,100 Z" fill="url(#gradientFill)" className="opacity-20"/>
                        <path d="M0,50 L10,60 L20,30 L30,45 L40,15 L50,40 L60,10 L70,35 L80,5 L90,20 L100,0" stroke="url(#gradientStroke)" strokeWidth="1.5" fill="none" vectorEffect="non-scaling-stroke"/>
                        <defs>
                          <linearGradient id="gradientFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#22D3EE" />
                            <stop offset="100%" stopColor="transparent" />
                          </linearGradient>
                          <linearGradient id="gradientStroke" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#22D3EE" />
                            <stop offset="100%" stopColor="#3B82F6" />
                          </linearGradient>
                        </defs>
                        {/* Graph Node Pulses */}
                        <motion.circle cx="40" cy="15" r="1.5" fill="#22D3EE" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }} style={{ filter: "drop-shadow(0 0 4px #22D3EE)" }} />
                        <motion.circle cx="60" cy="10" r="1.5" fill="#22D3EE" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 4.5, repeat: Infinity, delay: 1.2 }} style={{ filter: "drop-shadow(0 0 4px #22D3EE)" }} />
                        <motion.circle cx="80" cy="5" r="1.5" fill="#8B5CF6" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2.5, repeat: Infinity, delay: 2 }} style={{ filter: "drop-shadow(0 0 4px #8B5CF6)" }} />
                      </svg>
                    </div>
                  </div>

                  {/* Right Column: Execution Log & Security */}
                  <div className="flex-1 flex flex-col sm:max-w-[220px] bg-white/[0.01]">
                    {/* Security Block */}
                    <div className="p-4 border-b border-white/[0.05] flex items-center gap-3">
                      <div className="size-8 rounded bg-[var(--color-accent-violet)]/10 flex items-center justify-center border border-[var(--color-accent-violet)]/20 shrink-0">
                        <Shield className="size-4 text-[var(--color-accent-violet)]" />
                      </div>
                      <div>
                        <div className="font-mono text-[9px] text-zinc-400 tracking-widest leading-none mb-1">SECURITY</div>
                        <div className="text-xs font-medium text-white tracking-wide leading-none">SECURE_ACCESS</div>
                      </div>
                    </div>
                    {/* Execution Log */}
                    <div className="p-4 font-mono text-[9px] leading-relaxed flex-1 flex flex-col justify-end">
                      <div className="text-zinc-500 mb-2 flex items-center gap-2"><Terminal className="size-3" /> <span className="tracking-widest">LOGS</span></div>
                      <div className="text-zinc-500">&gt; INIT_PIPELINE()</div>
                      <div className="text-[var(--color-accent-cyan)] opacity-90">&gt; AUTHENTICATING...</div>
                      <div className="text-zinc-300">&gt; SECURE_CONN_ESTABLISHED</div>
                      <div className="text-zinc-500 flex items-center gap-2 mt-1">
                        &gt; AWAITING_INPUT
                        <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-1.5 h-2.5 bg-white/70 block" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}