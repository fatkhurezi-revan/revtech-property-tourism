"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
    <div className="pt-20">
      <section className="py-24 bg-muted min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Galeri Eksklusif</h1>
            <p className="text-muted-foreground">Koleksi visual resolusi tinggi dari properti dan destinasi unggulan kami.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={src}
                  alt={`Gallery Image ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
