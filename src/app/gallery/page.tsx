"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TextReveal from "@/components/ui/TextReveal";

const images = [
  "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2560&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518733057094-95b5ee1404c3?q=80&w=2070&auto=format&fit=crop"
];

export default function Gallery() {
  return (
    <main className="pt-20" aria-label="Halaman Galeri">
      <section className="py-16 md:py-24 lg:py-32 bg-muted min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-16 md:mb-24 max-w-2xl mx-auto"
          >
            <TextReveal as="h1" text="Galeri Eksklusif" className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 justify-center" />
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">Koleksi visual resolusi tinggi dari properti dan destinasi unggulan kami yang dirancang dengan estetika tanpa batas.</p>
          </motion.header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" aria-label="Kumpulan Foto Properti dan Pariwisata">
            {images.map((src, idx) => (
              <motion.figure
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative h-72 sm:h-80 md:h-[400px] rounded-[2rem] overflow-hidden group cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl shadow-sm"
              >
                <Image
                  src={src}
                  alt={`Koleksi Properti Premium ke-${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" aria-hidden="true" />
              </motion.figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
