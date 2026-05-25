"use client"

import React, { useRef, useState, MouseEvent, useEffect } from "react"
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion"
import { Network, Cpu, Palette, Zap, Building2, Server, Shield, Database, Activity, Wifi, Expand, Cloud, Bot, ShieldCheck, Code2, Maximize2, Rocket } from "lucide-react"
import { cn } from "@/lib/utils"

// --------------------------------------------------------
// TiltedCard Component (Framer Motion 3D Hover)
// --------------------------------------------------------
interface TiltedCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  disableTilt?: boolean;
}

const TiltedCard = ({ children, className, glowColor = "rgba(34, 211, 238, 0.15)", disableTilt = false }: TiltedCardProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  
  // Motion values for 3D rotation
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  // Smooth springs for fluid movement
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 })
  
  // Transform coordinates to rotation angles (max 5 degrees)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [5, -5])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-5, 5])

  // Pre-compute glow position percentages as numbers
  const glowX = useTransform(mouseXSpring, (v) => (v + 0.5) * 100)
  const glowY = useTransform(mouseYSpring, (v) => (v + 0.5) * 100)

  // Compose the full gradient string reactively
  const glowBackground = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, ${glowColor}, transparent 60%)`

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (disableTilt) return;
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect()
    
    // Normalized coordinates (-0.5 to 0.5)
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: disableTilt ? 0 : rotateX,
        rotateY: disableTilt ? 0 : rotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative rounded-2xl border border-white/[0.12] bg-[#050914] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_20px_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-500",
        isHovered ? "border-white/20 bg-[#070b1a] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_30px_60px_rgba(0,0,0,0.8)]" : "",
        className
      )}
    >
      {/* Dynamic Hover Glow */}
      <motion.div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{ 
          opacity: isHovered ? 1 : 0,
          background: glowBackground,
        }}
      />
      <div style={{ transform: "translateZ(30px)" }} className="relative z-10 h-full">
        {children}
      </div>
      {/* Subtle faint scanline for depth and realism */}
      <motion.div 
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none z-0"
        animate={{ top: ["-10%", "110%"] }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  )
}

// --------------------------------------------------------
// Orbit System Component (Topology Infrastructure Visual)
// --------------------------------------------------------

const OrbitNode = ({ icon: Icon, delay, title, subtitle, color, radius, initialAngle, orbitDuration, orbitDirection = 1 }: any) => (
  <motion.div 
    className="absolute inset-0 z-40 pointer-events-none"
    animate={{ rotate: orbitDirection === 1 ? [initialAngle, initialAngle + 360] : [initialAngle, initialAngle - 360] }}
    transition={{ duration: orbitDuration, repeat: Infinity, ease: "linear" }}
  >
    <div className="absolute top-1/2 left-1/2" style={{ transform: `translate(${radius}px, -50%)` }}>
      {/* Counter-rotation to keep upright */}
      <motion.div
        animate={{ rotate: orbitDirection === 1 ? [-initialAngle, -(initialAngle + 360)] : [-initialAngle, -(initialAngle - 360)] }}
        transition={{ duration: orbitDuration, repeat: Infinity, ease: "linear" }}
        className="relative pointer-events-auto"
      >
        <div className="group flex flex-col items-center gap-2 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-max">
          <motion.div 
            animate={{ boxShadow: ["0 0 10px rgba(0,0,0,0)", `0 0 20px ${color.glow}`, "0 0 10px rgba(0,0,0,0)"] }}
            transition={{ duration: 4, repeat: Infinity, delay: delay, ease: "easeInOut" }}
            className={cn("size-7 rounded border bg-[#050914] flex items-center justify-center transition-all duration-300 group-hover:scale-[1.08]", color.border)}
          >
            <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 4, repeat: Infinity, delay: delay, ease: "easeInOut" }}>
              <Icon className={cn("size-3.5 stroke-[1.5]", color.text)} />
            </motion.div>
          </motion.div>
          <div className="flex flex-col items-center text-center absolute top-full mt-2 bg-[#02040a]/60 backdrop-blur-md px-2 py-1 rounded border border-white/5 shadow-xl pointer-events-none">
            <motion.div 
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 4, repeat: Infinity, delay: delay, ease: "easeInOut" }}
              className="font-mono text-[9px] uppercase tracking-[0.18em] text-white font-semibold"
            >
              {title}
            </motion.div>
            {subtitle && <div className="font-sans text-[8px] text-zinc-500 uppercase mt-0.5">{subtitle}</div>}
          </div>
        </div>
      </motion.div>
    </div>
  </motion.div>
);

const OrbitSystem = () => {
  return (
    <motion.div 
      animate={{ scale: [1, 1.01, 1] }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-[400px] h-[400px] aspect-square flex items-center justify-center scale-[0.8] lg:scale-[1.2] origin-center shrink-0"
    >
      
      {/* Mathematical Physical Infrastructure SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 400 400">
        
        {/* Core Glow Definitions */}
        <defs>
          <radialGradient id="core-glow">
            <stop offset="0%" stopColor="rgba(34,211,238,0.15)" />
            <stop offset="40%" stopColor="rgba(34,211,238,0.03)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          
          <linearGradient id="ring-light" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
          </linearGradient>
        </defs>

        {/* Center Glow (Contained) */}
        <circle cx="200" cy="200" r="140" fill="url(#core-glow)" />

        <g stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none">
          {/* Axis Grid Lines (Static) */}
          <line x1="200" y1="20" x2="200" y2="380" strokeDasharray="4 6" />
          <line x1="20" y1="200" x2="380" y2="200" strokeDasharray="4 6" />
          <line x1="72" y1="72" x2="328" y2="328" strokeDasharray="2 8" />
          <line x1="72" y1="328" x2="328" y2="72" strokeDasharray="2 8" />
          
          {/* Static Drop Shadows for Rings */}
          <circle cx="200" cy="200" r="59" stroke="rgba(0,0,0,0.5)" />
          <circle cx="200" cy="200" r="114" stroke="rgba(0,0,0,0.5)" />
          <circle cx="200" cy="200" r="169" stroke="rgba(0,0,0,0.5)" />
        </g>
        
        {/* Animated Rings (Rotate slowly) with Cyan/Violet edge glow */}
        <motion.g animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "200px 200px", filter: "drop-shadow(0 0 16px rgba(34,211,238,0.5))" }}>
          <circle cx="200" cy="200" r="60" stroke="rgba(34,211,238,0.6)" strokeDasharray="4 12" fill="none" strokeWidth="1.5" />
        </motion.g>

        <motion.g animate={{ rotate: -360 }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "200px 200px", filter: "drop-shadow(0 0 16px rgba(139,92,246,0.5))" }}>
          <circle cx="200" cy="200" r="115" stroke="rgba(139,92,246,0.6)" strokeDasharray="2 8" fill="none" strokeWidth="1.5" />
        </motion.g>

        <motion.g animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "200px 200px", filter: "drop-shadow(0 0 16px rgba(34,211,238,0.4))" }}>
          <circle cx="200" cy="200" r="170" stroke="rgba(34,211,238,0.5)" strokeDasharray="4 4" fill="none" strokeWidth="1.5" />
        </motion.g>
        
        {/* Animated Telemetry Particles */}
        <motion.circle r="3" fill="rgba(34,211,238,1)" style={{ filter: 'drop-shadow(0 0 10px rgba(34,211,238,1))' }}>
          <animateMotion dur="6s" repeatCount="indefinite" path="M 200 140 A 60 60 0 1 1 199.9 140" />
        </motion.circle>
        <motion.circle r="4" fill="rgba(139,92,246,1)" style={{ filter: 'drop-shadow(0 0 12px rgba(139,92,246,1))' }}>
          <animateMotion dur="9s" repeatCount="indefinite" path="M 200 85 A 115 115 0 1 0 200.1 85" />
        </motion.circle>
        <motion.circle r="3" fill="rgba(34,211,238,1)" style={{ filter: 'drop-shadow(0 0 10px rgba(34,211,238,1))' }}>
          <animateMotion dur="14s" repeatCount="indefinite" path="M 200 30 A 170 170 0 1 1 199.9 30" />
        </motion.circle>
      </svg>

      {/* CENTER CORE: LOGO */}
      <div className="absolute z-50 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-[var(--color-accent-cyan)]/20 blur-[40px] animate-pulse pointer-events-none" />
        <motion.div 
          animate={{ scale: [1, 1.02, 1], boxShadow: ["0 0 20px rgba(34,211,238,0.2)", "0 0 40px rgba(34,211,238,0.4)", "0 0 20px rgba(34,211,238,0.2)"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative size-20 lg:size-24 rounded-full border border-white/20 bg-[#02040a] flex items-center justify-center overflow-hidden z-10"
        >
           {/* Engineered scanline sweep */}
           <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0%,transparent_80%,rgba(34,211,238,0.3)_100%)] pointer-events-none" />
           <div className="absolute inset-[3px] rounded-full bg-[#050914] z-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]" />
           <img src="/logo/xova-logo.png" alt="XOVA" className="w-10 h-10 lg:w-12 lg:h-12 object-contain z-10 opacity-90 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
        </motion.div>
      </div>

      {/* ======================= INNER RING (r=60, dur=18, dir=1) ======================= */}
      <OrbitNode 
        icon={Bot} delay={0} title="AI Automation" subtitle="SYSTEM_AGENT"
        color={{ text: "text-[var(--color-accent-violet)]", border: "border-[var(--color-accent-violet)]/40", glow: "rgba(139,92,246,0.4)" }}
        radius={60} initialAngle={0} orbitDuration={18} orbitDirection={1}
      />
      <OrbitNode 
        icon={ShieldCheck} delay={1.5} title="Security Layer" subtitle="ZERO_TRUST"
        color={{ text: "text-[var(--color-accent-cyan)]", border: "border-[var(--color-accent-cyan)]/40", glow: "rgba(34,211,238,0.4)" }}
        radius={60} initialAngle={120} orbitDuration={18} orbitDirection={1}
      />
      <OrbitNode 
        icon={Code2} delay={2.5} title="APIs" subtitle="GATEWAY"
        color={{ text: "text-zinc-300", border: "border-white/20", glow: "rgba(255,255,255,0.3)" }}
        radius={60} initialAngle={240} orbitDuration={18} orbitDirection={1}
      />

      {/* ======================= MIDDLE RING (r=115, dur=28, dir=-1) ======================= */}
      <OrbitNode 
        icon={Database} delay={0.5} title="Databases" subtitle="DB_CLUST"
        color={{ text: "text-[var(--color-accent-violet)]", border: "border-[var(--color-accent-violet)]/30", glow: "rgba(139,92,246,0.4)" }}
        radius={115} initialAngle={60} orbitDuration={28} orbitDirection={-1}
      />
      <OrbitNode 
        icon={Activity} delay={2} title="Monitoring" subtitle="LIVE_TELEMETRY"
        color={{ text: "text-[var(--color-accent-cyan)]", border: "border-[var(--color-accent-cyan)]/30", glow: "rgba(34,211,238,0.4)" }}
        radius={115} initialAngle={180} orbitDuration={28} orbitDirection={-1}
      />
      <OrbitNode 
        icon={Network} delay={3.5} title="Routing" subtitle="VPC_ROUTER"
        color={{ text: "text-zinc-300", border: "border-white/20", glow: "rgba(255,255,255,0.3)" }}
        radius={115} initialAngle={300} orbitDuration={28} orbitDirection={-1}
      />

      {/* ======================= OUTER RING (r=170, dur=40, dir=1) ======================= */}
      <OrbitNode 
        icon={Cloud} delay={1} title="Cloud Infra" subtitle="DISTRIBUTED_VPC"
        color={{ text: "text-[var(--color-accent-cyan)]", border: "border-[var(--color-accent-cyan)]/40", glow: "rgba(34,211,238,0.4)" }}
        radius={170} initialAngle={-30} orbitDuration={40} orbitDirection={1}
      />
      <OrbitNode 
        icon={Rocket} delay={3} title="Deployment" subtitle="CI_CD"
        color={{ text: "text-zinc-400", border: "border-white/20", glow: "rgba(255,255,255,0.3)" }}
        radius={170} initialAngle={90} orbitDuration={40} orbitDirection={1}
      />
      <OrbitNode 
        icon={Maximize2} delay={4.5} title="Scaling" subtitle="AUTO_SCALE"
        color={{ text: "text-zinc-400", border: "border-white/20", glow: "rgba(255,255,255,0.3)" }}
        radius={170} initialAngle={210} orbitDuration={40} orbitDirection={1}
      />

    </motion.div>
  )
}


// --------------------------------------------------------
// Services Section
// --------------------------------------------------------
export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  }

  return (
    <section className="relative pt-8 pb-10 lg:pt-12 lg:pb-16 overflow-hidden" id="services">
      {/* Architectural Vector Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="flex flex-col items-center text-center mb-12 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1.5 uppercase tracking-[0.25em] text-[11px] text-zinc-500 mb-8">
            CAPABILITIES
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight leading-[1] text-white mb-6">
            Engineered Systems
          </h2>
          <p className="text-zinc-400 text-base lg:text-lg leading-relaxed max-w-2xl">
            We design and deploy high-performance virtual architecture and automated operations for modern enterprises.
          </p>
        </motion.div>

        {/* Modular Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-6"
        >
            

              {/* Row 1: Digital Infrastructure */}
              <motion.div variants={itemVariants}>
                <TiltedCard glowColor="rgba(34, 211, 238, 0.05)" className="p-0 overflow-hidden group border-white/10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center h-full">
                    
                    {/* LEFT: Content */}
                    <div className="flex flex-col justify-center p-8 md:p-10 z-10 lg:pr-12">
                      <div className="max-w-[540px]">
                        <div className="inline-flex items-center gap-2 rounded-sm border border-[var(--color-accent-cyan)]/20 bg-[var(--color-accent-cyan)]/5 px-3 py-1.5 uppercase tracking-[0.25em] text-[11px] text-[var(--color-accent-cyan)] mb-8">
                          <span className="size-1 rounded-full bg-[var(--color-accent-cyan)] opacity-80" />
                          INFRASTRUCTURE
                        </div>
                        <h3 className="text-4xl lg:text-5xl font-semibold text-white mb-6 tracking-tight leading-[1]">
                          Digital Infrastructure Systems
                        </h3>
                        <p className="text-zinc-400 text-base lg:text-lg leading-relaxed max-w-2xl mb-12">
                          Custom-built web platforms, active databases, and internal APIs engineered for peak performance.
                        </p>
                        {/* Embedded Feature Cards */}
                        <div className="flex flex-col sm:flex-row gap-0 rounded-lg border border-white/[0.08] bg-white/[0.01] overflow-hidden backdrop-blur-sm">
                          <div className="flex-1 p-4 border-b sm:border-b-0 sm:border-r border-white/[0.05]">
                            <Cloud className="size-4 text-zinc-400 mb-3 stroke-[1.5]" />
                            <h4 className="text-[11px] font-mono font-semibold text-zinc-300 uppercase tracking-[0.3em] mb-1.5">Isolated Cloud</h4>
                            <p className="text-[10px] text-zinc-500 font-light leading-relaxed">Secure, isolated cloud environments.</p>
                          </div>
                          
                          <div className="flex-1 p-4 border-b sm:border-b-0 sm:border-r border-white/[0.05]">
                            <Code2 className="size-4 text-zinc-400 mb-3 stroke-[1.5]" />
                            <h4 className="text-[11px] font-mono font-semibold text-zinc-300 uppercase tracking-[0.3em] mb-1.5">API Connections</h4>
                            <p className="text-[10px] text-zinc-500 font-light leading-relaxed">Robust, secure API integrations.</p>
                          </div>

                          <div className="flex-1 p-4">
                            <Maximize2 className="size-4 text-zinc-400 mb-3 stroke-[1.5]" />
                            <h4 className="text-[11px] font-mono font-semibold text-zinc-300 uppercase tracking-[0.3em] mb-1.5">Auto Scaling</h4>
                            <p className="text-[10px] text-zinc-500 font-light leading-relaxed">Intelligent scaling for zero downtime.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT: Orbit Visualization */}
                    <div className="relative flex items-center justify-center lg:justify-end p-8 min-h-[380px] lg:min-h-0 bg-[#050811] lg:border-l border-white/[0.05] lg:pl-10 overflow-hidden">
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
                      <OrbitSystem />
                    </div>

                  </div>
                </TiltedCard>
              </motion.div>

              {/* Row 2: Asymmetrical Split */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                
                {/* AI Workflow (7 cols) */}
                <motion.div variants={itemVariants} className="md:col-span-7">
                  <TiltedCard glowColor="rgba(139, 92, 246, 0.15)" className="p-6 md:p-8 h-full min-h-[320px] flex flex-col border-white/10 hover:border-white/20">
                    <div className="flex justify-between items-start mb-6">
                      <Cpu className="size-8 text-[var(--color-accent-violet)] opacity-80" />
                      <div className="size-8 rounded flex items-center justify-center border border-white/5 bg-white/[0.02]">
                        <div className="size-1 rounded-full bg-[var(--color-accent-violet)] animate-ping" />
                      </div>
                    </div>
                    <h3 className="text-lg lg:text-xl font-medium text-white mb-3 tracking-tight">AI Workflow Automation</h3>
                    <p className="text-[15px] font-light text-zinc-400 leading-relaxed max-w-sm mb-6">
                      Autonomous pipelines that handle repetitive administrative processes, liberating hours of human attention.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto font-mono text-[10px] tracking-[0.2em] text-zinc-500">
                      <span className="px-2 py-1 rounded-sm border border-[var(--color-accent-violet)]/20 bg-[var(--color-accent-violet)]/5 text-[var(--color-accent-violet)]">AGENTIC ROUTING</span>
                      <span className="px-2 py-1 rounded-sm border border-white/10 bg-white/5">VECTOR DB</span>
                      <span className="px-2 py-1 rounded-sm border border-white/10 bg-white/5">NLP INGEST</span>
                    </div>
                  </TiltedCard>
                </motion.div>

            {/* Brand Identity (5 cols) */}
            <motion.div variants={itemVariants} className="md:col-span-5">
              <TiltedCard glowColor="rgba(255, 255, 255, 0.1)" className="p-6 md:p-8 h-full min-h-[320px] flex flex-col border-white/10 hover:border-white/20">
                <div className="flex justify-between items-start mb-6">
                  <Palette className="size-8 text-zinc-300 opacity-80" />
                  <div className="w-8 h-8 rounded border border-white/5 bg-white/[0.02] flex items-center justify-center overflow-hidden">
                    <motion.div animate={{ y: [-16, 16] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="w-full h-px bg-white/20" />
                  </div>
                </div>
                <h3 className="text-lg lg:text-xl font-medium text-white mb-3 tracking-tight">Brand Identity Systems</h3>
                <p className="text-[15px] font-light text-zinc-400 leading-relaxed mb-6">
                  Translating complex technological processes into sharp typographic frameworks and technical authority.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto font-mono text-[9px] text-zinc-500 tracking-wider">
                  <span className="px-2 py-1 rounded-sm border border-white/10 bg-white/5">TOKENS</span>
                  <span className="px-2 py-1 rounded-sm border border-white/10 bg-white/5">TYPOGRAPHY</span>
                </div>
              </TiltedCard>
            </motion.div>

          </div>

          {/* Row 3: Utility Band & MSME Split */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            
            <motion.div variants={itemVariants} className="md:col-span-5">
              <TiltedCard glowColor="rgba(59, 130, 246, 0.15)" className="p-6 md:p-8 h-full min-h-[320px] flex flex-col border-white/10 hover:border-white/20">
                <div className="flex justify-between items-start mb-6">
                  <Zap className="size-8 text-[var(--color-accent-blue)] opacity-80" />
                  <div className="flex items-end gap-0.5 h-4 mt-2">
                    <motion.div animate={{ height: [4, 12, 4] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="w-1 bg-[var(--color-accent-blue)]/60 rounded-t-sm" />
                    <motion.div animate={{ height: [8, 4, 8] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }} className="w-1 bg-[var(--color-accent-blue)]/60 rounded-t-sm" />
                    <motion.div animate={{ height: [6, 16, 6] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }} className="w-1 bg-[var(--color-accent-blue)]/60 rounded-t-sm" />
                  </div>
                </div>
                <h3 className="text-lg lg:text-xl font-medium text-white mb-3 tracking-tight">Performance Optimization</h3>
                <p className="text-[15px] font-light text-zinc-400 leading-relaxed mb-6">
                  Isolating and accelerating bottlenecks to achieve imperceptible latency.
                </p>
                <div className="mt-auto border-t border-white/10 pt-4 font-mono text-[10px] tracking-[0.2em] text-zinc-500 flex justify-between">
                  <span>LATENCY</span>
                  <span className="text-[var(--color-accent-blue)]">SUB-50MS</span>
                </div>
              </TiltedCard>
            </motion.div>

            <motion.div variants={itemVariants} className="md:col-span-7">
              <TiltedCard disableTilt className="p-6 md:p-8 h-full min-h-[320px] flex flex-col bg-gradient-to-br from-[#0A1020]/80 to-[#02040A] border-white/10 hover:border-white/20">
                <div className="flex justify-between items-start mb-6">
                  <Building2 className="size-8 text-zinc-400 opacity-80" />
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="size-6 rounded-full border border-dashed border-white/20 flex items-center justify-center">
                    <div className="size-1 rounded-full bg-zinc-500" />
                  </motion.div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">MSME Transformation</h3>
                <p className="text-[15px] font-light text-zinc-400 leading-relaxed max-w-md mb-6">
                  Bridging traditional operations with modern software. Legacy porting and integrated automation for expanding enterprises.
                </p>
                 <div className="mt-auto border-t border-white/10 pt-4 font-mono text-[10px] tracking-[0.2em] text-zinc-500 flex justify-between">
                  <span>LEGACY</span>
                  <span className="text-zinc-300">MODERNIZED</span>
                </div>
              </TiltedCard>
            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  )
}

