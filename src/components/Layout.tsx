import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { BUSINESS_INFO, ASSETS } from '@/src/constants';
import { Button } from './UI';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { 
      name: 'Services', 
      path: '#',
      dropdown: [
        { name: 'Excavation Contractor', path: '/excavation' },
        { name: 'Rock Delivery', path: '/rock-delivery' }
      ]
    },
    { 
      name: 'Reviews', 
      path: '#',
      dropdown: [
        { name: 'Read Reviews', path: '/read-reviews' },
        { name: 'Leave a Review', path: '/leave-review' }
      ]
    },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-400 px-6 md:px-12",
        isScrolled ? "bg-near-black/95 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="relative z-50">
          <img 
            src={ASSETS.logo} 
            alt="Molteni Logo" 
            className="h-10 md:h-12 invert brightness-0 transition-all duration-400"
            style={{ height: isScrolled ? '40px' : '52px' }}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link 
                to={link.path}
                className={cn(
                  "font-condensed text-[0.95rem] font-medium uppercase tracking-widest transition-colors duration-300 flex items-center gap-1",
                  location.pathname === link.path ? "text-primary-teal" : "text-white hover:text-primary-teal"
                )}
              >
                {link.name}
                {link.dropdown && <ChevronDown size={14} />}
              </Link>
              
              {/* Dropdown */}
              {link.dropdown && (
                <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-near-black border-t-2 border-primary-teal min-w-[200px] shadow-xl">
                    {link.dropdown.map((sub) => (
                      <Link 
                        key={sub.name}
                        to={sub.path}
                        className="block px-6 py-3 text-white font-condensed text-sm uppercase tracking-wider hover:bg-primary-teal/10 hover:border-l-4 hover:border-primary-teal transition-all"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Underline sweep */}
              <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary-teal scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right group-hover:origin-left" />
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a href={`tel:${BUSINESS_INFO.phone}`}>
            <Button variant="primary" className="py-2 px-6">
              {BUSINESS_INFO.phone}
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-near-black/98 z-40 flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <div key={link.name} className="text-center">
                {link.dropdown ? (
                  <div className="space-y-4">
                    <span className="font-display text-4xl text-white/50 uppercase">{link.name}</span>
                    <div className="flex flex-col space-y-4">
                      {link.dropdown.map((sub) => (
                        <Link 
                          key={sub.name}
                          to={sub.path}
                          className="font-display text-3xl text-white hover:text-primary-teal transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link 
                    to={link.path}
                    className="font-display text-5xl text-white hover:text-primary-teal transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <a href={`tel:${BUSINESS_INFO.phone}`} className="pt-8">
              <Button variant="primary" className="text-xl px-12 py-4">
                Call Now
              </Button>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-near-black text-white pt-20 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="space-y-6">
          <img src={ASSETS.logo} alt="Molteni Logo" className="h-12 invert brightness-0" />
          <p className="text-white/45 font-body text-sm leading-relaxed">
            Family-owned excavation, sand, gravel and dirt work company serving Northeast Texas and surrounding areas. Based in Sulphur Bluff, TX.
          </p>
        </div>

        {/* Navigate */}
        <div>
          <h4 className="font-condensed text-primary-teal text-sm font-bold uppercase tracking-[0.2em] mb-6">Navigate</h4>
          <ul className="space-y-3">
            {['Home', 'About Us', 'Services', 'Gallery', 'Reviews', 'Contact Us'].map(item => (
              <li key={item}>
                <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="text-white/70 hover:text-primary-teal transition-colors text-sm">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-condensed text-primary-teal text-sm font-bold uppercase tracking-[0.2em] mb-6">Services</h4>
          <ul className="space-y-3">
            {BUSINESS_INFO.services.map(item => {
              const isDelivery = item.toLowerCase().includes('sand') || item.toLowerCase().includes('rock') || item.toLowerCase().includes('gravel');
              return (
                <li key={item}>
                  <Link to={isDelivery ? '/rock-delivery' : '/excavation'} className="text-white/70 hover:text-primary-teal transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-condensed text-primary-teal text-sm font-bold uppercase tracking-[0.2em] mb-6">Contact</h4>
          <ul className="space-y-4">
            <li className="text-white/70 text-sm">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-primary-teal transition-colors">{BUSINESS_INFO.phone}</a>
            </li>
            <li className="text-white/70 text-sm">
              <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-primary-teal transition-colors break-all">{BUSINESS_INFO.email}</a>
            </li>
            <li className="text-white/70 text-sm">
              {BUSINESS_INFO.address}
            </li>
            <li>
              <Link to="/leave-review" className="text-primary-teal font-bold text-sm uppercase tracking-wider hover:underline">
                Leave a Review
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-white/30 text-xs text-center md:text-left">
          © {new Date().getFullYear()} Aldo Molteni Trucking and Excavation Inc. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href={BUSINESS_INFO.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 border border-white/15 flex items-center justify-center text-xs font-bold hover:bg-primary-teal hover:border-primary-teal transition-all"
          >
            FB
          </a>
        </div>
      </div>
    </footer>
  );
};
