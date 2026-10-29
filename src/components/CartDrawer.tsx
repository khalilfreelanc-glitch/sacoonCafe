'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useApp } from '../context/AppContext';
import { X, Trash2, Plus, Minus, ShoppingBag, MessageCircle, Send, Coffee } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    language,
    t,
    cart,
    removeFromCart,
    updateQuantity,
    isCartOpen,
    setIsCartOpen,
    cartTotal,
    totalItemsCount,
  } = useApp();

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [orderNotes, setOrderNotes] = useState('');

  const isRtl = language === 'ps';

  if (!isCartOpen) return null;

  const handleSendWhatsApp = () => {
    if (cart.length === 0) return;

    let message = isRtl
      ? `☕ *سلام سکون کافي! نوی فرمایش:*\n\n`
      : `☕ *Hello Sacoon Cafe! New Order:*\n\n`;

    cart.forEach((item, index) => {
      const name = isRtl ? item.namePs : item.nameEn;
      const sizeText =
        item.size === 'large'
          ? isRtl
            ? 'غټ سایز (Large)'
            : 'Large Size'
          : isRtl
          ? 'عادي سایز (Regular)'
          : 'Regular Size';

      message += `${index + 1}. *${name}* (${sizeText})\n   ${item.quantity}x × ${item.price} = *${item.price * item.quantity} ${t.menu.currency}*\n`;
    });

    message += `\n━━━━━━━━━━━━━━\n`;
    message += `💰 *${isRtl ? 'مجموعه قیمت' : 'Total'}*: *${cartTotal} ${t.menu.currency}*\n`;

    if (customerName.trim()) {
      message += `👤 *${isRtl ? 'پیرودونکی' : 'Customer'}*: ${customerName.trim()}\n`;
    }
    if (customerPhone.trim()) {
      message += `📞 *${isRtl ? 'ټلیفون' : 'Phone'}*: ${customerPhone.trim()}\n`;
    }
    if (orderNotes.trim()) {
      message += `📝 *${isRtl ? 'یادونه / د میز نمبر' : 'Table / Notes'}*: ${orderNotes.trim()}\n`;
    }

    message += isRtl ? `\nډېره مننه!` : `\nThank you!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/93708612009?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className={`fixed inset-y-0 ${isRtl ? 'left-0' : 'right-0'} max-w-full flex`}>
        <div className="w-screen max-w-md bg-cafe-950 border-x border-amber-900/40 shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-5 border-b border-amber-900/40 bg-cafe-900/80 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-cafe-gold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{t.cart.title}</h3>
                <p className="text-xs text-zinc-400">
                  {totalItemsCount} {t.cart.itemsCount}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-xl bg-cafe-850 hover:bg-cafe-800 text-zinc-400 hover:text-white transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-cafe-900 border border-amber-900/40 flex items-center justify-center mx-auto text-zinc-500">
                  <Coffee className="w-8 h-8 opacity-60" />
                </div>
                <p className="text-sm text-zinc-400 max-w-xs mx-auto leading-relaxed">
                  {t.cart.empty}
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-5 py-2.5 rounded-xl bg-cafe-900 hover:bg-amber-500 hover:text-cafe-950 text-cafe-gold font-bold text-xs border border-amber-800/40 transition-all"
                >
                  {t.hero.viewMenu}
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-xl bg-cafe-900/90 border border-amber-900/40 flex items-center justify-between gap-3 shadow-md"
                >
                  {/* Thumbnail */}
                  <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-cafe-950 border border-amber-900/40 flex-shrink-0">
                    <Image
                      src={item.image || '/images/latte_cup.jpg'}
                      alt={item.nameEn}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-white truncate">
                      {isRtl ? item.namePs : item.nameEn}
                    </h4>
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-500/15 text-cafe-gold mt-0.5">
                      {item.size === 'large' ? t.cart.largeSize : t.cart.regularSize}
                    </span>
                    <p className="text-xs font-bold text-cafe-gold mt-1">
                      {item.price * item.quantity} {t.menu.currency}
                    </p>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-7 h-7 rounded-lg bg-cafe-850 hover:bg-cafe-800 border border-amber-900/40 flex items-center justify-center text-zinc-300"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-6 text-center text-xs font-bold text-white">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-7 h-7 rounded-lg bg-cafe-850 hover:bg-cafe-800 border border-amber-900/40 flex items-center justify-center text-zinc-300"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-1.5 text-zinc-500 hover:text-red-400 transition-colors ml-1"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Customer Details & Checkout Footer */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-amber-900/40 bg-cafe-900/95 space-y-4">
              
              {/* Optional customer notes */}
              <div className="space-y-2">
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder={t.cart.namePlaceholder}
                  className="w-full px-3 py-2 rounded-lg bg-cafe-950 border border-amber-900/40 text-xs text-white placeholder-zinc-500 outline-none focus:border-cafe-gold"
                />
                <input
                  type="text"
                  value={orderNotes}
                  onChange={(e) => setOrderNotes(e.target.value)}
                  placeholder={t.cart.notesPlaceholder}
                  className="w-full px-3 py-2 rounded-lg bg-cafe-950 border border-amber-900/40 text-xs text-white placeholder-zinc-500 outline-none focus:border-cafe-gold"
                />
              </div>

              {/* Total Row */}
              <div className="flex items-center justify-between pt-2 border-t border-amber-950">
                <span className="text-sm font-bold text-zinc-300">{t.cart.subtotal}</span>
                <span className="text-xl font-black text-cafe-gold">
                  {cartTotal} <span className="text-xs text-zinc-400">{t.menu.currency}</span>
                </span>
              </div>

              {/* Send Order via WhatsApp */}
              <button
                onClick={handleSendWhatsApp}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-black text-sm flex items-center justify-center gap-2 shadow-xl shadow-emerald-600/30 transition-transform hover:scale-[1.01] active:scale-95"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t.cart.sendWhatsApp}</span>
              </button>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
