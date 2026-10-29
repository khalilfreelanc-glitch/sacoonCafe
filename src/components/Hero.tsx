'use client';

import React from 'react';
import Image from 'next/image';
import { useApp } from '../context/AppContext';
import { Coffee, ArrowRight, MessageCircle, PackageCheck, Star, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const { language, t } = useApp();
  const isRtl = language === 'ps';

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* ── Background layers ── */}
      <div className="absolute inset-0 bg-[#090706]" />

      {/* Atmospheric photo layer */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1509785307050-d4066910ec1e?q=80&w=1800&auto=format&fit=crop"
          alt="Sacoon Cafe Atmosphere"
          fill
          className="object-cover object-center opacity-20"
          priority
        />
        {/* Dark vignette over photo */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#090706]/60 via-[#090706]/40 to-[#090706]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090706] via-transparent to-[#090706]/70" />
      </div>

      {/* Hero glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse,rgba(232,160,32,0.12)_0%,transparent_70%)] pointer-events-none" />

      {/* Subtle grain */}
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`}} />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Copy */}
          <div className="space-y-8">

            {/* Badge */}
            <div className="badge-gold w-fit">
              <Star className="w-3 h-3 fill-current" />
              <span>Kandahar's Finest Specialty Cafe</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight text-white">
                Where Every{' '}
                <span className="text-shimmer">Sip</span>{' '}
                <br />Brings Peace.
              </h1>
              {isRtl && (
                <p className="text-2xl font-bold text-amber-300/80" dir="rtl">
                  سکون — د هر کافي سره ارامتیا
                </p>
              )}
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-lg font-normal">
              {t.hero.description}
            </p>

            {/* Wholesale ribbon */}
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.04] border border-white/[0.07] backdrop-blur-sm">
              <div className="mt-0.5 w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                <PackageCheck className="w-4 h-4 text-cafe-gold" />
              </div>
              <div>
                <p className="text-xs font-bold text-amber-300 mb-0.5 uppercase tracking-wider">Wholesale & Retail Supplier</p>
                <p className="text-xs text-zinc-400 leading-relaxed">Coffee machines, barista tools, espresso grinders & premium premixes — available wholesale.</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <a href="#menu" className="btn-gold inline-flex items-center gap-2.5 px-6 py-3.5 text-sm">
                <Coffee className="w-4 h-4" />
                <span>Explore Menu</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/93708612009"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/25 hover:border-emerald-400/40 text-emerald-300 hover:text-white font-bold text-sm transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Order</span>
              </a>

              <a
                href="#equipment"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.08] text-zinc-300 hover:text-white font-semibold text-sm transition-all duration-200"
              >
                <PackageCheck className="w-4 h-4 text-cafe-gold" />
                <span>Equipment</span>
              </a>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-0 pt-2">
              {[
                { val: 'Est. 2023', sub: 'Founded' },
                { val: '17+', sub: 'Drinks on Menu' },
                { val: 'Wholesale', sub: 'Cafe Supplies' },
              ].map((s, i) => (
                <div key={i} className={`py-4 ${i > 0 ? 'border-l border-white/[0.06] pl-6' : ''}`}>
                  <div className="text-xl sm:text-2xl font-black text-white">{s.val}</div>
                  <div className="text-[11px] text-zinc-500 font-medium mt-0.5 uppercase tracking-wider">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual card stack */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-sm">

              {/* Back card shadow */}
              <div className="absolute inset-0 translate-y-4 translate-x-4 rounded-4xl bg-amber-500/5 border border-amber-500/10" />

              {/* Main card */}
              <div className="relative rounded-4xl overflow-hidden border border-white/[0.08] shadow-card-hover bg-[#15100d] animate-float">

                {/* Featured image */}
                <div className="relative h-72">
                  <Image
                    src="https://images.unsplash.com/photo-1561047029-3000c68339ca?q=80&w=800&auto=format&fit=crop"
                    alt="Sacoon Cafe Signature Latte"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#15100d] via-transparent to-transparent" />

                  {/* Floating label top */}
                  <div className="absolute top-4 left-4 glass-gold rounded-full px-3 py-1.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-semibold text-white">Freshly Brewed</span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white">Signature Latte</h3>
                      <p className="text-xs text-zinc-500">Handcrafted Rosette Art</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-cafe-gold">60</div>
                      <div className="text-xs text-zinc-500 font-medium">AFN</div>
                    </div>
                  </div>

                  {/* 3 mini drink circles */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { img: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=200&auto=format&fit=crop', name: 'Espresso', price: '40 AFN' },
                      { img: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=200&auto=format&fit=crop', name: 'Iced Latte', price: '60 AFN' },
                      { img: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?q=80&w=200&auto=format&fit=crop', name: 'Mokaccino', price: '70 AFN' },
                    ].map((d) => (
                      <div key={d.name} className="group flex flex-col items-center gap-1.5 p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.05] transition-all cursor-pointer">
                        <div className="w-12 h-12 rounded-full overflow-hidden border border-amber-500/20 ring-2 ring-transparent group-hover:ring-amber-500/30 transition-all">
                          <Image src={d.img} alt={d.name} width={48} height={48} className="w-full h-full object-cover" />
                        </div>
                        <span className="text-[10px] font-semibold text-zinc-300 text-center leading-tight">{d.name}</span>
                        <span className="text-[10px] font-bold text-cafe-gold">{d.price}</span>
                      </div>
                    ))}
                  </div>

                  <a href="#menu" className="btn-gold w-full py-3 text-sm flex items-center justify-center gap-2">
                    <span>View Full Menu</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Floating review badge */}
              <div className="absolute -bottom-4 -left-6 glass-gold rounded-2xl p-3 flex items-center gap-3 shadow-gold-md">
                <div className="flex -space-x-1.5">
                  {['bg-amber-500','bg-orange-400','bg-yellow-500'].map((c,i) => (
                    <div key={i} className={`w-7 h-7 rounded-full ${c} border-2 border-[#15100d] flex items-center justify-center text-xs font-black text-[#15100d]`}>
                      {['A','Z','M'][i]}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-xs font-bold text-white">5.0 Rating</div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_,i) => <Star key={i} className="w-2.5 h-2.5 fill-cafe-gold text-cafe-gold" />)}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-float">
        <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold">Scroll</span>
        <ChevronDown className="w-4 h-4 text-zinc-500" />
      </div>
    </section>
  );
};
