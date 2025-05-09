"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
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

export const SmoothScrollHero = () => {
  return (
    <div className="bg-zinc-950">
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        <Nav />
        <SparklesPreview />
        <Hero />
        <AboutUs />
      </ReactLenis>
    </div>
  );
};

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = ['Home', 'About', 'Course', 'News'];

  return (
    <>
      {/* Dock-style navbar with black background and rainbow outline - desktop only */}
      <div className="fixed top-4 inset-x-0 hidden sm:flex justify-center items-center z-[5000]">
        <nav className="relative flex items-center justify-between px-6 py-3 bg-black text-white rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.8)] max-w-3xl w-full mx-auto">
          {/* Rainbow border outline using a pseudo-element - thicker for better visibility */}
          <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
            <span className="absolute inset-0 rounded-full bg-black"></span>
          </span>
          
          <div className="relative flex items-center space-x-4">
            <SiSpacex className="text-2xl text-white" />
            
            {/* Navigation items */}
            <div className="flex items-center space-x-6 ml-4">
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
                    }
                  }}
                  className="text-white hover:text-blue-400 transition-colors duration-200 text-sm font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          
          <button
            onClick={() => {
              document.getElementById("about-us")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="relative bg-black text-white rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 overflow-hidden group"
          >
            {/* Rainbow border that pulses on hover - thicker for better visibility */}
            <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-80 group-hover:opacity-100 group-hover:animate-pulse">
              <span className="absolute inset-0 rounded-full bg-black"></span>
            </span>
            <span className="relative z-10 flex items-center gap-1">Shop<FiArrowRight className="group-hover:translate-x-1 transition-transform" /></span>
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-[5000] sm:hidden">
        <div className="relative flex items-center justify-between px-6 py-4 bg-black">
          <SiSpacex className="text-2xl text-white" />
          
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
              
              <div className="flex flex-col items-center justify-center flex-1 space-y-8">
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

                <motion.button
                  onClick={() => {
                    document.getElementById("about-us")?.scrollIntoView({
                      behavior: "smooth",
                    });
                    setMobileMenuOpen(false);
                  }}
                  className="relative bg-black text-white rounded-full px-6 py-3 text-lg font-medium mt-8 transition-all duration-300 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.1 + 0.1 }}
                >
                  <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
                    <span className="absolute inset-0 rounded-full bg-black"></span>
                  </span>
                  <span className="relative z-10 flex items-center gap-2">Shop <FiArrowRight /></span>
                </motion.button>
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
        <InteractiveHoverButton
          onClick={() => {
            window.open("https://github.com/your-company", "_blank");
          }}
        >
          Visit Our GitHub
        </InteractiveHoverButton>
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
        We are a forward-thinking technology company specializing in innovative solutions for the aerospace industry. Our team of dedicated engineers and designers work tirelessly to push the boundaries of what's possible.
      </motion.p>
      <motion.p
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75, delay: 0.2 }}
        className="mb-8 text-lg text-zinc-300 leading-relaxed"
      >
        With over a decade of experience in the field, we've collaborated with leading space agencies and private companies to develop cutting-edge technologies that advance humanity's reach into the cosmos.
      </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {[
          { 
            title: "Innovation", 
            description: "Constantly pushing the boundaries of what's possible through cutting-edge research and development." 
          },
          { 
            title: "Excellence", 
            description: "Committed to the highest standards in every aspect of our work, from design to implementation." 
          },
          { 
            title: "Collaboration", 
            description: "Working together with partners around the globe to achieve common goals for space exploration." 
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