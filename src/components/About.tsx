import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "../lib/utils";
import { AnimatedHeading } from "./AnimatedHeading";
import { useLanguage } from "../context/LanguageContext";

const EXPERIENCE = [
  {
    company: "Freelance",
    role: { en: "Architect & 3D Modeler", tr: "Mimar & 3D Modelleme Uzmanı" },
    period: "2022 - Present",
    desc: { 
      en: "Architecture, Architectural Visualization & 3D Modeler.",
      tr: "Mimarlık, Mimari Görselleştirme ve 3D Modelleme."
    }
  },
  {
    company: "Tint Mimarlık",
    role: { en: "Architect", tr: "Mimar" },
    period: "2021 - 2022",
    desc: {
      en: "Participated in office projects as architect. I was responsible of designing of 12 villa/office/residential project as head designer and made renders. also was in many different projects such as office buildings, mall projects, residance projects, goverment projects etc..",
      tr: "Ofis projelerinde mimar olarak görev aldım. Baş tasarımcı olarak 12 villa/ofis/konut projesinin tasarımından ve renderlarından sorumluydum. Ayrıca ofis binaları, AVM projeleri, rezidans projeleri ve kamu projeleri gibi birçok farklı projede yer aldım."
    }
  },
  {
    company: "Selda Gümüşdoğrayan Mimarlık",
    role: { en: "Architect", tr: "Mimar" },
    period: "2020 - 2021",
    desc: {
      en: "Participated in City Hospital Projects such as Samsun Sehir Hastanesi, Ordu Sehir Hastanesi, Denizli Sehir Hastanesi, Kocaeli Sehir Hastanesi, kindergarden project etc.. I was also responsible from visualization of projects and presentations.",
      tr: "Samsun Şehir Hastanesi, Ordu Şehir Hastanesi, Denizli Şehir Hastanesi, Kocaeli Şehir Hastanesi ve anaokulu projesi gibi Şehir Hastanesi projelerinde yer aldım. Ayrıca projelerin görselleştirilmesinden ve sunumlarından sorumluydum."
    }
  },
  {
    company: "Bek Proje",
    role: { en: "Architect", tr: "Mimar" },
    period: "2017 - 2018",
    desc: {
      en: "Participated in office projects as architect on government projects.",
      tr: "Kamu projelerinde mimar olarak ofis projelerinde yer aldım."
    }
  },
  {
    company: "Rönesans Holding",
    role: { en: "Intern Architect", tr: "Stajyer Mimar" },
    period: "2015",
    desc: {
      en: "Participated in office projects as intern architect. Gained experience of Hospitality Architecture.",
      tr: "Stajyer mimar olarak ofis projelerinde yer aldım. Konaklama mimarisi konusunda deneyim kazandım."
    }
  }
];

const SKILLS = [
  "Blender", "Autocad", "Adobe Photoshop", "Sketchup", "Lumion", "Twinmotion", "3D Max", "Adobe Illustrator", "Figma"
];

