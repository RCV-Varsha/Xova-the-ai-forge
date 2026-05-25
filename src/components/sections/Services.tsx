"use client"

import React, { useRef, useState, MouseEvent } from "react"
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion"
import { Network, Cpu, Palette, Zap, Building2 } from "lucide-react"
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
        "relative rounded-2xl border border-white/10 bg-[#0A1020]/50 backdrop-blur-md overflow-hidden transition-colors duration-500",
        isHovered ? "border-white/20 bg-[#0A1020]/80" : "",
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
      opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <section className="relative pt-24 pb-32 overflow-hidden" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start mb-20 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1.5 text-[9px] font-mono tracking-widest text-[var(--color-accent-blue)] uppercase mb-6">
            CAPABILITIES
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Engineered Systems
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] font-light leading-relaxed">
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
          {/* Row 1: Digital Infrastructure (Full Width) */}
          <motion.div variants={itemVariants}>
            <TiltedCard glowColor="rgba(34, 211, 238, 0.15)" className="p-8 md:p-12 min-h-[380px] flex flex-col md:flex-row gap-12 group">
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <Network className="size-8 text-[var(--color-accent-cyan)] mb-6 opacity-80" />
                  <h3 className="text-2xl font-semibold text-white mb-4">Digital Infrastructure Systems</h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-md">
                    Custom-built virtual foundations that keep critical operations running. Secure, scalable, and resilient cloud architectures.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-8 font-mono text-[9px] text-zinc-500 tracking-wider">
                  <span className="px-2 py-1 rounded-sm border border-white/10 bg-white/5">ISOLATED VPC</span>
                  <span className="px-2 py-1 rounded-sm border border-white/10 bg-white/5">API GATEWAYS</span>
                  <span className="px-2 py-1 rounded-sm border border-white/10 bg-white/5">AUTO SCALE</span>
                </div>
              </div>
              {/* Visual Node */}
              <div className="hidden md:flex w-[35%] items-center justify-center relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="size-48 border border-white/10 rounded-full flex items-center justify-center border-dashed group-hover:rotate-180 transition-transform duration-[10s] ease-linear">
                  <div className="size-32 border border-[var(--color-accent-cyan)]/30 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.1)]">
                    <div className="size-4 bg-[var(--color-accent-cyan)]/80 rounded-full shadow-[0_0_15px_rgba(34,211,238,1)]" />
                  </div>
                </div>
              </div>
            </TiltedCard>
          </motion.div>

          {/* Row 2: Asymmetrical Split */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* AI Workflow (7 cols) */}
            <motion.div variants={itemVariants} className="md:col-span-7">
              <TiltedCard glowColor="rgba(139, 92, 246, 0.15)" className="p-8 md:p-10 h-full flex flex-col justify-between">
                <div>
                  <Cpu className="size-8 text-[var(--color-accent-violet)] mb-6 opacity-80" />
                  <h3 className="text-xl font-semibold text-white mb-4">AI Workflow Automation</h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-sm">
                    Autonomous pipelines that handle repetitive administrative processes, liberating hours of human attention.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-8 font-mono text-[9px] text-zinc-500 tracking-wider">
                  <span className="px-2 py-1 rounded-sm border border-[var(--color-accent-violet)]/20 bg-[var(--color-accent-violet)]/5 text-[var(--color-accent-violet)]">AGENTIC ROUTING</span>
                  <span className="px-2 py-1 rounded-sm border border-white/10 bg-white/5">VECTOR DB</span>
                  <span className="px-2 py-1 rounded-sm border border-white/10 bg-white/5">NLP INGEST</span>
                </div>
              </TiltedCard>
            </motion.div>

            {/* Brand Identity (5 cols) */}
            <motion.div variants={itemVariants} className="md:col-span-5">
              <TiltedCard glowColor="rgba(255, 255, 255, 0.1)" className="p-8 md:p-10 h-full flex flex-col justify-between">
                <div>
                  <Palette className="size-8 text-zinc-300 mb-6 opacity-80" />
                  <h3 className="text-xl font-semibold text-white mb-4">Brand Identity Systems</h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    Translating complex technological processes into sharp typographic frameworks and technical authority.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-8 font-mono text-[9px] text-zinc-500 tracking-wider">
                  <span className="px-2 py-1 rounded-sm border border-white/10 bg-white/5">TOKENS</span>
                  <span className="px-2 py-1 rounded-sm border border-white/10 bg-white/5">TYPOGRAPHY</span>
                </div>
              </TiltedCard>
            </motion.div>

          </div>

          {/* Row 3: Utility Band & MSME Split */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            <motion.div variants={itemVariants} className="md:col-span-5">
              <TiltedCard glowColor="rgba(59, 130, 246, 0.15)" className="p-8 h-full flex flex-col justify-between">
                <div>
                  <Zap className="size-6 text-[var(--color-accent-blue)] mb-5 opacity-80" />
                  <h3 className="text-lg font-semibold text-white mb-2">Performance Optimization</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    Isolating and accelerating bottlenecks to achieve imperceptible latency.
                  </p>
                </div>
                <div className="mt-6 border-t border-white/10 pt-4 font-mono text-[9px] text-zinc-500 flex justify-between">
                  <span>LATENCY</span>
                  <span className="text-[var(--color-accent-blue)]">SUB-50MS</span>
                </div>
              </TiltedCard>
            </motion.div>

            <motion.div variants={itemVariants} className="md:col-span-7">
              <TiltedCard disableTilt className="p-8 h-full flex flex-col justify-between bg-gradient-to-br from-[#0A1020]/80 to-[#02040A]">
                <div>
                  <Building2 className="size-6 text-zinc-400 mb-5 opacity-80" />
                  <h3 className="text-lg font-semibold text-white mb-2">MSME Transformation</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-md">
                    Bridging traditional operations with modern software. Legacy porting and integrated automation for expanding enterprises.
                  </p>
                </div>
                 <div className="mt-6 border-t border-white/10 pt-4 font-mono text-[9px] text-zinc-500 flex justify-between">
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

