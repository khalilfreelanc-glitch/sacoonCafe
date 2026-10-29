'use client';

import React from 'react';
import Image from 'next/image';
import { useApp } from '../context/AppContext';
import { TESTIMONIALS } from '../data/menu';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const { language, t } = useApp();
  const isRtl = language === 'ps';

  return (
    <section id="reviews" className="relative py-28 scroll-mt-20 overflow-hidden">
      <div className="section-glow absolute top-0 left-0 right-0 h-px" />
      <div className="absolute inset-0 bg-[#0f0b09]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="badge-gold mx-auto w-fit">
            <Star className="w-3 h-3 fill-current" />
            <span>{t.reviews.badge}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">{t.reviews.title}</h2>
          <p className="text-zinc-400 max-w-lg mx-auto text-base">{t.reviews.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((item, i) => (
            <div key={item.id} className={`card-lift flex flex-col p-7 rounded-3xl bg-[#15100d] border border-white/[0.06] gap-5 ${i === 1 ? 'md:-translate-y-4' : ''}`}>
              <Quote className="w-8 h-8 text-cafe-gold/40" />

              <div className="flex gap-0.5">
                {[...Array(item.rating)].map((_,j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-cafe-gold text-cafe-gold" />
                ))}
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed flex-1 italic">
                "{isRtl ? item.commentPs : item.commentEn}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.05]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center font-black text-sm text-[#1c1108] shadow-gold-sm">
                  {item.name[0]}
                </div>
                <div>
                  <p className="font-bold text-white text-sm">{item.name}</p>
                  <p className="text-xs text-cafe-gold font-medium">{isRtl ? item.rolePs : item.roleEn}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
