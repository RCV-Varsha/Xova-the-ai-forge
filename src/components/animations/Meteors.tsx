"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MeteorsProps {
  number?: number;
  className?: string;
}

export function Meteors({ number = 5, className }: MeteorsProps) {
  const [meteors, setMeteors] = useState<
    Array<{ id: number; top: number; left: number; delay: number; duration: number }>
  >([]);

  useEffect(() => {
    // Generate sparse, slow meteors
    const newMeteors = Array.from({ length: number }).map((_, i) => ({
      id: i,
      top: Math.floor(Math.random() * 100), // Random starting top position
      left: Math.floor(Math.random() * 100), // Random starting left position
      delay: Math.random() * 5 + 0.5, // 0.5s to 5.5s delay
      duration: Math.random() * 8 + 8, // Very slow: 8s to 16s duration
    }));
    setMeteors(newMeteors);
  }, [number]);

  if (meteors.length === 0) return null;

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {meteors.map((meteor) => (
        <motion.span
          key={meteor.id}
          initial={{
            opacity: 0,
            x: 0,
            y: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: [0, 0.4, 0], // Kept very soft and low opacity
            x: -800, // Move left
            y: 800, // Move down
            scale: 1,
          }}
          transition={{
            duration: meteor.duration,
            delay: meteor.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            top: `${meteor.top}%`,
            left: `${meteor.left}%`,
          }}
          className={cn(
            "absolute size-[2px] rounded-full bg-slate-300 shadow-[0_0_0_1px_#ffffff10]",
            "rotate-[215deg] blur-[1px]", // Soft blur
            "before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:w-[80px] before:h-[1px] before:bg-gradient-to-r before:from-slate-300/40 before:to-transparent"
          )}
        />
      ))}
    </div>
  );
}
