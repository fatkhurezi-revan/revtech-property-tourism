"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TextReveal from "@/components/ui/TextReveal";

export default function About() {
  return (
    <div className="pt-20">
      <section className="py-32 bg-background relative overflow-hidden">
        {/* Subtle background blob */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-24"
          >
            <TextReveal as="h1" text="Tentang Kami" className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-8 justify-center" />
            <p className="text-xl text-muted-foreground leading-relaxed">Kami adalah agensi properti dan wisata yang berdedikasi untuk menciptakan pengalaman eksklusif bagi Anda, memadukan estetika modern dengan kelestarian alam.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
              animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image src="https://images.unsplash.com/photo-1542314831-c6a4d14d8373?q=80&w=2070&auto=format&fit=crop" alt="Tim Kami" fill className="object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              className="space-y-8"
            >
              <TextReveal as="h2" text="Visi & Misi Kami" className="text-4xl font-serif font-bold text-foreground" />
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Menghadirkan harmoni sempurna antara kemewahan properti dan keindahan alam. Kami percaya bahwa setiap properti memiliki cerita yang unik, dan kami ada di sini untuk menceritakannya ke dunia.
                </p>
                <p>
                  Misi kami adalah memberikan solusi hunian dan destinasi wisata premium yang tidak hanya memukau secara visual, tetapi juga sangat ramah lingkungan dan terintegrasi dengan alam, menciptakan warisan yang berkelanjutan.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
