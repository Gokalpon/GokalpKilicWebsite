import { motion } from "motion/react";
import { cn } from "../lib/utils";

export function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-40 px-6 md:px-10 overflow-hidden bg-[#0B0216]">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-purple/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[90rem] mx-auto relative z-10">
        <div className="text-center">
          <h2 className="font-display font-bold text-[10vw] leading-[0.8] uppercase tracking-tighter mb-10">
            Let's <br /> Build
          </h2>
          <p className="font-display font-bold text-sm uppercase tracking-[0.2em] text-white/40 mb-20">
            Ready to bring your vision to life?
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <a 
              href="mailto:gokalpon@gmail.com"
              className="px-12 py-6 rounded-full bg-white text-black font-display font-bold text-sm uppercase tracking-[0.2em] hover:scale-105 transition-transform duration-300"
            >
              Send an Email
            </a>
            <a 
              href="https://gokalpon.artstation.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-6 rounded-full border border-white/20 text-white font-display font-bold text-sm uppercase tracking-[0.2em] hover:bg-white/10 transition-all duration-300"
            >
              View ArtStation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
