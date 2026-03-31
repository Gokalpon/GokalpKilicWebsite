import { motion } from "motion/react";
import { cn } from "../lib/utils";
import { Magnetic } from "./Magnetic";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 p-6 md:p-10 flex justify-between items-center mix-blend-difference"
    >
      <div className="flex items-center gap-3">
        <span className="font-display font-bold text-2xl tracking-tighter uppercase">Gökalp Kılıç</span>
      </div>
      
      <div className="hidden md:flex gap-12">
        {["Projects", "About", "Contact"].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="font-display font-bold text-sm uppercase tracking-[0.2em] hover:opacity-50 transition-opacity"
          >
            {item}
          </a>
        ))}
      </div>

      <Magnetic strength={0.3}>
        <a 
          href="#contact"
          className="px-6 py-2 rounded-full border border-white/20 font-display font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
        >
          Hire Me
        </a>
      </Magnetic>
    </motion.nav>
  );
}
