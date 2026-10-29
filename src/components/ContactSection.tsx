'use client';

import React from 'react';
import Image from 'next/image';
import { useApp } from '../context/AppContext';
import { MapPin, Phone, Clock, MessageCircle, QrCode, Mail, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { language, t } = useApp();
  const isRtl = language === 'ps';

  return (
    <section id="contact" className="py-20 relative bg-cafe-900/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-cafe-gold text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-4 h-4 text-cafe-gold" />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.contact.title}
          </h2>
          <p className="mt-3 text-base text-zinc-300">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Details Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Direct Phone & WhatsApp */}
            <div className="p-6 rounded-2xl bg-cafe-850/80 border border-amber-900/40 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">
                {t.contact.phoneTitle}
              </h3>
              <p className="text-sm text-zinc-200 font-mono font-bold" dir="ltr">
                <a href="tel:+93708612009" className="hover:text-cafe-gold transition-colors">
                  +93 70 861 2009
                </a>
              </p>
              <a
                href="https://wa.me/93708612009"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-bold"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>{t.contact.openWhatsApp}</span>
              </a>
            </div>

            {/* Email Address */}
            <div className="p-6 rounded-2xl bg-cafe-850/80 border border-amber-900/40 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-cafe-gold">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">
                Email Address
              </h3>
              <p className="text-sm text-zinc-200 font-mono" dir="ltr">
                <a href="mailto:sacooncoffee@gmail.com" className="hover:text-cafe-gold transition-colors underline-offset-4 hover:underline">
                  sacooncoffee@gmail.com
                </a>
              </p>
              <p className="text-xs text-zinc-400">
                Inquiries, feedback & cafe wholesale support
              </p>
            </div>

            {/* Address */}
            <div className="p-6 rounded-2xl bg-cafe-850/80 border border-amber-900/40 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-cafe-gold">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">
                {t.contact.addressTitle}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {t.contact.addressValue}
              </p>
            </div>

            {/* Hours */}
            <div className="p-6 rounded-2xl bg-cafe-850/80 border border-amber-900/40 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-cafe-gold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">
                {t.contact.hoursTitle}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 whitespace-pre-line leading-relaxed">
                {t.contact.hoursValue}
              </p>
            </div>

          </div>

          {/* QR Code & Direct Connect Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-cafe-900 to-cafe-950 border border-amber-800/40 shadow-2xl text-center">
            
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 text-cafe-gold text-xs font-bold mb-4">
                <QrCode className="w-3.5 h-3.5" />
                <span>{isRtl ? 'د مینو او چټ کوډ' : 'Scan to Connect'}</span>
              </span>
              
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                {isRtl ? 'سکون کافي سره مستقیم په اړیکه کې شئ' : 'Connect Instantly with Sacoon Cafe'}
              </h3>
              
              <p className="text-xs sm:text-sm text-zinc-400 max-w-sm mx-auto mb-6">
                {isRtl
                  ? 'د خپل ګرځنده تلیفون د کامرې له لارې دا کیو آر کوډ سکین کړئ یا لاندې تڼۍ کېکاږئ.'
                  : 'Scan this official QR code with your mobile camera or tap below to message us directly on WhatsApp.'}
              </p>
            </div>

            {/* QR Code display */}
            <a
              href="https://wa.me/93708612009"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mx-auto p-4 bg-white rounded-2xl shadow-xl border-4 border-amber-500/40 mb-4 transition-transform hover:scale-105 group"
              title="Click or scan to chat on WhatsApp"
            >
              <Image
                src="/images/sacoon_whatsapp_qr.png"
                alt="Sacoon Cafe WhatsApp QR Code (+93 70 861 2009)"
                width={170}
                height={170}
                className="w-40 h-40 object-contain"
                priority
              />
              <span className="block text-[10px] text-zinc-600 font-bold mt-2 uppercase tracking-wider group-hover:text-emerald-700">
                Scan or Click to Chat
              </span>
            </a>

            {/* Direct Button */}
            <a
              href="https://wa.me/93708612009"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-transform hover:scale-[1.02] active:scale-95"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t.contact.openWhatsApp} (+93 70 861 2009)</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
