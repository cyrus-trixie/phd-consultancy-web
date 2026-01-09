import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-chaos-navy text-white pt-24 pb-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* 1. BRAND COLUMN */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl text-chaos-gold">Cost of Chaos</h3>
            <p className="text-white/60 text-sm font-light leading-relaxed">
              The Psychology of Becoming. <br />
              Empowering women to rediscover themselves beneath the noise of life.
            </p>
          </div>

          {/* 2. QUICK LINKS */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-chaos-gold">Navigation</h4>
            <ul className="space-y-4 text-sm font-light text-white/80">
              <li><Link href="/" className="hover:text-chaos-gold transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-chaos-gold transition-colors">About Lynne</Link></li>
              <li><Link href="/support" className="hover:text-chaos-gold transition-colors">Support Sessions</Link></li>
              <li><Link href="/book" className="hover:text-chaos-gold transition-colors">Book a Session</Link></li>
            </ul>
          </div>

          {/* 3. CONTACT & LOCATION */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-chaos-gold">Connect</h4>
            <ul className="space-y-4 text-sm font-light text-white/80">
              <li>Nairobi, Kenya</li>
              <li>Online Sessions Worldwide</li>
              <li className="pt-2 italic text-chaos-gold">lynne@costofchaos.com</li>
            </ul>
          </div>

          {/* 4. NEWSLETTER / CALL TO ACTION */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-chaos-gold">Availability</h4>
            <p className="text-sm font-light text-white/70 leading-relaxed">
              Currently accepting new clients for online and in-person support.
            </p>
            <Link href="/contact" className="inline-block border-b border-chaos-gold pb-1 text-xs font-bold uppercase tracking-widest hover:text-chaos-gold transition-all">
              Inquire Today
            </Link>
          </div>
        </div>

        {/* PROFESSIONAL DISCLAIMER (Crucial for PhD Candidates) */}
        <div className="border-t border-white/10 pt-12 pb-8">
          <p className="text-[11px] text-white/40 leading-relaxed max-w-5xl">
            <span className="text-white/60 font-medium">Professional Notice:</span> Cost of Chaos is a women-focused support practice led by Lynne, PhD Candidate in Clinical Psychology. All services are supportive and provided under professional supervision. These services do not replace emergency, psychiatric, or medical care. If you are in a crisis, please contact your local emergency services immediately.
          </p>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5">
          <p className="text-[10px] text-white/30 uppercase tracking-widest">
            © {currentYear} Cost of Chaos. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] text-white/30 uppercase tracking-widest font-bold">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}