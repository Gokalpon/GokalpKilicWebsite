import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";
import { AnimatedHeading } from "./AnimatedHeading";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const PROJECTS = [
  {
    id: 1,
    title: { en: "Residence Concept Design (Day)", tr: "Rezidans Konsept Tasarımı (Gündüz)" },
    category: { en: "Architectural Visualization", tr: "Mimari Görselleştirme" },
    image: "/images/gokalp-kilic-res02-r0.jpg",
    featured: true,
    description: {
      en: "A high-fidelity architectural visualization project focusing on modern residence concepts. The design emphasizes verticality, parametric forms, and urban integration in daylight conditions.",
      tr: "Modern rezidans konseptlerine odaklanan yüksek doğrulukta bir mimari görselleştirme projesi. Tasarım, gün ışığı koşullarında dikeyliği, parametrik formları ve kentsel entegrasyonu vurgular."
    },
    gallery: [
      "/images/gokalp-kilic-res02-r0.jpg",
      "/images/gokalp-kilic-res02-r1.jpg",
      "/images/gokalp-kilic-res02-r2.jpg",
      "/images/gokalp-kilic-res02-r3.jpg",
      "/images/gokalp-kilic-res02-r5.jpg",
      "/images/gokalp-kilic-res02-r6.jpg",
      "/images/gokalp-kilic-res02-r7.jpg",
      "/images/gokalp-kilic-res02-r8.jpg"
    ]
  },
  {
    id: 2,
    title: { en: "Residence Concept Design (Night)", tr: "Rezidans Konsept Tasarımı (Gece)" },
    category: { en: "Architectural Visualization", tr: "Mimari Görselleştirme" },
    image: "/images/gokalp-kilic-res02-rn0.jpg",
    featured: false,
    description: {
      en: "The night version of the residence concept design, showcasing the building's artificial lighting and its atmospheric presence in the urban nightscape.",
      tr: "Rezidans konsept tasarımının gece versiyonu, binanın yapay aydınlatmasını ve kentsel gece manzarasındaki atmosferik varlığını sergiliyor."
    },
    gallery: [
      "/images/gokalp-kilic-res02-rn0.jpg",
      "/images/gokalp-kilic-res02-rn1.jpg",
      "/images/gokalp-kilic-res02-rn2.jpg",
      "/images/gokalp-kilic-res02-rn3.jpg",
      "/images/gokalp-kilic-res02-rn4.jpg",
      "/images/gokalp-kilic-res02-rn6.jpg",
      "/images/gokalp-kilic-res02-rn-int1.jpg",
      "/images/gokalp-kilic-res02-rn-int2.jpg"
    ]
  },
  {
    id: 4,
    title: { en: "Beytepe Living Room (Night)", tr: "Beytepe Oturma Odası (Gece)" },
    category: { en: "Interior Design", tr: "İç Mekan Tasarımı" },
    image: "/images/gokalp-kilic-night-interior-1.jpg",
    featured: false,
    description: {
      en: "The night version of the Beytepe living room project, focusing on the warm interior lighting and the cozy atmosphere created by artificial light sources.",
      tr: "Beytepe oturma odası projesinin gece versiyonu, sıcak iç aydınlatmaya ve yapay ışık kaynaklarının yarattığı samimi atmosfere odaklanıyor."
    },
    gallery: [
      "/images/gokalp-kilic-night-interior-1.jpg",
      "/images/gokalp-kilic-night-interior-2.jpg",
      "/images/gokalp-kilic-night-interior-3.jpg",
      "/images/gokalp-kilic-night-interior-4.jpg",
      "/images/gokalp-kilic-night-interior-close-1.jpg",
      "/images/gokalp-kilic-night-interior-close-2.jpg",
      "/images/gokalp-kilic-night-interior-close-3.jpg",
      "/images/gokalp-kilic-night-interior-close-4.jpg"
    ]
  },
  {
    id: 5,
    title: { en: "Concept Villa Collection", tr: "Konsept Villa Koleksiyonu" },
    category: { en: "Architectural Visualization", tr: "Mimari Görselleştirme" },
    image: "/images/gokalp-kilic-c-23-foto.jpg",
    featured: false,
    description: {
      en: "A collection of modern villa concepts exploring different architectural styles and natural settings. Each design focuses on unique geometry and material harmony.",
      tr: "Farklı mimari stilleri ve doğal ortamları araştıran modern villa konseptlerinden oluşan bir koleksiyon. Her tasarım benzersiz geometriye ve malzeme uyumuna odaklanır."
    },
    gallery: [
      "/images/gokalp-kilic-c-19-photo.jpg",
      "/images/gokalp-kilic-c-23-foto.jpg",
      "/images/gokalp-kilic-c-27-foto.jpg",
      "/images/gokalp-kilic-c-32-foto.jpg",
      "/images/gokalp-kilic-c-33-foto.jpg"
    ]
  },
  {
    id: 6,
    title: { en: "Vintage Aircraft Model", tr: "Antika Uçak Modeli" },
    category: { en: "3D Modeling", tr: "3D Modelleme" },
    image: "/images/gokalp-kilic-plan-e-render-a1.jpg",
    featured: false,
    description: {
      en: "A detailed 3D model of a vintage aircraft, focused on technical accuracy and realistic material representation for real-time applications.",
      tr: "Teknik doğruluk ve gerçek zamanlı uygulamalar için gerçekçi malzeme temsiline odaklanan, antika bir uçağın detaylı 3D modeli."
    },
    gallery: [
      "/images/gokalp-kilic-plan-e-render-a1.jpg",
      "/images/gokalp-kilic-plan-e-render-a2.jpg",
      "/images/gokalp-kilic-plan-e-render-a3.jpg"
    ]
  },
  {
    id: 7,
    title: { en: "Digital Portrait Gallery", tr: "Dijital Portre Galerisi" },
    category: { en: "Digital Art", tr: "Dijital Sanat" },
    image: "/images/gokalp-kilic-logan-hugh-jackman-drawing-by-gokalpon-by-gokalpon.jpg",
    featured: false,
    description: {
      en: "A series of digital portraits and character studies, showcasing detailed sketching and shading techniques to capture the essence of iconic characters.",
      tr: "İkonik karakterlerin özünü yakalamak için detaylı eskiz ve gölgeleme tekniklerini sergileyen bir dizi dijital portre ve karakter çalışması."
    },
    gallery: [
      "/images/gokalp-kilic-logan-hugh-jackman-drawing-by-gokalpon-by-gokalpon.jpg",
      "/images/gokalp-kilic-laurie.jpg",
      "/images/gokalp-kilic-leonardo-dicaprio-by-gokalpon.jpg",
      "/images/gokalp-kilic-drawing-mandalorian.jpg",
      "/images/gokalp-kilic-drawing-wine.jpg"
    ]
  },
  {
    id: 8,
    title: { en: "Product Visualization", tr: "Ürün Görselleştirme" },
    category: { en: "3D Rendering", tr: "3D Görselleştirme" },
    image: "/images/gokalp-kilic-coffee-cup-glass-4.jpg",
    featured: false,
    description: {
      en: "High-quality product renders focusing on material realism, lighting, and composition for commercial and conceptual designs.",
      tr: "Ticari ve konsept tasarımlar için malzeme gerçekçiliği, aydınlatma ve kompozisyona odaklanan yüksek kaliteli ürün renderları."
    },
    gallery: [
      "/images/gokalp-kilic-coffee-cup-glass-4.jpg",
      "/images/gokalp-kilic-coffee-cup-try-3.jpg",
      "/images/gokalp-kilic-bloque-yoga-render.jpg",
      "/images/gokalp-kilic-closet-render-try-5.jpg"
    ]
  },
  {
    id: 9,
    title: { en: "Lighting & Material Studies", tr: "Aydınlatma ve Malzeme Çalışmaları" },
    category: { en: "3D Art", tr: "3D Sanat" },
    image: "/images/gokalp-kilic-light-cylinder-angle-4.jpg",
    featured: false,
    description: {
      en: "Experimental renders exploring complex lighting setups and organic material properties, including sand and glass simulations.",
      tr: "Kum ve cam simülasyonları dahil olmak üzere karmaşık aydınlatma kurulumlarını ve organik malzeme özelliklerini araştıran deneysel renderlar."
    },
    gallery: [
      "/images/gokalp-kilic-light-cylinder-angle-4.jpg",
      "/images/gokalp-kilic-light-cylinder-angle5.jpg",
      "/images/gokalp-kilic-light-cylinder-try9.jpg",
      "/images/gokalp-kilic-sand-bowl-try7.jpg",
      "/images/gokalp-kilic-sand-bowl-try8.jpg"
    ]
  },
  {
    id: 10,
    title: { en: "Architectural Renders", tr: "Mimari Renderlar" },
    category: { en: "Architectural Visualization", tr: "Mimari Görselleştirme" },
    image: "/images/gokalp-kilic-render-1.jpg",
    featured: false,
    description: {
      en: "A collection of various architectural renders showcasing different environments, lighting conditions, and structural concepts.",
      tr: "Farklı ortamları, aydınlatma koşullarını ve yapısal konseptleri sergileyen çeşitli mimari renderlardan oluşan bir koleksiyon."
    },
    gallery: [
      "/images/gokalp-kilic-render-1.jpg",
      "/images/gokalp-kilic-render-2.jpg",
      "/images/gokalp-kilic-render-3.jpg",
      "/images/gokalp-kilic-render-4.jpg",
      "/images/gokalp-kilic-render-5.jpg",
      "/images/gokalp-kilic-render-try-2.jpg"
    ]
  }
];

interface ProjectGridProps {
  limit?: number;
  onShowAll?: () => void;
}

export function ProjectGrid({ limit, onShowAll }: ProjectGridProps) {
  const { t, language } = useLanguage();
  const container = useRef(null);
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const displayedProjects = limit ? PROJECTS.slice(0, limit) : PROJECTS;

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
          className={cn(
            "font-display font-bold leading-[0.8] uppercase tracking-tighter mb-10",
            language === 'en' ? "text-[15vw] md:text-[10vw]" : "text-[12vw] md:text-[8vw]"
          )}
        >
          {language === 'en' ? (
            <>Case <br /> Studies</>
          ) : (
            "Projeler"
          )}
        </motion.h2>
        <div className="h-px w-full bg-white/10" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {displayedProjects.map((project) => (
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

      {limit && PROJECTS.length > limit && (
        <div className="mt-20 flex justify-center">
          <button 
            onClick={onShowAll}
            className="px-12 py-6 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-500 font-display font-bold uppercase tracking-[0.3em] text-xs"
          >
            {t("More", "Daha Fazla")}
          </button>
        </div>
      )}

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
