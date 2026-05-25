"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    id: "faq-1",
    question: "What kind of systems does XOVA build?",
    answer:
      "XOVA builds custom web applications, administrative dashboards, e-commerce platforms, and internal tools designed to automate business workflows and improve operational efficiency.",
  },
  {
    id: "faq-2",
    question: "Do you build AI-powered solutions?",
    answer:
      "Yes. We integrate practical AI solutions like automated customer support, document parsing, semantic data search, and intelligent workflows to significantly reduce manual administrative tasks.",
  },
  {
    id: "faq-3",
    question: "Can XOVA redesign existing platforms?",
    answer:
      "Yes, we audit and modernize legacy software. We safely migrate outdated systems and databases into fast, secure, and scalable modern web applications without disrupting your daily operations.",
  },
  {
    id: "faq-4",
    question: "Do you provide admin dashboards?",
    answer:
      "Every system we build includes a secure, customized administrative backend. This gives your team complete control over content, user data, analytics, and core business logic.",
  },
  {
    id: "faq-5",
    question: "Can startups and MSMEs work with XOVA?",
    answer:
      "Absolutely. We specialize in helping Micro, Small, and Medium Enterprises transition from manual processes to modern software, providing enterprise-grade digital infrastructure at accessible scales.",
  },
  {
    id: "faq-6",
    question: "How does the project process work?",
    answer:
      "We follow a straightforward operational pipeline: Discovery (identifying your bottlenecks), Architecture (designing the technical solution), Engineering (building the software), and Deployment (launching with continuous monitoring and support).",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative w-full bg-transparent pt-8 pb-10 lg:pt-12 lg:pb-16 overflow-hidden" id="faq">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 max-w-2xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 font-mono uppercase tracking-[0.25em] text-[11px] text-[var(--color-accent-blue)] rounded-full border border-[var(--color-accent-blue)]/20 bg-[var(--color-accent-blue)]/5 px-3.5 py-1.5">
            INQUIRY REGISTRY
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight leading-[1] text-white mb-5">
            Frequently Asked
          </h2>
          <p className="text-zinc-400 text-base lg:text-lg leading-relaxed max-w-2xl">
            Clarifying our structural engineering processes, capabilities, and customized system integration frameworks.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "border rounded-xl px-6 transition-all duration-500 overflow-hidden",
                  isOpen 
                    ? "border-white/20 bg-[#070b1a] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_10px_30px_rgba(0,0,0,0.5)]" 
                    : "border-white/[0.08] bg-white/[0.01] hover:border-white/15 hover:bg-white/[0.03]"
                )}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="group w-full flex items-center justify-between gap-6 py-6 text-left transition-colors duration-300"
                >
                  <span className={`text-lg lg:text-xl font-medium tracking-tight transition-colors duration-300 ${isOpen ? "text-white" : "text-zinc-300 group-hover:text-white"}`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
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
                      <p className="pb-6 text-zinc-400 text-base lg:text-lg leading-relaxed max-w-2xl">
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
