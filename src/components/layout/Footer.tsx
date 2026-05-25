import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    {
      category: "SYSTEMS",
      items: [
        { name: "Services", href: "#services", external: false },
        { name: "Portfolio", href: "#portfolio", external: false },
        { name: "Process", href: "#process", external: false }
      ]
    },
    {
      category: "COMMUNICATION",
      items: [
        { name: "LinkedIn", href: "https://www.linkedin.com/company/xova-digital-solutions", external: true },
        { name: "Instagram", href: "https://www.instagram.com/xovadigital", external: true },
        { name: "GitHub", href: "https://github.com/xova-digital", external: true },
        { name: "Email", href: "mailto:contact@xova.in", external: false }
      ]
    }
  ];

  return (
    <footer
      role="contentinfo"
      className="relative w-full bg-[#080d1a]/40 py-8 md:py-12 border-t border-white/[0.04]"
      id="about"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12 items-start mb-10">
          {/* Left Column: Branding and Corporate Address */}
          <div className="col-span-12 md:col-span-6 flex flex-col space-y-6">
            {/* Branding Mark */}
            <Link href="/" className="group flex items-center gap-3 w-fit" aria-label="XOVA Digital Solutions — home">
              <div className="relative flex h-8 w-8 items-center justify-center rounded border border-white/10 bg-transparent select-none transition-colors duration-300 group-hover:border-white/20">
                <span className="font-mono text-xs font-bold text-white tracking-widest">X</span>
              </div>
              <span className="text-xs font-semibold tracking-[0.25em] text-white uppercase transition-colors duration-300 group-hover:text-white/80">
                XOVA
              </span>
            </Link>

            {/* Positioning Statement */}
            <p className="text-sm text-zinc-300 font-light max-w-sm leading-relaxed">
              Engineering the digital engines of modern enterprise. We build custom high-performance digital architectures and automation pipelines.
            </p>

            {/* Business Address */}
            <address className="not-italic flex flex-col space-y-2 pt-2">
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
            </address>
          </div>

          {/* Right Column: Navigation Link Grids */}
          <div className="col-span-12 md:col-span-6 grid grid-cols-2 gap-8 md:justify-items-end">
            {links.map((group) => (
              <nav key={group.category} aria-label={group.category.toLowerCase()}>
                <span className="block font-mono text-[9px] uppercase tracking-widest text-zinc-500 select-none mb-4">
                  {group.category}
                </span>
                <ul className="flex flex-col space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        aria-label={item.external ? `${item.name} (opens in new tab)` : item.name}
                        className="text-xs text-zinc-300 font-light hover:text-white transition-colors duration-300 leading-none focus-visible:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Bottom Strip */}
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
