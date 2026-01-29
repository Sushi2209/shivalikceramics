import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              SHIVALIK <span className="gold-accent">CERAMICS</span>
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Premium quality tiles for your dream home. Wide range of designs from classic to contemporary.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-slate-400 hover:text-amber-600 transition-colors text-sm">
                About Us
              </Link>
              <Link to="/products" className="block text-slate-400 hover:text-amber-600 transition-colors text-sm">
                Products
              </Link>
              <Link to="/reviews" className="block text-slate-400 hover:text-amber-600 transition-colors text-sm">
                Customer Reviews
              </Link>
              <Link to="/contact" className="block text-slate-400 hover:text-amber-600 transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0 gold-accent" />
                <p className="text-slate-400 text-sm">
                  Gurukrupa Apartment, Birla College Rd, near Sandeep Hotel, West, Bhoirwadi, Kalyan, Maharashtra 421301
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="gold-accent" />
                <a href="tel:9920511651" className="text-slate-400 hover:text-amber-600 transition-colors text-sm">
                  +91 9920511651
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Shivalik Ceramics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;