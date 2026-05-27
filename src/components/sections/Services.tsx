"use client"

import React, { useRef, useState, MouseEvent, useEffect } from "react"
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate, AnimatePresence } from "framer-motion"
import { Network, Cpu, Palette, Zap, Building2, Server, Shield, Database, Activity, Wifi, Expand, Cloud, Bot, ShieldCheck, Code2, Maximize2, Rocket, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

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
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 25 })
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 25 })
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [4, -4])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-4, 4])

  const glowX = useTransform(mouseXSpring, (v) => (v + 0.5) * 100)
  const glowY = useTransform(mouseYSpring, (v) => (v + 0.5) * 100)

  const glowBackground = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, ${glowColor}, transparent 60%)`

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (disableTilt) return;
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect()
    
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
      animate={{ scale: isHovered ? 1.01 : 1, y: isHovered ? -4 : 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        rotateX: disableTilt ? 0 : rotateX,
        rotateY: disableTilt ? 0 : rotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative rounded-3xl border border-white/[0.02] bg-[#050811]/60 backdrop-blur-md overflow-hidden transition-all duration-700 group",
        isHovered && !disableTilt ? "border-white/[0.08] bg-[#070b1a]/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_30px_60px_-10px_rgba(0,0,0,0.8)]" : "shadow-[0_20px_40px_rgba(0,0,0,0.4)]",
        className
      )}
    >
      <motion.div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-700"
        style={{ 
          opacity: isHovered ? 1 : 0,
          background: glowBackground,
        }}
      />
      <div style={{ transform: "translateZ(30px)" }} className="relative z-10 h-full">
        {children}
      </div>
      <motion.div 
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none z-0 hidden md:block"
        animate={{ top: ["-10%", "110%"] }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  )
}

// --------------------------------------------------------
// Services Section
// --------------------------------------------------------
const INDUSTRIES = [
  { id: "educare", title: "Educare", desc: "Admissions & institutional analytics.", icon: Building2 },
  { id: "healthcare", title: "Healthcare", desc: "Patient routing & data pipelines.", icon: Activity },
  { id: "hospitality", title: "Hospitality", desc: "Reservation orchestration widgets.", icon: Network },
  { id: "agriculture", title: "Agriculture", desc: "Yield monitoring telemetry.", icon: Expand },
  { id: "b2b", title: "B2B", desc: "B2B operational systems.", icon: Server },
  { id: "ecommerce", title: "E-Commerce", desc: "High-volume transaction engines.", icon: Database },
  { id: "msme", title: "MSMEs", desc: "Legacy modernization.", icon: Building2 },
];

const CAPABILITIES = [
  { id: "ai", title: "AI Automation", desc: "Autonomous pipelines.", icon: Cpu },
  { id: "rag", title: "RAG Systems", desc: "Vector-driven intelligence.", icon: Database },
  { id: "dashboards", title: "Intelligent Dashboards", desc: "Live telemetry UI.", icon: Activity },
  { id: "saas", title: "SaaS Infrastructure", desc: "Multi-tenant architectures.", icon: Cloud },
  { id: "analytics", title: "Predictive Analytics", desc: "Data forecasting models.", icon: Zap },
  { id: "edge", title: "Edge-Cached Systems", desc: "Sub-50ms latency APIs.", icon: Wifi },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState<"industry" | "capability">("industry");
  const items = activeTab === "industry" ? INDUSTRIES : CAPABILITIES;

  return (
    <section className="relative pt-12 pb-16 lg:pt-24 lg:pb-32 overflow-hidden" id="services">
      
      {/* Restrained background layers for narrative continuity */}
      <div className="absolute inset-0 bg-transparent pointer-events-none -z-20" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        
        {/* Cinematic Asymmetric Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 lg:mb-24 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -40, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
            className="flex flex-col items-start text-left max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.04] bg-white/[0.02] px-3.5 py-1.5 uppercase tracking-[0.25em] text-[10px] text-zinc-500 mb-8 backdrop-blur-sm">
              <span className="size-1.5 bg-[var(--color-accent-cyan)] rounded-full shadow-[0_0_10px_var(--color-accent-cyan)] animate-pulse" />
              EXPLORE_SERVICES_MATRIX
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-semibold tracking-tighter leading-[0.95] text-white mb-6">
              Enterprise<br/>
              <span className="text-zinc-600">Operations.</span>
            </h2>
            <p className="text-zinc-500 text-lg lg:text-xl leading-relaxed max-w-xl font-light">
              We engineer digital modernization pathways specific to your operational ecosystem and industry requirements.
            </p>
          </motion.div>

          {/* Matrix Controls */}
          <motion.div 
            initial={{ opacity: 0, x: 40, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            className="flex flex-row md:flex-col items-center md:items-end gap-2 border border-white/[0.05] p-1.5 rounded-full bg-white/[0.01] backdrop-blur-sm"
          >
             <button 
               onClick={() => setActiveTab("industry")}
               className={cn("px-6 py-2.5 rounded-full text-[11px] font-mono tracking-widest uppercase transition-all duration-300", activeTab === "industry" ? "bg-white text-black font-semibold" : "text-zinc-500 hover:text-zinc-300")}
             >
               By Industry
             </button>
             <button 
               onClick={() => setActiveTab("capability")}
               className={cn("px-6 py-2.5 rounded-full text-[11px] font-mono tracking-widest uppercase transition-all duration-300", activeTab === "capability" ? "bg-white text-black font-semibold" : "text-zinc-500 hover:text-zinc-300")}
             >
               By Capability
             </button>
          </motion.div>
        </div>

        {/* Dynamic Bento Grid Matrix */}
        <div className="relative min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {items.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <TiltedCard key={item.id} glowColor={activeTab === "industry" ? "rgba(34, 211, 238, 0.1)" : "rgba(139, 92, 246, 0.1)"} className="p-6 md:p-8 flex flex-col min-h-[280px]">
                    <div className="flex justify-between items-start mb-6">
                      <Icon className="size-6 text-zinc-400 group-hover:text-white transition-colors duration-500" />
                      <div className="font-mono text-[9px] text-zinc-600 tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {activeTab === "industry" ? "SECTOR" : "SYS_OP"}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-medium text-white mb-2 tracking-tight group-hover:text-[var(--color-accent-cyan)] transition-colors duration-500">{item.title}</h3>
                    <p className="text-sm font-light text-zinc-500 leading-relaxed mb-8">{item.desc}</p>
                    
                    <div className="mt-auto flex flex-col gap-4">
                      {/* Transformation Tag */}
                      <div className="flex items-center justify-between font-mono text-[9px] text-zinc-500 tracking-wider">
                         <span>LEGACY</span>
                         <ArrowRight className="size-3 text-[var(--color-accent-cyan)]/50" />
                         <span className="text-white">XOVA_SYS</span>
                      </div>
                      
                      <Link href={`/services/${item.id}`} className="group/btn inline-flex items-center justify-between border-t border-white/[0.05] pt-4 text-xs font-semibold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">
                        <span>Explore Arch</span>
                        <ArrowRight className="size-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </TiltedCard>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
