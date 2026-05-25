"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Process", href: "#process" },
  { name: "About", href: "#about" },
]

export default function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Hide navbar when scrolling down, show when scrolling up
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    
    setIsScrolled(latest > 20);
  });

  return (
    <motion.header
      role="banner"
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 }
      }}
      initial="visible"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-6 left-0 right-0 z-50 w-full flex justify-center px-4 pointer-events-none"
    >
      {/* PillNav Container */}
      <div 
        className={cn(
          "pointer-events-auto flex items-center justify-between transition-all duration-500 ease-out",
          "w-full max-w-5xl rounded-full border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
          isScrolled 
            ? "bg-[#0A1020]/70 backdrop-blur-xl py-2.5 px-4" 
            : "bg-[#050816]/50 backdrop-blur-md py-3 px-5"
        )}
      >
          
        {/* Left Side: Futuristic geometric branding */}
        <div className="flex items-center">
          <Link href="/" className="group flex items-center gap-2.5 pl-2" aria-label="XOVA Home">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/40 transition-colors duration-300 group-hover:border-[var(--color-accent-cyan)]/30 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]">
              <Image
                src="/logo/xova-logo.png"
                alt="XOVA Logo"
                width={20}
                height={20}
                className="h-auto w-auto object-contain"
              />
            </div>
            <span className="text-[10px] font-semibold tracking-[0.25em] text-white uppercase transition-colors duration-300 group-hover:text-[var(--color-accent-cyan)]">
              XOVA
            </span>
          </Link>
        </div>

        {/* Center Navigation: Desktop only */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-1 bg-white/[0.02] rounded-full px-2 py-1 border border-white/[0.03]">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative px-4 py-1.5 text-xs font-medium tracking-wide text-[var(--color-text-secondary)] hover:text-white transition-colors duration-200 focus-visible:text-white group rounded-full"
            >
              <span className="relative z-10">{item.name}</span>
              <span className="absolute inset-0 rounded-full bg-white/[0.06] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
            </Link>
          ))}
        </nav>

        {/* Right Side: Muted Glass CTA & Mobile Trigger */}
        <div className="flex items-center gap-3">
          
          {/* Minimalist Dark Glass CTA */}
          <Button
            asChild
            className="hidden md:inline-flex items-center justify-center rounded-full border border-[var(--color-accent-cyan)]/20 bg-[var(--color-accent-cyan)]/5 text-[var(--color-accent-cyan)] hover:bg-[var(--color-accent-cyan)]/15 hover:border-[var(--color-accent-cyan)]/40 font-medium text-[11px] tracking-widest uppercase px-5 h-8.5 transition-all duration-300 active:scale-[0.98] shadow-[0_0_20px_rgba(34,211,238,0.0)] hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
          >
            <Link href="/initiate" className="flex items-center gap-1.5">
              Initiate
              <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" aria-hidden="true" />
            </Link>
          </Button>

          {/* Mobile Sheet Trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-zinc-400 hover:text-[var(--color-accent-cyan)] hover:bg-[var(--color-accent-cyan)]/10 rounded-full size-8.5 flex items-center justify-center border border-white/10 transition-colors"
                aria-label="Toggle Menu"
              >
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:max-w-xs border-l border-white/[0.08] bg-[var(--color-bg-elevated)]/95 backdrop-blur-xl p-6 text-white flex flex-col justify-between"
            >
              <div>
                <SheetHeader className="p-0 mb-8">
                  <SheetTitle className="text-left font-normal">
                    <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-transparent">
                        <Image
                          src="/logo/xova-logo.png"
                          alt="XOVA Logo"
                          width={20}
                          height={20}
                          className="object-contain"
                          priority
                        />
                      </div>
                      <span className="text-xs font-semibold tracking-[0.2em] text-white uppercase">
                        XOVA
                      </span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-[15px] font-light tracking-wide text-zinc-400 hover:text-white py-3.5 block border-b border-white/[0.03] transition-colors group"
                    >
                      <span className="flex items-center justify-between">
                        {item.name}
                        <ArrowUpRight className="size-3.5 text-zinc-500 transition-colors group-hover:text-[var(--color-accent-cyan)]" aria-hidden="true" />
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Mobile Drawer CTA */}
              <div className="pt-6">
                <Button
                  asChild
                  className="w-full rounded-full border border-[var(--color-accent-cyan)]/20 bg-[var(--color-accent-cyan)]/10 text-[var(--color-accent-cyan)] hover:bg-[var(--color-accent-cyan)]/20 font-medium text-xs tracking-wide h-10 transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/initiate" className="flex items-center justify-center gap-1.5 w-full">
                    Initiate Deployment
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </motion.header>
  )
}
