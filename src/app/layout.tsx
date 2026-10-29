import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from '../context/AppContext';

export const metadata: Metadata = {
  title: 'Sacoon Cafe | Premium Coffee & Barista Equipment Center',
  description:
    'Welcome to Sacoon Cafe — your premier destination for handcrafted hot and iced beverages, plus commercial espresso machines, grinders, moka pots, and cafe supplies.',
  keywords: [
    'Sacoon Cafe',
    'Specialty Coffee',
    'Espresso Machine',
    'Moka Pot',
    'Barista Equipment',
    'Iced Latte',
    'Chai Karak',
    'Wholesale Cafe Supplies',
  ],
  icons: {
    icon: '/images/logo_circle.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body className="bg-cafe-950 text-zinc-100 min-h-screen antialiased selection:bg-amber-500 selection:text-cafe-950">
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
