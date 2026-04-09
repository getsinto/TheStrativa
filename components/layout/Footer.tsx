import Link from 'next/link';
import SectionLabel from '@/components/ui/SectionLabel';

const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F1113] text-white">
      <div className="container-custom pt-20 pb-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Left Column */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6 group">
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
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
              <span
                className="font-display text-[15px] tracking-[0.25em] text-white font-medium"
                style={{ letterSpacing: '0.25em' }}
              >
                STRATIVA
              </span>
            </Link>
            <p className="text-[13px] text-[#A89F91] mb-2">Delivery partnership led by</p>
            <p className="font-display text-[15px] text-white">
              Olusegun Olamide & Hiram Kanwal
            </p>
          </div>

          {/* Centre Column */}
          <div>
            <div className="mb-6">
              <SectionLabel light>Navigation</SectionLabel>
            </div>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-[#A89F91] hover:text-white transition-colors duration-150 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <div className="mb-6">
              <SectionLabel light>Get in touch</SectionLabel>
            </div>
            <div className="space-y-3">
              <a
                href="mailto:hello@thestrativa.com"
                className="text-[14px] text-[#A89F91] hover:text-[#2F5D62] transition-colors duration-150 block"
              >
                hello@thestrativa.com
              </a>
              <a
                href="/contact"
                className="text-[14px] text-[#A89F91] hover:text-white transition-colors duration-150 block"
              >
                Book a call
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[14px] text-[#A89F91] hover:text-white transition-colors duration-150 mt-4"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.5 0h-15C1.119 0 0 1.119 0 2.5v15C0 18.881 1.119 20 2.5 20h15c1.381 0 2.5-1.119 2.5-2.5v-15C20 1.119 18.881 0 17.5 0zM6.25 16.25H3.75V7.5h2.5v8.75zM5 6.25c-.828 0-1.5-.672-1.5-1.5S4.172 3.25 5 3.25s1.5.672 1.5 1.5S5.828 6.25 5 6.25zm11.25 10h-2.5v-4.375c0-1.044-.021-2.386-1.453-2.386-1.456 0-1.678 1.137-1.678 2.313v4.448h-2.5V7.5h2.4v1.194h.034c.334-.633 1.15-1.3 2.366-1.3 2.531 0 3 1.666 3 3.831v5.025z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#1E1E1E]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-[13px] text-[#525250]">
              © 2025 The Strativa · thestrativa.com
            </p>
            <p className="text-[13px] italic text-[#525250]">
              Programme delivery. Digital execution. Controlled outcomes.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
