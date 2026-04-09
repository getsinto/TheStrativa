'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/insights', label: 'Insights' },
  { href: '/about', label: 'About' },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Pages with dark hero sections
  const darkHeroPages = ['/contact', '/insights', '/case-studies'];
  const hasDarkHero = darkHeroPages.some(page => pathname.startsWith(page));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
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

  // Use white background on dark hero pages when not scrolled
  const shouldUseWhiteBg = isScrolled || hasDarkHero;

  const navStyle = {
    backgroundColor: shouldUseWhiteBg ? 'rgba(247, 246, 243, 0.95)' : 'transparent',
    backdropFilter: shouldUseWhiteBg ? 'blur(12px)' : 'none',
    borderBottom: shouldUseWhiteBg ? '1px solid #E8E6E1' : '1px solid transparent',
    transition: 'background-color 300ms ease, border-color 300ms ease, backdrop-filter 300ms ease',
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] h-20" style={navStyle} aria-label="Main navigation">
        <div className="container-custom h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:scale-110"
              >
                <path
                  d="M16 4C12 4 9 6 9 9C9 11 10 12 12 13C10 14 8 15 8 18C8 21 11 24 16 24C21 24 24 21 24 18C24 15 22 14 20 13C22 12 23 11 23 9C23 6 20 4 16 4Z"
                  stroke="#2F5D62"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
              <span
                className="font-display text-[15px] tracking-[0.25em] text-[#0F1113] font-medium"
                style={{ letterSpacing: '0.25em' }}
              >
                STRATIVA
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-[14px] font-normal text-[#0F1113] transition-colors duration-200 hover:text-[#2F5D62]"
                  style={{ letterSpacing: '0.02em' }}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#2F5D62]"></span>
                  )}
                </Link>
              ))}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm uppercase tracking-widest bg-[#2F5D62] text-white transition-all duration-200 hover:bg-[#1E3D40] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F5D62] focus-visible:ring-offset-2"
              >
                Start a Conversation
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative z-[110]"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <span
                className={`block w-5 h-[1.5px] bg-[#0F1113] transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-[3px]' : ''
                }`}
              />
              <span
                className={`block w-5 h-[1.5px] bg-[#0F1113] mt-[5px] transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-5 h-[1.5px] bg-[#0F1113] mt-[5px] transition-all duration-300 ${
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
          className="fixed inset-0 bg-black/40 z-[90] md:hidden transition-opacity duration-350"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full bg-[#F7F6F3] z-[95] md:hidden transition-transform duration-350 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          transition: 'transform 350ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div className="flex flex-col items-center justify-center h-full px-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-display text-[32px] text-[#0F1113] mb-8 transition-colors duration-200 hover:text-[#2F5D62]"
              style={{
                transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center px-8 py-4 text-sm uppercase tracking-widest bg-[#2F5D62] text-white transition-all duration-200 hover:bg-[#1E3D40] mt-4"
          >
            Start a Conversation
          </Link>
        </div>
      </div>
    </>
  );
}
