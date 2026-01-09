export default function SupportPage() {
  const focusAreas = [
    { title: "Stress, Anxiety & Depression", desc: "Learn how to regulate emotions and reclaim peace." },
    { title: "Emotional Pain & Trauma", desc: "Heal past wounds and find safety within yourself again." },
    { title: "Relationship Issues", desc: "Build healthier connections and boundaries." },
    { title: "Marriage Counselling", desc: "Reignite communication and understanding." },
    { title: "Emptiness & Loneliness", desc: "Rediscover meaning and joy in your life." },
    { title: "Anger Management", desc: "Transform frustration into self-control and insight." },
    { title: "Existential Crisis", desc: "Navigate life transitions and rediscover purpose." },
  ];

  return (
    <main className="bg-chaos-bg min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="pt-20 pb-24 px-6 lg:px-12 container mx-auto">
        <span className="text-[10px] font-bold text-chaos-gold uppercase tracking-[0.4em] block mb-6">
          The Work of Becoming
        </span>
        <h1 className="text-4xl md:text-6xl font-serif text-chaos-teal leading-tight max-w-4xl mb-12">
          How Psychology Helps You <br />
          <span className="italic text-chaos-navy text-3xl md:text-5xl font-light">Move Forward.</span>
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-chaos-navy/90 font-light leading-relaxed text-lg">
            <p>
              There comes a point when “pushing through” stops working. When you’ve tried to stay strong, but the weight feels heavier by the day.
            </p>
            <p>
              Support sessions step in, not as a last resort, but as a gateway to successful living. They help you untangle thoughts, quiet emotional turmoil, and reconnect with purpose.
            </p>
          </div>
          <div className="aspect-video lg:aspect-square bg-chaos-sand/10 rounded-sm overflow-hidden">
             {/* ATMOSPHERIC IMAGE: Something calm like sunlight through a window or a plant */}
             <img 
               src="/images/5.png" 
               alt="Calm supportive environment" 
               className="w-full h-full object-cover opacity-90 grayscale-[20%]" 
             />
          </div>
        </div>
      </section>

      {/* 2. CORE MESSAGE SECTION */}
      <section className="bg-chaos-navy py-24 text-white text-center px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-serif text-2xl md:text-3xl leading-relaxed">
            "At Cost of Chaos, our work is centered around helping women feel seen, heard, and unstuck through evidence-based methods and compassionate dialogue."
          </h2>
          <div className="h-12 w-[1px] bg-chaos-gold mx-auto"></div>
        </div>
      </section>

      {/* 3. AREAS OF FOCUS GRID */}
      <section className="py-32 container mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <h3 className="font-serif text-4xl text-chaos-teal mb-4">Areas of Focus</h3>
          <p className="text-chaos-navy/60 uppercase tracking-widest text-[10px] font-bold">Specialized Care for the Modern Woman</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {focusAreas.map((area, index) => (
            <div key={index} className="group border-b border-chaos-sand pb-10">
              <span className="text-chaos-gold font-serif italic text-lg block mb-4">0{index + 1}</span>
              <h4 className="font-serif text-xl text-chaos-navy mb-4 group-hover:text-chaos-teal transition-colors">
                {area.title}
              </h4>
              <p className="text-chaos-navy/70 text-sm font-light leading-relaxed">
                {area.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. THE COLLABORATION (Closing statement) */}
      <section className="pb-40 container mx-auto px-6 lg:px-12">
        <div className="bg-white p-12 lg:p-24 rounded-sm shadow-sm flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-2/3">
            <h3 className="font-serif text-3xl text-chaos-teal mb-6">A Partnership in Your Story</h3>
            <p className="text-chaos-navy/80 font-light leading-loose">
              Each session is a collaboration; a partnership between your lived experience and my clinical training. Whether in person or online, our sessions are tailored to your pace, your story, and your goals.
            </p>
          </div>
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
            <button className="bg-chaos-teal text-white px-10 py-5 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-chaos-navy transition-all shadow-lg">
              Book Your Session
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}