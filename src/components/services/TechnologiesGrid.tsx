"use client";

import React from "react";
import { motion } from "framer-motion";
import { IndustryService } from "@/types/service";
import { Server } from "lucide-react";

export default function TechnologiesGrid({ industry }: { industry: IndustryService }) {
  return (
    <section className="py-16 lg:py-24 bg-[#050811]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">
            Business Infrastructure
          </h2>
          <p className="text-zinc-400 text-sm font-light">
            We don't just write code; we provision reliable, scalable, and secure operational foundations designed to handle enterprise growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {industry.technologies.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-xl border border-white/10 bg-[#02040a] shadow-lg flex gap-4 items-start group hover:border-[var(--color-accent-cyan)]/30 transition-colors"
            >
              <div className="size-10 shrink-0 rounded-lg border border-[var(--color-accent-cyan)]/20 bg-[var(--color-accent-cyan)]/5 flex items-center justify-center group-hover:bg-[var(--color-accent-cyan)]/10 transition-colors">
                <Server className="size-5 text-[var(--color-accent-cyan)]" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white tracking-tight mb-1">
                  {tech.name}
                </h3>
                <p className="text-sm font-light text-zinc-400 leading-relaxed">
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
