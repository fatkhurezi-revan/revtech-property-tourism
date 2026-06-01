"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-black/10 backdrop-blur-sm text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex flex-col">
            <span className={`text-2xl font-serif font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}>RevTech</span>
            <span className={`text-[0.65rem] uppercase tracking-widest font-medium ${isScrolled ? 'text-muted-foreground' : 'text-white/80'}`}>Template Properti & Pariwisata</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className={`text-sm font-medium transition-colors duration-300 hover:text-primary-light ${isScrolled ? 'text-foreground' : 'text-white/90 hover:text-white'}`}>Beranda</Link>
            <Link href="/about" className={`text-sm font-medium transition-colors duration-300 hover:text-primary-light ${isScrolled ? 'text-foreground' : 'text-white/90 hover:text-white'}`}>Tentang Kami</Link>
            <Link href="/gallery" className={`text-sm font-medium transition-colors duration-300 hover:text-primary-light ${isScrolled ? 'text-foreground' : 'text-white/90 hover:text-white'}`}>Galeri</Link>
            <Link href="/contact" className={`text-sm font-medium transition-colors duration-300 hover:text-primary-light ${isScrolled ? 'text-foreground' : 'text-white/90 hover:text-white'}`}>Kontak</Link>
          </nav>

          <div className="hidden md:flex">
            <a href="https://wa.me/6281290018819" target="_blank" rel="noopener noreferrer" className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg ${isScrolled ? 'bg-primary text-primary-foreground hover:bg-primary-dark' : 'bg-white text-primary hover:bg-white/90'}`}>
              RSVP Sekarang
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`transition-colors ${isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-white/80'}`}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-background border-b border-border overflow-hidden text-foreground"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
              <Link href="/" className="text-base font-medium hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Beranda</Link>
              <Link href="/about" className="text-base font-medium hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Tentang Kami</Link>
              <Link href="/gallery" className="text-base font-medium hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Galeri</Link>
              <Link href="/contact" className="text-base font-medium hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Kontak</Link>
              <a href="https://wa.me/6281290018819" target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-center text-sm font-medium hover:bg-primary-dark transition-colors inline-block mt-4">
                RSVP via WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
