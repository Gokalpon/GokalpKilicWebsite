import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 800, mass: 0.1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer") ||
        target.role === "button"
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    >
      {/* Premium Frosted Arrow Cursor - Soft & Subtle */}
      <motion.div
        className="relative"
        animate={{
          scale: isClicked ? 0.9 : isHovered ? 1.2 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
      >
        {/* The Frosted Glass Body - Matches SVG Path */}
        <div 
          className="absolute top-0 left-0 w-[28px] h-[34px] bg-white/5 backdrop-blur-[10px]"
          style={{ 
            clipPath: "polygon(12% 10%, 88% 52%, 55% 60%, 42% 90%)",
          }}
        />
        
        {/* The White Outline SVG - Softer & Thinner */}
        <svg 
          width="28" 
          height="34" 
          viewBox="0 0 28 34" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10"
        >
          <path 
            d="M4 4L24 18L15 21L12 30L4 4Z" 
            fill="rgba(255, 255, 255, 0.02)"
            stroke="rgba(255, 255, 255, 0.6)" 
            strokeWidth="1.8" 
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}
