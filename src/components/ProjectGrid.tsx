import { motion } from "motion/react";
import { cn } from "../lib/utils";

const PROJECTS = [
  {
    id: 1,
    title: "Modern Villa Exterior",
    category: "Architectural Visualization",
    image: "https://picsum.photos/seed/villa/1920/1080",
    featured: true
  },
  {
    id: 2,
    title: "Dark Living Room Interior",
    category: "Interior Design",
    image: "https://picsum.photos/seed/interior/1200/900",
    featured: false
  },
  {
    id: 3,
    title: "High-rise Building Concept",
    category: "3D Modeling",
    image: "https://picsum.photos/seed/building/1200/900",
    featured: false
  },
  {
    id: 4,
    title: "Modern House Daylight",
    category: "Exterior Design",
    image: "https://picsum.photos/seed/house/1200/900",
    featured: false
  },
  {
    id: 5,
    title: "Minimalist Interior Visualization",
    category: "3D Rendering",
    image: "https://picsum.photos/seed/minimal/1200/900",
    featured: false
  }
];

export function ProjectGrid() {
  return (
    <section id="projects" className="py-20 md:py-40 px-6 md:px-10 max-w-[90rem] mx-auto">
      <div className="mb-20">
        <h2 className="font-display font-black text-[10vw] leading-[0.8] uppercase tracking-tighter mb-10">
          Case <br /> Studies
        </h2>
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
              "group relative overflow-hidden border border-white/10",
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
              className="absolute inset-0 w-full h-full object-cover hover-color"
              referrerPolicy="no-referrer"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
              <span className="font-display font-bold text-xs uppercase tracking-[0.2em] text-accent-cyan mb-2 block">
                {project.category}
              </span>
              <h3 className="font-display font-black text-2xl md:text-4xl uppercase tracking-tighter">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
