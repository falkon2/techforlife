import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Product from "@/components/ui/product";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Redirect() {
  const router = useRouter();
  const targetUrl = "/shop"; // This now properly points to the shop page in our SPA
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          // Redirect when countdown reaches 0
          router.push(targetUrl);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    // Clean up the timer if the component unmounts
    return () => clearInterval(timer);
  }, [router, targetUrl]);

  return (
    <>
      <Head>
        <title>Redirecting to Shop...</title>
        <meta name="description" content="Redirecting to our shop" />
      </Head>
      <div className="h-screen w-screen bg-black flex flex-col items-center justify-center relative">
        <motion.div 
          className="z-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Redirecting to our shop</h1>
          <p className="text-xl text-gray-300 mb-8">You will be redirected in {countdown} seconds...</p>
          <div className="flex justify-center">
            <div className="w-16 h-16 border-t-4 border-b-4 border-white rounded-full animate-spin"></div>
          </div>
          <Link href={targetUrl}>
            <motion.button
              className="mt-8 px-8 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white rounded-full font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Go now
            </motion.button>
          </Link>
        </motion.div>
        
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500 blur-[100px] opacity-20"
            animate={{ 
              x: [0, 50, 0], 
              y: [0, 30, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 8,
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-500 blur-[100px] opacity-20"
            animate={{ 
              x: [0, -40, 0], 
              y: [0, -50, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 10,
              ease: "easeInOut" 
            }}
          />
        </div>
        
        {/* Custom cursor effect using the Product component */}
        <Product>
          <div className="rounded-full w-24 h-24 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-[20px] opacity-70"></div>
          <div className="rounded-full w-8 h-8 bg-white"></div>
        </Product>
      </div>
    </>
  );
}
