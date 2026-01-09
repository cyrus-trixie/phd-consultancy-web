import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-chaos-bg">
      {/* 1. HERO SECTION: The Hook */}
      <section className="relative pt-16 pb-24 lg:pt-32 lg:pb-40">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
            
            {/* Image (Order 2 on mobile, 1 on desktop) */}
            <div className="w-full lg:w-[45%] order-2 lg:order-1">
              <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-sm bg-chaos-sand/20">
                <img 
                  src="/images/1.png" 
                  alt="Lynne - PhD Candidate in Clinical Psychology" 
                  className="w-full h-full object-cover grayscale-[20%]"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-[55%] order-1 lg:order-2 lg:pt-8">
              <span className="text-[10px] font-bold text-chaos-gold uppercase tracking-[0.4em] block mb-6">
                The Psychology of Becoming
              </span>
              <h1 className="text-4xl md:text-6xl font-serif text-chaos-teal leading-[1.1] mb-8">
                Where life’s noise meets <br />
                <span className="italic text-chaos-navy text-3xl md:text-5xl">calm understanding.</span>
              </h1>
              <p className="text-lg text-chaos-navy/90 font-light leading-relaxed max-w-lg mb-10">
                Hi, I’m Lynne. I help women like you rediscover who they are beneath the roles, responsibilities, and relentless noise.
              </p>
              <Link href="/contact" className="group flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-chaos-teal">
                <span className="h-[1px] w-12 bg-chaos-gold group-hover:w-20 transition-all duration-500"></span>
                Book a Session
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE QUOTE SECTION: The Connection */}
      <section className="bg-white py-24 lg:py-32 border-y border-chaos-sand/30">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-chaos-navy leading-[1.6] mb-12">
            "I know what it means to hold it all together the family, the work, the expectations and still feel something inside unraveling."
          </h2>
          <div className="h-20 w-[1px] bg-chaos-gold mx-auto mb-10"></div>
          <p className="text-chaos-navy/70 uppercase tracking-[0.3em] text-[10px] font-bold">
            Redefining Success on your terms
          </p>
        </div>
      </section>

      {/* 3. THE AUTHORITY: PhD & Vision */}
      <section className="py-24 lg:py-40 container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h3 className="font-serif text-4xl text-chaos-teal">Beyond Survival.</h3>
            <p className="text-chaos-navy leading-loose font-light text-lg">
              As a PhD Candidate in Clinical Psychology, therapist, and mentor, my work blends therapeutic wisdom with science-backed insights for real-world transformation.
            </p>
            <p className="text-chaos-navy/80 leading-relaxed font-light">
              Support sessions aren’t just about “fixing what’s broken.” They’re about becoming who you were always meant to be; free, grounded, and self-assured.
            </p>
            <Link href="/about" className="inline-block pt-4 text-xs font-bold uppercase tracking-widest text-chaos-gold border-b border-chaos-gold pb-2 hover:text-chaos-teal hover:border-chaos-teal transition-all">
              Meet Lynne
            </Link>
          </div>

          {/* Atmospheric Image: Placeholder for a "Calm" texture or office shot */}
          <div className="relative aspect-video lg:aspect-square bg-chaos-sand/10 rounded-sm overflow-hidden">
             <img 
               src="/images/4.png" 
               alt="Calm atmosphere" 
               className="w-full h-full object-cover opacity-90"
             />
             <div className="absolute inset-0 bg-chaos-teal/5"></div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES PREVIEW: The Work */}
      <section className="pb-32 container mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-2xl mx-auto mb-16">
          <span className="text-chaos-gold uppercase tracking-[0.3em] text-[10px] font-bold">The Work</span>
          <h2 className="font-serif text-4xl text-chaos-navy mt-4 italic">How Psychology Helps</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Emotional Pain', 'Relationship Boundaries', 'Stress & Anxiety'].map((service) => (
            <div key={service} className="p-12 border border-chaos-sand/50 hover:bg-white hover:shadow-xl transition-all duration-500 text-left group">
              <h4 className="font-serif text-xl text-chaos-teal mb-4 group-hover:text-chaos-gold transition-colors">{service}</h4>
              <p className="text-sm text-chaos-navy/70 font-light leading-relaxed">
                Untangle thoughts and reconnect with purpose through evidence-based methods.
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <Link href="/support" className="bg-chaos-teal text-white px-12 py-5 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-chaos-navy transition-all">
            Explore All Services
          </Link>
        </div>
      </section>
    </main>
  );
}