"use client";

import React from "react";
import { motion } from "framer-motion";
import { IndustryService } from "@/types/service";
import { CheckCircle2 } from "lucide-react";

export default function SolutionsSection({ industry }: { industry: IndustryService }) {
  return (
    <section className="py-16 lg:py-24 bg-[#050811] border-t border-white/[0.05]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row-reverse gap-12 lg:gap-24">
          
          <div className="md:w-1/3">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">
              XOVA Solutions
            </h2>
            <p className="text-sm font-light text-zinc-400">
              Architectural interventions to resolve operational friction.
            </p>
          </div>

          <div className="md:w-2/3">
            <div className="grid gap-6">
              {industry.solutions.map((solution, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="flex items-start gap-4 p-6 rounded-xl border border-[var(--color-accent-cyan)]/10 bg-[var(--color-accent-cyan)]/[0.02]"
                >
                  <CheckCircle2 className="size-5 text-[var(--color-accent-cyan)] mt-0.5 shrink-0" />
                  <p className="text-[15px] font-light text-zinc-300 leading-relaxed">
                    {solution}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
