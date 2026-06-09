import { siteConfig } from "@/data/config";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Konsultasi via WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:-translate-y-1 transition-all duration-300 ease-in-out group"
    >
      <MessageCircle size={28} className="transition-transform duration-300 ease-in-out group-hover:scale-110" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-medium px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none whitespace-nowrap">
        Hubungi Kami
      </span>
      
      {/* Ripple effect */}
      <span className="absolute inset-0 rounded-full border-2 border-green-500 animate-ping opacity-75 -z-10" style={{ animationDuration: '2s' }}></span>
    </a>
  );
}
