import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import Head from "next/head";
import { useRouter } from "next/router";
// import { CustomCursor404 } from "@/components/ui/custom-cursor-404";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
export default function Custom404() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>404 - Page Not Found | TEL</title>
      </Head>
      {/* <CustomCursor404 /> */}
      <div 
        className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center px-4 relative overflow-hidden"
        style={{
          backgroundImage: "url('/space-404-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Overlay gradient */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-10" /> */}
        
        {/* Content */}
        <div className="relative z-20 max-w-3xl w-full flex flex-col items-center">
          {/* Mini Navbar */}
          <motion.div 
            className="fixed top-4 left-0 right-0 flex justify-center z-30"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/" passHref>
              <div className="flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 cursor-pointer">
                <img src="/logo.jpeg" alt="TEL Logo" className="h-6 w-auto" />
                <span className="text-white font-medium">TEL Dynamics</span>
              </div>
            </Link>
          </motion.div>

          {/* Animated glowing particles */}
          

          {/* 404 Message */}

          
          <motion.div className="relative mb-6">
            {/* Orbiting elements around the 404 */}
                    
                
            
            <motion.h1 
              className="text-6xl sm:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <TextHoverEffect text="404" />
            </motion.h1>
          </motion.div>
          
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Houston, we have a problem</h2>
            <p className="text-zinc-400 mb-8 max-w-md">
              The page you're looking for has drifted into deep space or doesn't exist in this universe.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
             
              
              <Link href="/" passHref>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative bg-white from-purple-500 via-pink-500 to-blue-500 text-black rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 overflow-hidden group"
                >
                  <span className="relative font-bold z-10">Return Home</span>
                </motion.button>
              </Link>
            </div>
            
            {/* Space Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-16 text-center"
            >
              <p className="text-zinc-500 italic">
                "In the vastness of space, there are endless possibilities..."
              </p>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Floating astronaut */}
        
      </div>
    </>
  );
}
