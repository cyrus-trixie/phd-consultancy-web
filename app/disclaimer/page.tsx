export default function DisclaimerPage() {
  return (
    <main className="bg-chaos-bg min-h-screen pb-32 pt-24">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <h1 className="font-serif text-4xl text-chaos-teal mb-12 italic">Professional Disclaimer & Policies</h1>
        
        <div className="space-y-12 text-chaos-navy/80 font-light leading-relaxed">
          
          {/* 1. PROFESSIONAL STATUS */}
          <section className="space-y-4">
            <h2 className="font-serif text-xl text-chaos-navy">1. Professional Status</h2>
            <p>
              Lynne is a PhD Candidate in Clinical Psychology. Please note that all support and consultancy services provided through Cost of Chaos are conducted under professional clinical supervision. These services are intended for supportive and educational purposes and do not constitute medical, psychiatric, or emergency healthcare.
            </p>
          </section>

          {/* 2. NO-SHOW & REFUND */}
          <section className="space-y-4">
            <h2 className="font-serif text-xl text-chaos-navy">2. Cancellation & Refund Policy</h2>
            <p>
              We value your time and the commitment to your healing journey. However, once a session is booked and confirmed through payment, the following applies:
            </p>
            <ul className="list-disc ml-5 space-y-2">
              <li>Refunds are not issued for "No-shows" or sessions missed without 24-hour prior notice.</li>
              <li>Requests for rescheduling must be made at least 24 hours in advance to be honored.</li>
              <li>In the event that the practitioner needs to cancel, a full refund or immediate reschedule will be offered.</li>
            </ul>
          </section>

          {/* 3. CONFIDENTIALITY */}
          <section className="space-y-4">
            <h2 className="font-serif text-xl text-chaos-navy">3. Confidentiality & Privacy</h2>
            <p>
              Your privacy is paramount. All information shared during sessions is kept strictly confidential, except where disclosure is required by law (e.g., risk of harm to self or others, or legal subpoenas). Digital data is handled in compliance with standard privacy ethics.
            </p>
          </section>

          {/* 4. EMERGENCY SERVICES */}
          <section className="bg-white p-8 border border-chaos-sand/50 rounded-sm">
            <h2 className="font-serif text-xl text-chaos-teal mb-2">Emergency Notice</h2>
            <p className="text-sm italic">
              Cost of Chaos is not a crisis intervention service. If you are experiencing a mental health emergency or feeling suicidal, please contact your nearest hospital emergency room or local helplines immediately.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}