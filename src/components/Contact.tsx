import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "../lib/utils";
import { Magnetic } from "./Magnetic";
import { useLanguage } from "../context/LanguageContext";
import { LiquidEther } from "./LiquidEther";

export function Contact() {
  const { t } = useLanguage();
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const marqueeText = t("Let's Build Together", "Birlikte Tasarlayalım");

  return (
    <section ref={container} id="contact" className="relative py-32 md:py-48 bg-white overflow-hidden">
      {/* Liquid Ether Background for White Section */}
      <div className="absolute inset-0 opacity-40 pointer-events-none z-0">
        <LiquidEther 
          colors={['#F97316', '#EC4899', '#A855F7']}
          mouseForce={25}
          autoDemo={true}
          autoSpeed={0.4}
          resolution={0.3}
        />
      </div>

      {/* Side Fades for Marquee - Full height, but behind buttons (z-20) */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

      <div className="relative z-10">
        <div className="mb-20 md:mb-32 overflow-hidden">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap"
          >
            {[...Array(4)].map((_, i) => (
              <h2 
                key={i}
                className="font-display font-bold text-[18vw] md:text-[12vw] leading-none uppercase tracking-tighter text-zinc-900 px-10 md:px-20"
              >
                {marqueeText} •
              </h2>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="relative z-30 max-w-[90rem] mx-auto px-6 md:px-10 text-center">
        <motion.p 
          style={{ y }}
          className="font-display font-bold text-sm md:text-base uppercase tracking-[0.3em] text-zinc-900/60 mb-16 md:mb-24"
        >
          {t("Ready to bring your vision to life?", "Fikirlerinizi gerçeğe dönüştürmeye hazır mısınız?")}
        </motion.p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
          <Magnetic strength={0.4} className="w-full md:w-auto">
            <a 
              href="mailto:gokalpon@gmail.com"
              className="w-full md:w-auto px-10 md:px-16 py-6 md:py-8 rounded-full bg-zinc-900 text-white font-display font-bold text-xs md:text-sm uppercase tracking-[0.2em] hover:scale-105 transition-transform duration-300 inline-block text-center shadow-2xl shadow-black/20"
            >
              {t("Send an Email", "E-posta Gönder")}
            </a>
          </Magnetic>
          <Magnetic strength={0.4} className="w-full md:w-auto">
            <a 
              href="https://gokalpon.artstation.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-10 md:px-16 py-6 md:py-8 rounded-full border border-zinc-900/20 text-zinc-900 font-display font-bold text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-zinc-900/5 transition-all duration-300 inline-block text-center"
            >
              {t("View ArtStation", "ArtStation'ı Görüntüle")}
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
