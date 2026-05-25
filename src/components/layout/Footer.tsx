import React from "react";
import Link from "next/link";
import Image from "next/image";

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
      className="relative w-full bg-[#050812] py-8 md:py-12 border-t border-white/[0.04]"
      id="about"
    >
      {/* Glowing Top Divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-accent-cyan)]/30 to-transparent shadow-[0_0_20px_rgba(34,211,238,0.5)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12 items-start mb-10">
          {/* Left Column: Branding and Corporate Address */}
          <div className="col-span-12 md:col-span-6 flex flex-col space-y-6">
            {/* Branding Mark */}
            <Link href="/" className="group flex items-center gap-3 w-fit" aria-label="XOVA Digital Solutions — home">
              <div className="relative flex size-10 items-center justify-center select-none transition-transform duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.5)] drop-shadow-[0_0_8px_rgba(34,211,238,0.2)]">
                <Image src="/logo/xova-logo.png" alt="XOVA Logo" width={32} height={32} className="object-contain opacity-90" />
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

              <div className="inline-flex pt-3 select-none items-center gap-3">
                <span className="rounded border border-[var(--color-accent-cyan)]/20 bg-[var(--color-accent-cyan)]/10 px-2.5 py-1.5 font-mono text-[8px] tracking-widest text-[var(--color-accent-cyan)] uppercase flex items-center gap-2 shadow-[0_0_15px_rgba(34,211,238,0.15)]">
                  <span className="size-1.5 rounded-full bg-[var(--color-accent-cyan)] animate-pulse" />
                  SYSTEM STATUS: OPERATIONAL
                </span>
                <span className="font-mono text-[9px] text-zinc-600 tracking-widest">
                  v_XOVA_1.0
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
