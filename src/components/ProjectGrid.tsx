import { motion } from "motion/react";
import { cn } from "../lib/utils";

const PROJECTS = [
  {
    id: 1,
    title: "Modern Residence C-32",
    category: "Architectural Visualization",
    image: "https://picsum.photos/seed/arch-c32/1200/800",
    featured: true
  },
  {
    id: 2,
    title: "Luxury Interior Study",
    category: "Interior Design",
    image: "https://picsum.photos/seed/interior-lux/800/600",
    featured: false
  },
  {
    id: 3,
    title: "Urban Residential Complex Res02",
    category: "3D Modeling",
    image: "https://picsum.photos/seed/res02/800/600",
    featured: false
  },
  {
    id: 4,
    title: "Digital Portrait Illustration",
    category: "Digital Art",
    image: "https://picsum.photos/seed/portrait-art/800/600",
    featured: false
  },
  {
    id: 5,
    title: "Product Design: Coffee & Sand Bowl",
    category: "3D Rendering",
    image: "https://picsum.photos/seed/product-viz/800/600",
    featured: false
  },
  {
    id: 6,
    title: "Concept Plane Visualization",
    category: "3D Modeling",
    image: "https://picsum.photos/seed/plane-viz/800/600",
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
