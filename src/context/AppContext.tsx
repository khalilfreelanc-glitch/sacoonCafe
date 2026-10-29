'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, CartItem, MenuItem } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof TRANSLATIONS['en'];
  cart: CartItem[];
  addToCart: (item: MenuItem, size: 'regular' | 'large') => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  cartTotal: number;
  totalItemsCount: number;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // English is the primary default language
  const [language, setLanguageState] = useState<Language>('en');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load saved preference if any, but default to English
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('sacoon_lang') as Language;
      if (savedLang === 'en' || savedLang === 'ps') {
        setLanguageState(savedLang);
      }
    } catch {
      // ignore local storage errors
    }
  }, []);

  // Update HTML dir and lang attributes dynamically
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language === 'ps' ? 'ps' : 'en';
      document.documentElement.dir = language === 'ps' ? 'rtl' : 'ltr';
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('sacoon_lang', lang);
    } catch {
      // ignore
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const addToCart = (item: MenuItem, size: 'regular' | 'large') => {
    const unitPrice = size === 'large' ? item.priceLarge : item.priceRegular;
    const cartItemId = `${item.id}-${size}`;

    setCart((prev) => {
      const existing = prev.find((ci) => ci.id === cartItemId);
      if (existing) {
        return prev.map((ci) =>
          ci.id === cartItemId ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [
        ...prev,
        {
          id: cartItemId,
          menuItemId: item.id,
          nameEn: item.nameEn,
          namePs: item.namePs,
          size,
          price: unitPrice,
          quantity: 1,
          category: item.category,
          image: item.image,
        },
      ];
    });

    const addedText = language === 'ps' ? `«${item.namePs}» اضافه شو!` : `"${item.nameEn}" added to tray!`;
    showToast(addedText);
  };

  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((ci) => ci.id !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart((prev) =>
      prev.map((ci) => (ci.id === cartItemId ? { ...ci, quantity } : ci))
    );
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const t = TRANSLATIONS[language];

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        t,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        cartTotal,
        totalItemsCount,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
