import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "../lib/utils";
import { useLanguage } from "../context/LanguageContext";

const CUBE_FACES = [
  {
    title: { en: "Sand Bowl Study", tr: "Kum Kasesi Çalışması" },
    image: "/images/Sand-Bowl Study-1.jpg",
  },
  {
    title: { en: "Beytepe Living Room - Night", tr: "Beytepe Oturma Odası - Gece" },
    image: "/images/Beytepe-Living Room-Night-1.jpg",
  },
  {
    title: { en: "Çayyolu Lodumu Villa Project", tr: "Çayyolu Lodumu Villa Projesi" },
    image: "/images/Cayyolu-Lodumu-Villa-Project-1.jpg",
  },
  {
    title: { en: "İncek Villa Project", tr: "İncek Villa Projesi" },
    image: "/images/Incek-Villa-1.jpg",
  }
];

export function Hero() {
  const { t } = useLanguage();
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const bgTexts = [
    { en: "ARCHITECTURE", tr: "MİMARLIK" },
    { en: "3D ARTIST", tr: "3D SANATÇISI" },
    { en: "RENDERING", tr: "GÖRSELLEŞTİRME" }
  ];

  return (
    <section ref={container} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Text Cycling */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-10">
        <div className="relative w-full text-center">
          {bgTexts.map((item, i) => (
            <motion.span
              key={item.en}
              style={{ y: i % 2 === 0 ? y1 : y2 }}
              initial={{ opacity: 0, filter: "blur(20px)", scale: 0.8 }}
              animate={{ 
                opacity: [0, 0.4, 0.4, 0, 0, 0],
                filter: ["blur(20px)", "blur(0px)", "blur(0px)", "blur(20px)", "blur(20px)", "blur(20px)"],
                scale: [0.8, 1, 1.05, 1.1, 1.1, 1.1]
              }}
              transition={{ 
                duration: 30,
                repeat: Infinity,
                delay: i * 10,
                times: [0, 0.05, 0.28, 0.33, 0.34, 1],
                ease: "easeInOut"
              }}
              className="absolute inset-0 flex items-center justify-center font-display font-bold text-[25vw] md:text-[16vw] leading-none uppercase tracking-[-0.05em] text-white/10 whitespace-nowrap pointer-events-none"
            >
              {t(item.en, item.tr)}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Spherical Carousel */}
      <div className="relative w-full h-full flex items-center justify-center perspective-2000 z-20">
        <motion.div 
          animate={{ rotateY: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="relative w-[85vw] md:w-[70vh] h-[35vh] md:h-[40vh] preserve-3d [--carousel-z:45vw] md:[--carousel-z:50vh]"
        >
          {CUBE_FACES.map((face, index) => {
            const angle = (index / CUBE_FACES.length) * 360;
            return (
              <div 
                key={index}
                className="absolute inset-0 preserve-3d backface-hidden flex items-center justify-center rounded-[24px] md:rounded-[32px] overflow-hidden glass border border-white/10"
                style={{ 
                  transform: `rotateY(${angle}deg) translateZ(var(--carousel-z, 45vw))`,
                }}
              >
                <img 
                  src={face.image} 
                  alt={t(face.title.en, face.title.tr)}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                <h2 className="relative z-10 font-display font-bold text-xl md:text-4xl text-center px-4 md:px-6 tracking-[0.1em] md:tracking-[0.2em] uppercase leading-tight">
                  {t(face.title.en, face.title.tr)}
                </h2>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Hero Content Overlay */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center z-30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col items-center"
        >
          <div className="w-px h-20 bg-gradient-to-b from-transparent to-white/40 mb-6" />
          <span className="font-display font-bold text-[10px] uppercase tracking-[0.5em] text-white/40">
            {t("Scroll Down", "Aşağı Kaydır")}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
