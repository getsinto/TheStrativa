'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/insights', label: 'Insights' },
  { href: '/about', label: 'About' },
  { href: '/pricing', label: 'Pricing' },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200' 
            : 'bg-transparent'
        }`}
        aria-label="Main navigation"
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-3 group relative z-[110]"
              onClick={() => setIsOpen(false)}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:scale-105"
              >
                <path
                  d="M16 4C12 4 9 6 9 9C9 11 10 12 12 13C10 14 8 15 8 18C8 21 11 24 16 24C21 24 24 21 24 18C24 15 22 14 20 13C22 12 23 11 23 9C23 6 20 4 16 4Z"
                  stroke="#0A5F5F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
              <div className="flex flex-col">
                <span className="font-display text-[11px] tracking-[0.15em] text-neutral-900 font-semibold uppercase leading-tight">
                  STRATORA
                </span>
                <span className="font-display text-[9px] tracking-[0.15em] text-neutral-600 font-normal uppercase leading-tight">
                  CONSULTING
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                    pathname === link.href 
                      ? 'text-primary-teal bg-primary-teal/5' 
                      : 'text-neutral-700 hover:text-primary-teal hover:bg-neutral-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="ml-4 px-6 py-2.5 text-sm font-semibold bg-primary-teal text-white rounded-lg hover:bg-primary-teal/90 transition-all duration-200 hover:shadow-md"
              >
                Get in touch
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 relative z-[110]"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <span
                className={`block w-5 h-[2px] bg-neutral-900 transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-[3px]' : ''
                }`}
              />
              <span
                className={`block w-5 h-[2px] bg-neutral-900 mt-[5px] transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-5 h-[2px] bg-neutral-900 mt-[5px] transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-[3px]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[90] lg:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-[95] lg:hidden transition-transform duration-300 shadow-2xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full px-8 pt-24 pb-20 overflow-y-auto">
          {/* Navigation Links */}
          <nav className="flex-1 flex flex-col space-y-2 min-h-0">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-display text-2xl py-3 transition-all duration-300 hover:text-primary-teal hover:translate-x-2 ${
                  pathname === link.href ? 'text-primary-teal font-semibold' : 'text-neutral-900'
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="pt-8 border-t border-neutral-200 flex-shrink-0">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center px-8 py-4 text-sm font-semibold bg-primary-teal text-white rounded-lg hover:bg-primary-teal/90 transition-all duration-200"
            >
              Get in touch
            </Link>
            
            {/* Contact Info */}
            <div className="mt-6 text-center pb-4">
              <p className="text-sm text-neutral-600 mb-2">Or email us at</p>
              <a
                href="mailto:hello@stratoraconsulting.com"
                className="text-sm text-primary-teal hover:text-primary-teal/80 font-medium transition-colors break-words"
              >
                hello@stratoraconsulting.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
