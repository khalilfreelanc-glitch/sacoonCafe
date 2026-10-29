'use client';

import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { BrandLogo } from './BrandLogo';
import { ShoppingBag, Globe, Menu, X, Coffee } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, setLanguage, t, totalItemsCount, cartTotal, setIsCartOpen } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      // Update active section based on scroll position
      const sections = ['home', 'menu', 'equipment', 'about', 'reviews', 'contact'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(`#${id}`);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Always render nav LTR regardless of page language direction
  // to prevent link order reversal and layout breakage
  const navLinks = [
    { href: '#home',      label: language === 'ps' ? 'لومړی مخ' : 'Home' },
    { href: '#menu',      label: language === 'ps' ? 'مینو'      : 'Menu' },
    { href: '#equipment', label: language === 'ps' ? 'تجهیزات'   : 'Equipment' },
    { href: '#about',     label: language === 'ps' ? 'زموږ پاره' : 'About' },
    { href: '#reviews',   label: language === 'ps' ? 'نظرونه'    : 'Reviews' },
    { href: '#contact',   label: language === 'ps' ? 'اړیکه'     : 'Contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'ps' ? 'en' : 'ps');
  };

  return (
    <header
      dir="ltr"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cafe-950/95 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/60 py-3'
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">

          {/* ── Brand Logo ── */}
          <a href="#home" className="shrink-0 group">
            <BrandLogo size="md" />
          </a>

          {/* ── Desktop Nav Links (always LTR order) ── */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'text-cafe-gold'
                      : 'text-zinc-400 hover:text-zinc-100'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cafe-gold" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* ── Right Side Actions ── */}
          <div className="flex items-center gap-2 shrink-0">

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-500/40 text-zinc-300 hover:text-white transition-all duration-200 text-xs font-semibold"
              title={language === 'ps' ? 'Switch to English' : 'پښتو ته بدلون'}
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{language === 'ps' ? 'EN' : 'پښتو'}</span>
            </button>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-cafe-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all duration-200 hover:shadow-amber-500/40 hover:scale-[1.03] active:scale-95"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="sm:hidden">Order</span>
              {totalItemsCount > 0 ? (
                <>
                  <span className="hidden sm:inline font-black">{cartTotal}</span>
                  <span className="hidden sm:inline text-[10px] font-semibold opacity-80">AFN</span>
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-cafe-950 text-cafe-gold text-[9px] font-black flex items-center justify-center border border-amber-500/60">
                    {totalItemsCount}
                  </span>
                </>
              ) : (
                <span className="hidden sm:inline">Order</span>
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 bg-cafe-950/98 backdrop-blur-2xl border border-white/8 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden">
            {/* Nav Links */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-amber-500/15 text-cafe-gold border border-amber-500/30'
                        : 'text-zinc-300 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <Coffee className="w-3.5 h-3.5 shrink-0 opacity-60" />
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </div>

            {/* Divider */}
            <div className="h-px bg-white/8 mb-4" />

            {/* Bottom actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => { toggleLanguage(); setMobileMenuOpen(false); }}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white text-sm font-semibold transition-colors"
              >
                <Globe className="w-4 h-4 text-amber-400" />
                <span>{language === 'ps' ? 'Switch to English' : 'بدلون پښتو ته'}</span>
              </button>

              <button
                onClick={() => { setIsCartOpen(true); setMobileMenuOpen(false); }}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-cafe-950 font-bold text-sm transition-colors shadow-lg shadow-amber-500/25"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>
                  {totalItemsCount > 0 ? `${cartTotal} AFN (${totalItemsCount})` : 'My Order'}
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
