import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "../lib/utils";
import { Magnetic } from "./Magnetic";

export function Contact() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={container} id="contact" className="relative py-20 md:py-40 px-6 md:px-10 overflow-hidden">
      <div className="max-w-[90rem] mx-auto relative z-10">
        <div className="text-center">
          <motion.h2 
            style={{ y }}
            className="font-display font-bold text-[10vw] leading-[0.8] uppercase tracking-tighter mb-10"
          >
            Let's <br /> Build
          </motion.h2>
          <p className="font-display font-bold text-sm uppercase tracking-[0.2em] text-white/40 mb-20">
            Ready to bring your vision to life?
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <Magnetic strength={0.4}>
              <a 
                href="mailto:gokalpon@gmail.com"
                className="px-12 py-6 rounded-full bg-white text-black font-display font-bold text-sm uppercase tracking-[0.2em] hover:scale-105 transition-transform duration-300"
              >
                Send an Email
              </a>
            </Magnetic>
            <Magnetic strength={0.4}>
              <a 
                href="https://gokalpon.artstation.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-6 rounded-full border border-white/20 text-white font-display font-bold text-sm uppercase tracking-[0.2em] hover:bg-white/10 transition-all duration-300"
              >
                View ArtStation
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}
