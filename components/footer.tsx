'use client';

import { Instagram, Linkedin, Plane, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Speakers', href: '/speakers' },
  { name: 'Sponsors', href: '/sponsors' },
  { name: 'Agenda', href: '/agenda' },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8 px-4 mt-16 border-t border-gray-800">
      <div className="w-[90%] max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-10">
        {/* Brand Section */}
        <div>
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow">
              <Plane className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AAIS 2025
              </span>
              <p className="text-xs text-gray-400">
                Aviation Innovation Summit
              </p>
            </div>
          </Link>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-sm">
            Driving innovation and collaboration in African aviation. Join us in
            shaping the future of flight.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 mt-4">
            <a
              href="https://linkedin.com/company/aais2025"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white transition" />
            </a>
            <a
              href="https://twitter.com/aais2025"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white transition" />
            </a>
            <a
              href="https://youtube.com/@aais2025"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5 text-gray-400 hover:text-white transition" />
            </a>
            <a
              href="https://instagram.com/aais2025"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white transition" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm">
            {navLinks.map(link => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-white transition">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="text-sm space-y-2">
            <li>
              Email:{' '}
              <a href="mailto:info@aais2025.com" className="hover:text-white">
                info@aais2025.com
              </a>
            </li>
            <li>
              Phone:{' '}
              <a href="tel:+254716851914" className="hover:text-white">
                +254 716 851 914
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="text-sm space-y-2">
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-center text-gray-500">
        &copy; {new Date().getFullYear()} Africa Aviation Innovation Summit. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
