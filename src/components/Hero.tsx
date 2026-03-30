import { motion } from "motion/react";
import { cn } from "../lib/utils";

const CUBE_FACES = [
  {
    title: "Modern Residence C-32",
    image: "https://picsum.photos/seed/arch-c32/1200/1200",
    transform: "rotateX(0deg) translateZ(25vh)"
  },
  {
    title: "Luxury Interior Study",
    image: "https://picsum.photos/seed/interior-lux/1200/1200",
    transform: "rotateX(-90deg) translateZ(25vh)"
  },
  {
    title: "Urban Residential Complex Res02",
    image: "https://picsum.photos/seed/res02/1200/1200",
    transform: "rotateX(-180deg) translateZ(25vh)"
  },
  {
    title: "Digital Portrait Illustration",
    image: "https://picsum.photos/seed/portrait-art/1200/1200",
    transform: "rotateX(90deg) translateZ(25vh)"
  }
];

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Text Cycling */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 2 }}
          className="relative w-full text-center"
        >
          {["ARCHITECTURE", "3D ARTIST", "RENDERING"].map((text, i) => (
            <motion.span
              key={text}
              initial={{ opacity: 0, y: 100 }}
              animate={{ 
                opacity: [0, 1, 1, 0],
                y: [100, 0, 0, -100]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                delay: i * 4,
                times: [0, 0.1, 0.9, 1],
                ease: "easeInOut"
              }}
              className="absolute inset-0 flex items-center justify-center font-display font-black text-[20vw] leading-none uppercase tracking-tighter text-white whitespace-nowrap"
            >
              {text}
            </motion.span>
          ))}
        </motion.div>
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
                <h2 className="relative z-10 font-display font-black text-3xl md:text-4xl text-center px-6 tracking-[0.2em] uppercase">
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
