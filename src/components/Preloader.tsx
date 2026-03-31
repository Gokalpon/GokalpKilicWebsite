import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + Math.random() * 10;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center p-10"
        >
          <div className="relative w-full max-w-md">
            <div className="flex justify-between items-end mb-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col"
              >
                <span className="font-display font-bold text-2xl md:text-4xl tracking-tighter uppercase text-white">
                  Gökalp Kılıç
                </span>
                <span className="font-display font-bold text-[8px] md:text-[10px] tracking-[0.3em] md:tracking-[0.5em] uppercase text-white/40 mt-2">
                  Architecture & 3D Artist
                </span>
              </motion.div>
              <span className="font-display font-bold text-2xl text-white tabular-nums">
                {Math.round(progress)}%
              </span>
            </div>

            {/* Progress Bar Container */}
            <div className="h-px w-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full bg-white"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Miami Vice Accent Line */}
            <motion.div
              className="h-[2px] w-full accent-gradient mt-1 opacity-50 blur-[2px]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: progress / 100 }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-10 font-display font-bold text-[10px] tracking-[0.8em] uppercase text-white/20"
          >
            Loading Experience
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
