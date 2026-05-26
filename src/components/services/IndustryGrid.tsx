"use client";

import React from "react";
import { motion } from "framer-motion";
import { IndustryService } from "@/types/service";
import IndustryCard from "./IndustryCard";

interface IndustryGridProps {
  industries: IndustryService[];
}

export default function IndustryGrid({ industries }: IndustryGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative py-16 lg:py-24">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {industries.map((industry) => (
            <motion.div key={industry.slug} variants={itemVariants} className="h-full">
              <IndustryCard industry={industry} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
