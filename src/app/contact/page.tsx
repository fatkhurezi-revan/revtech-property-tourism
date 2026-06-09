import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/data/config";

export default function Contact() {
  return (
    <main className="pt-20" aria-label="Halaman Kontak">
      <section className="py-16 md:py-24 lg:py-32 bg-background min-h-screen relative overflow-hidden">
        {/* Subtle background blob */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] -z-10" aria-hidden="true" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Hubungi Kami
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Punya pertanyaan atau ingin menjadwalkan kunjungan? Tim {siteConfig.name} siap membantu Anda memberikan pengalaman terbaik.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <address className="not-italic">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-10">Informasi Kontak</h2>
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                    <MapPin className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">Alamat Kantor</h3>
                    <p className="text-muted-foreground mt-2 leading-relaxed">{siteConfig.contact.address}</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                    <Phone className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">Telepon / WhatsApp</h3>
                    <p className="text-muted-foreground mt-2">{siteConfig.contact.phoneDisplay}</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                    <Mail className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">Email</h3>
                    <p className="text-muted-foreground mt-2">{siteConfig.contact.email}</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                    <Clock className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">Jam Operasional</h3>
                    <p className="text-muted-foreground mt-2 leading-relaxed">{siteConfig.contact.workingHours}</p>
                  </div>
                </div>
              </div>
            </address>

            <div className="bg-card border border-border p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden h-full flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10" aria-hidden="true" />
              <div className="text-center">
                <h2 className="text-3xl font-serif font-bold text-card-foreground mb-4">Konsultasi Langsung</h2>
                <p className="text-muted-foreground mb-8">
                  Untuk respons yang jauh lebih cepat, kami sangat menyarankan Anda untuk menghubungi kami langsung melalui WhatsApp.
                </p>
                <a href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`} target="_blank" rel="noopener noreferrer" aria-label="Chat via WhatsApp" className="inline-block w-full bg-primary text-primary-foreground font-bold py-5 px-8 rounded-full hover:bg-primary-dark transition-all duration-300 shadow-lg text-lg hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30">
                  Mulai Chat di WhatsApp
                </a>
                <p className="mt-6 text-sm text-muted-foreground">
                  Kami biasanya membalas dalam waktu kurang dari 15 menit pada jam kerja.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
