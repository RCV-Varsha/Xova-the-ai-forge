"use client";

import React from "react";
import { motion } from "framer-motion";
import { IndustryService } from "@/types/service";
import { 
  Zap, Database, Bot, ShieldCheck, Network, FileText, 
  Calendar, Users, Activity, LineChart, Route, Store,
  UserCircle, Cog, BarChart, Shield, CalendarClock, Video,
  FolderLock, Workflow, PenTool, CreditCard
} from "lucide-react";

const IconMap: Record<string, any> = {
  Zap, Database, Bot, ShieldCheck, Network, FileText, 
  Calendar, Users, Activity, LineChart, Route, Store,
  UserCircle, Cog, BarChart, Shield, CalendarClock, Video,
  FolderLock, Workflow, PenTool, CreditCard
};

export default function FeatureShowcase({ industry }: { industry: IndustryService }) {
  return (
    <section className="py-16 lg:py-24 bg-[#02040a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            System Features
          </h2>
          <p className="text-zinc-400 text-base font-light">
            Core functional capabilities built into your infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industry.features.map((feature, idx) => {
            const Icon = IconMap[feature.iconName] || Database;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-10%" }}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 rounded-2xl border border-white/5 bg-[#050914] flex flex-col items-center text-center group relative overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
              >
                {/* Conic Border Sweep */}
                <motion.div 
                  className="absolute inset-[-1px] rounded-2xl bg-[conic-gradient(from_0deg,transparent_70%,var(--color-accent-cyan)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ zIndex: -1 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Telemetry Scanline */}
                <motion.div 
                  className="absolute left-0 right-0 h-10 bg-gradient-to-b from-transparent via-[var(--color-accent-cyan)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  animate={{ top: ["-20%", "120%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Glass material overlay */}
                <div className="absolute inset-0 bg-white/[0.01] backdrop-blur-md pointer-events-none" />

                <div className="size-12 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center mb-6 relative z-10 group-hover:border-[var(--color-accent-cyan)]/30 transition-colors duration-500 shadow-[inset_0_0_15px_rgba(255,255,255,0.05)]">
                  <Icon className="size-5 text-zinc-300 group-hover:text-white transition-colors duration-300" />
                  
                  {/* Internal Activity Dot */}
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0, 1, 0] }}
                    transition={{ duration: Math.random() * 2 + 2, repeat: Infinity, delay: Math.random() }}
                    className="absolute top-1 right-1 size-1.5 rounded-full bg-[var(--color-accent-cyan)]"
                  />
                </div>
                <h3 className="text-lg font-medium text-white mb-3 tracking-tight relative z-10 group-hover:text-[var(--color-accent-cyan)] transition-colors duration-300">{feature.title}</h3>
                <p className="text-sm font-light text-zinc-400 leading-relaxed relative z-10">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
