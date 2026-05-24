"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
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
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  // Track scroll position to trigger premium glass backdrop transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out border-b",
        isScrolled
          ? "bg-[#020617]/60 backdrop-blur-md border-white/[0.06] py-3.5"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left Side: Futuristic geometric branding */}
          <div className="flex items-center">
            <Link href="/" className="group flex items-center gap-2.5">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-transparent transition-colors duration-300 group-hover:border-white/20">
<Image
  src="/logo/xova-logo.png"
  alt="XOVA Logo"
  width={26}
  height={26}
  className="h-auto w-auto object-contain"
/>
              </div>
              <span className="text-xs font-semibold tracking-[0.25em] text-white uppercase transition-colors duration-300 group-hover:text-white/80">
                XOVA
              </span>
            </Link>
          </div>

          {/* Center Navigation: Desktop only */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs font-medium tracking-wide text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side: Muted Glass CTA & Mobile Trigger */}
          <div className="flex items-center gap-4">
            
            {/* Minimalist Dark Glass CTA */}
            <Button
              asChild
              className="hidden md:inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-200 hover:bg-white/[0.08] hover:text-white font-medium text-xs tracking-wide px-4.5 h-8.5 transition-all duration-200 active:scale-[0.98]"
            >
              <Link href="/contact" className="flex items-center gap-1">
                Start Your Project
                <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
              </Link>
            </Button>

            {/* Mobile Sheet Trigger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-zinc-400 hover:text-white hover:bg-white/5 rounded-md size-8.5 flex items-center justify-center border border-white/10 transition-colors"
                  aria-label="Toggle Menu"
                >
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full sm:max-w-xs border-l border-white/[0.08] bg-[#020617]/95 backdrop-blur-xl p-6 text-white flex flex-col justify-between"
              >
                <div>
                  <SheetHeader className="p-0 mb-8">
                    <SheetTitle className="text-left font-normal">
                      <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-transparent">
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

                  <nav className="flex flex-col gap-1">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-[15px] font-light tracking-wide text-zinc-400 hover:text-zinc-100 py-3.5 block border-b border-white/[0.03] transition-colors"
                      >
                        <span className="flex items-center justify-between">
                          {item.name}
                          <ArrowUpRight className="size-3.5 text-zinc-500" />
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>

                {/* Mobile Drawer CTA */}
                <div className="pt-6">
                  <Button
                    asChild
                    className="w-full rounded-full border border-white/10 bg-white/[0.04] text-zinc-200 hover:bg-white/[0.08] hover:text-white font-medium text-xs tracking-wide h-9.5 transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href="/contact" className="flex items-center justify-center gap-1 w-full">
                      Start Your Project
                      <ArrowUpRight className="size-3.5" />
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </header>
  )
}
