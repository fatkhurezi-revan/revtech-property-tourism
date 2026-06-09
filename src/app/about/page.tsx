import Image from "next/image";
import { siteConfig } from "@/data/config";

export default function About() {
  return (
    <main className="pt-20" aria-label="Halaman Tentang Kami dan Layanan">
      <section className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
        {/* Subtle background blob */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" aria-hidden="true" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 md:mb-8">
              {siteConfig.about.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {siteConfig.about.hero.description}
            </p>
          </header>

          <article className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24 md:mb-32">
            <figure className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
              <Image 
                src={siteConfig.about.visionMission.image} 
                alt="Foto Representasi Tim Kami di Lapangan" 
                fill 
                className="object-cover" 
              />
            </figure>
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                {siteConfig.about.visionMission.title}
              </h2>
              
              <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>{siteConfig.about.visionMission.p1}</p>
                <p>{siteConfig.about.visionMission.p2}</p>
              </div>
            </div>
          </article>

          {/* Services Section Added to About */}
          <section className="pt-16 border-t border-border">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                {siteConfig.about.services.title}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {siteConfig.about.services.items.map((service, index) => (
                <div key={index} className="bg-card border border-border p-8 rounded-[2rem] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl mb-6">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
