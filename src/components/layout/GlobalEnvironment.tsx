"use client";

import React, { useEffect, useRef } from "react";

export default function GlobalEnvironment() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Reduce particle count on mobile for performance
    const isMobile = width < 768;
    const PARTICLE_COUNT = isMobile ? 20 : 60;
    
    // Magnetic mouse target
    let mouse = { x: width / 2, y: height / 2 };
    let isMouseActive = false;

    // Handle resize
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    // Initial setup
    resize();
    window.addEventListener("resize", resize);

    // Mouse tracking for magnetic drift
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      isMouseActive = true;
    };
    
    const handleMouseLeave = () => {
      isMouseActive = false;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      vx: number;
      vy: number;
      opacity: number;
      phase: number;

      isTelemetry: boolean;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.baseX = this.x;
        this.baseY = this.y;
        
        // 15% of particles are "telemetry" nodes: brighter, faster, curved
        this.isTelemetry = Math.random() > 0.85;
        
        this.size = this.isTelemetry ? Math.random() * 2 + 1.5 : Math.random() * 2 + 0.8;
        this.vx = (Math.random() - 0.5) * (this.isTelemetry ? 0.4 : 0.2);
        this.vy = (Math.random() - 0.5) * 0.2 - (this.isTelemetry ? 0.3 : 0.1); 
        this.opacity = this.isTelemetry ? Math.random() * 0.4 + 0.5 : Math.random() * 0.3 + 0.2;
        this.phase = Math.random() * Math.PI * 2;
      }

      update() {
        // Subtle magnetic pull towards mouse if active
        if (isMouseActive) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 400) { // Interaction radius
            const force = (400 - dist) / 400;
            this.vx += (dx / dist) * force * 0.01;
            this.vy += (dy / dist) * force * 0.01;
          }
        }

        // Apply velocities with heavy damping (slow floating)
        this.x += this.vx;
        this.y += this.vy;
        
        // Dampen velocities back to baseline
        this.vx *= 0.98;
        this.vy *= 0.98;
        
        // Base drift and curved movement for telemetry
        if (this.isTelemetry) {
           this.x += Math.sin(this.phase * 0.5) * 0.4;
           this.y -= 0.35;
        } else {
           this.x += Math.sin(this.phase * 0.2) * 0.1;
           this.y -= 0.15;
        }

        // Wrap around screen
        if (this.y < -10) this.y = height + 10;
        if (this.y > height + 10) this.y = -10;
        if (this.x < -10) this.x = width + 10;
        if (this.x > width + 10) this.x = -10;
        
        // Oscillating opacity
        this.phase += 0.01;
      }

      draw() {
        if (!ctx) return;
        const currentOpacity = this.opacity + Math.sin(this.phase) * 0.1;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        // Using Violet for telemetry nodes, Cyan for standard nodes
        ctx.fillStyle = this.isTelemetry 
          ? `rgba(139, 92, 246, ${Math.max(0, currentOpacity)})` 
          : `rgba(34, 211, 238, ${Math.max(0, currentOpacity)})`; 
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      // Desktop Cursor Atmosphere Glow
      if (isMouseActive && window.innerWidth > 768) {
        const radius = 300;
        const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, radius);
        gradient.addColorStop(0, 'rgba(34, 211, 238, 0.035)');
        gradient.addColorStop(1, 'rgba(34, 211, 238, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(mouse.x - radius, mouse.y - radius, radius * 2, radius * 2);
      }
      
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* 1. Deep Oceanic/Space Linear Gradient Background */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, var(--color-bg-elevated) 0%, var(--color-bg-base) 40%, var(--color-bg-elevated) 100%)"
        }}
      />
      
      {/* 2. Soft Radial Blur / Atmospheric Lighting (Suppressed) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[30%] h-[30%] rounded-full bg-[var(--color-accent-blue)] blur-[80px] opacity-10 mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[25%] h-[25%] rounded-full bg-[var(--color-accent-violet)] blur-[80px] opacity-10 mix-blend-screen" />
      </div>

      {/* 3. Subtle Grid Texture (Depth) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* 4. Canvas Antigravity Particle Engine */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ opacity: 0.8 }} // Kept subtle to avoid noise
      />
    </>
  );
}
