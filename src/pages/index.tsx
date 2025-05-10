import { Geist, Geist_Mono } from "next/font/google";
import React from "react";
import dynamic from "next/dynamic"; // Import dynamic
const GeistFont = Geist({ subsets: ["latin"] });
import { Analytics } from "@vercel/analytics/next"
const GeistMonoFont = Geist_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-geist-mono",
});

// Import components with dynamic import to prevent SSR issues
const SmoothCursor = dynamic(
  () => import("@/components/ui/smooth-cursor").then((mod) => mod.SmoothCursor),
  { ssr: false }
);

const SmoothScrollHero = dynamic(
  () => import("@/components/ui/smooth-scroll-hero").then((mod) => mod.SmoothScrollHero),
  { ssr: false }
);

import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

export default function Home() {
  return (
    <main className="">
      <Analytics />
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