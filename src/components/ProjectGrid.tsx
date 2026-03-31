import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";
import { AnimatedHeading } from "./AnimatedHeading";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const PROJECTS = [
  {
    id: 1,
    title: { en: "Luxury Living Interior", tr: "Lüks Yaşam İç Mekan" },
    category: { en: "Interior Design", tr: "İç Mekan Tasarımı" },
    image: "/images/gokalp-kilic-day-interior-1.jpg",
    featured: true,
    description: {
      en: "A high-fidelity architectural visualization project focusing on modern luxury interiors. The design emphasizes open spaces, natural lighting, and premium materials to create a sophisticated living environment.",
      tr: "Modern lüks iç mekanlara odaklanan yüksek doğrulukta bir mimari görselleştirme projesi. Tasarım, sofistike bir yaşam ortamı yaratmak için açık alanları, doğal aydınlatmayı ve birinci sınıf malzemeleri vurgular."
    },
    gallery: [
      "/images/gokalp-kilic-day-interior-1.jpg",
      "/images/gokalp-kilic-day-interior-2.jpg",
      "/images/gokalp-kilic-day-interior-3.jpg",
      "/images/gokalp-kilic-day-interior-4.jpg"
    ]
  },
  {
    id: 2,
    title: { en: "Modern Night Villa", tr: "Modern Gece Villası" },
    category: { en: "Architectural Visualization", tr: "Mimari Görselleştirme" },
    image: "/images/gokalp-kilic-c-23-foto.jpg",
    featured: false,
    description: {
      en: "An exploration of lighting and atmosphere in a residential context. This project showcases a modern villa design under night-time conditions, highlighting the interplay between artificial light and architectural forms.",
      tr: "Konut bağlamında aydınlatma ve atmosferin keşfi. Bu proje, yapay ışık ve mimari formlar arasındaki etkileşimi vurgulayarak, gece koşullarında modern bir villa tasarımını sergiliyor."
    },
    gallery: [
      "/images/gokalp-kilic-c-23-foto.jpg",
      "/images/gokalp-kilic-c-23-foto-2.jpg",
      "/images/gokalp-kilic-c-23-foto-3.jpg"
    ]
  },
  {
    id: 3,
    title: { en: "High-rise Concept", tr: "Gökdelen Konsepti" },
    category: { en: "3D Modeling", tr: "3D Modelleme" },
    image: "/images/gokalp-kilic-res02-r0.jpg",
    featured: false,
    description: {
      en: "A conceptual high-rise building designed with a focus on parametric forms and urban integration. The project explores verticality and the use of glass and steel in contemporary skyscraper design.",
      tr: "Parametrik formlara ve kentsel entegrasyona odaklanarak tasarlanmış kavramsal bir gökdelen binası. Proje, çağdaş gökdelen tasarımında dikeyliği ve cam ile çelik kullanımını araştırıyor."
    },
    gallery: [
      "/images/gokalp-kilic-res02-r0.jpg",
      "/images/gokalp-kilic-res02-r1.jpg",
      "/images/gokalp-kilic-res02-r2.jpg"
    ]
  },
  {
    id: 4,
    title: { en: "Urban Residential Complex", tr: "Kentsel Konut Kompleksi" },
    category: { en: "3D Modeling", tr: "3D Modelleme" },
    image: "/images/gokalp-kilic-res02-r6.jpg",
    featured: false,
    description: {
      en: "A large-scale residential development project. The focus was on creating a cohesive urban fabric while providing diverse living spaces and communal areas for a vibrant community.",
      tr: "Büyük ölçekli bir konut geliştirme projesi. Odak noktası, canlı bir topluluk için çeşitli yaşam alanları ve ortak alanlar sağlarken uyumlu bir kentsel doku oluşturmaktı."
    },
    gallery: [
      "/images/gokalp-kilic-res02-r6.jpg",
      "/images/gokalp-kilic-res02-r7.jpg",
      "/images/gokalp-kilic-res02-r8.jpg"
    ]
  },
  {
    id: 5,
    title: { en: "Product Design: Sand Bowl", tr: "Ürün Tasarımı: Kum Kasesi" },
    category: { en: "3D Rendering", tr: "3D Render" },
    image: "/images/gokalp-kilic-sand-bowl-try8.jpg",
    featured: false,
    description: {
      en: "A stylized product design and rendering project. The 'Sand Bowl' explores organic textures and procedural material creation in Blender, resulting in a unique aesthetic piece.",
      tr: "Stilize bir ürün tasarımı ve render projesi. 'Kum Kasesi', Blender'da organik dokuları ve prosedürel malzeme oluşturmayı keşfederek benzersiz bir estetik parça ortaya çıkarıyor."
    },
    gallery: [
      "/images/gokalp-kilic-sand-bowl-try8.jpg",
      "/images/gokalp-kilic-sand-bowl-try9.jpg"
    ]
  },
  {
    id: 6,
    title: { en: "Concept Plane", tr: "Konsept Uçak" },
    category: { en: "3D Modeling", tr: "3D Modelleme" },
    image: "/images/gokalp-kilic-plane-render-a1.jpg",
    featured: false,
    description: {
      en: "A game-ready stylized aircraft model. This project demonstrates optimized 3D modeling workflows, focusing on silhouette, character, and efficient UV mapping for real-time applications.",
      tr: "Oyuna hazır stilize bir uçak modeli. Bu proje, gerçek zamanlı uygulamalar için siluet, karakter ve verimli UV haritalamaya odaklanan optimize edilmiş 3D modelleme iş akışlarını göstermektedir."
    },
    gallery: [
      "/images/gokalp-kilic-plane-render-a1.jpg",
      "/images/gokalp-kilic-plane-render-a2.jpg"
    ]
  }
];

