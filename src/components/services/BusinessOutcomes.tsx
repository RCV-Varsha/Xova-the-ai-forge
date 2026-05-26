"use client";

import React from "react";
import { motion } from "framer-motion";
import { IndustryService } from "@/types/service";
import { Target } from "lucide-react";

export default function BusinessOutcomes({ industry }: { industry: IndustryService }) {
  return (
    <section className="py-16 lg:py-24 bg-[#03060d] border-t border-white/[0.05]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            Expected Outcomes
          </h2>
          <p className="text-zinc-400 text-base font-light">
            Measurable business impact from the deployed architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industry.businessOutcomes.map((outcome, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-xl border border-[var(--color-accent-violet)]/10 bg-[var(--color-accent-violet)]/[0.02] flex flex-col items-center text-center"
            >
              <Target className="size-8 text-[var(--color-accent-violet)] mb-4" />
              <p className="text-lg font-medium text-white tracking-tight">{outcome}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
