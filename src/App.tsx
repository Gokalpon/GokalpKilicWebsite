/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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

export default function App() {
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
          <Navbar />
          <Hero />
          <ProjectGrid />
          <About />
          <Contact />
          <Footer />
        </div>
      </main>
    </LanguageProvider>
  );
}
