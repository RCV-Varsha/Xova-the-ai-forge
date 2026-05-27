"use client"
import React from 'react'
import { motion } from 'framer-motion'

export function PlatformTimeline({ timeline }: { timeline: any[] }) {
  return (
    <div className="relative mt-20 md:mt-32 w-full">
      {/* Vertical Track Spine */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/[0.05] md:-translate-x-1/2 z-0" />
      
      <div className="flex flex-col gap-12 md:gap-24 relative z-10 w-full">
        {timeline.map((item, idx) => (
          <TimelineItem key={idx} item={item} index={idx} />
        ))}
      </div>
    </div>
  )
}

function TimelineItem({ item, index }: { item: any; index: number }) {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      initial="idle"
      whileInView="active"
      viewport={{ once: false, margin: "-20%" }}
      className={`relative flex flex-col items-start ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 w-full`}
    >
      {/* Center Node */}
      <div className="absolute left-4 md:left-1/2 top-0 md:-translate-x-1/2 -translate-x-[7px] flex items-center justify-center mt-[2px] md:mt-[6px]">
        <motion.div 
          variants={{
            idle: { borderColor: "rgba(255,255,255,0.02)", backgroundColor: "rgba(255,255,255,0.01)", boxShadow: "0 0 0 rgba(34, 211, 238, 0)" },
            active: { borderColor: "rgba(34, 211, 238, 0.4)", backgroundColor: "rgba(34, 211, 238, 0.1)", boxShadow: "0 0 20px rgba(34, 211, 238, 0.2)" }
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-4 h-4 rounded-full border-2 z-10"
        />
      </div>

      {/* Content Box */}
      <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 text-left'}`}>
        <motion.div
          variants={{
            idle: { borderColor: "rgba(255,255,255,0.02)" },
            active: { borderColor: "rgba(34, 211, 238, 0.2)" }
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="p-6 md:p-8 border rounded-2xl bg-[#050811]/40 backdrop-blur-sm transition-colors text-left"
        >
          <div className="font-mono text-[10px] tracking-widest text-[var(--color-accent-cyan)] mb-3">PHASE {item.phase} • {item.duration}</div>
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 tracking-tight">{item.title}</h3>
          <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed mb-6">{item.desc}</p>
          
          {item.deliverables && item.deliverables.length > 0 && (
            <div className="flex flex-col gap-2">
              <div className="font-mono text-[9px] uppercase tracking-widest text-zinc-600 mb-1">Deliverables</div>
              {item.deliverables.map((del: string, i: number) => (
                <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                  <span className="w-1 h-1 rounded-full bg-white/20 shrink-0" />
                  <span className="leading-relaxed">{del}</span>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
      
      {/* Empty spacer for the other half on desktop */}
      <div className="hidden md:block md:w-1/2" />
    </motion.div>
  )
}
