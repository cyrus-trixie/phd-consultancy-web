export default function AboutPage() {
  return (
    <main className="bg-chaos-bg min-h-screen">
      {/* 1. HEADER SECTION */}
      <section className="pt-20 pb-16 px-6 lg:px-12 container mx-auto">
        <span className="text-[10px] font-bold text-chaos-gold uppercase tracking-[0.4em] block mb-6">
          The Woman Behind the Work
        </span>
        <h1 className="text-4xl md:text-6xl font-serif text-chaos-teal leading-tight max-w-4xl">
          Meet Lynne. PhD Candidate in <br />
          <span className="italic text-chaos-navy">Clinical Psychology</span>
        </h1>
      </section>

      {/* 2. IMAGE SECTION */}
<section className="w-full px-6 lg:px-12 mb-24 container mx-auto">
  <div className="aspect-[16/7] w-full bg-chaos-sand/10 rounded-sm overflow-hidden shadow-sm">
     <img 
       src="/images/2.png" 
       alt="Lynne Professional Portrait" 
       className="w-full h-full object-cover object-[center_25%] grayscale-[10%]" 
     />
  </div>
</section>

      {/* 3. BIO SECTION (Pure Text) */}
      <section className="pb-32 px-6 lg:px-12 container mx-auto">
        <div className="max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-8 text-chaos-navy/90 font-light leading-relaxed text-lg">
              <p>
                With over 1,500 hours of client contact, I bring both academic thoroughness and lived experience into the Support room. My path into psychology began not in textbooks, but in the real-world struggles of marriage, career, and family dynamics.
              </p>
              <p>
                These are the places where life can feel both full and painfully empty. Those experiences taught me empathy not as a concept, but as a way of seeing and understanding the unseen burdens that women carry while striving to do it all.
              </p>
            </div>
            
            <div className="space-y-8 text-chaos-navy/80 font-light leading-relaxed">
              <p>
                They inspired my mission to empower women to rediscover themselves amidst emotional turmoil. I’ll be sharing science-backed insights for your real-world transformation.
              </p>
              <p>
                My work blends therapeutic wisdom with mentorship, helping women navigate emotional pain, rebuild self-trust, and create lives that feel truly authentic and very personal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MISSION & VISION (High Contrast) */}
      <section className="bg-chaos-navy py-32 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="space-y-6">
              <h3 className="font-sans text-chaos-gold text-[10px] uppercase tracking-[0.4em] font-bold">Our Mission</h3>
              <p className="text-2xl md:text-3xl font-serif leading-relaxed">
                To empower women to reconnect with their sense of self through evidence-based psychology and meaningful conversation, all grounded in spiritual approaches to better living.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="font-sans text-chaos-gold text-[10px] uppercase tracking-[0.4em] font-bold">Our Vision</h3>
              <p className="text-2xl md:text-3xl font-serif leading-relaxed">
                A world where women live from emotional clarity, not chaos, redefining success on their own terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CORE VALUES */}
      <section className="py-32 container mx-auto px-6 lg:px-12">
        <h3 className="text-center font-serif text-3xl text-chaos-teal mb-20 italic">Core Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { title: "Authenticity", desc: "Healing begins with truth." },
            { title: "Compassion", desc: "Every emotion deserves a voice." },
            { title: "Empowerment", desc: "Support is not rescue; it’s a revival." },
            { title: "Science-Backed Growth", desc: "Real change is rooted in understanding." }
          ].map((val) => (
            <div key={val.title} className="group">
              <div className="h-[1px] w-full bg-chaos-sand mb-8 group-hover:bg-chaos-gold transition-colors duration-500"></div>
              <h4 className="font-sans font-bold text-[10px] uppercase tracking-[0.3em] text-chaos-teal mb-4">{val.title}</h4>
              <p className="text-chaos-navy/70 text-sm font-light leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}