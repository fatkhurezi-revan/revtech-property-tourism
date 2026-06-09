import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Waves, Shield, MapPin } from "lucide-react";
import { siteConfig } from "@/data/config";

export default function Home() {
  return (
    <main className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden" aria-label="Hero Section">
        <div className="absolute inset-0 z-0">
          <Image
            src={siteConfig.home.hero.image}
            alt="Pemandangan Villa Mewah Tropis"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <p className="text-white/90 uppercase tracking-[0.3em] text-sm md:text-base font-medium mb-6">
            {siteConfig.home.hero.tagline}
          </p>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-12 drop-shadow-lg">
            {siteConfig.home.hero.title}
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`} target="_blank" rel="noopener noreferrer" aria-label="RSVP via WhatsApp" className="bg-primary/90 backdrop-blur-md text-primary-foreground px-8 py-4 rounded-full text-base font-medium transition-all duration-300 ease-in-out hover:bg-primary hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30 flex items-center w-full sm:w-auto justify-center border border-primary-light/20">
              Konsultasi Sekarang
            </a>
            <Link href="/about" className="bg-white/10 backdrop-blur-xl text-white border border-white/30 px-8 py-4 rounded-full text-base font-medium transition-all duration-300 ease-in-out hover:bg-white/20 hover:-translate-y-1 hover:shadow-xl w-full sm:w-auto justify-center flex items-center">
              Pelajari Layanan Kami
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-background relative z-20" aria-label="Filosofi Perusahaan">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="block text-primary font-bold tracking-widest uppercase text-sm mb-4">Filosofi Kami</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-8 leading-tight">
                {siteConfig.home.philosophy.title}
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
                {siteConfig.home.philosophy.description}
              </p>
              <div>
                <Link href="/about" className="inline-flex items-center text-primary font-bold hover:text-primary-dark transition-all duration-300 ease-in-out group px-4 py-2 -ml-4 rounded-lg hover:bg-primary/5" aria-label="Pelajari Lebih Lanjut tentang Filosofi Kami">
                  Pelajari Lebih Lanjut 
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 ease-in-out" aria-hidden="true" />
                </Link>
              </div>
            </div>
            
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/5 transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src={siteConfig.home.philosophy.image}
                alt="Desain Rumah Ramah Lingkungan Modern"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 md:py-24 lg:py-32 bg-muted relative z-20" aria-label="Koleksi Eksklusif">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="block text-primary font-bold tracking-widest uppercase text-sm mb-4">Koleksi Eksklusif</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
                {siteConfig.home.featured.title}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {siteConfig.home.featured.items.map((item, i) => (
              <article key={i} className="group block">
                <div className="relative h-[400px] md:h-[450px] rounded-[2rem] overflow-hidden mb-6 shadow-md transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
                  <Image
                    src={item.image}
                    alt={`Gambar properti ${item.title} berlokasi di ${item.location}`}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 transition-opacity duration-500 ease-in-out group-hover:opacity-90" aria-hidden="true" />
                  
                  <div className="absolute bottom-0 left-0 p-6 lg:p-8 transform transition-transform duration-500 ease-in-out group-hover:-translate-y-2">
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-2">{item.title}</h3>
                    <div className="flex items-center text-white/90">
                      <MapPin size={18} className="mr-2 shrink-0" aria-hidden="true" />
                      <span className="text-sm font-medium tracking-wide">{item.location}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-background relative z-20" aria-label="Fasilitas Premium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16 max-w-3xl mx-auto">
            <span className="block text-primary font-bold tracking-widest uppercase text-sm mb-4">Fasilitas Premium</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              {siteConfig.home.amenities.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {siteConfig.home.amenities.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 auto-rows-[280px]">
            {/* Main Item */}
            <article className="md:col-span-2 md:row-span-2 relative rounded-[2rem] overflow-hidden group shadow-sm transition-all duration-500 ease-in-out hover:-translate-y-1 hover:shadow-2xl">
              <Image src={siteConfig.home.amenities.mainItem.image} alt="Fasilitas Premium Utama" fill className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 text-white shadow-lg">
                  <Waves className="w-7 h-7" aria-hidden="true" />
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3">{siteConfig.home.amenities.mainItem.title}</h3>
                <p className="text-white/90 text-base md:text-lg max-w-lg leading-relaxed">{siteConfig.home.amenities.mainItem.description}</p>
              </div>
            </article>

            {/* Sub Item 1 */}
            <article className="bg-primary/5 rounded-[2rem] p-8 lg:p-10 border border-primary/10 flex flex-col justify-between transition-all duration-300 ease-in-out hover:bg-primary/10 hover:-translate-y-1 hover:shadow-xl">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <Leaf className="w-7 h-7" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">100% Eco-Friendly</h3>
                <p className="text-muted-foreground leading-relaxed">Material bangunan berkelanjutan, ventilasi alami, dan sistem tenaga surya terpadu.</p>
              </div>
            </article>

            {/* Sub Item 2 */}
            <article className="bg-card rounded-[2rem] p-8 lg:p-10 border border-border flex flex-col justify-between transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl shadow-sm">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <Shield className="w-7 h-7" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">Privasi & Keamanan</h3>
                <p className="text-muted-foreground leading-relaxed">Akses eksklusif, sistem pintar (smart home), dan keamanan terpadu 24 jam penuh.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden z-20" aria-label="Call to Action">
        <div className="absolute inset-0 z-0">
          <Image
            src={siteConfig.home.cta.image}
            alt="Latar belakang alam yang asri"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary-900/85 mix-blend-multiply" aria-hidden="true" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-black/30 backdrop-blur-xl p-8 md:p-16 lg:p-20 rounded-[3rem] border border-white/10 shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 md:mb-8">
              {siteConfig.home.cta.title}
            </h2>
            
            <p className="text-white/90 text-base md:text-xl mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
              {siteConfig.home.cta.description}
            </p>
            
            <a href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`} target="_blank" rel="noopener noreferrer" aria-label="Jadwalkan Kunjungan via WhatsApp" className="inline-flex items-center bg-secondary text-secondary-foreground px-8 py-4 md:py-5 rounded-full text-base md:text-lg font-bold transition-all duration-300 ease-in-out hover:bg-secondary-dark hover:-translate-y-1 hover:shadow-xl hover:shadow-secondary/30">
              RSVP via WhatsApp Sekarang
              <ArrowRight className="ml-3 w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
