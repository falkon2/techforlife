
"use client"
import { cn } from "@/lib/utils";
import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import { useId } from "react";
//           parentElement.removeEventListener("mousemove", handleMouseMove);
//           parentElement.removeEventListener("mouseenter", handleMouseEnter);
//           parentElement.removeEventListener("mouseleave", handleMouseLeave);
//         };
//       }  

export default function Product({
  className,
  children,
  style,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const id = useId();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && containerRef.current) {
      // Get the parent element directly from the ref
      const parentElement = containerRef.current.parentElement;

      if (parentElement) {
        // Add cursor-none to parent
        parentElement.style.cursor = "none";

        // Add event listeners to parent
        const handleMouseMove = (e: MouseEvent) => {
          x.set(e.clientX);
          y.set(e.clientY);
        };

        const handleMouseEnter = () => {
          containerRef.current?.classList.add("active");
        };

        const handleMouseLeave = () => {
          containerRef.current?.classList.remove("active");
        };

        parentElement.addEventListener("mousemove", handleMouseMove);
        parentElement.addEventListener("mouseenter", handleMouseEnter);
        parentElement.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          parentElement.removeEventListener("mousemove", handleMouseMove);
          parentElement.removeEventListener("mouseenter", handleMouseEnter);
          parentElement.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    }
  }, [x, y]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute pointer-events-none z-50 flex items-center justify-center",
        className
      )}
      {...props}
    >
      <motion.div
        id={id}
        className="pointer-events-none absolute z-50"
        style={{
          translateX: x,
          translateY: y,
          ...style,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}