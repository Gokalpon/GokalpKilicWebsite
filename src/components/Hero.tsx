import { motion } from "motion/react";
import { cn } from "../lib/utils";

const CUBE_FACES = [
  {
    title: "Luxury Living Interior",
    image: "/images/gokalp-kilic-day-interior-1.jpg",
    transform: "rotateX(0deg) translateZ(25vh)"
  },
  {
    title: "Modern Night Villa",
    image: "/images/gokalp-kilic-c-23-foto.jpg",
    transform: "rotateX(-90deg) translateZ(25vh)"
  },
  {
    title: "High-rise Concept",
    image: "/images/gokalp-kilic-res02-r0.jpg",
    transform: "rotateX(-180deg) translateZ(25vh)"
  },
  {
    title: "Urban Residential Complex",
    image: "/images/gokalp-kilic-res02-r6.jpg",
    transform: "rotateX(90deg) translateZ(25vh)"
  }
];

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Text Cycling */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="relative w-full text-center">
          {["ARCHITECTURE", "3D ARTIST", "RENDERING"].map((text, i) => (
            <motion.span
              key={text}
              initial={{ opacity: 0, filter: "blur(20px)", scale: 0.8 }}
              animate={{ 
                opacity: [0, 0.6, 0.6, 0, 0, 0],
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
              className="absolute inset-0 flex items-center justify-center font-display font-bold text-[18vw] leading-none uppercase tracking-[-0.05em] text-white whitespace-nowrap pointer-events-none"
            >
              {text}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Spherical Carousel */}
      <div className="relative w-full h-full flex items-center justify-center perspective-2000">
        <motion.div 
          animate={{ rotateY: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="relative w-[70vh] h-[40vh] preserve-3d"
        >
          {CUBE_FACES.map((face, index) => {
            const angle = (index / CUBE_FACES.length) * 360;
            return (
              <div 
                key={index}
                className="absolute inset-0 preserve-3d backface-hidden flex items-center justify-center rounded-[32px] overflow-hidden glass border border-white/10"
                style={{ 
                  transform: `rotateY(${angle}deg) translateZ(50vh)`,
                }}
              >
                <img 
                  src={face.image} 
                  alt={face.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                <h2 className="relative z-10 font-display font-bold text-3xl md:text-4xl text-center px-6 tracking-[0.2em] uppercase">
                  {face.title}
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
            Scroll Down
          </span>
        </motion.div>
      </div>
    </section>
  );
}
