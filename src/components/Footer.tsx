import { motion } from "motion/react";
import { cn } from "../lib/utils";

export function Footer() {
  return (
    <footer className="py-20 md:py-40 px-6 md:px-10 bg-black border-t border-white/10">
      <div className="max-w-[90rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-40">
          <div>
            <h2 className="font-display font-bold text-[10vw] leading-[0.8] uppercase tracking-tighter mb-10">
              Gökalp <br /> Kılıç
            </h2>
            <p className="font-display font-bold text-sm uppercase tracking-[0.2em] text-white/40 max-w-sm">
              Architect & 3D Artist pushing the boundaries of spatial visualization and cinematic design.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div>
              <h3 className="font-display font-bold text-xs uppercase tracking-[0.2em] mb-10 text-white/40">
                Socials
              </h3>
              <ul className="space-y-4">
                {["ArtStation", "LinkedIn", "Instagram", "Behance"].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="font-display font-bold text-sm uppercase tracking-widest hover:text-accent-cyan transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display font-bold text-xs uppercase tracking-[0.2em] mb-10 text-white/40">
                Contact
              </h3>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="mailto:gokalpon@gmail.com" 
                    className="font-display font-bold text-sm uppercase tracking-widest hover:text-accent-cyan transition-colors"
                  >
                    gokalpon@gmail.com
                  </a>
                </li>
                <li>
                  <span className="font-display font-bold text-sm uppercase tracking-widest text-white/40">
                    Ankara, Turkey
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-20 border-t border-white/5">
          <span className="font-display font-bold text-[10px] uppercase tracking-[0.3em] text-white/20">
            © 2026 Gökalp Kılıç. All Rights Reserved.
          </span>
          <div className="flex gap-10">
            <a href="#" className="font-display font-bold text-[10px] uppercase tracking-[0.3em] text-white/20 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-display font-bold text-[10px] uppercase tracking-[0.3em] text-white/20 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
