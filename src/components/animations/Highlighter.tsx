"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HighlighterProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Highlighter({ children, className, delay = 0.2 }: HighlighterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { 
          color: "rgba(255, 255, 255, 0.7)", 
          textShadow: "0 0 0px rgba(0, 255, 208, 0)" 
        },
        visible: {
          color: "rgba(255, 255, 255, 1)", // Bright white text
          textShadow: "0 0 15px rgba(0, 255, 208, 0.4)", // Subtle cyan luminous glow
          transition: {
            duration: 1.2,
            delay,
            ease: "easeOut",
          }
        }
      }}
      className={cn("inline-block font-medium relative whitespace-nowrap px-0.5 transition-colors", className)}
    >
      {children}
    </motion.span>
  );
}
