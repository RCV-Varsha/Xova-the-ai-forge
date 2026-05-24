"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  // Stagger configurations for cinematic entry animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08, // tight stagger spacing for continuous flow
      },
    },
  }

  // Standard cinematic fade-up for typography and credentials
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const, // premium easeOutExpo deceleration curve
      },
    },
  }

  // Custom visual reveal for the dashboard shell to suggest weight
  const dashboardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.988 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.4, // extended timeline for massive infrastructure presence
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#020617] pt-28 pb-20" >
      
      {/* Cinematic Horizon Lighting & Grid Backdrop */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03),transparent_70%)]" />
      
      {/* Architectural Bottom Horizon Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.04]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center w-full"
        >
          {/* 1. Status Badge Moniker */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.02] px-3.5 py-1 text-[10px] font-mono font-medium tracking-[0.25em] text-zinc-400 uppercase select-none">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/20 opacity-75"></span>
                {/* Slow ambient pulse to indicate live backend telemetry */}
                <motion.span
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white/40"
                />
              </span>
              AI-FIRST DIGITAL FORGE
            </div>
          </motion.div>

          {/* 2. Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.08] text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-zinc-300 font-sans max-w-3xl"
          >
            Engineering the digital engines of modern enterprise.
          </motion.h1>

          {/* 3. Description */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-sm sm:text-base text-zinc-400 font-light tracking-wide max-w-2xl leading-relaxed"
          >
            We build high-performance custom digital systems, agentic workflow pipelines, and core operating platforms for forward-looking startups and MSMEs.
          </motion.p>

          {/* 4. Action CTA Block */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
          >
            <Button
              asChild
              className="relative w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white text-black hover:bg-neutral-100 font-semibold text-xs tracking-wide px-7 h-11 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] active:scale-[0.98]"
            >
              <Link href="/contact" className="flex items-center gap-1.5">
                Initiate Project
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>

            <Button
              asChild
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-200 hover:bg-white/[0.08] hover:text-white font-medium text-xs tracking-wide px-7 h-11 transition-all duration-300 active:scale-[0.98]"
            >
              <Link href="/services">
                Explore Our Systems
              </Link>
            </Button>
          </motion.div>

          {/* 5. Production Telemetry Indicators */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12 mt-16 pt-8 border-t border-white/[0.04] w-full max-w-2xl"
          >
            <div className="flex flex-col items-center gap-0.5">
              <span className="font-mono text-lg sm:text-xl font-semibold tracking-tight text-white/90">40+</span>
              <span className="font-mono text-[9px] tracking-widest text-zinc-500 uppercase">AI Workflows Deployed</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <span className="font-mono text-lg sm:text-xl font-semibold tracking-tight text-white/90">25+</span>
              <span className="font-mono text-[9px] tracking-widest text-zinc-500 uppercase">Custom Platforms Delivered</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <span className="font-mono text-lg sm:text-xl font-semibold tracking-tight text-white/90">120M+</span>
              <span className="font-mono text-[9px] tracking-widest text-zinc-500 uppercase">Active System Pipelines</span>
            </div>
          </motion.div>

          {/* 6. Dashboard Preview (Layer 1 - Dynamic Structural Reveal) */}
          <motion.div
            variants={dashboardVariants}
            className="mt-16 w-full max-w-5xl border border-white/12 rounded-xl bg-zinc-950/40 backdrop-blur-md overflow-hidden relative shadow-[0_24px_50px_rgba(0,0,0,0.5)] select-none text-left"
          >
            {/* Console Control Top Bar */}
            <div className="h-9 border-b border-white/[0.08] flex items-center justify-between px-4 bg-white/[0.01]">
              <div className="flex items-center gap-1.5">
                <div className="size-2 rounded-full border border-white/20 bg-transparent" />
                <div className="size-2 rounded-full border border-white/20 bg-transparent" />
                <div className="size-2 rounded-full border border-white/20 bg-transparent" />
              </div>
              <div className="font-mono text-[9px] tracking-[0.15em] text-zinc-400">
                SYSTEM CONSOLE // XOVA_NODE_01
              </div>
              <div className="flex items-center gap-1.5">
                {/* Slow ambient telemetry light */}
                <motion.span
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="size-1.5 rounded-full bg-white/50"
                />
                <span className="font-mono text-[9px] tracking-wider text-zinc-400">SECURE LINK</span>
              </div>
            </div>

            {/* Three-Pane Console Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08] min-h-[300px]">
              
              {/* Left Pane: AI Pipeline Nodes (1 Column) */}
              <div className="p-4 flex flex-col gap-4">
                <div className="font-mono text-[9px] tracking-wider text-zinc-400 uppercase border-b border-white/[0.06] pb-1.5">
                  [ PIPELINE_ORCHESTRATOR ]
                </div>
                <div className="flex flex-col gap-3">
                  {[
                    { id: "01", name: "DATA_INGEST", status: "OK", active: true },
                    { id: "02", name: "VECTOR_TRANSFORM", status: "OK", active: true },
                    { id: "03", name: "AGENT_ROUTE", status: "PENDING", active: false },
                    { id: "04", name: "COMPUTE_EMIT", status: "QUEUED", active: false },
                  ].map((node) => (
                    <div
                      key={node.id}
                      className="flex items-center justify-between p-2 rounded-md border border-white/[0.03] bg-white/[0.01]"
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] text-zinc-500">{node.id}</span>
                        <span className="font-mono text-[10px] font-medium text-zinc-300">{node.name}</span>
                      </div>
                      <span
                        className={`font-mono text-[9px] tracking-wide px-1.5 py-0.5 rounded border ${
                          node.active
                            ? "border-white/20 bg-white/5 text-zinc-150"
                            : "border-transparent bg-transparent text-zinc-550"
                        }`}
                      >
                        {node.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Center Pane: Telemetry Graph Region (2 Columns) */}
              <div className="lg:col-span-2 p-4 flex flex-col gap-4">
                <div className="font-mono text-[9px] tracking-wider text-zinc-400 uppercase border-b border-white/[0.06] pb-1.5">
                  [ TELEMETRY_GRID ]
                </div>
                {/* Structural Graphic / Static Placeholder for Graph */}
                <div className="flex-1 border border-white/[0.06] rounded-lg bg-[#020617]/30 min-h-[160px] relative p-4 flex flex-col justify-between">
                  {/* Grid overlay lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:24px_24px]" />
                  
                  {/* Top telemetry state label */}
                  <div className="relative z-10 flex justify-between items-start font-mono text-[9px] text-zinc-400">
                    <div>GRAPH_FEED // CORE_LATENCY</div>
                    <div>AVG: 14.8MS</div>
                  </div>

                  {/* Static SVG outline of a complex architectural line chart */}
                  <div className="absolute inset-0 flex items-end justify-center px-4 pb-4">
                    <svg className="w-full h-[60%] text-white/10" fill="none" viewBox="0 0 400 100" preserveAspectRatio="none">
                      {/* Technical visual guides */}
                      <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" strokeDasharray="2 4" />
                      <line x1="0" y1="80" x2="400" y2="80" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" strokeDasharray="2 4" />
                      {/* Static main data path */}
                      <path
                        d="M 0 90 Q 40 20, 80 80 T 160 50 T 240 70 T 320 30 T 400 40"
                        stroke="rgba(255,255,255,0.35)"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>

                  {/* Bottom legend metrics */}
                  <div className="relative z-10 flex justify-between items-end font-mono text-[8px] text-zinc-450">
                    <div>SECURE NODE: ACTIVE</div>
                    <div>DATA STREAM // 882kbps</div>
                  </div>
                </div>
              </div>

              {/* Right Pane: Runtime Console Area (1 Column) */}
              <div className="p-4 flex flex-col gap-4">
                <div className="font-mono text-[9px] tracking-wider text-zinc-400 uppercase border-b border-white/[0.06] pb-1.5">
                  [ RUNTIME_CONSOLE ]
                </div>
                <div className="flex-1 flex flex-col justify-between font-mono text-[10px] text-zinc-400 gap-2.5">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1.5 text-zinc-550">
                      <span className="text-zinc-650">&gt;</span>
                      <span>sys.init_connection()</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-zinc-200 font-medium">
                      <span className="text-zinc-600">&gt;</span>
                      <span>SECURE_SESSION_ESTABLISHED</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-zinc-550">
                      <span className="text-zinc-650">&gt;</span>
                      <span>node.ingest_traffic()</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-zinc-300">
                      <span className="text-zinc-600">&gt;</span>
                      <span>EMIT: 200 // OK // latency=14ms</span>
                    </div>
                  </div>
                  
                  {/* Footer Console Signature */}
                  <div className="border-t border-white/[0.04] pt-2 text-[9px] text-zinc-500 uppercase flex items-center justify-between">
                    <span>STABLE RUNTIME</span>
                    <span>V1.0.4</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </motion.div>
      </div>

    </section>
  )
}