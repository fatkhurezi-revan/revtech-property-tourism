"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Waves, Shield, MapPin } from "lucide-react";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";

const fadeUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <main className="flex flex-col w-full overflow-hidden">
      {/* Parallax Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden" aria-label="Hero Section">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0 scale-110"
        >
          <Image
            src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2560&auto=format&fit=crop"
            alt="Pemandangan Villa Mewah Tropis"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        </motion.div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.p variants={fadeUp} className="text-white/90 uppercase tracking-[0.3em] text-sm md:text-base font-medium mb-6">
              Kemewahan Berpadu dengan Alam
            </motion.p>
            
            <TextReveal 
              as="h1"
              text="Eksplorasi Keindahan Alam & Hunian Eksklusif" 
              className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-12 justify-center drop-shadow-lg" 
            />
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <MagneticButton>
                <a href="https://wa.me/6281290018819" target="_blank" rel="noopener noreferrer" aria-label="RSVP via WhatsApp" className="bg-primary/90 backdrop-blur-md text-primary-foreground px-8 py-4 rounded-full text-base font-medium transition-all duration-300 ease-in-out hover:bg-primary hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30 flex items-center w-full sm:w-auto justify-center border border-primary-light/20">
                  RSVP Sekarang
                </a>
              </MagneticButton>
              <MagneticButton>
                <Link href="/gallery" aria-label="Lihat Galeri Eksklusif" className="bg-white/10 backdrop-blur-xl text-white border border-white/30 px-8 py-4 rounded-full text-base font-medium transition-all duration-300 ease-in-out hover:bg-white/20 hover:-translate-y-1 hover:shadow-xl w-full sm:w-auto justify-center flex items-center">
                  Lihat Galeri
                </Link>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy / About Section with Sticky/Reveal */}
      <section className="py-16 md:py-24 lg:py-32 bg-background relative z-20" aria-label="Filosofi Perusahaan">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.span variants={fadeUp} className="block text-primary font-bold tracking-widest uppercase text-sm mb-4">Filosofi Kami</motion.span>
              <TextReveal as="h2" text="Harmoni Sempurna Antara Desain Modern & Alam" className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8 leading-tight" />
              
              <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-10 text-lg">
                Kami percaya bahwa hunian yang sesungguhnya bukan sekadar bangunan, melainkan tempat di mana jiwa Anda dapat bersatu kembali dengan alam. Setiap detail dirancang dengan cermat untuk memastikan kelestarian lingkungan tanpa mengorbankan kenyamanan kelas atas.
              </motion.p>
              <motion.div variants={fadeUp}>
                <MagneticButton>
                  <Link href="/about" className="inline-flex items-center text-primary font-bold hover:text-primary-dark transition-all duration-300 ease-in-out group px-4 py-2 -ml-4" aria-label="Pelajari Lebih Lanjut tentang Filosofi Kami">
                    Pelajari Lebih Lanjut 
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 ease-in-out" aria-hidden="true" />
                  </Link>
                </MagneticButton>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
              whileInView={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative h-[500px] md:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/5"
            >
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
                alt="Desain Rumah Ramah Lingkungan Modern"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Properties - Horizontal Scroll / Grid */}
      <section className="py-16 md:py-24 lg:py-32 bg-muted relative z-20" aria-label="Koleksi Eksklusif">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.span variants={fadeUp} className="block text-primary font-bold tracking-widest uppercase text-sm mb-4">Koleksi Eksklusif</motion.span>
              <TextReveal as="h2" text="Properti & Destinasi Pilihan" className="text-4xl md:text-5xl font-serif font-bold text-foreground" />
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
              <MagneticButton>
                <Link href="/gallery" className="inline-flex items-center justify-center px-8 py-4 border border-border rounded-full text-foreground transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg bg-background font-medium" aria-label="Lihat Seluruh Koleksi Properti">
                  Lihat Seluruh Koleksi
                </Link>
              </MagneticButton>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Villa Rimba Tropis", loc: "Ubud, Bali", img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop" },
              { title: "Resor Pesisir Senja", loc: "Lombok, NTB", img: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop" },
              { title: "Pondok Pinus Embun", loc: "Lembang, Bandung", img: "https://images.unsplash.com/photo-1518733057094-95b5ee1404c3?q=80&w=2070&auto=format&fit=crop" }
            ].map((item, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-50px" }}
                className="group cursor-pointer block"
              >
                <div className="relative h-[450px] rounded-[2rem] overflow-hidden mb-6 shadow-md transition-shadow duration-500 ease-in-out group-hover:shadow-2xl">
                  <Image
                    src={item.img}
                    alt={`Gambar properti ${item.title} berlokasi di ${item.loc}`}
                    fill
                    className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-500 ease-in-out group-hover:opacity-80" aria-hidden="true" />
                  
                  <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">{item.title}</h3>
                    <div className="flex items-center text-white/90">
                      <MapPin size={18} className="mr-2 shrink-0" aria-hidden="true" />
                      <span className="text-sm font-medium tracking-wide">{item.loc}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Bento Grid Amenities */}
      <section className="py-16 md:py-24 lg:py-32 bg-background relative z-20" aria-label="Fasilitas Premium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <motion.span variants={fadeUp} className="block text-primary font-bold tracking-widest uppercase text-sm mb-4">Fasilitas Premium</motion.span>
            <TextReveal as="h2" text="Kenyamanan Tanpa Kompromi" className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 justify-center" />
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed">Desain asimetris canggih yang dirancang khusus untuk memadukan fungsionalitas tingkat tinggi dan keindahan estetika tanpa batas.</motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 auto-rows-[280px]">
            {/* Bento Item 1 */}
            <motion.article 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true }}
              className="md:col-span-2 md:row-span-2 relative rounded-[2rem] overflow-hidden group shadow-sm transition-shadow duration-500 ease-in-out hover:shadow-2xl"
            >
              <Image src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop" alt="Pemandangan Private Infinity Pool" fill className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 text-white shadow-lg">
                  <Waves className="w-7 h-7" aria-hidden="true" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-white mb-3">Private Infinity Pool</h3>
                <p className="text-white/80 text-lg max-w-lg leading-relaxed">Kolam renang pribadi dengan pemandangan alam tak terhalang, dirancang seolah menyatu sempurna dengan cakrawala.</p>
              </div>
            </motion.article>

            {/* Bento Item 2 */}
            <motion.article 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} viewport={{ once: true }}
              className="bg-primary/5 rounded-[2rem] p-8 lg:p-10 border border-primary/10 flex flex-col justify-between group transition-all duration-500 ease-in-out hover:bg-primary/10 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary transition-transform duration-500 group-hover:scale-110">
                <Leaf className="w-7 h-7" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">100% Eco-Friendly</h3>
                <p className="text-muted-foreground leading-relaxed">Material bangunan berkelanjutan, ventilasi alami, dan sistem tenaga surya terpadu.</p>
              </div>
            </motion.article>

            {/* Bento Item 3 */}
            <motion.article 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }} viewport={{ once: true }}
              className="bg-card rounded-[2rem] p-8 lg:p-10 border border-border flex flex-col justify-between transition-all duration-500 ease-in-out hover:-translate-y-1 hover:shadow-xl shadow-sm"
            >
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center text-secondary transition-transform duration-500 group-hover:scale-110">
                <Shield className="w-7 h-7" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Privasi & Keamanan</h3>
                <p className="text-muted-foreground leading-relaxed">Akses eksklusif, sistem pintar (smart home), dan keamanan terpadu 24 jam penuh.</p>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Advanced CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden z-20" aria-label="Call to Action">
        <motion.div 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop"
            alt="Latar belakang alam yang asri"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary-900/85 mix-blend-multiply" aria-hidden="true" />
        </motion.div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="bg-black/20 backdrop-blur-2xl p-10 md:p-16 lg:p-20 rounded-[3rem] border border-white/10 shadow-2xl"
          >
            <TextReveal as="h2" text="Siap Untuk Pengalaman yang Berbeda?" className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 justify-center" />
            
            <motion.p variants={fadeUp} className="text-white/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Jadwalkan kunjungan privat Anda hari ini dan rasakan sendiri kemewahan yang menyatu harmonis dengan alam. Tim ahli kami siap melayani Anda secara personal.
            </motion.p>
            <motion.div variants={fadeUp}>
              <MagneticButton>
                <a href="https://wa.me/6281290018819" target="_blank" rel="noopener noreferrer" aria-label="Jadwalkan Kunjungan via WhatsApp" className="inline-flex items-center bg-secondary text-secondary-foreground px-8 py-5 rounded-full text-lg font-bold transition-all duration-300 ease-in-out hover:bg-secondary-dark hover:-translate-y-1 hover:shadow-xl hover:shadow-secondary/30">
                  RSVP via WhatsApp Sekarang
                  <ArrowRight className="ml-3 w-5 h-5" aria-hidden="true" />
                </a>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
