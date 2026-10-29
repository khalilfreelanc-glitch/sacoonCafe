'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { useApp } from '../context/AppContext';
import { MENU_ITEMS } from '../data/menu';
import { MenuCategory, MenuItem } from '../types';
import { Search, Plus, Sparkles, Flame, Snowflake, Coffee, Check, AlertCircle } from 'lucide-react';

export const MenuSection: React.FC = () => {
  const { language, t, addToCart } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [itemSizes, setItemSizes] = useState<Record<string, 'regular' | 'large'>>({});
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});
  const isRtl = language === 'ps';

  const categories: { key: MenuCategory; label: string; icon: React.ReactNode; color: string }[] = [
    { key: 'all',           label: t.menu.filterAll,     icon: <Coffee className="w-3.5 h-3.5" />,    color: 'text-zinc-300' },
    { key: 'hot',           label: t.menu.filterHot,     icon: <Flame className="w-3.5 h-3.5" />,     color: 'text-orange-400' },
    { key: 'ice',           label: t.menu.filterIce,     icon: <Snowflake className="w-3.5 h-3.5" />, color: 'text-sky-400' },
    { key: 'tea_chocolate', label: t.menu.filterTeaChoc, icon: <Sparkles className="w-3.5 h-3.5" />,  color: 'text-amber-400' },
  ];

  const handleSizeChange = (itemId: string, size: 'regular' | 'large') =>
    setItemSizes(p => ({ ...p, [itemId]: size }));

  const handleAddToCart = (item: MenuItem) => {
    const size = itemSizes[item.id] || 'regular';
    addToCart(item, size);
    setAddedItemIds(p => ({ ...p, [item.id]: true }));
    setTimeout(() => setAddedItemIds(p => ({ ...p, [item.id]: false })), 1400);
  };

  const filteredItems = useMemo(() =>
    MENU_ITEMS.filter(item => {
      const matchCat = selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch = !q || item.nameEn.toLowerCase().includes(q) || item.namePs.includes(q) || item.descriptionEn.toLowerCase().includes(q);
      return matchCat && matchSearch;
    }),
    [selectedCategory, searchQuery]
  );

  return (
    <section id="menu" className="relative py-28 scroll-mt-20 overflow-hidden">
      {/* Section top divider glow */}
      <div className="section-glow absolute top-0 left-0 right-0 h-px" />

      {/* Subtle bg texture */}
      <div className="absolute inset-0 bg-[#0f0b09]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(232,160,32,0.06)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-16 space-y-4">
          <div className="badge-gold mx-auto w-fit">
            <Coffee className="w-3 h-3" />
            <span>Signature Beverages</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            {t.menu.title}
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-base leading-relaxed">
            {t.menu.subtitle}
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/[0.08] border border-amber-500/20 text-amber-300 text-xs font-semibold">
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{t.menu.largeSizeNotice}</span>
          </div>
        </div>

        {/* ── Filters + Search ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">

          {/* Category pills */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {categories.map(cat => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 border ${
                  selectedCategory === cat.key
                    ? 'bg-cafe-gold text-[#1c1108] border-cafe-gold shadow-gold-sm scale-[1.03]'
                    : `bg-white/[0.04] border-white/[0.07] ${cat.color} hover:bg-white/[0.08] hover:border-white/10`
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={t.menu.searchPlaceholder}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.07] focus:border-cafe-gold/40 text-white placeholder-zinc-600 text-xs outline-none transition-colors"
            />
          </div>
        </div>

        {/* ── Grid ── */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 rounded-3xl bg-white/[0.02] border border-white/[0.05]">
            <Coffee className="w-10 h-10 text-zinc-700 mx-auto mb-3" />
            <p className="text-zinc-500 text-sm">{t.menu.noResults}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredItems.map(item => {
              const size = itemSizes[item.id] || 'regular';
              const price = size === 'large' ? item.priceLarge : item.priceRegular;
              const isAdded = addedItemIds[item.id];

              return (
                <div
                  key={item.id}
                  className="card-lift group relative flex flex-col rounded-3xl bg-[#15100d] border border-white/[0.06] overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image || ''}
                      alt={item.nameEn}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#15100d] via-transparent to-transparent" />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                      {item.popular && (
                        <span className="badge-gold text-[10px] py-0.5 px-2.5">
                          <Sparkles className="w-2.5 h-2.5" />
                          Popular
                        </span>
                      )}
                    </div>

                    {/* Temp icon */}
                    <div className="absolute top-3 right-3">
                      {item.isCold
                        ? <span className="w-7 h-7 rounded-full glass-gold flex items-center justify-center"><Snowflake className="w-3.5 h-3.5 text-sky-400" /></span>
                        : <span className="w-7 h-7 rounded-full glass-gold flex items-center justify-center"><Flame className="w-3.5 h-3.5 text-orange-400" /></span>
                      }
                    </div>
                  </div>

                  {/* Body */}
                  <div className="flex flex-col flex-1 p-5 gap-4">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-white text-base leading-tight truncate">
                          {isRtl ? item.namePs : item.nameEn}
                        </h3>
                        <p className="text-xs text-zinc-500 mt-0.5 truncate">
                          {isRtl ? item.nameEn : item.namePs}
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="text-xl font-black text-cafe-gold">{price}</span>
                        <span className="text-[10px] font-semibold text-zinc-500 ml-1">AFN</span>
                      </div>
                    </div>

                    <p className="text-xs text-zinc-500 leading-relaxed line-clamp-2 flex-1">
                      {isRtl ? item.descriptionPs : item.descriptionEn}
                    </p>

                    {/* Size selector */}
                    <div className="grid grid-cols-2 gap-1.5 p-1 rounded-xl bg-black/30 border border-white/[0.05]">
                      {(['regular', 'large'] as const).map(s => (
                        <button
                          key={s}
                          onClick={() => handleSizeChange(item.id, s)}
                          className={`py-1.5 px-2 rounded-lg text-[11px] font-bold transition-all ${
                            size === s
                              ? s === 'large'
                                ? 'bg-amber-500/80 text-[#1c1108]'
                                : 'bg-white/10 text-white'
                              : 'text-zinc-600 hover:text-zinc-400'
                          }`}
                        >
                          {s === 'regular'
                            ? `Regular · ${item.priceRegular} AFN`
                            : `Large · ${item.priceLarge} AFN`
                          }
                        </button>
                      ))}
                    </div>

                    {/* Add button */}
                    <button
                      onClick={() => handleAddToCart(item)}
                      className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 ${
                        isAdded
                          ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-300'
                          : 'btn-gold'
                      }`}
                    >
                      {isAdded
                        ? <><Check className="w-4 h-4" /><span>Added!</span></>
                        : <><Plus className="w-4 h-4" /><span>{t.menu.addToCart}</span></>
                      }
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
