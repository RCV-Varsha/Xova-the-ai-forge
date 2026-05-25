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
  const [isFading, setIsFading] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let typingInterval: NodeJS.Timeout;
    
    if (isInView) {
      const typeText = () => {
        setIsFading(false);
        setDisplayedText("");
        
        // determine duration based on screen size (rough mobile check)
        const isMobile = window.innerWidth < 768;
        const currentDuration = isMobile ? 0.08 : 0.05; 

        let i = 0;
        typingInterval = setInterval(() => {
          setDisplayedText(text.substring(0, i + 1));
          i++;
          if (i === text.length) {
            clearInterval(typingInterval);
            // Wait before fading out and looping
            timeout = setTimeout(() => {
              setIsFading(true);
              // Fade takes 0.5s, then restart
              timeout = setTimeout(() => {
                typeText();
              }, 600);
            }, 3000); // 3 seconds readable pause
          }
        }, currentDuration * 1000);
      };

      // Initial delay
      timeout = setTimeout(() => {
        typeText();
      }, delay * 1000);
    }

    return () => {
      clearTimeout(timeout);
      clearInterval(typingInterval);
    };
  }, [text, delay, isInView]);

  return (
    <motion.span 
      ref={containerRef} 
      className={cn("inline-block", className)}
      animate={{ opacity: isFading ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="inline-block w-[1ch] h-[1em] bg-[var(--color-accent-cyan)] align-middle ml-[2px] opacity-70"
        style={{ marginBottom: "-0.1em" }}
      />
    </motion.span>
  );
}
