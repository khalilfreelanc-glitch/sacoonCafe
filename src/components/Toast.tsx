'use client';

import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, ShoppingBag } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toastMessage, setIsCartOpen } = useApp();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3 rounded-2xl bg-cafe-900 border border-amber-500/60 text-white shadow-2xl shadow-amber-500/20 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
      <span className="text-xs sm:text-sm font-semibold">{toastMessage}</span>
      <button
        onClick={() => setIsCartOpen(true)}
        className="ml-2 px-2.5 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-cafe-950 font-black text-xs flex items-center gap-1 shadow-sm transition-transform active:scale-95"
      >
        <ShoppingBag className="w-3.5 h-3.5" />
        <span>View Tray</span>
      </button>
    </div>
  );
};
