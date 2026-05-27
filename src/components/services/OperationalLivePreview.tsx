"use client"
import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Terminal, Activity } from "lucide-react"

export function OperationalLivePreview() {
  const [activeTab, setActiveTab] = useState<"logs" | "metrics">("logs");
  
  // Simulated logs state
  const [logs, setLogs] = useState<string[]>([]);
  
  useEffect(() => {
    if (activeTab !== "logs") return;
    
    const messages = [
      "> INIT_CONNECTION: wss://edge.xova.sys/stream",
      "> SECURE_HANDSHAKE: [OK]",
      "> AUTHENTICATING NODE: 0x4F92...B1",
      "> FETCHING_STATE: CACHE_HIT (12ms)",
      "> SYNCHRONIZING_UI_THREAD: [OK]",
      "> LISTENING_FOR_EVENTS...",
      "> INCOMING_PAYLOAD: { type: 'RESERVATION', size: '2kb' }",
      "> DISPATCHING_UPDATE: 1.2ms latency",
    ];
    
    let currentIndex = 0;
    
    // Initial populate
    setLogs([messages[0]]);
    
    const interval = setInterval(() => {
      setLogs((prev) => {
        const nextMsg = messages[(currentIndex + 1) % messages.length];
        const newLogs = [...prev, nextMsg];
        currentIndex = (currentIndex + 1) % messages.length;
        return newLogs.slice(-6);
      });
    }, 1500);
    
    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <div className="w-full border border-white/[0.04] bg-[#050811]/60 backdrop-blur-sm rounded-2xl overflow-hidden mb-16 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
      {/* Top Bar / Tabs */}
      <div className="flex items-center border-b border-white/[0.04] bg-white/[0.01]">
        <button
          onClick={() => setActiveTab("logs")}
          className={`flex-1 py-3 text-xs font-mono tracking-widest uppercase transition-colors flex items-center justify-center gap-2 ${activeTab === "logs" ? "text-white bg-white/[0.02]" : "text-zinc-500 hover:text-zinc-400"}`}
        >
          <Terminal className="size-3.5" />
          Server Stream
        </button>
        <button
          onClick={() => setActiveTab("metrics")}
          className={`flex-1 py-3 text-xs font-mono tracking-widest uppercase transition-colors flex items-center justify-center gap-2 ${activeTab === "metrics" ? "text-white bg-white/[0.02]" : "text-zinc-500 hover:text-zinc-400"}`}
        >
          <Activity className="size-3.5" />
          Optimization
        </button>
      </div>
      
      {/* Content Area */}
      <div className="relative h-56 bg-[#02040a]/50 p-6 overflow-hidden">
        <AnimatePresence mode="wait">
          {activeTab === "logs" ? (
            <motion.div
              key="logs"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="h-full flex flex-col justify-end font-mono text-[11px] text-zinc-400 leading-relaxed"
            >
              <div className="flex flex-col gap-2">
                <AnimatePresence initial={false}>
                  {logs.map((log, i) => (
                    <motion.div 
                      key={`${i}-${log}`}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={log.includes("[OK]") ? "text-[var(--color-accent-cyan)]" : "text-zinc-400"}
                    >
                      {log}
                    </motion.div>
                  ))}
                </AnimatePresence>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[var(--color-accent-violet)]">&gt; AWAITING_STREAM</span>
                  <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-1.5 h-3 bg-white/70 block" />
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="metrics"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="h-full flex flex-col justify-center items-center gap-8"
            >
              <div className="w-full max-w-sm">
                <div className="flex justify-between font-mono text-[10px] text-zinc-500 mb-2 tracking-widest">
                  <span>LAYOUT_SHIFT (CLS)</span>
                  <span className="text-[var(--color-accent-cyan)] font-semibold">0.001</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 0.05 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    className="h-full bg-[var(--color-accent-cyan)] origin-left rounded-full shadow-[0_0_10px_var(--color-accent-cyan)]"
                  />
                </div>
              </div>
              
              <div className="w-full max-w-sm">
                <div className="flex justify-between font-mono text-[10px] text-zinc-500 mb-2 tracking-widest">
                  <span>FIRST_PAINT (FCP)</span>
                  <span className="text-[var(--color-accent-violet)] font-semibold">0.4s</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 0.15 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                    className="h-full bg-[var(--color-accent-violet)] origin-left rounded-full shadow-[0_0_10px_var(--color-accent-violet)]"
                  />
                </div>
              </div>

              <div className="w-full max-w-sm">
                <div className="flex justify-between font-mono text-[10px] text-zinc-500 mb-2 tracking-widest">
                  <span>INTERACTION_LATENCY (INP)</span>
                  <span className="text-zinc-300 font-semibold">12ms</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 0.1 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
                    className="h-full bg-zinc-300 origin-left rounded-full shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
