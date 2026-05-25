"use client"

import React from "react";
import { motion } from "framer-motion";

export default function Metrics() {
  const metrics = [
    {
      value: "2+",
      label: "Deployed Systems",
      signature: "[ SYS_CORE ]"
    },
    {
      value: "40+",
      label: "Workflow Automations",
      signature: "[ INTEGRATION_FLOWS ]"
    },
    {
      value: "99.9%",
      label: "Pipeline Stability",
      signature: "[ TELEMETRY_STABLE ]"
    },
    {
      value: "Real",
      label: "Collaborations",
      signature: "[ VERIFIED_CLIENTS ]"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.98, filter: "blur(2px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.0,
        ease: [0.25, 1, 0.5, 1] as const
      }
    }
  };

  return (
    <section className="relative w-full bg-transparent overflow-hidden">
      {/* Subtle atmospheric radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.015)_0%,transparent_80%)] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 pt-8 pb-16 lg:pt-12 lg:pb-24">
        <motion.div 
          className="grid grid-cols-2 gap-y-16 md:grid-cols-4 md:gap-y-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          
          {metrics.map((metric, index) => (
            <React.Fragment key={metric.label}>
              {/* Metric Item */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col items-center text-center md:items-start md:text-left px-4 md:px-8 lg:px-12 group relative"
              >
                {/* Subtle hover tracing glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10" />

                <span className="inline-flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-widest text-zinc-500 mb-2 select-none transition-colors duration-500 group-hover:text-zinc-400">
                  <span className="size-1 rounded-full bg-zinc-700 transition-colors duration-500 group-hover:bg-zinc-400" />
                  {metric.signature}
                </span>
                <span className="font-sans text-3xl font-semibold tracking-tight text-white sm:text-4xl mb-1.5 leading-none transition-colors duration-500 group-hover:text-zinc-100">
                  {metric.value}
                </span>
                <span className="font-sans text-[11px] font-normal tracking-wide text-zinc-400 transition-colors duration-500 group-hover:text-zinc-300">
                  {metric.label}
                </span>
              </motion.div>

              {/* Vertical Separator between items */}
              {index < metrics.length - 1 && (
                <motion.div 
                  variants={{ hidden: { opacity: 0, scaleY: 0 }, visible: { opacity: 1, scaleY: 1, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } } }}
                  className="hidden h-10 w-px bg-white/[0.06] self-center md:block origin-top" 
                />
              )}
            </React.Fragment>
          ))}

        </motion.div>
      </div>
    </section>
  );
}
