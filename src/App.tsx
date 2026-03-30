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

export default function App() {
  return (
    <main className="bg-bg text-white selection:bg-accent-cyan selection:text-white">
      <Navbar />
      <Hero />
      <ProjectGrid />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
