'use client';

import React from 'react';
import Image from 'next/image';
import { useApp } from '../context/AppContext';
import { Coffee, ShieldCheck, HeartHandshake, Award, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { language, t } = useApp();
  const isRtl = language === 'ps';

  return (
    <section id="about" className="py-20 relative bg-cafe-900/40 border-y border-amber-950/40 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Side with Real-world Cafe Craftsmanship Photo */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-tr from-cafe-950 via-cafe-900 to-amber-950 border border-amber-800/40 p-6 shadow-2xl">
              
              <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-5 border border-amber-900/50 group">
                <Image
                  src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1000&auto=format&fit=crop"
                  alt="Sacoon Cafe Artisanal Coffee Preparation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cafe-950 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1.5 rounded-full bg-cafe-950/90 backdrop-blur-md border border-amber-500/40 text-cafe-gold text-xs font-bold shadow-lg">
                    Sacoon Cafe • Taste & Tranquility
                  </span>
                  <span className="text-[11px] text-zinc-300 font-medium bg-black/60 px-2.5 py-1 rounded-full">
                    Est. 2023
                  </span>
                </div>
              </div>

              {/* Stat Highlights */}
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="p-3.5 rounded-xl bg-cafe-850/80 border border-amber-900/40">
                  <div className="text-2xl font-black text-cafe-gold">100%</div>
                  <div className="text-xs text-zinc-300 font-medium">
                    Artisan Coffee & Quality
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-cafe-850/80 border border-amber-900/40">
                  <div className="text-2xl font-black text-cafe-gold">Wholesale</div>
                  <div className="text-xs text-zinc-300 font-medium">
                    Commercial Machines & Supplies
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-cafe-gold text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.about.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {t.about.title}
            </h2>

            <div className="space-y-4 text-base text-zinc-300 leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>

            {/* Three Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              
              <div className="p-4 rounded-xl bg-cafe-850/60 border border-amber-900/40 space-y-2 hover:border-amber-700/50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-cafe-gold">
                  <Coffee className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-sm">
                  {t.about.pillar1Title}
                </h4>
                <p className="text-xs text-zinc-400 leading-normal">
                  {t.about.pillar1Desc}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-cafe-850/60 border border-amber-900/40 space-y-2 hover:border-amber-700/50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-cafe-gold">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-sm">
                  {t.about.pillar2Title}
                </h4>
                <p className="text-xs text-zinc-400 leading-normal">
                  {t.about.pillar2Desc}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-cafe-850/60 border border-amber-900/40 space-y-2 hover:border-amber-700/50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-cafe-gold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-sm">
                  {t.about.pillar3Title}
                </h4>
                <p className="text-xs text-zinc-400 leading-normal">
                  {t.about.pillar3Desc}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