export function ProjectGrid() {
  const { t } = useLanguage();
  const container = useRef(null);
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  const nextImage = () => {
    if (!selectedProject) return;
    setActiveImageIndex((prev) => (prev + 1) % selectedProject.gallery.length);
  };

  const prevImage = () => {
    if (!selectedProject) return;
    setActiveImageIndex((prev) => (prev - 1 + selectedProject.gallery.length) % selectedProject.gallery.length);
  };

  return (
    <section ref={container} id="projects" className="py-20 md:py-40 px-6 md:px-10 max-w-[90rem] mx-auto">
      <div className="mb-20">
        <motion.h2 
          style={{ y }}
          className="font-display font-bold text-[15vw] md:text-[10vw] leading-[0.8] uppercase tracking-tighter mb-10"
        >
          {t("Case", "Vaka")} <br /> {t("Studies", "Çalışmaları")}
        </motion.h2>
        <div className="h-px w-full bg-white/10" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {PROJECTS.map((project) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={() => {
              setSelectedProject(project);
              setActiveImageIndex(0);
            }}
            className={cn(
              "group relative overflow-hidden border border-white/10 rounded-[32px] cursor-pointer",
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
              alt={t(project.title.en, project.title.tr)}
              className="absolute inset-0 w-full h-full object-cover opacity-70 saturate-50 group-hover:opacity-20 group-hover:saturate-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-5 md:p-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 z-30">
              <span className="font-display font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] text-gradient mb-2 block">
                {t(project.category.en, project.category.tr)}
              </span>
              <div className="max-w-full">
                <AnimatedHeading 
                  text={t(project.title.en, project.title.tr)} 
                  className="text-xl md:text-4xl uppercase tracking-tighter leading-[1.1]"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ y: 100, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 100, opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-6xl h-full max-h-[90vh] bg-black border border-white/10 rounded-[40px] overflow-hidden flex flex-col"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                <X size={24} />
              </button>

              {/* Modal Content Scrollable Area */}
              <div className="flex-1 overflow-y-auto custom-scrollbar">
                {/* Carousel Section */}
                <div className="relative aspect-video w-full group">
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={activeImageIndex}
                      src={selectedProject.gallery[activeImageIndex]}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </AnimatePresence>
                  
                  {/* Carousel Controls */}
                  <div className="absolute inset-0 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button onClick={prevImage} className="p-4 rounded-full bg-black/50 border border-white/10 text-white hover:bg-white hover:text-black transition-all">
                      <ChevronLeft size={24} />
                    </button>
                    <button onClick={nextImage} className="p-4 rounded-full bg-black/50 border border-white/10 text-white hover:bg-white hover:text-black transition-all">
                      <ChevronRight size={24} />
                    </button>
                  </div>

                  {/* Carousel Indicators */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                    {selectedProject.gallery.map((_, i) => (
                      <div 
                        key={i}
                        className={cn(
                          "w-2 h-2 rounded-full transition-all duration-300",
                          i === activeImageIndex ? "bg-white w-6" : "bg-white/20"
                        )}
                      />
                    ))}
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-8 md:p-16 space-y-12">
                  <div className="space-y-4">
                    <span className="font-display font-bold text-xs uppercase tracking-[0.3em] text-accent-cyan">
                      {t(selectedProject.category.en, selectedProject.category.tr)}
                    </span>
                    <h2 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-tighter">
                      {t(selectedProject.title.en, selectedProject.title.tr)}
                    </h2>
                  </div>

                  <p className="font-sans font-light text-xl text-white/60 leading-relaxed max-w-3xl">
                    {t(selectedProject.description.en, selectedProject.description.tr)}
                  </p>

                  {/* Gallery Grid */}
                  <div className="space-y-8">
                    <h3 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-white/40">
                      {t("Project Renders", "Proje Renderları")}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {selectedProject.gallery.map((img, i) => (
                        <motion.div 
                          key={i}
                          whileHover={{ scale: 1.02 }}
                          className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group cursor-zoom-in"
                          onClick={() => setLightboxImage(img)}
                        >
                          <img 
                            src={img} 
                            alt={`${t(selectedProject.title.en, selectedProject.title.tr)} render ${i + 1}`}
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                            <Maximize2 className="text-white" size={32} />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-20 bg-black/95 cursor-zoom-out"
          >
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightboxImage}
              className="max-w-full max-h-full object-contain rounded-lg"
              referrerPolicy="no-referrer"
            />
            <button 
              className="absolute top-10 right-10 p-4 text-white/40 hover:text-white transition-colors"
              onClick={() => setLightboxImage(null)}
            >
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
