'use client';

import React from 'react';
import { useApp } from '../context/AppContext';
import { BrandLogo } from './BrandLogo';
import { Coffee, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, t } = useApp();
  const isRtl = language === 'ps';

  return (
    <footer className="bg-cafe-950 border-t border-amber-950/70 pt-16 pb-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-amber-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <BrandLogo size="md" />
            <p className="text-xs text-zinc-400 leading-relaxed">
              {t.brand.tagline}
            </p>
            <p className="text-xs text-cafe-gold font-semibold">
              "Tranquility & Taste in Every Cup"
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <a href="#home" className="hover:text-cafe-gold transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-cafe-gold transition-colors">
                  {t.nav.menu}
                </a>
              </li>
              <li>
                <a href="#equipment" className="hover:text-cafe-gold transition-colors">
                  {t.nav.equipment}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cafe-gold transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cafe-gold transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t.footer.workingHours}
            </h4>
            <div className="text-xs text-zinc-400 space-y-1.5 leading-relaxed">
              <p className="text-zinc-300 font-medium">
                {isRtl ? 'شنبې – پنجشنبې:' : 'Saturday – Thursday:'}
              </p>
              <p>7:00 AM – 10:30 PM</p>
              <p className="text-zinc-300 font-medium pt-1">
                {isRtl ? 'جمعه:' : 'Friday:'}
              </p>
              <p>2:00 PM – 10:30 PM</p>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t.footer.contactInfo}
            </h4>
            <div className="text-xs text-zinc-400 space-y-2.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cafe-gold flex-shrink-0 mt-0.5" />
                <span>Madad Chowk, Kandahar, Afghanistan • مدد چوک، کندهار، افغانستان</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href="tel:+93708612009"
                  dir="ltr"
                  className="font-mono text-zinc-200 hover:text-cafe-gold transition-colors font-semibold"
                >
                  +93 70 861 2009
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a
                  href="mailto:sacooncoffee@gmail.com"
                  className="text-zinc-200 hover:text-cafe-gold transition-colors"
                >
                  sacooncoffee@gmail.com
                </a>
              </div>

              <div className="pt-1">
                <a
                  href="https://wa.me/93708612009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-600/40 text-emerald-300 hover:text-white text-xs font-bold transition-colors shadow"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp (+93 70 861 2009)</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 border-t border-amber-950/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>{t.footer.rights}</p>
          <p className="flex items-center gap-1.5">
            <span>Crafted with care for Sacoon Cafe</span>
            <Coffee className="w-3.5 h-3.5 text-cafe-gold inline" />
          </p>
        </div>
      </div>
    </footer>
  );
};
