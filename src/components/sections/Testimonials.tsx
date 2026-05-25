"use client"

import React from "react";
import { motion } from "framer-motion";

// ─── Infinite Marquee ─────────────────────────────────────────────────────────
const trustSignals = [
  "DEPLOYED LIVE SYSTEMS",
  "AI PIPELINE ACTIVE",
  "PRODUCTION READY",
  "AUTOMATION ONLINE",
  "INFRASTRUCTURE STABLE",
  "VERIFIED OUTCOMES",
];

function TrustMarquee() {
  return (
    <div 
      className="relative overflow-hidden w-full py-4 mb-12 select-none"
      style={{ 
        maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
      }}
    >
      <motion.div
        className="flex whitespace-nowrap gap-16"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 45, ease: "linear", repeat: Infinity }}
      >
        {[...trustSignals, ...trustSignals].map((signal, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 font-mono text-[11px] tracking-[0.25em] uppercase text-zinc-300 font-medium"
            style={{ textShadow: "0 0 10px rgba(0, 255, 208, 0.4)" }}
          >
            <span className="size-1.5 rounded-full bg-[var(--color-accent-cyan)]/80 inline-block flex-shrink-0 shadow-[0_0_8px_rgba(0,255,208,0.6)]" />
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
      className="relative w-full bg-transparent py-12 lg:py-16 overflow-hidden"
      id="testimonials"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[var(--color-accent-blue)] rounded-full border border-[var(--color-accent-blue)]/20 bg-[var(--color-accent-blue)]/5 px-4 py-1.5">
            CLIENT_RECORDS
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-5">
            System Validation
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] font-light leading-relaxed">
            Feedback from founders and editors operating live XOVA-built infrastructure.
          </p>
        </div>

        {/* Trust Signals Marquee */}
        <TrustMarquee />

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
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
              className={`group relative rounded-2xl border border-white/[0.12] bg-[#050914] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_20px_40px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col justify-between p-6 md:p-8 transition-all duration-500 hover:border-white/20 hover:bg-[#070b1a] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_30px_60px_rgba(0,0,0,0.8)] ${t.colSpan}`}
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
