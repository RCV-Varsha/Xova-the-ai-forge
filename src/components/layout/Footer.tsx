import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    {
      category: "SYSTEMS",
      items: [
        { name: "Services", href: "#services" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Process", href: "#process" }
      ]
    },
    {
      category: "COMMUNICATION",
      items: [
        { name: "LinkedIn", href: "https://www.linkedin.com" },
        { name: "Instagram", href: "https://www.instagram.com" },
        { name: "GitHub", href: "https://github.com" },
        { name: "Email", href: "mailto:contact@xova.net" }
      ]
    }
  ];

  return (
    <footer className="relative w-full border-t border-white/[0.06] bg-zinc-950/40 py-16 md:py-24" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16 items-start mb-16">
          
          {/* Left Column: Branding and Corporate Address */}
          <div className="col-span-12 md:col-span-6 flex flex-col space-y-6">
            
            {/* Geometric Branding Emblem */}
            <div className="flex items-center gap-3">
              <div className="relative flex h-8 w-8 items-center justify-center rounded border border-white/10 bg-transparent select-none">
                <span className="font-mono text-xs font-bold text-white tracking-widest">X</span>
              </div>
              <span className="text-xs font-semibold tracking-[0.25em] text-white uppercase">
                XOVA
              </span>
            </div>

            {/* Positioning Statement */}
            <p className="text-sm text-zinc-300 font-light max-w-sm leading-relaxed">
              Engineering the digital engines of modern enterprise. We build custom high-performance digital architectures and automation pipelines.
            </p>

            {/* Business Details & Collaboration Badge */}
            <div className="flex flex-col space-y-2 pt-2">
              <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500">
                HEADQUARTERS
              </span>
              <span className="text-xs text-zinc-300 font-light">
                Andhra Pradesh, India
              </span>
              
              <div className="inline-flex pt-2 select-none">
                <span className="rounded border border-green-500/10 bg-green-500/5 px-2.5 py-1 font-mono text-[8px] tracking-widest text-green-400 uppercase">
                  ● Available for collaborations
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Link Grids */}
          <div className="col-span-12 md:col-span-6 grid grid-cols-2 gap-8 md:justify-items-end">
            {links.map((group) => (
              <div key={group.category} className="flex flex-col space-y-4 md:w-32">
                <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 select-none">
                  {group.category}
                </span>
                <ul className="flex flex-col space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-xs text-zinc-300 font-light hover:text-white transition-colors duration-300 leading-none"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Strip: Metadata Copyright info */}
        <div className="border-t border-white/[0.04] pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 select-none">
          <div className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">
            © {currentYear} XOVA Digital Solutions. All rights reserved.
          </div>
          <div className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest flex items-center gap-1.5">
            <span>Built by</span>
            <span className="text-zinc-400">XOVA Digital Solutions</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
