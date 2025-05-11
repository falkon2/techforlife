"use client";
import dynamic from "next/dynamic";

// Import LenisProvider with dynamic import to avoid SSR issues
const LenisProvider = dynamic(
  () => import("@/components/ui/lenis-provider"),
  { ssr: false }
);
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { SiSpacex } from "react-icons/si";
import { FiArrowRight, FiMapPin, FiX, FiMenu } from "react-icons/fi";
import { useRef, useState } from "react";
import { SparklesPreview } from "../Main";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { WordRotate } from "@/components/magicui/word-rotate";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/router";

export const SmoothScrollHero = () => {
  return (
    <LenisProvider
      options={{
        lerp: 0.05,
      }}
    >
      <Nav />
      <SparklesPreview />
      <Hero />
      <AboutUs />
      <Footer />
    </LenisProvider>
  );
};

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = ['Home', 'About', 'Course', 'Shop'];

  return (
    <>
      {/* Dock-style navbar with black background and rainbow outline - desktop only */}
      <div className="fixed top-4 inset-x-0 hidden sm:flex justify-center items-center z-[5000]">
        <nav className="relative flex items-center justify-between px-6 py-3 bg-black text-white bold rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.8)] max-w-4xl w-full mx-auto">
          {/* Rainbow border outline using a pseudo-element - thicker for better visibility */}
          <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
            <span className="absolute inset-0 rounded-full bg-black"></span>
          </span>
          
          {/* Logo */}
          <div className="relative">
            <img src="/logo.jpeg" alt="TEL Logo" className="h-10 w-auto" />
          </div>
          
          {/* Navigation items - centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
            {navItems.map((item, idx) => (
              <a
                key={`link-desktop-${idx}`}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (item === 'About') {
                    document.getElementById("about-us")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  } else if (item === 'Shop') {
                    router.push("/redirect");
                  }
                }}
                className="text-white hover:text-blue-400 transition-colors duration-200 text-sm font-bold mx-8"
              >
                {item}
              </a>
            ))}
          </div>
          
          {/* Shop button */}
          <Link href="/redirect">
            <button
              className="relative bg-black text-white rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 overflow-hidden group"
            >
              {/* Rainbow border that pulses on hover - thicker for better visibility */}
              <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-80 group-hover:opacity-100 group-hover:animate-pulse">
                <span className="absolute inset-0 rounded-full bg-black"></span>
              </span>
              <span className="relative font-bold z-10 flex items-center gap-1">Shop<FiArrowRight className="group-hover:translate-x-1 transition-transform" /></span>
            </button>
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-[5000] sm:hidden">
        <div className="relative flex items-center justify-between px-6 py-4 ">
          <img src="/tel.png" alt="TEL Logo" className="h-8 w-auto" />
          <button
            onClick={toggleMenu}
            className="relative w-10 h-10 flex items-center justify-center"
          >
            <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
              <span className="absolute inset-0 rounded-full bg-black"></span>
            </span>
            <FiMenu className="text-white text-xl relative z-10" />
          </button>
        </div>

        {/* Full Screen Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="fixed inset-0 bg-black z-[6000] flex flex-col"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-end p-6">
                <button 
                  onClick={toggleMenu}
                  className="relative w-10 h-10 flex items-center justify-center"
                >
                  <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
                    <span className="absolute inset-0 rounded-full bg-black"></span>
                  </span>
                  <FiX className="text-white text-xl relative z-10" />
                </button>
              </div>
              
              <div className="flex flex-col items-center justify-center flex-1 space-y-12">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={`link-mobile-${idx}`}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (item === 'About') {
                        document.getElementById("about-us")?.scrollIntoView({
                          behavior: "smooth",
                        });
                        setMobileMenuOpen(false);
                      } else if (item === 'Shop') {
                        router.push("/redirect");
                        setMobileMenuOpen(false);
                      }
                    }}
                    className="text-white text-3xl font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

const SECTION_HEIGHT = 1500;

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  // Text appears after some scroll and disappears at the end of hero section
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.85, 0.95],
    [0, 1, 1, 0]
  );
  
  const textY = useTransform(
    scrollYProgress,
    [0, 0.1, 0.85, 0.95],
    [50, 0, 0, -50]
  );

  return (
    <div
      ref={heroRef}
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full flex flex-col items-center justify-center"
    >
      <CenterImage />
      <motion.div
        className="sticky top-1/2 left-0 right-0 transform -translate-y-1/2 z-20 pointer-events-none w-full text-center"
        style={{
          opacity: textOpacity,
          y: textY
        }}
      >
        <WordRotate
          words={["The sky is not the limit.","it's just the beginning.","Go beyond."]}
          className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-white mx-auto"
          duration={3000}
          motionProps={{
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: 20 },
            transition: { duration: 0.5, ease: "easeOut" }
          }}
        />
      </motion.div>
      <ParallaxImages />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT], [25, 0]);
  const clip2 = useTransform(scrollY, [0, SECTION_HEIGHT], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage:
          "url(https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Space launch 1"
        start={-200}
        end={200}
        className="w-1/3"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Space launch 2"
        start={200}
        end={-250}
        className="mx-auto w-2/3"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Satellite"
        start={-200}
        end={200}
        className="ml-auto w-1/3"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1494022299300-899b96e49893?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Satellite 2"
        start={0}
        end={-500}
        className="ml-24 w-5/12"
      />
    </div>
  );
};

const ParallaxImg = ({
  className,
  alt,
  src,
  start,
  end,
}: {
  className?: string;
  alt: string;
  src: string;
  start: number;
  end: number;
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      className={className}
      style={{ transform, opacity }}
    />
  );
};

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="mx-auto max-w-5xl px-4 py-48 text-white"
    >
      <motion.div
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75, delay: 0.2 }}
        className="mb-12 flex justify-center"
      >
        {/* <InteractiveHoverButton
          onClick={() => {
            window.open("https://github.com/your-company", "_blank");
          }}
        >
          Visit Our GitHub
        </InteractiveHoverButton> */}
      </motion.div>
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-10 text-4xl font-black uppercase text-zinc-50"
      >
        About Us
      </motion.h1>
      <motion.p
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75, delay: 0.1 }}
        className="mb-8 text-lg text-zinc-300 leading-relaxed"
      >
       At TEL Rocketry, we believe that space should be within reach — not just for scientists and billionaires, but for students, educators, and hobbyists alike. We’re on a mission to make model rocketry educational, affordable, and wildly exciting.

