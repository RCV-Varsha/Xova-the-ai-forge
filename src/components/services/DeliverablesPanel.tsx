"use client";

import React from "react";
import { motion } from "framer-motion";
import { IndustryService } from "@/types/service";
import { Package } from "lucide-react";

export default function DeliverablesPanel({ industry }: { industry: IndustryService }) {
  return (
    <section className="py-16 lg:py-24 bg-[#02040a] border-t border-white/[0.05]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
          <div className="md:w-1/3">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">
              Final Deliverables
            </h2>
            <p className="text-sm font-light text-zinc-400 mb-8">
              The tangible assets and systems you receive at deployment.
            </p>
          </div>

          <div className="md:w-2/3 grid gap-4 grid-cols-1 sm:grid-cols-2">
            {industry.deliverables.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-xl border border-white/10 bg-white/[0.02] flex flex-col gap-3"
              >
                <div className="size-10 rounded-lg border border-[var(--color-accent-violet)]/20 bg-[var(--color-accent-violet)]/10 flex items-center justify-center">
                  <Package className="size-5 text-[var(--color-accent-violet)]" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white tracking-tight">{item.title}</h3>
                  <p className="text-sm text-zinc-400 mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
