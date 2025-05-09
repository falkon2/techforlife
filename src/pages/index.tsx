import { Geist, Geist_Mono } from "next/font/google";
import React from "react";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import dynamic from "next/dynamic"; // Import dynamic
const GeistFont = Geist({ subsets: ["latin"] });
const GeistMonoFont = Geist_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-geist-mono",
});
const SmoothScrollHero = dynamic(
  () => import("@/components/ui/smooth-scroll-hero").then((mod) => mod.SmoothScrollHero),
  { ssr: false }
);

import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

export default function Home() {
  return (
    <main className="">
      <SmoothCursor />
      <SmoothScrollHero />
      <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center py-4">
        <InteractiveHoverButton
          onClick={() => {
            document.getElementById("about-us")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Learn More
        </InteractiveHoverButton>
      </div>
    </main>
  );
}