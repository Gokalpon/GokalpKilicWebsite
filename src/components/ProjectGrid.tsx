import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "../lib/utils";
import { AnimatedHeading } from "./AnimatedHeading";

const PROJECTS = [
  {
    id: 1,
    title: "Luxury Living Interior",
    category: "Interior Design",
    image: "/images/gokalp-kilic-day-interior-1.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Modern Night Villa",
    category: "Architectural Visualization",
    image: "/images/gokalp-kilic-c-23-foto.jpg",
    featured: false
  },
  {
    id: 3,
    title: "High-rise Concept",
    category: "3D Modeling",
    image: "/images/gokalp-kilic-res02-r0.jpg",
    featured: false
  },
  {
    id: 4,
    title: "Urban Residential Complex",
    category: "3D Modeling",
    image: "/images/gokalp-kilic-res02-r6.jpg",
    featured: false
  },
  {
    id: 5,
    title: "Product Design: Sand Bowl",
    category: "3D Rendering",
    image: "/images/gokalp-kilic-sand-bowl-try8.jpg",
    featured: false
  },
  {
    id: 6,
    title: "Concept Plane",
    category: "3D Modeling",
    image: "/images/gokalp-kilic-plane-render-a1.jpg",
    featured: false
  }
];

export function ProjectGrid() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={container} id="projects" className="py-20 md:py-40 px-6 md:px-10 max-w-[90rem] mx-auto">
      <div className="mb-20">
        <motion.h2 
          style={{ y }}
          className="font-display font-bold text-[10vw] leading-[0.8] uppercase tracking-tighter mb-10"
        >
          Case <br /> Studies
        </motion.h2>
        <div className="h-px w-full bg-white/10" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {PROJECTS.map((project) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn(
              "group relative overflow-hidden border border-white/10 rounded-[32px]",
              project.featured ? "md:col-span-2 aspect-video" : "aspect-[4/3]"
            )}
          >
            {/* macOS Style Controls */}
            <div className="absolute top-4 left-4 z-20 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
            </div>

            {/* Project Image */}
            <img 
              src={project.image} 
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover opacity-70 saturate-50 group-hover:opacity-20 group-hover:saturate-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 translate-y-10 group-hover:translate-y-0 transition-transform duration-500 z-30">
              <span className="font-display font-bold text-xs uppercase tracking-[0.2em] text-gradient mb-2 block">
                {project.category}
              </span>
              <div className="max-w-[90%]">
                <AnimatedHeading 
                  text={project.title} 
                  className="text-2xl md:text-4xl uppercase tracking-tighter leading-tight"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
