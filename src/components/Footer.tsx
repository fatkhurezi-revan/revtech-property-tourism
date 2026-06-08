import Link from "next/link";
import { MapPin, Phone, Mail, Globe, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-primary-foreground/90 pt-16 md:pt-24 pb-8 border-t border-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 inline-flex group" aria-label="Beranda RevTech">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center font-bold text-2xl shadow-lg shadow-black/10 text-primary-900 shrink-0 transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:shadow-xl">
                R
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-serif font-bold text-white leading-none">RevTech</span>
                <span className="text-xs uppercase tracking-widest text-primary-foreground/70 font-medium leading-tight mt-1.5">Template Properti & Pariwisata</span>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/80 max-w-sm mt-4 leading-relaxed">
              Menghadirkan pengalaman digital premium untuk bisnis properti dan pariwisata yang mengutamakan keindahan alam dan hunian eksklusif.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" aria-label="Kunjungi Website Global" className="text-primary-foreground/60 hover:text-white transition-all duration-300 ease-in-out hover:-translate-y-1"><Globe size={20} /></a>
              <a href="#" aria-label="Bagikan Tautan" className="text-primary-foreground/60 hover:text-white transition-all duration-300 ease-in-out hover:-translate-y-1"><Share2 size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Tautan Cepat Footer">
            <h3 className="text-lg font-serif font-semibold text-white mb-6">Tautan Cepat</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-sm text-primary-foreground/80 hover:text-white transition-colors duration-300 ease-in-out">Beranda</Link></li>
              <li><Link href="/about" className="text-sm text-primary-foreground/80 hover:text-white transition-colors duration-300 ease-in-out">Tentang Kami</Link></li>
              <li><Link href="/gallery" className="text-sm text-primary-foreground/80 hover:text-white transition-colors duration-300 ease-in-out">Galeri Eksklusif</Link></li>
              <li><Link href="/contact" className="text-sm text-primary-foreground/80 hover:text-white transition-colors duration-300 ease-in-out">Hubungi Kami</Link></li>
            </ul>
          </nav>

          {/* Contact */}
          <address className="not-italic">
            <h3 className="text-lg font-serif font-semibold text-white mb-6">Kontak & RSVP</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-primary-foreground/80">
                <MapPin size={20} className="text-secondary shrink-0 mt-0.5" aria-hidden="true" />
                <span className="leading-relaxed">Sukabumi, Jawa Barat<br />Indonesia</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-primary-foreground/80">
                <Phone size={20} className="text-secondary shrink-0" aria-hidden="true" />
                <span>+62 812-9001-8819</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-primary-foreground/80">
                <Mail size={20} className="text-secondary shrink-0" aria-hidden="true" />
                <span>hello@revtech.agency</span>
              </li>
            </ul>
            <a href="https://wa.me/6281290018819" target="_blank" rel="noopener noreferrer" aria-label="Chat via WhatsApp" className="inline-block mt-8 bg-secondary text-secondary-foreground px-6 py-3 rounded-full text-sm font-medium hover:bg-secondary-dark transition-all duration-300 ease-in-out shadow-md hover:shadow-lg hover:-translate-y-1">
              Chat via WhatsApp
            </a>
          </address>
        </div>

        <div className="border-t border-primary-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} RevTech Agency. Hak Cipta Dilindungi.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors duration-300 ease-in-out">Kebijakan Privasi</Link>
            <Link href="#" className="hover:text-white transition-colors duration-300 ease-in-out">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
