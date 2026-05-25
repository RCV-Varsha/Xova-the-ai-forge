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
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } 
    },
  }

  return (
    <section 
      ref={containerRef}
      aria-label="Hero — XOVA Core Systems"
      className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-16 overflow-x-clip"
    >
      <Meteors number={8} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT: Typography & CTAs */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate={controls}
            className="lg:col-span-6 flex flex-col items-start text-left pt-12 lg:pt-0"
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
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-bold tracking-tight text-white leading-[1.05] max-w-2xl"
            >
              Engineering the <br className="hidden lg:block"/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[var(--color-accent-cyan)]">digital engines</span> <br className="hidden lg:block"/>
              of modern enterprise.
            </motion.h1>

            {/* Description */}
            <motion.div 
              variants={fadeUp}
              className="mt-4 text-base sm:text-lg text-[var(--color-text-secondary)] font-light tracking-wide max-w-xl leading-relaxed"
            >
              <TypingAnimation text="We build high-performance virtual architecture and agentic pipelines. System-native platforms engineered for precision, scale, and operational velocity." />
            </motion.div>

            {/* CTAs */}
            <motion.div 
              variants={fadeUp}
              className="mt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link
                href="/contact"
                className="relative inline-flex items-center justify-center gap-2 rounded-full bg-white text-black hover:bg-zinc-200 font-semibold text-xs tracking-wider uppercase px-8 h-12 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] active:scale-95"
              >
                Initiate Project
                <ArrowUpRight className="size-4" />
              </Link>

              <Link
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 hover:bg-white/[0.08] hover:text-white font-medium text-xs tracking-wider uppercase px-8 h-12 transition-all duration-300 active:scale-95 backdrop-blur-sm"
              >
                Explore Systems
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT: Floating Dashboard & Telemetry */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative h-[500px] lg:h-[600px] w-full mt-12 lg:mt-0 z-10"
          >
            {/* Background Glow for Dashboard */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[var(--color-accent-blue)]/20 blur-[100px] rounded-full pointer-events-none" />
            
            {/* Vertical Atmospheric Bridge to Metrics */}
            <div className="absolute top-[80%] left-[20%] w-[60%] h-[600px] bg-[var(--color-accent-cyan)]/10 blur-[120px] rounded-full pointer-events-none -z-10" />

            {/* Main Telemetry Panel */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              className="absolute top-[10%] right-[5%] w-[85%] lg:w-[90%] rounded-xl border border-white/10 bg-[#050816]/60 backdrop-blur-xl shadow-2xl overflow-hidden z-20"
            >
              {/* Top Bar */}
              <div className="h-9 border-b border-white/[0.05] bg-white/[0.02] flex items-center justify-between px-4">
                <div className="flex gap-1.5">
                  <div className="size-2 rounded-full bg-zinc-700" />
                  <div className="size-2 rounded-full bg-zinc-700" />
                  <div className="size-2 rounded-full bg-zinc-700" />
                </div>
                <div className="font-mono text-[9px] text-zinc-500 tracking-widest">NETWORK_TOPOLOGY</div>
              </div>
              
              {/* Graph Area */}
              <div className="p-5 h-[240px] relative flex flex-col justify-between">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
                
                <div className="flex justify-between items-start z-10">
                  <div>
                    <div className="font-mono text-[10px] text-zinc-400 tracking-wider">THROUGHPUT</div>
                    <div className="text-2xl font-bold text-white tracking-tight mt-1">1.4<span className="text-sm text-zinc-500 font-normal"> GB/s</span></div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Activity className="size-3 text-[var(--color-accent-cyan)]" />
                    <span className="font-mono text-[9px] text-[var(--color-accent-cyan)]">STABLE</span>
                  </div>
                </div>

                {/* Animated Graph Line */}
                <div className="absolute bottom-0 left-0 right-0 h-[60%] flex items-end">
                  <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path 
                      d="M0,100 L0,50 L10,60 L20,30 L30,45 L40,15 L50,40 L60,10 L70,35 L80,5 L90,20 L100,0 L100,100 Z" 
                      fill="url(#gradientFill)" 
                      className="opacity-20"
                    />
                    <path 
                      d="M0,50 L10,60 L20,30 L30,45 L40,15 L50,40 L60,10 L70,35 L80,5 L90,20 L100,0" 
                      stroke="url(#gradientStroke)" 
                      strokeWidth="1.5" 
                      fill="none" 
                      vectorEffect="non-scaling-stroke"
                    />
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
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Floating Terminal Widget */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 7, ease: "easeInOut", repeat: Infinity, delay: 1 }}
              className="absolute bottom-[15%] left-0 w-[60%] rounded-lg border border-white/10 bg-[#02040A]/90 backdrop-blur-md shadow-[0_20px_40px_rgba(0,0,0,0.5)] z-30 overflow-hidden"
            >
              <div className="p-3 border-b border-white/[0.05] flex items-center gap-2">
                <Terminal className="size-3 text-zinc-500" />
                <span className="font-mono text-[9px] text-zinc-400 tracking-wider">EXECUTION_LOG</span>
              </div>
              <div className="p-4 font-mono text-[9px] leading-relaxed">
                <div className="text-zinc-500">&gt; INIT_PIPELINE()</div>
                <div className="text-[var(--color-accent-cyan)] opacity-90">&gt; AUTHENTICATING NODE...</div>
                <div className="text-zinc-300">&gt; SECURE_CONNECTION_ESTABLISHED</div>
                <div className="text-zinc-500 flex items-center gap-2 mt-1">
                  &gt; AWAITING_INPUT
                  <motion.span 
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="w-1.5 h-2.5 bg-white/70 block"
                  />
                </div>
              </div>
            </motion.div>

            {/* Floating Status Widget */}
            <motion.div 
              initial={{ y: 20 }}
              animate={{ y: [20, 10, 20] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[45%] right-[-5%] lg:-right-4 w-[45%] rounded-lg border border-[var(--color-accent-violet)]/30 bg-[#050816]/95 backdrop-blur-md shadow-[0_0_30px_rgba(139,92,246,0.1)] z-10 p-4"
            >
              <div className="flex items-center gap-3">
                <div className="size-8 rounded bg-[var(--color-accent-violet)]/10 flex items-center justify-center border border-[var(--color-accent-violet)]/20">
                  <Shield className="size-4 text-[var(--color-accent-violet)]" />
                </div>
                <div>
                  <div className="font-mono text-[9px] text-zinc-400 tracking-widest">SECURITY</div>
                  <div className="text-xs font-medium text-white tracking-wide">ZERO_TRUST_ACTIVE</div>
                </div>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}