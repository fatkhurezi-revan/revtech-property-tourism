"use client";

import { motion } from "framer-motion";

export default function TextReveal({ text, className, as: Component = "div" }: { text: string, className?: string, as?: any }) {
  const words = text.split(" ");
  
  const container: any = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.04 * i },
    }),
  };

  const child: any = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] // Custom ease out for smooth reveal without bounce
      },
    },
    hidden: {
      opacity: 0,
      y: 60,
    },
  };

  return (
    <Component className={className}>
      <motion.div
        className="flex flex-wrap"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {words.map((word, index) => (
          <span key={index} className="overflow-hidden inline-block mr-2 pb-1">
            <motion.span variants={child} className="inline-block">
              {word}
            </motion.span>
          </span>
        ))}
      </motion.div>
    </Component>
  );
}
