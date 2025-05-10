"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className, ...props }, ref) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setClicked(true);
    setTimeout(() => setClicked(false), 300);
    props.onClick?.(e);
  };

  return (
    <button
      ref={ref}
      data-active={clicked ? "true" : "false"}
      onClick={handleClick}
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full border border-white bg-black text-white p-2 px-6 text-center font-semibold transition-colors duration-300",
        "hover:bg-white hover:text-black hover:border-black",
        "data-[active=true]:bg-white data-[active=true]:text-black data-[active=true]:border-black",
        className,
      )}
      {...props}
    >
      <div className={cn(
        "flex items-center gap-2 transition-all duration-300 w-full h-full",
        "group-hover:translate-x-12 group-hover:opacity-0",
        "data-[active=true]:translate-x-12 data-[active=true]:opacity-0"
      )}>
        <div className={cn(
          "h-2 w-2 rounded-full bg-white transition-transform duration-300",
          "group-hover:scale-[100.8] group-hover:bg-black",
          "data-[active=true]:scale-[100.8] data-[active=true]:bg-black"
        )}></div>
        <span>{children}</span>
      </div>

      <div className={cn(
        "absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300",
        "group-hover:-translate-x-5 group-hover:opacity-100",
        "data-[active=true]:-translate-x-5 data-[active=true]:opacity-100"
      )}>
        <span className="transition-colors duration-300 text-white group-hover:text-black data-[active=true]:text-black">{children}</span>
        <ArrowRight className="transition-colors duration-300 text-white group-hover:text-black data-[active=true]:text-black" />
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
