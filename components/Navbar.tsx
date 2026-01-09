// components/Navbar.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Reusable Nav Links to keep code clean
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Support', href: '/support' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-chaos-cream border-b border-chaos-sand sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* Brand Name */}
        <Link href="/" className="text-xl font-bold tracking-[0.2em] text-chaos-teal uppercase">
          Cost of Chaos
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10 text-[12px] font-semibold tracking-[0.15em] uppercase text-chaos-navy">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="hover:text-chaos-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="bg-chaos-teal text-white px-8 py-3 rounded-full hover:bg-chaos-burgundy transition-all text-[11px]"
          >
            Book Session
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-chaos-teal p-2" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-chaos-cream border-t border-chaos-sand p-8 flex flex-col space-y-6 font-semibold uppercase text-xs tracking-widest animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)}>
              {link.name}
            </Link>
          ))}
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)} 
            className="text-chaos-gold pt-4 border-t border-chaos-sand"
          >
            Book Session
          </Link>
        </div>
      )}
    </nav>
  );
}