export function About() {
  const { t, language } = useLanguage();
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={container} id="about" className="py-20 md:py-40 px-6 md:px-10 max-w-[90rem] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left: Bio */}
        <div>
          <motion.h2 
            style={{ y }}
            className={cn(
              "font-display font-bold leading-none uppercase tracking-[-0.06em] mb-6",
              "text-[12vw] md:text-[8vw]"
            )}
          >
            {language === 'en' ? (
              <div className="flex flex-col -space-y-[2vw]">
                <span className="leading-none">About</span>
                <span className="leading-none">Me</span>
              </div>
            ) : (
              "Hakkımda"
            )}
          </motion.h2>
          <div className="space-y-8 font-sans font-light text-lg md:text-xl text-white/60 leading-relaxed">
            <div className="space-y-2">
              <h3 className="text-white font-display font-bold text-2xl uppercase tracking-tighter">Gökalp Kılıç</h3>
              <p className="text-accent-cyan font-display font-bold text-sm uppercase tracking-widest">
                {t("Architect & 3D Artist", "Mimar & 3D Sanatçısı")}
              </p>
            </div>
            <p>
              {t(
                "I graduated from the Architecture Department of Çankaya University in 2016. Following internships at İzka İnşaat and Rönesans Holding, I worked as an architect at Bek Proje, Selda Gümüşdoğrayan Architecture, and Tint Architecture, focusing on design, modeling, and visualization. My project experience ranges from individual villa designs to large-scale public developments, such as city hospitals.",
                "2016 yılında Çankaya Üniversitesi Mimarlık Bölümü'nden mezun oldum. İzka İnşaat ve Rönesans Holding'deki stajlarımın ardından Bek Proje, Selda Gümüşdoğrayan Mimarlık ve Tint Mimarlık'ta mimar olarak çalıştım; tasarım, modelleme ve görselleştirme konularına odaklandım. Proje deneyimim, bireysel villa tasarımlarından şehir hastaneleri gibi büyük ölçekli kamu projelerine kadar uzanmaktadır."
              )}
            </p>
            
            <div className="space-y-4">
              <h4 className="text-white font-display font-bold text-lg uppercase tracking-tighter">
                {t("Technical Skills & 3D Modeling", "Teknik Yetenekler & 3D Modelleme")}
              </h4>
              <p>
                {t(
                  "I specialize in 3D modeling and visualization, primarily utilizing Blender. My work spans two distinct areas:",
                  "Blender kullanarak 3D modelleme ve görselleştirme konularında uzmanlaştım. Çalışmalarım iki farklı alanı kapsamaktadır:"
                )}
              </p>
              <ul className="space-y-4 list-none">
                <li>
                  <span className="text-white font-bold">{t("Architectural:", "Mimari:")}</span> {t("Developing high-fidelity, technically accurate models and photorealistic renderings from the design phase onward.", "Tasarım aşamasından itibaren yüksek doğrulukta, teknik olarak hatasız modeller ve fotogerçekçi renderlar geliştirme.")}
                </li>
                <li>
                  <span className="text-white font-bold">{t("Game & Character Art:", "Oyun & Karakter Sanatı:")}</span> {t("Producing optimized, game-ready assets and stylized models with a specific character-driven aesthetic.", "Belirli bir karakter odaklı estetiğe sahip, optimize edilmiş, oyuna hazır varlıklar ve stilize modeller üretme.")}
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-display font-bold text-lg uppercase tracking-tighter">
                {t("User Experience (UX)", "Kullanıcı Deneyimi (UX)")}
              </h4>
              <p>
                {t(
                  "To enhance my design workflow beyond aesthetics, I hold a Google UX Design Professional Certificate. This allows me to integrate user experience principles into both architectural and digital design, combining aesthetic sensibility with a solution-oriented approach.",
                  "Tasarım sürecimi estetiğin ötesine taşımak için Google UX Tasarım Profesyonel Sertifikası'na sahibim. Bu, kullanıcı deneyimi ilkelerini hem mimari hem de dijital tasarıma entegre etmemi sağlayarak estetik duyarlılığı çözüm odaklı bir yaklaşımla birleştirmeme olanak tanıyor."
                )}
              </p>
            </div>
          </div>

          <div className="mt-20">
            <h3 className="font-display font-bold text-xs uppercase tracking-[0.2em] mb-10 text-white/40">
              {t("Core Skills", "Temel Yetenekler")}
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
            {t("Experience", "Deneyim")}
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
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div className="max-w-md">
                    <AnimatedHeading 
                      text={exp.company} 
                      className="text-3xl md:text-4xl uppercase tracking-tighter group-hover:text-accent-cyan transition-colors"
                    />
                  </div>
                  <span className="font-display font-bold text-xs uppercase tracking-widest text-white/40 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <p className="font-display font-bold text-sm uppercase tracking-widest mb-4 text-white/80">
                  {t(exp.role.en, exp.role.tr)}
                </p>
                <p className="font-sans font-light text-lg text-white/40 max-w-lg">
                  {t(exp.desc.en, exp.desc.tr)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
