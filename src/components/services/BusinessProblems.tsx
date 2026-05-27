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
          
          <div className="md:w-1/3 relative">
            <div className="absolute -left-8 top-2 bottom-0 w-px bg-gradient-to-b from-red-500/50 to-transparent" />
            <motion.div 
               animate={{ y: [0, 100, 0] }}
               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
               className="absolute -left-[33px] top-2 size-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]"
            />
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
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-4 p-6 rounded-xl border border-red-500/10 bg-[#02040a] relative overflow-hidden group hover:border-red-500/30 transition-colors duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/[0.02] to-transparent pointer-events-none group-hover:from-red-500/[0.05] transition-colors duration-500" />
                  
                  {/* Subtle telemetry pulse */}
                  <motion.div 
                    animate={{ opacity: [0, 0.5, 0], scale: [0.8, 1.2, 0.8] }}
                    transition={{ duration: 3, delay: idx * 0.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute right-4 top-4 size-1.5 rounded-full bg-red-500/50"
                  />

                  {/* Border sweep on hover */}
                  <motion.div 
                    className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />

                  <div className="relative z-10 bg-red-500/10 p-2 rounded-lg shrink-0 group-hover:bg-red-500/20 transition-colors duration-300">
                    <AlertCircle className="size-5 text-red-400" />
                  </div>
                  <p className="text-[15px] font-light text-zinc-300 leading-relaxed relative z-10 pt-1 group-hover:text-white transition-colors duration-300">
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
