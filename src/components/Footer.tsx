import Link from "next/link";
import { MapPin, Phone, Mail, Globe, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-primary-foreground/90 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 inline-flex">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center font-bold text-2xl shadow-lg text-primary-900 shrink-0">
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
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-secondary transition-colors"><Globe size={20} /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Share2 size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-white mb-6">Tautan Cepat</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm hover:text-secondary transition-colors">Beranda</Link></li>
              <li><Link href="/about" className="text-sm hover:text-secondary transition-colors">Tentang Kami</Link></li>
              <li><Link href="/gallery" className="text-sm hover:text-secondary transition-colors">Galeri Eksklusif</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-secondary transition-colors">Hubungi Kami</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-white mb-6">Kontak & RSVP</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin size={20} className="text-secondary shrink-0 mt-0.5" />
                <span className="leading-relaxed">Sukabumi, Jawa Barat<br />Indonesia</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone size={20} className="text-secondary shrink-0" />
                <span>+62 812-9001-8819</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail size={20} className="text-secondary shrink-0" />
                <span>hello@revtech.agency</span>
              </li>
            </ul>
            <a href="https://wa.me/6281290018819" target="_blank" rel="noopener noreferrer" className="inline-block mt-6 bg-secondary text-secondary-foreground px-6 py-2.5 rounded-full text-sm font-medium hover:bg-secondary-dark transition-colors shadow-md">
              Chat via WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-primary-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} RevTech Agency. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
            <Link href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
