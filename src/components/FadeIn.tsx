import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  viewportMargin?: string;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  direction = "up",
  className = "",
  viewportMargin = "-100px",
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: viewportMargin as any });

  const getHiddenState = () => {
    switch (direction) {
      case "up": return { opacity: 0, y: 30 };
      case "down": return { opacity: 0, y: -30 };
      case "left": return { opacity: 0, x: 30 };
      case "right": return { opacity: 0, x: -30 };
      case "none": return { opacity: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getHiddenState()}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : getHiddenState()}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for a smooth snap
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
