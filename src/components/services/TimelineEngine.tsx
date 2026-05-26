"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TimelineStage, IndustryService } from "@/types/service";
import { cn } from "@/lib/utils";
import { CheckCircle2, Clock, CircleDashed, ChevronRight, FileText, Target, TrendingUp, AlertCircle, Calendar } from "lucide-react";

// --------------------------------------------------------
// SUB-COMPONENTS for reusability between Mobile and Desktop
// --------------------------------------------------------

const StatusIcon = ({ status }: { status: TimelineStage["status"] }) => {
  const isCompleted = status === "completed";
  const isActive = status === "active";
  const isUpcoming = status === "upcoming";

  return (
    <div className={cn(
      "size-10 rounded-full border flex flex-shrink-0 items-center justify-center transition-colors duration-500",
      isCompleted ? "border-[var(--color-accent-cyan)]/30 bg-[var(--color-accent-cyan)]/10 text-[var(--color-accent-cyan)]" :
      isActive ? "border-[var(--color-accent-violet)]/50 bg-[var(--color-accent-violet)]/20 text-[var(--color-accent-violet)] shadow-[0_0_15px_rgba(139,92,246,0.2)]" :
      "border-white/10 bg-[#03060d] text-zinc-600"
    )}>
      {isCompleted && <CheckCircle2 className="size-5" />}
      {isActive && <Clock className="size-5 animate-pulse" />}
      {isUpcoming && <CircleDashed className="size-5" />}
    </div>
  );
};

