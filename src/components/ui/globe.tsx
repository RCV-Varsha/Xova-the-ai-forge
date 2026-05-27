"use client";

import React, { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import { useSpring } from "framer-motion";

export function Globe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const [width, setWidth] = useState(0);
  
  const springConfig = {
    stiffness: 280,
    damping: 40,
    mass: 1,
  };
  
  const phi = useSpring(0, springConfig);
  
  const onResize = () => {
    if (canvasRef.current) {
      setWidth(canvasRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    let phiVal = 0;
    
    if (!canvasRef.current) return;
    
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.2,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000, // Less dense mesh for softer look
      mapBrightness: 4, // Lower brightness
      baseColor: [0.02, 0.02, 0.03], // Very dark base
      markerColor: [0.0, 1.0, 1.0], // Max cyan
      glowColor: [0.3, 0.1, 0.5], // Subtle violet glow
      markers: [
        // Random markers for infrastructure nodes
        { location: [37.7595, -122.4367], size: 0.06 },
        { location: [40.7128, -74.006], size: 0.08 },
        { location: [51.5072, -0.1276], size: 0.07 },
        { location: [35.6895, 139.6917], size: 0.1 },
        { location: [1.3521, 103.8198], size: 0.08 },
        { location: [-33.8688, 151.2093], size: 0.07 }
      ],
      // @ts-ignore - type definition for cobe doesn't always map onRender properly
      onRender: (state: Record<string, any>) => {
        // Slower, subtle environmental rotation
        if (!pointerInteracting.current) {
          phiVal += 0.0015;
        }
        state.phi = phiVal + phi.get();
      },
    });

    return () => {
      globe.destroy();
    };
  }, [width, phi]);

  return (
    <div
      className={`relative w-full aspect-square max-w-[800px] mx-auto ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-40 mix-blend-screen"
        style={{
          width: "100%",
          height: "100%",
          contain: "layout paint size",
          cursor: "grab",
        }}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
          if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = "grab";
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = "grab";
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            phi.set(delta / 200);
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            phi.set(delta / 100);
          }
        }}
      />
    </div>
  );
}
