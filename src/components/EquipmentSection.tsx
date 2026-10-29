'use client';

import React from 'react';
import Image from 'next/image';
import { useApp } from '../context/AppContext';
import { EQUIPMENT_ITEMS } from '../data/menu';
import { PackageCheck, CheckCircle2, MessageCircle, Sparkles, ArrowRight } from 'lucide-react';

export const EquipmentSection: React.FC = () => {
  const { language, t } = useApp();
  const isRtl = language === 'ps';

  return (
    <section id="equipment" className="relative py-28 scroll-mt-20 overflow-hidden">
      <div className="section-glow absolute top-0 left-0 right-0 h-px" />
      <div className="absolute inset-0 bg-[#090706]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse,rgba(232,160,32,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="max-w-2xl mb-16 space-y-4">
          <div className="badge-gold w-fit">
            <PackageCheck className="w-3 h-3" />
            <span>{t.equipment.badge}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            {t.equipment.title}
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed">{t.equipment.subtitle}</p>
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {EQUIPMENT_ITEMS.map(item => {
            const name = isRtl ? item.namePs : item.nameEn;
            const category = isRtl ? item.categoryPs : item.categoryEn;
            const description = isRtl ? item.descriptionPs : item.descriptionEn;
            const features = isRtl ? item.featuresPs : item.featuresEn;
            const wa = encodeURIComponent(
              isRtl
                ? `سلام سکون کافي! د «${item.namePs}» د عمده قیمت معلومات غواړم.`
                : `Hello Sacoon Cafe! I'd like to inquire about wholesale pricing for "${item.nameEn}".`
            );

            return (
              <div key={item.id} className="card-lift group flex flex-col rounded-3xl bg-[#15100d] border border-white/[0.06] overflow-hidden">
                {/* Image */}
                <div className="relative h-52 overflow-hidden flex-shrink-0">
                  <Image src={item.image} alt={item.nameEn} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#15100d] via-[#15100d]/30 to-transparent" />
                  <span className="absolute bottom-3 left-3 badge-gold text-[10px]">{category}</span>
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-5 gap-4">
                  <div>
                    <h3 className="font-bold text-white text-base leading-snug">{name}</h3>
                    <p className="text-xs text-zinc-500 mt-2 leading-relaxed">{description}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-1.5 flex-1">
                    {features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-zinc-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cafe-gold flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* WhatsApp CTA */}
                  <a
                    href={`https://wa.me/93708612009?text=${wa}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 hover:border-emerald-400/30 text-emerald-300 hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{t.equipment.inquireBtn}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Wholesale Banner ── */}
        <div className="relative rounded-4xl overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1400&auto=format&fit=crop"
              alt="Coffee wholesale"
              fill className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#090706] via-[#090706]/80 to-[#090706]/60" />
          </div>

          <div className="relative z-10 p-10 sm:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <div className="badge-gold w-fit">
                <Sparkles className="w-3 h-3" />
                <span>Commercial Cafe Solutions</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Opening a Cafe?<br />
                <span className="text-shimmer">We Supply Everything.</span>
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{t.equipment.wholesaleNotice}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href="https://wa.me/93708612009?text=Hello!%20I%20need%20wholesale%20cafe%20equipment%20pricing."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Get Wholesale Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
