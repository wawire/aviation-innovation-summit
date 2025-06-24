'use client';

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-primary text-white w-full">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="py-10 md:py-12">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="mb-6 text-white/80 max-w-md">
              Interested in sponsorship opportunities or have questions about
              the summit? Reach out to our team.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex flex-col items-center">
                <div className="p-2.5 rounded-full bg-white/10 mb-3">
                  <Mail className="h-5 w-5" />
                </div>
                <h4 className="font-bold">Email Us</h4>
                <p className="text-white/80">aais@kenya-airways.com</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="p-2.5 rounded-full bg-white/10 mb-3">
                  <Phone className="h-5 w-5" />
                </div>
                <h4 className="font-bold">Call Us</h4>
                <p className="text-white/80">+254 700 123 456</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="p-2.5 rounded-full bg-white/10 mb-3">
                  <MapPin className="h-5 w-5" />
                </div>
                <h4 className="font-bold">Location</h4>
                <p className="text-white/80">Mombasa Kenya</p>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-medium mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <Link
                  href="https://www.facebook.com/KenyaAirways.OuestAfrica/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                </Link>
                <Link
                  href="https://x.com/KenyaAirways?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Twitter className="h-4 w-4" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/kenya-airways/?originalSubdomain=ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
                <Link
                  href="https://www.instagram.com/officialkenyaairways/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">AAIS 2025</h3>
              <p className="text-white/70 text-sm mt-1">
                Africa Aviation Innovation Summit 2025
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#about"
                className="text-white/70 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="#sponsors"
                className="text-white/70 hover:text-white transition-colors"
              >
                Sponsors
              </Link>
              <Link
                href="#agenda"
                className="text-white/70 hover:text-white transition-colors"
              >
                Agenda
              </Link>
              <Link
                href="#venue"
                className="text-white/70 hover:text-white transition-colors"
              >
                Venue
              </Link>
            </div>
          </div>

          <div className="mt-6 text-center text-white/70 text-sm">
            <p>
              © {new Date().getFullYear()} Africa Aviation Innovation Summit.
              All rights reserved.
            </p>
            <p className="mt-1">Organized by Kenya Airways PLC and AFRAA</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
