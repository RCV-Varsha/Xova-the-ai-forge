import React from "react";
import InitiateWorkflow from "@/components/initiate/InitiateWorkflow";

export const metadata = {
  title: "Initiate Deployment | XOVA",
  description: "Initiate intelligent infrastructure and operational deployment workflows.",
};

export default function InitiatePage() {
  return (
    <main className="relative w-full min-h-[85vh] bg-[#02040A] text-zinc-50 overflow-hidden pt-32 pb-16">
      {/* Architectural Vector Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      {/* Extremely restrained atmospheric lighting */}
      <div className="absolute top-0 left-[20%] w-[40%] h-[300px] bg-[var(--color-accent-cyan)]/5 blur-[80px] mix-blend-screen opacity-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col">
        {/* Entry Hero */}
        <div className="mb-12 max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-[var(--color-accent-blue)] rounded-full border border-[var(--color-accent-blue)]/20 bg-[var(--color-accent-blue)]/5 px-3.5 py-1.5">
            DEPLOYMENT PROTOCOL
          </div>
          <h1 className="mb-4 font-sans text-4xl font-bold tracking-tight text-white md:text-5xl">
            Initiate Intelligent Infrastructure
          </h1>
          <p className="text-lg text-zinc-400 font-light leading-relaxed">
            Configure your operational environment. This workflow will transmit your deployment parameters directly to our architecture team.
          </p>
        </div>

        {/* Workflow Component */}
        <InitiateWorkflow />
      </div>
    </main>
  );
}
