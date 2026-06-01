"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-background min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Hubungi Kami</h1>
            <p className="text-muted-foreground">Punya pertanyaan atau ingin menjadwalkan kunjungan? Tim RevTech siap membantu Anda kapan saja.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8">Informasi Kontak</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-foreground">Alamat Kantor</h3>
                    <p className="text-muted-foreground mt-1">Sukabumi, Jawa Barat<br/>Indonesia</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-foreground">Telepon / WhatsApp</h3>
                    <p className="text-muted-foreground mt-1">+62 812-9001-8819</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground mt-1">hello@revtech.agency</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-primary mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-foreground">Jam Operasional</h3>
                    <p className="text-muted-foreground mt-1">Senin - Jumat: 09:00 - 17:00<br/>Sabtu: 09:00 - 13:00</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-card border border-border p-8 rounded-3xl shadow-sm"
            >
              <h2 className="text-2xl font-serif font-bold text-card-foreground mb-6">Kirim Pesan Langsung</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Nama Lengkap</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" placeholder="Masukkan nama Anda" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" placeholder="Masukkan email Anda" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Pesan</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow resize-none" placeholder="Tuliskan pesan Anda di sini..."></textarea>
                </div>
                <button type="submit" className="w-full bg-primary text-primary-foreground font-medium py-3 rounded-xl hover:bg-primary-dark transition-colors duration-300 shadow-md">
                  Kirim Pesan
                </button>
                <p className="text-xs text-center text-muted-foreground mt-4">
                  Atau ingin respons lebih cepat? <a href="https://wa.me/6281290018819" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">Hubungi via WhatsApp</a>
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
