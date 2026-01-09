export default function ContactPage() {
  return (
    <main className="bg-chaos-bg min-h-screen">
      {/* 1. HEADER SECTION */}
      <section className="pt-20 pb-12 px-6 lg:px-12 container mx-auto text-center">
        <span className="text-[10px] font-bold text-chaos-gold uppercase tracking-[0.4em] block mb-6">
          Take the first step
        </span>
        <h1 className="text-4xl md:text-6xl font-serif text-chaos-teal leading-tight max-w-3xl mx-auto">
          Ready to <span className="italic text-chaos-navy">Begin?</span>
        </h1>
      </section>

      {/* 2. CORE MESSAGE & BOOKING */}
      <section className="pb-24 px-6 lg:px-12 container mx-auto">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-center">
          
          {/* Text Content */}
          <div className="space-y-8 text-chaos-navy/90 font-light leading-relaxed text-lg">
            <p>
              Taking the first step toward securing support can feel daunting, but it’s also the most empowering decision you’ll ever make.
            </p>
            <p>
              Whether you’re seeking clarity, healing, or simply someone to talk to who gets it, I’m here to walk alongside you. 
            </p>
            <p className="font-serif text-2xl text-chaos-teal pt-4 italic">
              "Because when you invest in your emotional health, you’re not just surviving chaos, you’re becoming you, again."
            </p>
            
            <div className="pt-10">
              <a 
                href="YOUR_BOOKING_LINK_HERE" 
                className="inline-block bg-chaos-teal text-white px-12 py-5 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-chaos-navy transition-all shadow-lg"
              >
                Book a Session Now
              </a>
              <p className="mt-4 text-[10px] text-chaos-navy/50 uppercase tracking-widest">
                Available Online or In-Person (Kenya)
              </p>
            </div>
          </div>

          {/* Logistics Card */}
          <div className="bg-white p-10 lg:p-16 rounded-sm shadow-sm border border-chaos-sand/20">
            <h3 className="font-serif text-2xl text-chaos-teal mb-8">Working Hours</h3>
            <div className="space-y-6 text-sm text-chaos-navy/80 font-light">
              <div className="flex justify-between border-b border-chaos-sand/30 pb-4">
                <span>Monday — Friday</span>
                <span className="font-medium text-chaos-navy">9:00 AM – 4:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-chaos-sand/30 pb-4">
                <span>Saturday</span>
                <span className="font-medium text-chaos-navy">9:00 AM – 12:00 PM</span>
              </div>
              <div className="flex justify-between text-chaos-navy/40">
                <span>Sundays & Holidays</span>
                <span>Closed</span>
              </div>
              <p className="pt-6 text-[11px] leading-relaxed italic">
                All times are in East Africa Time (E.A.T). Messages received outside these hours will be responded to during the next business period.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FINAL IMAGE (Minimalist) */}
      <section className="container mx-auto px-6 lg:px-12 pb-32">
        <div className="aspect-[21/7] w-full rounded-sm overflow-hidden grayscale-[30%] opacity-80">
          <img 
            src="/images/contact-footer.png" 
            alt="Calm Path" 
            className="w-full h-full object-cover" 
          />
        </div>
      </section>
    </main>
  );
}