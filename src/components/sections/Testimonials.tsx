"use client"

import React from "react";
import { motion } from "framer-motion";

// ─── Infinite Marquee ─────────────────────────────────────────────────────────
const trustSignals = [
  "DEPLOYED LIVE SYSTEMS",
  "VERIFIED CLIENT OUTCOMES",
  "ENTERPRISE INTEGRATION",
  "REAL-TIME PIPELINES",
  "ZERO DOWNTIME LAUNCHES",
  "100% DELIVERY RATE",
];

function TrustMarquee() {
  return (
    <div className="relative overflow-hidden w-full border-y border-white/[0.04] py-3 mb-24 select-none">
      <motion.div
        className="flex whitespace-nowrap gap-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {[...trustSignals, ...trustSignals].map((signal, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 font-mono text-[9px] tracking-[0.25em] uppercase text-zinc-600"
          >
            <span className="size-1 rounded-full bg-zinc-700 inline-block flex-shrink-0" />
            {signal}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const testimonials = [
  {
    id: "01",
    tag: "E-COMMERCE_INFRA",
    quote:
      "Xova Digital Solutions provided the best solution for reaching customers with a customized website. We would like to work with you for further expansion of our business.",
    attribution: "Co-Founder",
    location: "Print Maania, Nuzvid",
    stat: { value: "40+", label: "Products Listed" },
    colSpan: "lg:col-span-7",
  },
  {
    id: "02",
    tag: "EDITORIAL_SYSTEMS",
    quote: "Now the page alignment is fixed. Looks professional.",
    attribution: "Editorial Representative",
    location: "Inventum Publishers",
    stat: { value: "100%", label: "Delivery Rate" },
    colSpan: "lg:col-span-5",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function Testimonials() {
  return (
    <section
      className="relative w-full bg-transparent py-24 lg:py-40 overflow-hidden"
      id="testimonials"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-2xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-[var(--color-accent-cyan)] rounded-full border border-[var(--color-accent-cyan)]/20 bg-[var(--color-accent-cyan)]/5 px-3.5 py-1.5">
            CLIENT VALIDATION
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-5">
            System Validation
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] font-light leading-relaxed">
            Feedback from founders and editors operating live XOVA-built infrastructure.
          </p>
        </motion.div>

        {/* Trust Signals Marquee */}
        <TrustMarquee />

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: idx * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group relative rounded-2xl border border-white/10 bg-[#0A1020]/50 backdrop-blur-md overflow-hidden flex flex-col justify-between p-8 md:p-12 transition-all duration-500 hover:border-white/20 hover:bg-[#0A1020]/80 ${t.colSpan}`}
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative z-10 flex flex-col gap-6">
                {/* Card meta */}
                <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-zinc-600">
                  <span className="text-[var(--color-accent-cyan)]/60">{t.tag}</span>
                  <span className="border border-white/5 bg-white/[0.02] px-2 py-0.5 rounded text-zinc-500">
                    {t.id}
                  </span>
                </div>

                {/* Giant typographic quote mark */}
                <div className="text-[100px] leading-none font-serif text-white/[0.04] select-none -mb-8 -ml-1">
                  &ldquo;
                </div>

                {/* Quote */}
                <blockquote className="text-lg md:text-xl text-zinc-200 font-light leading-relaxed italic">
                  {t.quote}
                </blockquote>

                {/* Divider + Attribution + Stat */}
                <div className="border-t border-white/[0.06] pt-6 flex items-end justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">{t.attribution}</p>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 mt-1">
                      {t.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-white tracking-tight">
                      {t.stat.value}
                    </p>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-zinc-500">
                      {t.stat.label}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
