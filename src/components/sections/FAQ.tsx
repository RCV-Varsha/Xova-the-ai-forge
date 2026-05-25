"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    id: "faq-1",
    question: "What kind of systems does XOVA build?",
    answer:
      "XOVA engineers customized digital commerce infrastructures, database configurations, administrative dashboards, and custom workflow pipelines designed to scale operations and stabilize enterprise performance.",
  },
  {
    id: "faq-2",
    question: "Do you build AI-powered solutions?",
    answer:
      "Yes. We design and integrate custom language model routing pipelines, autonomous data ingestion, semantic vector search capabilities, and agentic workflows tailored to liberate hours of administrative attention.",
  },
  {
    id: "faq-3",
    question: "Can XOVA redesign existing platforms?",
    answer:
      "Yes, we conduct comprehensive operational audits to refactor and migrate legacy systems, databases, and subnets into clean, high-performance, and modernized web applications.",
  },
  {
    id: "faq-4",
    question: "Do you provide admin dashboards?",
    answer:
      "Every system XOVA delivers is configured with tailored administrative backends, robust database management tools, and continuous logging streams, giving operators total system command.",
  },
  {
    id: "faq-5",
    question: "Can startups and MSMEs work with XOVA?",
    answer:
      "Yes. XOVA is built specifically to bridge the gap between traditional operations and modern, high-performance software, providing institutional-grade systems designed to help emerging enterprises execute at scale.",
  },
  {
    id: "faq-6",
    question: "How does the project process work?",
    answer:
      "We execute sequentially via our Pipeline Protocol: auditing workflows (Discover), architecting custom layout schematics (Architect), programming core software pipelines (Engineer), provisioning mirror sandboxes (Deploy), and tuning runtime latency (Optimize).",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative w-full bg-transparent py-24 lg:py-40 overflow-hidden" id="faq">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-2xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-[var(--color-accent-blue)] rounded-full border border-[var(--color-accent-blue)]/20 bg-[var(--color-accent-blue)]/5 px-3.5 py-1.5">
            INQUIRY REGISTRY
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-5">
            Frequently Asked
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] font-light leading-relaxed">
            Clarifying our structural engineering processes, capabilities, and customized system integration frameworks.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="flex flex-col divide-y divide-white/[0.05]">
          {faqs.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="group w-full flex items-center justify-between gap-6 py-6 text-left transition-colors duration-300"
                >
                  <span className={`text-base font-medium tracking-wide transition-colors duration-300 ${isOpen ? "text-white" : "text-zinc-300 group-hover:text-white"}`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className={`flex-shrink-0 size-6 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "border-[var(--color-accent-cyan)]/40 bg-[var(--color-accent-cyan)]/10 text-[var(--color-accent-cyan)]"
                        : "border-white/10 text-zinc-500 group-hover:border-white/20 group-hover:text-zinc-300"
                    }`}
                  >
                    <Plus className="size-3" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-[var(--color-text-secondary)] leading-relaxed font-light max-w-2xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
