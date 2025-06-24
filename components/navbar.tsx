'use client';

import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'About the Summit', href: '#about' },
    { name: 'Sponsors', href: '#sponsors' },
    // { name: 'Agenda', href: '#agenda' },
    // { name: 'Venue', href: '#venue' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo with conditional switching */}
          <Link href="/" className="flex items-center">
            {isScrolled ? (
              <img
                src="/images/aais2025-logo-secondary.svg"
                alt="AAIS 2025 Logo"
                className="h-12 md:h-16 transition-opacity duration-300"
              />
            ) : (
              <img
                src="/images/aais2025-logo-primary.svg"
                alt="AAIS 2025 Logo"
                className="h-12 md:h-16 transition-opacity duration-300"
              />
            )}
          </Link>

          {/* Desktop Navigation with conditional text color */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors ${
                  isScrolled
                    ? 'text-black dark:text-white hover:text-primary'
                    : 'text-white hover:text-white/80'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button
              className="bg-primary hover:bg-primary/90 text-white"
              asChild
            >
              <a
                href="https://rb.gy/lxopum"
                target="_blank"
                rel="noopener noreferrer"
              >
                Become a Sponsor
              </a>
            </Button>
          </nav>

          {/* Mobile Navigation Toggle with conditional color */}
          <div className="flex items-center md:hidden gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className={
                isScrolled ? 'text-black dark:text-white' : 'text-white'
              }
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-background">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-black dark:text-white hover:text-primary transition-colors px-4 py-2 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-4 py-2">
                <Button className="bg-primary hover:bg-primary/90 text-white w-full">
                  Become a Sponsor
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
