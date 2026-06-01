"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Tentang Kami</h1>
            <p className="text-lg text-muted-foreground">Kami adalah agensi properti dan wisata yang berdedikasi untuk menciptakan pengalaman eksklusif bagi Anda.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[500px] rounded-2xl overflow-hidden"
            >
              <Image src="https://images.unsplash.com/photo-1542314831-c6a4d14d8373?q=80&w=2070&auto=format&fit=crop" alt="Tim Kami" fill className="object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-serif font-bold text-foreground">Visi & Misi Kami</h2>
              <p className="text-muted-foreground leading-relaxed">
                Menghadirkan harmoni sempurna antara kemewahan properti dan keindahan alam. Kami percaya bahwa setiap properti memiliki cerita yang unik, dan kami ada di sini untuk menceritakannya ke dunia.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Misi kami adalah memberikan solusi hunian dan destinasi wisata premium yang tidak hanya memukau secara visual, tetapi juga sangat ramah lingkungan dan terintegrasi dengan alam.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
