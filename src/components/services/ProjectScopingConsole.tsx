"use client"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, CheckCircle2, Terminal } from "lucide-react"
import { cn } from "@/lib/utils"

type FormData = {
  bottleneck: string;
  timeline: string;
  name: string;
  email: string;
  sector: string;
};

export function ProjectScopingConsole() {
  const [step, setStep] = useState(1);
  const [isSimulating, setIsSimulating] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  
  const [formData, setFormData] = useState<FormData>({
    bottleneck: "",
    timeline: "",
    name: "",
    email: "",
    sector: "",
  });

  const handleSelect = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setTimeout(() => {
      if (step < 3) setStep(step + 1);
    }, 400); // slight delay for visual confirmation
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setIsSimulating(true);
    // Fake loading matrix sweep
    setTimeout(() => {
      setIsSimulating(false);
      setIsComplete(true);
      console.log("[XOVA_CONSOLE_LOG] BLUEPRINT GENERATED:", JSON.stringify(formData, null, 2));
    }, 2500);
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col gap-4 w-full"
          >
            <div className="font-mono text-xs text-zinc-500 mb-6 uppercase tracking-widest">
              [ 1 / 3 ] Identify Primary Operational Bottleneck
            </div>
            {["Legacy Architecture", "Slow Page Velocity", "Scale Constraints"].map((opt) => (
              <button
                key={opt}
                onClick={() => handleSelect("bottleneck", opt)}
                className={cn(
                  "px-6 py-4 border rounded text-left font-mono text-sm transition-all duration-300",
                  formData.bottleneck === opt 
                    ? "border-[var(--color-accent-cyan)] bg-[var(--color-accent-cyan)]/10 text-[var(--color-accent-cyan)]"
                    : "border-white/10 bg-transparent text-zinc-400 hover:border-white/30 hover:bg-white/5"
                )}
              >
                {opt}
              </button>
            ))}
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col gap-4 w-full"
          >
            <div className="font-mono text-xs text-zinc-500 mb-6 uppercase tracking-widest flex items-center justify-between">
              <span>[ 2 / 3 ] Define Platform Target Timeline</span>
              <button onClick={() => setStep(1)} className="text-[9px] hover:text-white transition-colors">← BACK</button>
            </div>
            {["Immediate MVP (4 Weeks)", "Enterprise Deployment (2-3 Months)"].map((opt) => (
              <button
                key={opt}
                onClick={() => handleSelect("timeline", opt)}
                className={cn(
                  "px-6 py-4 border rounded text-left font-mono text-sm transition-all duration-300",
                  formData.timeline === opt 
                    ? "border-[var(--color-accent-cyan)] bg-[var(--color-accent-cyan)]/10 text-[var(--color-accent-cyan)]"
                    : "border-white/10 bg-transparent text-zinc-400 hover:border-white/30 hover:bg-white/5"
                )}
              >
                {opt}
              </button>
            ))}
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col gap-4 w-full"
          >
            <div className="font-mono text-xs text-zinc-500 mb-6 uppercase tracking-widest flex items-center justify-between">
              <span>[ 3 / 3 ] Identification Metadata</span>
              <button onClick={() => setStep(2)} className="text-[9px] hover:text-white transition-colors">← BACK</button>
            </div>
            
            <div className="flex flex-col gap-4">
              <input 
                type="text" name="name" placeholder="Name" 
                value={formData.name} onChange={handleInputChange}
                className="w-full bg-white/[0.02] border border-white/10 rounded px-4 py-4 font-mono text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[var(--color-accent-cyan)]/50 focus:bg-white/[0.05] transition-all"
              />
              <input 
                type="email" name="email" placeholder="Corporate Email" 
                value={formData.email} onChange={handleInputChange}
                className="w-full bg-white/[0.02] border border-white/10 rounded px-4 py-4 font-mono text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[var(--color-accent-cyan)]/50 focus:bg-white/[0.05] transition-all"
              />
              <input 
                type="text" name="sector" placeholder="Target Sector" 
                value={formData.sector} onChange={handleInputChange}
                className="w-full bg-white/[0.02] border border-white/10 rounded px-4 py-4 font-mono text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[var(--color-accent-cyan)]/50 focus:bg-white/[0.05] transition-all"
              />
            </div>
            
            <button
              onClick={handleSubmit}
              disabled={!formData.name || !formData.email || !formData.sector}
              className="mt-6 w-full py-5 bg-white text-black font-mono text-xs uppercase tracking-[0.2em] font-bold hover:bg-zinc-200 transition-colors flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              Generate XOVA Infrastructure Blueprint 
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        );
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto border border-white/[0.04] bg-[#050811]/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
      
      {/* Console Header */}
      <div className="flex items-center gap-3 px-6 py-4 border-b border-white/[0.04] bg-white/[0.01]">
        <Terminal className="size-4 text-zinc-500" />
        <span className="font-mono text-[10px] text-zinc-500 tracking-widest uppercase">
          {isComplete ? "Blueprint_Generated" : isSimulating ? "Processing_Parameters" : "Project_Scoping_Console"}
        </span>
      </div>

      <div className="p-8 md:p-12 relative min-h-[420px] flex flex-col items-center justify-center">
        
        {isSimulating && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-[#02040a]/90 backdrop-blur-md z-50 font-mono text-[11px] text-[var(--color-accent-cyan)] tracking-widest overflow-hidden"
          >
            {/* Fake Matrix Sweep */}
            <motion.div 
              animate={{ y: ["-100%", "200%"] }}
              transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
              className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-[var(--color-accent-cyan)]/20 to-transparent blur-[2px]"
            />
            <div className="flex items-center gap-3 relative z-10">
              <span className="animate-spin text-white">|</span>
              SYNTHESIZING_ARCHITECTURE_BLUEPRINT...
            </div>
            <motion.div 
              initial={{ width: 0 }} animate={{ width: "200px" }} transition={{ duration: 2.2, ease: "easeInOut" }}
              className="h-[1px] bg-[var(--color-accent-cyan)] mt-4 shadow-[0_0_10px_var(--color-accent-cyan)]"
            />
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          {!isSimulating && !isComplete && renderStep()}
          
          {isComplete && (
            <motion.div
              key="complete"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full flex flex-col items-start gap-6 font-mono"
            >
              <div className="flex items-center gap-3 text-[var(--color-accent-cyan)]">
                <CheckCircle2 className="size-5" />
                <span className="text-xs uppercase tracking-widest font-semibold">Configuration Payload Dropped</span>
              </div>
              
              <div className="w-full bg-[#02040a] border border-white/5 rounded-lg p-6 relative group overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-accent-cyan)]/50" />
                <pre className="text-[11px] text-zinc-400 overflow-x-auto whitespace-pre-wrap leading-relaxed">
                  {JSON.stringify({ blueprint_request: formData, timestamp: new Date().toISOString() }, null, 2)}
                </pre>
              </div>
              
              <button 
                onClick={() => { setStep(1); setFormData({bottleneck:"", timeline:"", name:"", email:"", sector:""}); setIsComplete(false); }}
                className="text-[10px] text-zinc-500 hover:text-zinc-300 tracking-widest uppercase mt-4 transition-colors underline underline-offset-4"
              >
                [ RESET_CONSOLE ]
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  )
}
