import { motion } from "motion/react";
import { cn } from "../lib/utils";
import { AnimatedHeading } from "./AnimatedHeading";

const EXPERIENCE = [
  {
    company: "Freelance",
    role: "Architect & 3D Modeler",
    period: "2022 - Present",
    desc: "Architecture, Architectural Visualization & 3D Modeler."
  },
  {
    company: "Tint Mimarlık",
    role: "Architect",
    period: "2021 - 2022",
    desc: "Responsible for designing of 12 villa/office/residential projects as head designer and made renders."
  },
  {
    company: "Selda Gümüşdoğrayan Mimarlık",
    role: "Architect",
    period: "2020 - 2021",
    desc: "Participated in City Hospital Projects such as Samsun Sehir Hastanesi, Ordu Sehir Hastanesi."
  },
  {
    company: "Bek Proje",
    role: "Architect",
    period: "2017 - 2018",
    desc: "Participated in office projects as architect on government projects."
  }
];

const SKILLS = [
  "Blender", "Autocad", "Adobe Photoshop", "Sketchup", "Lumion", "Twinmotion", "3D Max", "Adobe Illustrator", "Figma"
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-40 px-6 md:px-10 max-w-[90rem] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left: Bio */}
        <div>
          <h2 className="font-display font-bold text-[10vw] leading-[0.8] uppercase tracking-tighter mb-10">
            About <br /> Me
          </h2>
          <div className="space-y-8 font-sans font-light text-xl text-white/60 leading-relaxed">
            <p>
              I am Gökalp Kılıç, an architect and 3D artist based in Ankara, Turkey. 
              My work focuses on the intersection of architecture and cinematic visualization.
            </p>
            <p>
              With a background in architecture from Cankaya University, I have spent years 
              refining my skills in 3D modeling and rendering, working on projects ranging 
              from high-end residential villas to large-scale city hospitals.
            </p>
          </div>

          <div className="mt-20">
            <h3 className="font-display font-bold text-xs uppercase tracking-[0.2em] mb-10 text-white/40">
              Core Skills
            </h3>
            <div className="flex flex-wrap gap-4">
              {SKILLS.map((skill) => (
                <span 
                  key={skill}
                  className="px-6 py-2 rounded-full border border-white/10 font-display font-bold text-xs uppercase tracking-widest hover:border-accent-cyan transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Experience */}
        <div className="space-y-20">
          <h3 className="font-display font-bold text-xs uppercase tracking-[0.2em] mb-10 text-white/40">
            Experience
          </h3>
          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group border-b border-white/10 pb-12 last:border-0"
              >
                <div className="flex justify-between items-start mb-4">
                  <AnimatedHeading 
                    text={exp.company} 
                    className="text-3xl md:text-4xl uppercase tracking-tighter group-hover:text-accent-cyan transition-colors"
                  />
                  <span className="font-display font-bold text-xs uppercase tracking-widest text-white/40">
                    {exp.period}
                  </span>
                </div>
                <p className="font-display font-bold text-sm uppercase tracking-widest mb-4 text-white/80">
                  {exp.role}
                </p>
                <p className="font-sans font-light text-lg text-white/40 max-w-lg">
                  {exp.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
