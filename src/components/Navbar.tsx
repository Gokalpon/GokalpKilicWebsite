import { motion } from "motion/react";
import { cn } from "../lib/utils";
import { Magnetic } from "./Magnetic";
import { useLanguage } from "../context/LanguageContext";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { name: "Projects", tr: "Projeler" },
    { name: "About", tr: "Hakkımda" },
    { name: "Contact", tr: "İletişim" }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 p-4 md:p-10 flex justify-between items-center mix-blend-difference"
    >
      <div className="flex items-center gap-6">
        <span className="font-display font-bold text-lg md:text-2xl tracking-tighter uppercase">Gökalp Kılıç</span>
        
        {/* Language Toggle */}
        <div className="flex items-center gap-2 bg-white/10 rounded-full p-1 backdrop-blur-md">
          <button 
            onClick={() => setLanguage('en')}
            className={cn(
              "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all",
              language === 'en' ? "bg-white text-black" : "text-white/40 hover:text-white"
            )}
          >
            EN
          </button>
          <button 
            onClick={() => setLanguage('tr')}
            className={cn(
              "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all",
              language === 'tr' ? "bg-white text-black" : "text-white/40 hover:text-white"
            )}
          >
            TR
          </button>
        </div>
      </div>
      
      <div className="hidden md:flex gap-12">
        {navItems.map((item) => (
          <a 
            key={item.name} 
            href={`#${item.name.toLowerCase()}`}
            className="font-display font-bold text-sm uppercase tracking-[0.2em] hover:opacity-50 transition-opacity"
          >
            {t(item.name, item.tr)}
          </a>
        ))}
      </div>

      <Magnetic strength={0.3}>
        <a 
          href="#contact"
          className="px-4 py-1.5 md:px-6 md:py-2 rounded-full border border-white/20 font-display font-bold text-[10px] md:text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
        >
          {t("Hire Me", "İşe Al")}
        </a>
      </Magnetic>
    </motion.nav>
  );
}
