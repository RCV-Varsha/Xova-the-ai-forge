"use client";

import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface DiaTextRevealProps {
  text: string;
  className?: string;
}

export function DiaTextReveal({ text, className }: DiaTextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15, // slower stagger for monumental feel
        delayChildren: 0.2,
      },
    },
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.4, // very slow duration
        ease: [0.16, 1, 0.3, 1] as const, // cinematic ease out
      },
    },
    hidden: {
      opacity: 0,
      y: 40, // start lower
      scale: 1.1, // slight scale down
      filter: "blur(12px)", // heavy initial blur
    },
  };

  return (
    <motion.div
      ref={ref}
      className={cn("inline-flex flex-wrap gap-[0.25em]", className)}
      variants={container}
      initial="hidden"
      animate={controls}
    >
      {words.map((word, idx) => (
        <motion.span key={idx} variants={child} className="inline-block">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
