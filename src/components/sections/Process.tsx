import React from "react";

export default function Process() {
  const stages = [
    {
      id: "01",
      name: "Discover",
      desc: "We conduct a complete operational audit of your current business workflows. By mapping bottleneck points and identifying scaling limits, we isolate your core engineering opportunities.",
      specs: ["CORE_AUDIT", "LATENCY_MAPPING", "RISK_EVAL"]
    },
    {
      id: "02",
      name: "Architect",
      desc: "We draft custom virtual blueprints and code structures. You receive a complete layout plan detailing every database, API gateway, and server stack before a single line of production code is written.",
      specs: ["SCHEMA_DRAFTING", "VPC_BLUEPRINTS", "API_SPECS"]
    },
    {
      id: "03",
      name: "Engineer",
      desc: "We build, compile, and configure your system components. By engineering custom integration layers and automated data pipelines, we establish your proprietary core operating software.",
      specs: ["COMPUTE_ASSEMBLY", "DB_CLUSTERING", "RAG_DEV"]
    },
    {
      id: "04",
      name: "Deploy",
      desc: "We migrate your operations to isolated production environments. By deploying staging mirrors and conducting rigorous load tests, we guarantee a completely secure transition.",
      specs: ["SANDBOX_MIRROR", "PENETRATION_TEST", "ZERO_DOWNTIME"]
    },
    {
      id: "05",
      name: "Optimize",
      desc: "We continuously refine and tune system performance. By reviewing runtime console logs and scaling edge caching arrays, we keep your infrastructure operational and fast.",
      specs: ["LATENCY_TUNING", "EDGE_CACHING", "AUTO_SCALE"]
    }
  ];

  return (
    <section className="relative w-full border-t border-white/12 bg-[#020617] py-24 lg:py-32" id="process">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-20 max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
            <span className="h-px w-4 bg-zinc-500"></span>
            [ PIPELINE PROTOCOL ]
          </div>
          <h2 className="mb-6 font-sans text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
            System Integration & Execution Pipeline
          </h2>
          <p className="text-zinc-300 font-light">
            Mapping how projects are initiated, designed, and executed with extreme architectural restraint.
          </p>
        </div>

        {/* Pipeline Container */}
        <div className="relative mx-auto">
          {/* Main Vertical Bus Line */}
          <div className="absolute bottom-0 left-8 top-0 w-px bg-white/12 md:left-12"></div>

          <div className="flex flex-col gap-6 lg:gap-8">
            {stages.map((stage) => (
              <div key={stage.id} className="relative ml-16 md:ml-24">
                
                {/* Node & Connector Tick */}
                <div className="absolute -left-[40px] top-10 flex w-[40px] items-center md:-left-[56px] md:w-[56px]">
                  {/* Node */}
                  <div className="z-10 h-4 w-4 shrink-0 rounded-full border border-white/20 bg-zinc-950"></div>
                  {/* Tick Connector */}
                  <div className="h-px w-full bg-white/12"></div>
                </div>

                {/* Content */}
                <div className="rounded-sm border border-white/12 bg-white/[0.01] p-6 lg:p-8">
                  {/* Monospace Header */}
                  <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-white/12 pb-4">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                      [ STG_{stage.id} // {stage.name.toUpperCase()} ]
                    </div>
                    <div className="font-mono text-[9px] uppercase tracking-widest text-zinc-500">
                      [ STATUS: COMPLETED ]
                    </div>
                  </div>

                  {/* Stage Title */}
                  <h3 className="mb-3 text-base font-semibold tracking-wide text-white">
                    {stage.id} / {stage.name}
                  </h3>

                  {/* Description */}
                  <p className="mb-8 leading-relaxed text-zinc-300 font-normal tracking-wide">
                    {stage.desc}
                  </p>

                  {/* Specs */}
                  <div className="flex flex-wrap gap-2">
                    {stage.specs.map((spec) => (
                      <span
                        key={spec}
                        className="rounded border border-white/10 bg-white/5 px-2 py-1 font-mono text-[9px] tracking-widest text-zinc-400"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
