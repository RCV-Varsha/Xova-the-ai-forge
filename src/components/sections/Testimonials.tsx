import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      company: "PrintMaania",
      sector: "Personalized Commerce Platform",
      quote: "Customized T-shirt business with a customized website where the admin can control and make changes as per his vision. In the journey of a customized T-shirt printing business, Xova Digital Solutions provided the best solution for reaching customers with the best customized website. Thanks to Xova Digital Solutions for being a part of my journey. We would like to work with you for further expansion of our business.",
      attribution: "Co-Founder",
      location: "Print Maania, Nuzvid",
      highlights: [
        { label: "EMOTIONAL_HIGHLIGHT", text: "Bottom of my heart" },
        { label: "ENGAGEMENT_NOTE", text: "You people are just amazing" },
        { label: "VALUE_VALIDATION", text: "Really thanks god for giving best team for me" }
      ],
      colSpan: "lg:col-span-7"
    },
    {
      company: "Inventum Publishers",
      sector: "Academic Publishing Workflow",
      quote: "Now the page alignment is fixed. Looks professional.",
      attribution: "Editorial Representative",
      location: "Inventum Publishers",
      highlights: [
        { label: "SYSTEM_TARGET", text: "Structured journal systems" },
        { label: "UX_REFACTOR", text: "Cleaner operational interface" },
        { label: "SCALE_READY", text: "Scalable editorial architecture" }
      ],
      colSpan: "lg:col-span-5"
    }
  ];

  return (
    <section className="relative w-full border-t border-white/[0.08] bg-[#020617] py-32 lg:py-48" id="testimonials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-24 max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
            <span className="h-px w-4 bg-zinc-500"></span>
            [ CLIENT REGISTRY ]
          </div>
          <h2 className="mb-6 font-sans text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
            System Validation
          </h2>
          <p className="text-base text-zinc-300 font-light leading-relaxed">
            Feedback from engineers, editors, and founders operating custom XOVA digital infrastructure.
          </p>
        </div>

        {/* Asymmetric Editorial Cards Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {testimonials.map((test) => (
            <div
              key={test.company}
              className={`${test.colSpan} rounded-lg border border-white/[0.06] bg-zinc-950/20 p-8 md:p-12 hover:border-white/10 transition-colors duration-500 flex flex-col justify-between h-full`}
            >
              <div>
                {/* Card Monospace Header */}
                <div className="mb-8 flex items-center justify-between border-b border-white/[0.04] pb-4 font-mono text-[9px] uppercase tracking-widest text-zinc-500 select-none">
                  <span>[ CLIENT_VALIDATION // {test.company.toUpperCase()} ]</span>
                  <span>{test.sector}</span>
                </div>

                {/* Main Quote Block */}
                <div className="relative mb-8 pl-6 border-l-2 border-white/10">
                  <p className="font-sans text-base leading-relaxed text-zinc-200 font-light italic">
                    “{test.quote}”
                  </p>
                </div>
              </div>

              <div>
                {/* Client Attribution */}
                <div className="mb-8 pt-4 border-t border-white/[0.04] select-none">
                  <span className="block font-sans text-xs font-semibold text-white">
                    {test.attribution}
                  </span>
                  <span className="block font-mono text-[9px] uppercase tracking-wider text-zinc-500 mt-1">
                    {test.location}
                  </span>
                </div>

                {/* Supporting snippet highlights */}
                <div className="flex flex-col gap-2 pt-4 border-t border-white/[0.02]">
                  <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-600 mb-1">
                    [ TARGETED_LOGS ]
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {test.highlights.map((high) => (
                      <div
                        key={high.text}
                        className="rounded border border-white/5 bg-white/[0.02] px-2.5 py-1 flex items-center gap-1.5"
                      >
                        <span className="h-1 w-1 rounded-full bg-zinc-500" />
                        <span className="font-mono text-[8px] tracking-wider text-zinc-500 uppercase">
                          {high.label}:
                        </span>
                        <span className="font-mono text-[8px] tracking-wider text-zinc-300">
                          "{high.text}"
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
