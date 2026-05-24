import React from "react";

export default function Metrics() {
  const metrics = [
    {
      value: "2+",
      label: "Deployed Systems",
      signature: "[ SYS_CORE ]"
    },
    {
      value: "40+",
      label: "Workflow Automations",
      signature: "[ INTEGRATION_FLOWS ]"
    },
    {
      value: "99.9%",
      label: "Pipeline Stability",
      signature: "[ TELEMETRY_STABLE ]"
    },
    {
      value: "Real",
      label: "Collaborations",
      signature: "[ VERIFIED_CLIENTS ]"
    }
  ];

  return (
    <section className="relative w-full border-y border-white/[0.06] bg-zinc-950/10 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-y-8 py-10 md:grid-cols-4 md:gap-y-0">
          
          {metrics.map((metric, index) => (
            <React.Fragment key={metric.label}>
              {/* Metric Item */}
              <div className="flex flex-col items-center text-center md:items-start md:text-left px-4 md:px-8 lg:px-12">
                <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-500 mb-1 select-none">
                  {metric.signature}
                </span>
                <span className="font-sans text-3xl font-semibold tracking-tight text-white sm:text-4xl mb-1.5 leading-none">
                  {metric.value}
                </span>
                <span className="font-sans text-[11px] font-normal tracking-wide text-zinc-300">
                  {metric.label}
                </span>
              </div>

              {/* Vertical Separator between items (hidden on last and on mobile) */}
              {index < metrics.length - 1 && (
                <div className="hidden h-10 w-px bg-white/[0.06] self-center md:block" />
              )}
            </React.Fragment>
          ))}

        </div>
      </div>
    </section>
  );
}
