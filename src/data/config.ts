// Konfigurasi Utama Website (Single Source of Truth)
// Edit file ini untuk mengubah konten seluruh website dengan cepat saat melayani klien baru.

export const siteConfig = {
  // Informasi Dasar
  name: "RevTech",
  subtitle: "Template Properti & Pariwisata",
  description: "Menghadirkan pengalaman digital premium untuk bisnis properti dan pariwisata yang mengutamakan keindahan alam dan hunian eksklusif.",
  
  // Kontak & Lead Generation
  contact: {
    whatsappNumber: "6281290018819", // Gunakan format 62 tanpa + atau 0 di depan
    whatsappMessage: "Halo tim RevTech, saya tertarik dengan layanan Anda dan ingin menjadwalkan konsultasi.",
    email: "hello@revtech.agency",
    phoneDisplay: "+62 812-9001-8819",
    address: "Sukabumi, Jawa Barat, Indonesia",
    workingHours: "Senin - Jumat: 09:00 - 17:00 | Sabtu: 09:00 - 13:00",
  },

  // Konten Beranda
  home: {
    hero: {
      tagline: "Kemewahan Berpadu dengan Alam",
      title: "Eksplorasi Keindahan Alam & Hunian Eksklusif",
      image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2560&auto=format&fit=crop",
    },
    philosophy: {
      title: "Harmoni Sempurna Antara Desain Modern & Alam",
      description: "Kami percaya bahwa hunian yang sesungguhnya bukan sekadar bangunan, melainkan tempat di mana jiwa Anda dapat bersatu kembali dengan alam. Setiap detail dirancang dengan cermat untuk memastikan kelestarian lingkungan tanpa mengorbankan kenyamanan kelas atas.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    },
    featured: {
      title: "Properti & Destinasi Pilihan",
      items: [
        { title: "Villa Rimba Tropis", location: "Ubud, Bali", image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop" },
        { title: "Resor Pesisir Senja", location: "Lombok, NTB", image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop" },
        { title: "Pondok Pinus Embun", location: "Lembang, Bandung", image: "https://images.unsplash.com/photo-1518733057094-95b5ee1404c3?q=80&w=2070&auto=format&fit=crop" }
      ]
    },
    amenities: {
      title: "Kenyamanan Tanpa Kompromi",
      description: "Fasilitas tingkat tinggi yang memadukan fungsi dan estetika tanpa batas.",
      mainItem: {
        title: "Private Infinity Pool",
        description: "Kolam renang pribadi dengan pemandangan alam tak terhalang, dirancang seolah menyatu sempurna dengan cakrawala.",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop"
      }
    },
    cta: {
      title: "Siap Untuk Pengalaman yang Berbeda?",
      description: "Jadwalkan kunjungan privat Anda hari ini dan rasakan sendiri kemewahan yang menyatu harmonis dengan alam. Tim ahli kami siap melayani Anda secara personal.",
      image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop"
    }
  },

  // Konten Tentang & Layanan
  about: {
    hero: {
      title: "Tentang Kami & Layanan",
      description: "Kami adalah agensi properti dan wisata yang berdedikasi untuk menciptakan pengalaman eksklusif bagi Anda, memadukan estetika modern dengan kelestarian alam secara harmonis."
    },
    visionMission: {
      image: "https://images.unsplash.com/photo-1542314831-c6a4d14d8373?q=80&w=2070&auto=format&fit=crop",
      title: "Visi & Misi Kami",
      p1: "Menghadirkan harmoni sempurna antara kemewahan properti dan keindahan alam. Kami percaya bahwa setiap properti memiliki cerita yang unik, dan kami hadir di sini untuk merangkai cerita tersebut menjadi pengalaman tak terlupakan.",
      p2: "Misi kami adalah memberikan solusi hunian dan destinasi wisata premium yang tidak hanya memukau secara visual, tetapi juga sangat ramah lingkungan dan terintegrasi dengan alam sekitar, menciptakan warisan yang berkelanjutan untuk generasi mendatang."
    },
    services: {
      title: "Layanan Unggulan",
      items: [
        {
          title: "Konsultasi Properti Premium",
          description: "Pendampingan eksklusif dalam memilih hunian kelas atas atau villa investasi yang paling sesuai dengan kebutuhan dan impian Anda."
        },
        {
          title: "Manajemen Penyewaan",
          description: "Layanan pengelolaan villa dan resor secara profesional untuk memaksimalkan passive income Anda dengan tingkat hunian optimal."
        },
        {
          title: "Kurasi Destinasi Wisata",
          description: "Perencanaan perjalanan wisata privat ke lokasi-lokasi tersembunyi dengan fasilitas akomodasi berstandar internasional."
        }
      ]
    }
  }
};
