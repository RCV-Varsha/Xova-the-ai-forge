"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      id: "faq-1",
      question: "What kind of systems does XOVA build?",
      answer: "XOVA engineers customized digital commerce infrastructures, database configurations, administrative dash boards, and custom workflow pipelines designed to scale operations and stabilize enterprise performance."
    },
    {
      id: "faq-2",
      question: "Do you build AI-powered solutions?",
      answer: "Yes. We design and integrate custom language model routing pipelines, autonomous data ingestion, semantic vector search capabilities, and agentic workflows tailored to liberate hours of administrative attention."
    },
    {
      id: "faq-3",
      question: "Can XOVA redesign existing platforms?",
      answer: "Yes, we conduct comprehensive operational audits to refactor and migrate legacy systems, databases, and subnets into clean, high-performance, and modernized web applications."
    },
    {
      id: "faq-4",
      question: "Do you provide admin dashboards?",
      answer: "Every system XOVA delivers is configured with tailored administrative backends, robust database management tools, and continuous logging streams, giving operators total system command."
    },
    {
      id: "faq-5",
      question: "Can startups and MSMEs work with XOVA?",
      answer: "Yes. XOVA is built specifically to bridge the gap between traditional operations and modern, high-performance software, providing institutional-grade systems designed to help emerging enterprises execute at scale."
    },
    {
      id: "faq-6",
      question: "How does the project process work?",
      answer: "We execute sequentially via our Pipeline Protocol: auditing workflows (Discover), architecting custom layout schematics (Architect), programming core software pipelines (Engineer), provisioning mirror sandboxes (Deploy), and tuning runtime latency (Optimize)."
    }
  ];

  return (
    <section className="relative w-full border-t border-white/[0.08] bg-[#020617] py-24 lg:py-32" id="faq">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-20 text-center md:text-left">
          <div className="mb-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
            <span className="h-px w-4 bg-zinc-500"></span>
            [ INQUIRY REGISTRY // FAQ ]
          </div>
          <h2 className="mb-6 font-sans text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-base text-zinc-300 font-light leading-relaxed max-w-2xl">
            Clarifying our structural engineering processes, capabilities, and customized system integration frameworks.
          </p>
        </div>

        {/* ShadCN Accordion UI */}
        <div className="w-full border-t border-white/[0.06]">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="border-b border-white/[0.06] py-3.5">
                <AccordionTrigger className="text-sm md:text-base font-medium tracking-wide text-zinc-200 hover:text-white transition-colors duration-300 hover:no-underline text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="mt-2 text-xs md:text-sm text-zinc-300 font-normal leading-relaxed tracking-wide pr-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
}
