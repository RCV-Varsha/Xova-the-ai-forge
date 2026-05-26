"use client";

import React from "react";
import { motion } from "framer-motion";
import { IndustryService } from "@/types/service";
import { AlertCircle } from "lucide-react";

export default function BusinessProblems({ industry }: { industry: IndustryService }) {
  return (
    <section className="py-16 lg:py-24 bg-[#03060d]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          
          <div className="md:w-1/3">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">
              Current Friction Points
            </h2>
            <p className="text-sm font-light text-zinc-400">
              Identifying operational bottlenecks in {industry.title.toLowerCase()}.
            </p>
          </div>

          <div className="md:w-2/3">
            <div className="grid gap-6">
              {industry.problems.map((problem, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="flex items-start gap-4 p-6 rounded-xl border border-red-500/10 bg-red-500/[0.02]"
                >
                  <AlertCircle className="size-5 text-red-400 mt-0.5 shrink-0" />
                  <p className="text-[15px] font-light text-zinc-300 leading-relaxed">
                    {problem}
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
