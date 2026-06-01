"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Contact() {
  return (
    <div className="pt-20">
      <section className="py-32 bg-background min-h-screen relative overflow-hidden">
        {/* Subtle background blob */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center max-w-2xl mx-auto mb-24"
          >
            <TextReveal as="h1" text="Hubungi Kami" className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 justify-center" />
            <p className="text-xl text-muted-foreground">Punya pertanyaan atau ingin menjadwalkan kunjungan? Tim RevTech siap membantu Anda memberikan pengalaman terbaik.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              <h2 className="text-3xl font-serif font-bold text-foreground mb-10">Informasi Kontak</h2>
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">Alamat Kantor</h3>
                    <p className="text-muted-foreground mt-2 leading-relaxed">Sukabumi, Jawa Barat<br/>Indonesia</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Phone className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">Telepon / WhatsApp</h3>
                    <p className="text-muted-foreground mt-2">+62 812-9001-8819</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Mail className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">Email</h3>
                    <p className="text-muted-foreground mt-2">hello@revtech.agency</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Clock className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">Jam Operasional</h3>
                    <p className="text-muted-foreground mt-2 leading-relaxed">Senin - Jumat: 09:00 - 17:00<br/>Sabtu: 09:00 - 13:00</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
              animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="bg-card border border-border p-10 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10" />
              <h2 className="text-3xl font-serif font-bold text-card-foreground mb-8">Kirim Pesan Langsung</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Nama Lengkap</label>
                  <input type="text" id="name" className="w-full px-5 py-4 rounded-2xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" placeholder="Masukkan nama Anda" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input type="email" id="email" className="w-full px-5 py-4 rounded-2xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" placeholder="Masukkan email Anda" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Pesan</label>
                  <textarea id="message" rows={4} className="w-full px-5 py-4 rounded-2xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow resize-none" placeholder="Tuliskan pesan Anda di sini..."></textarea>
                </div>
                
                <MagneticButton className="w-full">
                  <button type="submit" className="w-full bg-primary text-primary-foreground font-medium py-4 rounded-2xl hover:bg-primary-dark transition-colors duration-300 shadow-lg text-lg">
                    Kirim Pesan
                  </button>
                </MagneticButton>
                
                <p className="text-sm text-center text-muted-foreground mt-6">
                  Atau ingin respons lebih cepat? <br/><a href="https://wa.me/6281290018819" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline inline-block mt-2">Hubungi via WhatsApp</a>
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
