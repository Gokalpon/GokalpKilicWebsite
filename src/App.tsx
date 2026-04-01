/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProjectGrid } from "./components/ProjectGrid";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { LiquidEther } from "./components/LiquidEther";
import { CustomCursor } from "./components/CustomCursor";
import { Preloader } from "./components/Preloader";
import { LanguageProvider } from "./context/LanguageContext";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [view, setView] = useState<"home" | "projects">("home");

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <LanguageProvider>
      <main className="bg-bg text-white selection:bg-accent-cyan selection:text-white relative cursor-none">
        <Preloader />
        <CustomCursor />
        
        {/* Global Liquid Ether Background */}
        <div className="fixed inset-0 opacity-30 pointer-events-none z-0">
          <LiquidEther 
            colors={['#F97316', '#EC4899', '#A855F7']}
            mouseForce={25}
            autoDemo={true}
            autoSpeed={0.3}
            resolution={0.3}
          />
        </div>

        <div className="relative z-10">
          <Navbar onHomeClick={() => setView("home")} onProjectsClick={() => setView("projects")} />
          
          <AnimatePresence mode="wait">
            {view === "home" ? (
              <motion.div
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Hero />
                <ProjectGrid limit={3} onShowAll={() => setView("projects")} />
                <About />
                <Contact />
                <Footer />
              </motion.div>
            ) : (
              <motion.div
                key="projects"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="pt-20"
              >
                <ProjectGrid />
                <Footer />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </LanguageProvider>
  );
}
