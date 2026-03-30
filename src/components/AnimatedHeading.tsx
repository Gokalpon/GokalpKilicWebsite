import { motion } from "motion/react";
import { cn } from "../lib/utils";

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  delay?: number;
}

export function AnimatedHeading({ text, className, delay = 0 }: AnimatedHeadingProps) {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
  };

  return (
    <motion.h3
      className={cn(
        "font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white transition-colors duration-500 hover:text-accent-cyan",
        className
      )}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block whitespace-pre"
        >
          {letter}
        </motion.span>
      ))}
    </motion.h3>
  );
}
