"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TextReveal from "@/components/ui/TextReveal";

export default function About() {
  return (
    <main className="pt-20" aria-label="Halaman Tentang Kami">
      <section className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
        {/* Subtle background blob */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" aria-hidden="true" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
          >
            <TextReveal as="h1" text="Tentang Kami" className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-8 justify-center" />
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">Kami adalah agensi properti dan wisata yang berdedikasi untuk menciptakan pengalaman eksklusif bagi Anda, memadukan estetika modern dengan kelestarian alam secara harmonis.</p>
          </motion.header>

          <article className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.figure
              initial={{ opacity: 0, clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
              animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative h-[500px] md:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <Image src="https://images.unsplash.com/photo-1542314831-c6a4d14d8373?q=80&w=2070&auto=format&fit=crop" alt="Foto Representasi Tim Kami di Lapangan" fill className="object-cover" />
            </motion.figure>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              className="space-y-8"
            >
              <TextReveal as="h2" text="Visi & Misi Kami" className="text-3xl md:text-4xl font-serif font-bold text-foreground" />
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Menghadirkan harmoni sempurna antara kemewahan properti dan keindahan alam. Kami percaya bahwa setiap properti memiliki cerita yang unik, dan kami hadir di sini untuk merangkai cerita tersebut menjadi pengalaman tak terlupakan.
                </p>
                <p>
                  Misi kami adalah memberikan solusi hunian dan destinasi wisata premium yang tidak hanya memukau secara visual, tetapi juga sangat ramah lingkungan dan terintegrasi dengan alam sekitar, menciptakan warisan yang berkelanjutan untuk generasi mendatang.
                </p>
              </div>
            </motion.div>
          </article>
        </div>
      </section>
    </main>
  );
}
