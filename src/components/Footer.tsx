import { motion } from "motion/react";
import { cn } from "../lib/utils";
import { Magnetic } from "./Magnetic";
import { useLanguage } from "../context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="py-20 md:py-40 px-6 md:px-10 border-t border-white/10">
      <div className="max-w-[90rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-40">
          <div>
            <h2 className="font-display font-bold text-[15vw] md:text-[10vw] leading-[0.8] uppercase tracking-tighter mb-10">
              Gökalp <br /> Kılıç
            </h2>
            <p className="font-display font-bold text-sm uppercase tracking-[0.2em] text-white/40 max-w-sm whitespace-pre-line">
              {t(
                "Architect\n3D Artist\nProfessional 3D Visualization",
                "Mimar\n3D Sanatçısı\nProfesyonel 3D Görselleştirme"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-20">
            <div>
              <h3 className="font-display font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mb-6 md:mb-10 text-white/40">
                {t("Socials", "Sosyal Medya")}
              </h3>
              <ul className="space-y-4">
                {[
                  { name: "ArtStation", url: "https://gokalpon.artstation.com/" },
                  { name: "LinkedIn", url: "https://tr.linkedin.com/in/gokalpkilic" },
                  { name: "Instagram", url: "https://www.instagram.com/gokalpon/" }
                ].map((item) => (
                  <li key={item.name}>
                    <Magnetic strength={0.2}>
                      <a 
                        href={item.url} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display font-bold text-xs md:text-sm uppercase tracking-widest hover:text-accent-cyan transition-colors inline-block"
                      >
                        {item.name}
                      </a>
                    </Magnetic>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mb-6 md:mb-10 text-white/40">
                {t("Contact", "İletişim")}
              </h3>
              <ul className="space-y-4">
                <li>
                  <Magnetic strength={0.2}>
                    <a 
                      href="mailto:gokalpon@gmail.com" 
                      className="font-display font-bold text-[10px] md:text-sm uppercase tracking-widest hover:text-accent-cyan transition-colors inline-block break-all"
                    >
                      gokalpon@gmail.com
                    </a>
                  </Magnetic>
                </li>
                <li>
                  <span className="font-display font-bold text-[10px] md:text-sm uppercase tracking-widest text-white/40">
                    {t("Ankara, Turkey", "Ankara, Türkiye")}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-20 border-t border-white/5">
          <span className="font-display font-bold text-[10px] uppercase tracking-[0.3em] text-white/20">
            © 2026 Gökalp Kılıç. {t("All Rights Reserved.", "Tüm Hakları Saklıdır.")}
          </span>
          <div className="flex gap-10">
            <a href="#" className="font-display font-bold text-[10px] uppercase tracking-[0.3em] text-white/20 hover:text-white transition-colors">
              {t("Privacy Policy", "Gizlilik Politikası")}
            </a>
            <a href="#" className="font-display font-bold text-[10px] uppercase tracking-[0.3em] text-white/20 hover:text-white transition-colors">
              {t("Terms of Service", "Kullanım Şartları")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
