"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Waves, Shield, MapPin } from "lucide-react";

const fadeUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2560&auto=format&fit=crop"
            alt="Luxury Villa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.p variants={fadeUp} className="text-white/80 uppercase tracking-[0.3em] text-sm md:text-base font-medium mb-6">
              Kemewahan Berpadu dengan Alam
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-8">
              Eksplorasi Keindahan Alam & Hunian Eksklusif
            </motion.h1>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/6281290018819" target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-medium hover:bg-primary-dark transition-colors duration-300 shadow-lg flex items-center w-full sm:w-auto justify-center">
                RSVP Sekarang
              </a>
              <Link href="/gallery" className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full text-base font-medium hover:bg-white/20 transition-colors duration-300 w-full sm:w-auto justify-center flex items-center">
                Lihat Galeri
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy / About Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeUp} className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Filosofi Kami</motion.h2>
              <motion.h3 variants={fadeUp} className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
                Harmoni Sempurna Antara Desain Modern & Alam
              </motion.h3>
              <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-8 text-lg">
                Kami percaya bahwa hunian yang sesungguhnya bukan sekadar bangunan, melainkan tempat di mana jiwa Anda dapat bersatu kembali dengan alam. Setiap detail dirancang dengan cermat untuk memastikan kelestarian lingkungan tanpa mengorbankan kenyamanan kelas atas.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link href="/about" className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors group">
                  Pelajari Lebih Lanjut 
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative h-[600px] rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
                alt="Modern Eco Home"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Properties/Destinations */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Koleksi Eksklusif</motion.h2>
            <motion.h3 variants={fadeUp} className="text-4xl font-serif font-bold text-foreground">Properti & Destinasi Pilihan</motion.h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Villa Rimba Tropis", loc: "Ubud, Bali", img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop" },
              { title: "Resor Pesisir Senja", loc: "Lombok, NTB", img: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop" },
              { title: "Pondok Pinus Embun", loc: "Lembang, Bandung", img: "https://images.unsplash.com/photo-1518733057094-95b5ee1404c3?q=80&w=2070&auto=format&fit=crop" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                className="group cursor-pointer"
              >
                <div className="relative h-96 rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h4 className="text-xl font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                <div className="flex items-center text-muted-foreground">
                  <MapPin size={16} className="mr-2" />
                  <span className="text-sm">{item.loc}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link href="/gallery" className="inline-flex items-center justify-center px-8 py-3 border border-border rounded-full text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
              Lihat Seluruh Koleksi
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Amenities / Facilities */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeUp} className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Fasilitas Premium</motion.h2>
              <motion.h3 variants={fadeUp} className="text-4xl font-serif font-bold text-foreground mb-8">Kenyamanan Tanpa Kompromi</motion.h3>
              
              <div className="space-y-8 mt-12">
                {[
                  { icon: <Leaf className="w-6 h-6 text-primary" />, title: "100% Eco-Friendly", desc: "Material bangunan berkelanjutan dan sistem energi terbarukan." },
                  { icon: <Waves className="w-6 h-6 text-primary" />, title: "Private Infinity Pool", desc: "Kolam renang pribadi dengan pemandangan alam yang tak terhalang." },
                  { icon: <Shield className="w-6 h-6 text-primary" />, title: "Privasi & Keamanan 24/7", desc: "Sistem keamanan pintar terpadu untuk ketenangan pikiran Anda." }
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeUp} className="flex gap-6">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">{item.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative h-full min-h-[500px] rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop"
                alt="Luxury Amenities"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop"
            alt="Nature Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary-900/80 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Siap Untuk Pengalaman yang Berbeda?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Jadwalkan kunjungan privat Anda hari ini dan rasakan sendiri kemewahan yang menyatu dengan alam. Tim kami siap melayani Anda.
            </motion.p>
            <motion.div variants={fadeUp}>
              <a href="https://wa.me/6281290018819" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-secondary text-secondary-foreground px-8 py-4 rounded-full text-lg font-medium hover:bg-secondary-dark transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                RSVP via WhatsApp Sekarang
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
