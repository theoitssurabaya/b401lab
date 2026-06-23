import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}

export function FadeIn({ children, delay = 0, duration = 0.5, yOffset = 30, className = "" }: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset, scale: 0.9, filter: "blur(5px)" }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : { opacity: 0, y: yOffset, scale: 0.9, filter: "blur(5px)" }}
      transition={{ type: "spring", stiffness: 100, damping: 12, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