Our high-quality, reusable rocket kits are designed to give aspiring engineers and space lovers the real thrill of launch — all while learning core STEM concepts in a safe, structured, and hands-on way.
    </motion.p>
      <motion.p
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75, delay: 0.2 }}
        className="mb-8 text-lg text-zinc-300 leading-relaxed"
      >
       Forget overpriced international kits or flimsy alternatives. TEL Rocketry kits hit the sweet spot: durable, innovative, and budget-friendly. With our unique ignitor lock system, real motors, and active collaborations with schools, colleges, and STEM programs across the country, we’re fueling the future of aerospace — one launch at a time.
       </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {[
          { 
            title: "Innovation", 
            description: "We build smarter kits — safe, reusable, and fun — using original designs that make rocketry more accessible than ever." 
          },
          { 
            title: "Excellence", 
            description: "We’re educators at heart. Every product is designed with learning outcomes in mind, bridging theory with explosive (but safe!) practice." 
          },
          { 
            title: "Insipiration", 
            description: "From first launch to final report, we aim to ignite curiosity and passion in the next generation of space explorers." 
          }
        ].map((item, index) => (
          <CardSpotlight 
            key={index} 
            className="p-0 bg-transparent border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden"
            radius={250}
            color="#3a3a3a"
          >
            <TeamValue title={item.title} description={item.description} delay={index * 0.1} />
          </CardSpotlight>
        ))}
      </div>
      
    </section>
  );
};

const TeamValue = ({
  title,
  description,
  delay,
}: {
  title: string;
  description: string;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75, delay: 0.3 + delay }}
      className="p-6"
    >
      <h3 className="text-xl font-bold mb-3 text-zinc-50">{title}</h3>
      <p className="text-zinc-400">{description}</p>
    </motion.div>
  );
};

const Footer = () => {
  const socialLinks = [
    { id: 1, icon: "youtube", url: "https://www.youtube.com/@tel_aerospace" },
    // { id: 2, icon: "twitter", url: "https://twitter.com/techforlife" },
    {id: 5, icon: "email", url: "mailto:contact@techforeasylife.in"},
    { id: 3, icon: "instagram", url: "https://www.instagram.com/techforeasylife.in/" },
    // { id: 4, icon: "linkedin", url: "https://linkedin.com/company/techforlife" },
  ];

  return (
    <footer className="bg-zinc-900/30 backdrop-blur-sm border-t border-white/5 py-12 mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <img src="/logo.jpeg" alt="TEL Logo" className="h-12 w-auto mb-2" />
            <p className="text-zinc-400 mt-2">Pushing the boundaries of what's possible</p>
          </div>
          
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon === "email" && <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M12 13.5l-8.5-5.5h17L12 13.5zm0 1.5l8.5-5.5v10l-8.5-5.5zM3 4h18v16H3V4zm0-2C1.34 2 0 3.34 0 5v14c0 1.66 1.34 3 3 3h18c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3H3z"></path></svg>}
                {link.icon === "youtube" && <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>}
                {/* {link.icon === "twitter" && <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>} */}
                {link.icon === "instagram" && <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>}
                {/* {link.icon === "linkedin" && <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>} */}
              </motion.a>
            ))}
          </div>
        </div>
        
        <div className="mt-12 border-t border-zinc-800 pt-8 text-center">
          <p className="text-zinc-500">
            © {new Date().getFullYear()} TEL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};