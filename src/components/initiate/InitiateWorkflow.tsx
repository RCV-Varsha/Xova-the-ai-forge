"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

// --- TELEMETRY DATA ---
const stageTelemetry: Record<number, string[]> = {
  0: [
    "[SYS] initializing deployment configuration",
    "[ROUTER] establishing secure uplink",
    "[STATE] awaiting context parameters...",
  ],
  1: [
    "[PIPELINE] context matrix registered",
    "[DIAGNOSTIC] scanning operational bottlenecks",
    "[SYS] preparing efficiency algorithms...",
  ],
  2: [
    "[SYS] friction points identified",
    "[ARCHITECT] loading virtual blueprints",
    "[STATE] awaiting target topology...",
  ],
  3: [
    "[SYS] architectural parameters secured",
    "[SCHEDULER] calibrating deployment window",
    "[PIPELINE] ready for final transmit...",
  ],
  4: [
    "[SYS] deployment package compiling...",
    "[ROUTER] transmitting parameters to engineering core",
    "[OK] uplink successful. standby for response.",
  ]
};

function TelemetryPanel({ activeStep }: { activeStep: number }) {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    setLogs([]);
    const currentLogs = stageTelemetry[activeStep] || [];
    let i = 0;
    const interval = setInterval(() => {
      if (i < currentLogs.length) {
        setLogs(prev => [...prev, currentLogs[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 400); // Fast, restrained interval
    return () => clearInterval(interval);
  }, [activeStep]);

  return (
    <div className="flex-1 rounded-2xl border border-white/[0.12] bg-[#050914] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_20px_40px_rgba(0,0,0,0.6)] p-5 lg:p-8 flex flex-col relative overflow-hidden min-h-[200px] lg:min-h-[400px]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />
      
      {/* Panel Header */}
      <div className="flex justify-between items-center border-b border-white/[0.08] pb-4 mb-6">
        <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
          Live Operational State
        </span>
        <div className="flex gap-1.5 items-center">
          <div className="size-1.5 rounded-full bg-[var(--color-accent-cyan)] animate-pulse" />
          <span className="font-mono text-[9px] text-[var(--color-accent-cyan)] uppercase tracking-wider">Online</span>
        </div>
      </div>

      {/* Log Stream */}
      <div className="font-mono text-[11px] text-zinc-400 uppercase flex flex-col gap-3 flex-1 overflow-y-auto">
        <AnimatePresence>
          {logs.map((log, i) => (
            <motion.div key={`${activeStep}-${i}`} initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} className="flex gap-4">
              <span className="text-zinc-600 shrink-0">{`>`}</span>
              <span className={typeof log === 'string' && log.includes("[OK]") ? "text-zinc-200 font-semibold" : "text-zinc-400"}>
                {log}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
        <div className="flex gap-4 mt-1">
          <span className="text-zinc-600">{`>`}</span>
          <motion.div animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-2 h-3.5 bg-zinc-500" />
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[var(--color-accent-cyan)]/5 blur-[60px] rounded-full pointer-events-none" />
    </div>
  );
}

// --- FORM COMPONENTS ---
const InputField = ({ label, id, placeholder, type = "text" }: { label: string, id: string, placeholder: string, type?: string }) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={id} className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest pl-1">
      {label}
    </label>
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className="w-full bg-[#03060D] border border-white/[0.12] rounded-lg px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:border-[var(--color-accent-cyan)]/50 focus:ring-1 focus:ring-[var(--color-accent-cyan)]/50 transition-all"
    />
  </div>
);

const SelectField = ({ label, id, options }: { label: string, id: string, options: string[] }) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={id} className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest pl-1">
      {label}
    </label>
    <select
      id={id}
      defaultValue=""
      className="w-full bg-[#03060D] border border-white/[0.12] rounded-lg px-4 py-3 text-sm text-zinc-200 focus:outline-none focus:border-[var(--color-accent-cyan)]/50 focus:ring-1 focus:ring-[var(--color-accent-cyan)]/50 transition-all appearance-none cursor-pointer"
    >
      <option value="" disabled>Select parameter...</option>
      {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
    </select>
  </div>
);

export default function InitiateWorkflow() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep < 4) setActiveStep(prev => prev + 1);
  };

  const handlePrev = () => {
    if (activeStep > 0) setActiveStep(prev => prev - 1);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 flex-1 pb-12">
      
      {/* LEFT SIDE: Form Flow */}
      <div className="lg:col-span-5 flex flex-col order-2 lg:order-1">
        <div className="flex-1 flex flex-col justify-center">
          
          <AnimatePresence mode="wait">
            {activeStep === 0 && (
              <motion.div key="step0" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} transition={{ duration: 0.3 }} className="flex flex-col gap-6">
                <h2 className="text-2xl font-bold text-white tracking-tight">System Context</h2>
                <p className="text-sm text-zinc-400 font-light mb-4">Define the industry parameters and scale of your current operations.</p>
                <InputField label="Industry Sector" id="industry" placeholder="e.g. Finance, Healthcare, E-commerce" />
                <SelectField label="Team Scale" id="scale" options={["1-10 Employees", "11-50 Employees", "51-200 Employees", "200+ Employees"]} />
              </motion.div>
            )}

            {activeStep === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} transition={{ duration: 0.3 }} className="flex flex-col gap-6">
                <h2 className="text-2xl font-bold text-white tracking-tight">Operational Friction</h2>
                <p className="text-sm text-zinc-400 font-light mb-4">Identify the primary bottlenecks restricting your throughput.</p>
                <SelectField label="Automation Maturity" id="maturity" options={["Manual Operations", "Basic Scripts / Zapier", "Custom Internal Tools", "Enterprise Automation"]} />
                <div className="flex flex-col gap-2">
                  <label htmlFor="bottleneck" className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest pl-1">Primary Bottleneck</label>
                  <textarea id="bottleneck" rows={3} placeholder="Describe the most time-consuming workflow..." className="w-full bg-[#03060D] border border-white/[0.12] rounded-lg px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:border-[var(--color-accent-cyan)]/50 focus:ring-1 focus:ring-[var(--color-accent-cyan)]/50 transition-all resize-none" />
                </div>
              </motion.div>
            )}

            {activeStep === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} transition={{ duration: 0.3 }} className="flex flex-col gap-6">
                <h2 className="text-2xl font-bold text-white tracking-tight">Architecture Targets</h2>
                <p className="text-sm text-zinc-400 font-light mb-4">Select the infrastructure systems required for deployment.</p>
                <SelectField label="Primary Objective" id="objective" options={["Reduce Latency/Costs", "Automate Data Pipelines", "Deploy AI Agents", "Modernize Legacy Systems"]} />
                <SelectField label="Target Infrastructure" id="infrastructure" options={["Cloud Virtualization", "AI Core Integration", "Full Stack Overhaul", "Security & Audit"]} />
              </motion.div>
            )}

            {activeStep === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} transition={{ duration: 0.3 }} className="flex flex-col gap-6">
                <h2 className="text-2xl font-bold text-white tracking-tight">Deployment Window</h2>
                <p className="text-sm text-zinc-400 font-light mb-4">Establish the urgency and contact parameters for your dedicated engineer.</p>
                <SelectField label="Urgency" id="urgency" options={["Immediate (1-2 Weeks)", "Standard (3-4 Weeks)", "Discovery (1-2 Months)", "Planning Phase"]} />
                <InputField label="Contact Email" id="email" type="email" placeholder="sysadmin@company.com" />
              </motion.div>
            )}

            {activeStep === 4 && (
              <motion.div key="step4" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center text-center gap-6 h-full py-12">
                <div className="size-16 rounded-full bg-[var(--color-accent-cyan)]/10 border border-[var(--color-accent-cyan)]/30 flex items-center justify-center">
                  <CheckCircle2 className="size-8 text-[var(--color-accent-cyan)]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white tracking-tight mb-2">Request Transmitted</h2>
                  <p className="text-sm text-zinc-400 font-light max-w-sm mx-auto">
                    Your parameters have been logged. A core engineer will analyze your topology and initiate contact.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Controls */}
          {activeStep < 4 && (
            <div className="mt-12 flex items-center justify-between border-t border-white/[0.08] pt-6">
              <button 
                onClick={handlePrev}
                disabled={activeStep === 0}
                className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 hover:text-zinc-300 disabled:opacity-0 transition-colors"
              >
                Go Back
              </button>
              
              <div className="flex gap-2">
                {[0, 1, 2, 3].map(step => (
                  <div key={step} className={`w-8 h-1 rounded-full transition-colors duration-300 ${step <= activeStep ? 'bg-[var(--color-accent-cyan)]' : 'bg-white/[0.08]'}`} />
                ))}
              </div>

              <button 
                onClick={handleNext}
                className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-medium text-sm hover:bg-zinc-200 transition-colors"
              >
                {activeStep === 3 ? "Initiate Deployment" : "Continue"}
                <ArrowRight className="size-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* RIGHT SIDE: Telemetry Panel */}
      <div className="lg:col-span-7 flex flex-col order-1 lg:order-2 mb-8 lg:mb-0">
        <TelemetryPanel activeStep={activeStep} />
      </div>

    </div>
  );
}
