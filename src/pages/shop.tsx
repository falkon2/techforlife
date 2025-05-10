"use client";

import { motion } from "framer-motion";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import Head from "next/head";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import Link from "next/link";
import { FiArrowLeft, FiShoppingCart, FiStar } from "react-icons/fi";

export default function Shop() {
  const products = [
    {
      id: 1,
      name: "Rocketry Kit - Type A",
      price: "1,799",
      description: "The Type A Rocket Kit is the flagship model in our initial launch lineup, designed to provide a safe, engaging, and educational introduction to model rocketry.",
      imageUrl: "https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.8
    },
    // {
    //   id: 2,
    //   name: "Stellar Navigator",
    //   price: "$199",
    //   description: "Advanced celestial mapping technology at your fingertips",
    //   imageUrl: "https://images.unsplash.com/photo-1534996858221-380b92700493?q=80&w=2031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   rating: 4.7
    // },
    // {
    //   id: 3,
    //   name: "Space Voyager",
    //   price: "$349",
    //   description: "The ultimate space enthusiast collection package",
    //   imageUrl: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   rating: 4.9
    // }
  ];

  return (
    <>
      <Head>
        <title>Space Shop | Explore Our Products</title>
        <meta name="description" content="Shop for our latest space exploration products" />
      </Head>

      <SmoothCursor />
      
      <div className="min-h-screen bg-black text-white">
        {/* Navigation Bar */}
        <header className="fixed top-0 left-0 right-0 z-[5000] bg-black">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/">
              <div className="flex items-center space-x-2">
                <img src="/logo.jpeg" alt="TEL Logo" className="h-8 w-auto mr-2" />
                <FiArrowLeft className="text-xl" />
                <span className="font-semibold">Back to Home</span>
              </div>
            </Link>
            {/* <div className="relative">
              <FiShoppingCart className="text-2xl" />
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full w-5 h-5 flex items-center justify-center text-xs">0</span>
            </div> */}
          </div>
        </header>

        {/* Hero Section */}
        <div className="pt-24 pb-16 px-4">
          <div className="container mx-auto">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-center mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              TEL - Space Explorer Shop
            </motion.h1>
            <motion.p 
              className="text-xl text-center text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Discover our range of premium space exploration equipment and accessories
            </motion.p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CardSpotlight className="h-full bg-zinc-900/50 border-zinc-800">
                  <div className="h-full flex flex-col">
                    <div className="h-64 w-full overflow-hidden rounded-t-md">
                      <img 
                        src={product.imageUrl} 
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold">{product.name}</h3>
                        <span className="text-xl font-bold text-white">{product.price}</span>
                      </div>
                      <div className="flex items-center mb-4">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <FiStar 
                              key={i} 
                              className={`${i < Math.floor(product.rating) ? "fill-current" : ""}`}
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-400">({product.rating})</span>
                      </div>
                      <p className="text-gray-400 mb-6 flex-grow">{product.description}</p>
                      <motion.button 
                        className="w-full py-3 rounded-md bg-white from-purple-500 via-pink-500 to-blue-500 text-black font-medium relative overflow-hidden group"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => alert("Thank you for your inquiry! We'll get back to you soon.")}
                      >
                        <span className="absolute inset-0 w-full h-full bg-white text-black from-blue-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        <span className="relative z-10">Inquire</span>
                      </motion.button>
                    </div>
                  </div>
                </CardSpotlight>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-zinc-900/30 backdrop-blur-sm border-t border-white/5 py-12 mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex flex-col items-center md:items-start">
                <img src="/tel.png" alt="TEL Logo" className="h-12 w-auto mb-2" />
                <p className="text-zinc-400 mt-2">Pushing the boundaries of what's possible</p>
              </div>
              
              <div className="flex items-center space-x-4">
                {[
                  { id: 1, icon: "youtube", url: "https://youtube.com/@techforlife" },
                //   { id: 2, icon: "twitter", url: "https://twitter.com/techforlife" },
                  { id: 3, icon: "instagram", url: "https://instagram.com/techforlife" },
                  {id: 5, icon: "email", url: "mailto:contact@techforeasylife.in"},

                //   { id: 4, icon: "linkedin", url: "https://linkedin.com/company/techforlife" }
                ].map((link) => (
                  <motion.a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.icon === "youtube" && <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>}
                    {/* {link.icon === "twitter" && <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>} */}
                    {link.icon === "instagram" && <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>}
                    {link.icon === "email" && <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M12 13.5l-8.5-5.5h17L12 13.5zm0 1.5l8.5-5.5v10l-8.5-5.5zM3 4h18v16H3V4zm0-2C1.34 2 0 3.34 0 5v14c0 1.66 1.34 3 3 3h18c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3H3z"></path></svg>}
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
      </div>
    </>
  );
}
