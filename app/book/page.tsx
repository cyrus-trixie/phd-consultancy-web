export default function BookingPage() {
  const policies = [
    {
      title: "Payment & Confirmation",
      text: "Full payment is required prior to all sessions. Your appointment is only confirmed once payment has been received, after which a confirmation message will be sent."
    },
    {
      title: "No-Show & Refund Policy",
      text: "Refunds are not available for no-shows. Missed sessions without prior notice are not transferable to another date or time."
    }
  ];

  return (
    <main className="bg-chaos-bg min-h-screen pb-32">
      {/* HEADER */}
      <section className="pt-20 pb-16 px-6 lg:px-12 container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-chaos-teal mb-4">Secure Your Session</h1>
        <p className="text-chaos-navy/60 uppercase tracking-widest text-[10px] font-bold">Please review the booking policy below</p>
      </section>

      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* LEFT: The Notice & Policies */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Professional Notice */}
            <div className="bg-white p-8 border-l-4 border-chaos-gold shadow-sm">
              <h3 className="font-serif text-xl text-chaos-teal mb-4">Important Notice</h3>
              <p className="text-chaos-navy/80 font-light leading-relaxed text-sm">
                All sessions offered are supportive services, provided under professional supervision while formal training is ongoing. These services do not replace emergency, psychiatric, or medical care.
              </p>
            </div>

            {/* Detailed Policies */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {policies.map((p) => (
                <div key={p.title} className="space-y-4">
                  <h4 className="font-sans font-bold text-[10px] uppercase tracking-widest text-chaos-gold">
                    {p.title}
                  </h4>
                  <p className="text-chaos-navy/70 text-sm font-light leading-relaxed italic">
                    {p.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-chaos-sand">
               <p className="text-chaos-navy/50 text-[11px] leading-relaxed">
                 By proceeding to book, you confirm that you have read, understood, and agreed to these terms.
               </p>
            </div>
          </div>

          {/* RIGHT: The Action Card */}
          <div className="lg:col-span-1">
            <div className="bg-chaos-navy p-10 text-white rounded-sm sticky top-24">
              <h3 className="font-serif text-2xl mb-6">Booking Link</h3>
              <p className="text-white/70 text-sm font-light mb-8 leading-relaxed">
                Click below to select your preferred date and time. You will receive payment instructions via email.
              </p>
              
              <a 
                href="https://calendly.com/your-link" // Replace with actual link
                target="_blank"
                className="block w-full text-center bg-chaos-gold text-chaos-navy py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-all"
              >
                Open Booking Calendar
              </a>

              <div className="mt-8 pt-8 border-t border-white/10 space-y-4">
                 <p className="text-[10px] uppercase tracking-widest text-chaos-gold font-bold">Location</p>
                 <p className="text-sm font-light">Online (Worldwide) or In-Person (Nairobi, Kenya)</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}