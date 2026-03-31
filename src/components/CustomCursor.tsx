import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 500, mass: 0.5 };
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
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      {/* Single Premium Glass Orb */}
      <motion.div
        className="relative flex items-center justify-center"
        animate={{
          scale: isClicked ? 0.8 : isHovered ? 2.2 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
      >
        <motion.div
          className="w-12 h-12 rounded-full border border-white/30 backdrop-blur-[4px] bg-white/10 mix-blend-difference shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          animate={{
            backgroundColor: isHovered ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.1)",
            borderColor: isHovered ? "rgba(255, 255, 255, 0.6)" : "rgba(255, 255, 255, 0.3)",
          }}
        />
        
        {/* Internal Dynamic Glow */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent opacity-0"
          animate={{
            opacity: isHovered ? 1 : 0,
            rotate: isHovered ? 360 : 0,
          }}
          transition={{ rotate: { duration: 4, repeat: Infinity, ease: "linear" } }}
        />
      </motion.div>
    </motion.div>
  );
}
