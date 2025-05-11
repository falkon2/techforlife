"use client";

import React, { useEffect, useRef, useState } from "react";
import Lenis from "lenis";

interface LenisProviderProps {
  children: React.ReactNode;
  options?: {
    lerp?: number;
    duration?: number;
    smoothWheel?: boolean;
    wheelMultiplier?: number;
    touchMultiplier?: number;
    infinite?: boolean;
    orientation?: "vertical" | "horizontal";
  };
}

const LenisProvider: React.FC<LenisProviderProps> = ({
  children,
  options = {
    lerp: 0.05,
    smoothWheel: true,
    orientation: "vertical",
  },
}) => {
  const lenisRef = useRef<Lenis | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Initialize Lenis
    lenisRef.current = new Lenis({
      ...options,
    });

    setIsReady(true);

    // Start the animation loop
    const raf = (time: number) => {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    };
    
    requestAnimationFrame(raf);

    // Cleanup on component unmount
    return () => {
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, [options]);

  return (
    <div className="bg-zinc-950">
      {children}
    </div>
  );
};

export default LenisProvider;