const DetailContent = ({ stage }: { stage: TimelineStage }) => (
  <div className="flex flex-col gap-8">
    {/* Header & Meta */}
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-6">
      <div>
        <div className="inline-flex items-center gap-2 rounded-sm border border-[var(--color-accent-violet)]/20 bg-[var(--color-accent-violet)]/5 px-2.5 py-1 uppercase tracking-[0.2em] text-[10px] text-[var(--color-accent-violet)] mb-3">
          <Calendar className="size-3" />
          <span>Duration: {stage.duration}</span>
        </div>
        <h3 className="text-2xl lg:text-3xl font-semibold text-white tracking-tight">
          {stage.title}
        </h3>
      </div>
      
      {stage.clientReviewStatus && (
        <div className={cn(
          "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium tracking-wide",
          stage.clientReviewStatus === "Verified" 
            ? "border-[var(--color-accent-cyan)]/30 bg-[var(--color-accent-cyan)]/10 text-[var(--color-accent-cyan)]"
            : "border-amber-500/30 bg-amber-500/10 text-amber-500"
        )}>
          {stage.clientReviewStatus === "Verified" ? <CheckCircle2 className="size-3.5" /> : <AlertCircle className="size-3.5" />}
          {stage.clientReviewStatus}
        </div>
      )}
    </div>

    {/* Objective & Impact Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-[#02040a] border border-white/5 rounded-xl p-5 group hover:border-white/10 transition-colors">
        <h4 className="text-[11px] font-mono tracking-widest uppercase text-zinc-400 mb-3 flex items-center gap-2">
          <Target className="size-3.5 text-[var(--color-accent-violet)]" />
          Execution Objective
        </h4>
        <p className="text-[15px] font-light text-zinc-300 leading-relaxed">
          {stage.objective}
        </p>
      </div>

      <div className="bg-[#02040a] border border-[var(--color-accent-cyan)]/10 rounded-xl p-5 relative overflow-hidden group">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--color-accent-cyan)]/20 group-hover:bg-[var(--color-accent-cyan)] transition-colors duration-500" />
        <h4 className="text-[11px] font-mono tracking-widest uppercase text-zinc-400 mb-3 flex items-center gap-2 pl-2">
          <TrendingUp className="size-3.5 text-[var(--color-accent-cyan)]" />
          Business Impact
        </h4>
        <p className="text-[15px] font-light text-zinc-300 leading-relaxed pl-2">
          {stage.businessImpact}
        </p>
      </div>
    </div>

    {/* Deliverables & Notes */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {stage.deliverables && stage.deliverables.length > 0 && (
        <div>
          <h4 className="text-[11px] font-mono tracking-widest uppercase text-zinc-500 mb-4 flex items-center gap-2">
            <FileText className="size-3.5" />
            Tangible Deliverables
          </h4>
          <ul className="space-y-3">
            {stage.deliverables.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[14px] text-zinc-300 font-light">
                <ChevronRight className="size-4 text-[var(--color-accent-violet)] shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {stage.operationalNotes && (
        <div>
          <h4 className="text-[11px] font-mono tracking-widest uppercase text-zinc-500 mb-4">
            Operational Notes
          </h4>
          <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5 text-sm font-light text-zinc-400 italic">
            "{stage.operationalNotes}"
          </div>
        </div>
      )}
    </div>
  </div>
);


// --------------------------------------------------------
// MAIN COMPONENT
// --------------------------------------------------------

export default function TimelineEngine({ industry }: { industry: IndustryService }) {
  // Find first active stage, or default to first stage
  const defaultActiveIndex = industry.timeline.findIndex(s => s.status === "active");
  const [activeStageId, setActiveStageId] = useState<string>(
    defaultActiveIndex >= 0 ? industry.timeline[defaultActiveIndex].id : industry.timeline[0].id
  );

  const activeStageData = industry.timeline.find(s => s.id === activeStageId) || industry.timeline[0];

  return (
    <section className="py-24 lg:py-32 bg-[#050811] relative overflow-hidden border-t border-white/[0.05]">
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 text-center lg:text-left max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Transformation Delivery Roadmap
          </h2>
          <p className="text-zinc-400 text-[17px] font-light leading-relaxed">
            We operate on a strict, transparent execution framework. Here is exactly what happens when you partner with XOVA to architect your digital infrastructure.
          </p>
        </div>

        {/* ---------------------------------------------------- */}
        {/* DESKTOP LAYOUT (Split Pane) */}
        {/* ---------------------------------------------------- */}
        <div className="hidden lg:grid grid-cols-12 gap-12 min-h-[600px]">
          
          {/* Left Navigation Panel */}
          <div className="col-span-4 relative border-l border-white/10 ml-5 py-4">
            {industry.timeline.map((stage, idx) => {
              const isActiveNode = activeStageId === stage.id;
              
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  className={cn(
                    "w-full text-left relative flex items-center gap-6 py-6 group",
                    stage.status === "upcoming" ? "opacity-60" : "opacity-100"
                  )}
                >
                  {/* Status Indicator (pulled left to overlap the border) */}
                  <div className="absolute -left-[20px] top-1/2 -translate-y-1/2 bg-[#050811] py-2">
                    <StatusIcon status={stage.status} />
                  </div>

                  {/* Active selection glow beam */}
                  {isActiveNode && (
                    <motion.div 
                      layoutId="activeTimelineBeam"
                      className="absolute -left-[1px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-transparent via-[var(--color-accent-cyan)] to-transparent shadow-[0_0_10px_var(--color-accent-cyan)]"
                    />
                  )}

                  {/* Stage Title Area */}
                  <div className="pl-10 transition-transform duration-300 group-hover:translate-x-2">
                    <div className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 mb-1">
                      Phase 0{idx + 1}
                    </div>
                    <h3 className={cn(
                      "text-lg tracking-tight font-medium transition-colors",
                      isActiveNode ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"
                    )}>
                      {stage.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Detail Panel */}
          <div className="col-span-8 relative">
            <div className="absolute inset-0 rounded-2xl border border-white/10 bg-white/[0.01] backdrop-blur-sm p-8 lg:p-10 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStageId}
                  initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <DetailContent stage={activeStageData} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* ---------------------------------------------------- */}
        {/* MOBILE LAYOUT (Accordion) */}
        {/* ---------------------------------------------------- */}
        <div className="flex flex-col lg:hidden relative ml-4 border-l border-white/10">
          {industry.timeline.map((stage, idx) => {
            const isExpanded = activeStageId === stage.id;

            return (
              <div key={stage.id} className="relative mb-8 last:mb-0">
                {/* Connector/Icon */}
                <div className="absolute -left-[20px] top-0 bg-[#050811] py-2">
                  <StatusIcon status={stage.status} />
                </div>

                {/* Header (Tap to expand) */}
                <button
                  onClick={() => setActiveStageId(isExpanded ? "" : stage.id)}
                  className={cn(
                    "w-full text-left pl-10 py-4 flex flex-col items-start gap-1",
                    stage.status === "upcoming" ? "opacity-60" : "opacity-100"
                  )}
                >
                  <div className="text-[10px] font-mono tracking-widest uppercase text-[var(--color-accent-violet)]">
                    Phase 0{idx + 1}
                  </div>
                  <h3 className="text-xl font-medium text-white tracking-tight">
                    {stage.title}
                  </h3>
                </button>

                {/* Expanded Content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pl-10 pb-8 pt-2">
                        <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-5">
                          <DetailContent stage={stage} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
