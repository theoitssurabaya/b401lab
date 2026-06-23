import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import logo from "../assets/logo/Logo.png";

interface WelcomeScreenProps {
  onEnter: () => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  },
  exit: { 
    opacity: 0, 
    scale: 1.1, 
    transition: { duration: 0.8, ease: "easeInOut" } 
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

const titleWords = "Welcome to B401".split(" ");

export function WelcomeScreen({ onEnter }: WelcomeScreenProps) {
  const [isExiting, setIsExiting] = useState(false);

  const handleEnter = () => {
    setIsExiting(true);
  };

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-50 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isExiting ? "exit" : "visible"}
      onAnimationComplete={(definition) => {
        if (definition === "exit") {
          onEnter();
        }
      }}
    >
      {/* Dynamic Background: Dot Grid */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #52525b 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
        animate={{
          backgroundPosition: ["0px 0px", "32px 32px"]
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear"
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <motion.div 
          className="w-32 h-32 md:w-40 md:h-40 mb-8 rounded-full bg-white shadow-xl flex items-center justify-center p-4 relative"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          {/* Glowing pulse behind logo */}
          <motion.div 
            className="absolute inset-0 rounded-full border border-zinc-400"
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut"
            }}
          />
          <motion.img 
            src={logo} 
            alt="B401 Lab Logo" 
            className="w-full h-full object-contain"
            animate={{
              y: [0, -8, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut"
            }}
          />
        </motion.div>
        
        {/* Staggered Title */}
        <div className="flex space-x-2 md:space-x-3 mb-4">
          {titleWords.map((word, i) => (
            <motion.h1 
              key={i}
              className="font-display font-bold text-3xl md:text-5xl tracking-tight text-zinc-900"
              variants={itemVariants}
            >
              {word}
            </motion.h1>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p 
          className="text-zinc-500 text-lg md:text-xl text-center px-4 max-w-lg mb-12"
          variants={itemVariants}
        >
          Robotics & Intelligent Systems Laboratory
        </motion.p>

        {/* Enter Button */}
        <motion.div variants={itemVariants}>
          <motion.button
            onClick={handleEnter}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-zinc-900 border border-transparent rounded-full shadow-xl shadow-zinc-900/20 overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900"
          >
            {/* Shimmer effect */}
            <motion.span 
              className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -ml-[100%]"
              animate={{
                x: ["0%", "150%"]
              }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                ease: "easeInOut",
                repeatDelay: 1
              }}
            />
            
            <span className="relative flex items-center gap-2">
              Enter Lab
              <motion.svg 
                className="w-4 h-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </motion.svg>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}
