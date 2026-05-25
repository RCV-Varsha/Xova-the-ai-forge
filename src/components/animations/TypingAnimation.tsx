"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export function TypingAnimation({
  text,
  className,
  delay = 0,
  duration = 0.03, // elegant, medium-slow pace
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isInView) {
      // Add initial delay before starting
      timeout = setTimeout(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
          setDisplayedText(text.substring(0, i + 1));
          i++;
          if (i === text.length) clearInterval(typingInterval);
        }, duration * 1000);
        
        return () => clearInterval(typingInterval);
      }, delay * 1000);
    }

    return () => clearTimeout(timeout);
  }, [text, duration, delay, isInView]);

  return (
    <span ref={containerRef} className={cn("inline-block", className)}>
      {displayedText}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="inline-block w-[1ch] h-[1em] bg-current align-middle ml-[2px] opacity-70"
        style={{ marginBottom: "-0.1em" }}
      />
    </span>
  );
}
