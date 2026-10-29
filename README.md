# Sacoon Cafe (سکون کافي) - Official Website

A modern, full-stack **Next.js & Tailwind CSS** web application built specifically for **Sacoon Cafe (سکون کافي)**, based on the cafe's authentic branding, menu items, and equipment distribution catalog.

---

## 🌟 Key Features

1. **Bilingual Support with RTL / LTR Switching**:
   - **Pashto (پښتو)**: Full right-to-left layout (`dir="rtl"`), authentic typography, and culturally resonant phrasing.
   - **English**: Left-to-right modern presentation (`dir="ltr"`).
   - Saved seamlessly in `localStorage` with a 1-click switcher in the navbar.

2. **Authentic Menu with Dynamic Sizing & Pricing**:
   - Complete item lineup from the official flyer:
     - **Hot Coffee (ګرمه کافي)**: Mix Coffee, Mokaccino, Cappuccino, Latte, Turk Coffee.
     - **Traditional Teas & Chocolate**: Chai Karak, Chai Masala, Hot Chocolate, Light Chocolate.
     - **Ice Coffee & Cold Drinks (یخه کافي)**: Iced Latte, Iced Moka, Iced Espresso, White Chocolate, Single Espresso, Double Espresso, Ice Hot Chocolate, Ice Light Chocolate.
   - **Size Selector**: Regular vs Large (+20 AFN) with real-time price calculation as specified on the menu card (*«د هر جنس غټ سایز ۲۰ افغانۍ اضافه قیمت لري»*).
   - Instant search and category filtering.

3. **Interactive Cart & Direct WhatsApp Ordering**:
   - Floating cart drawer displaying selected beverage items and chosen sizes.
   - Customer details input (Name, Phone number, Table Number / Notes).
   - **"Send Order via WhatsApp"**: Formats a clean, readable order in Pashto or English and opens WhatsApp directly to send the order to the cafe.

4. **Cafe Equipment & Wholesale Supplies Showcase**:
   - Highlights the cafe's identity as a wholesale and retail equipment hub:
     *«سکون کافي د هر ډول قهوې/کافي، پریمکسز، او بارټینډر د موادو او تجهیزاتو د عمده او پرچون د خرڅلاو مرکز»*
   - Showcases commercial espresso machines, Italian moka pots, precision grinders, drip sets, barista tools, and bulk coffee beans/premixes.
   - Pre-filled WhatsApp inquiry button for wholesale pricing.

5. **Atmosphere, Testimonials & Contact**:
   - About Sacoon Cafe and the meaning of *Sacoon* (peace & tranquility).
   - Customer reviews and ratings.
   - Address, Afghan opening hours, direct WhatsApp link, and the flyer's official QR code.

---

## 📞 Contact Information
- **Phone / WhatsApp**: [+93 70 861 2009](tel:+93708612009)
- **WhatsApp Direct**: [https://wa.me/93708612009](https://wa.me/93708612009)
- **Email**: [sacooncoffee@gmail.com](mailto:sacooncoffee@gmail.com)
- **Location**: Kabul, Afghanistan

---

## 🚀 Running the Project

### Development Server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build:
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```text
Socoon cafe/
├── public/
│   └── images/               # Cropped and high-res assets from the cafe flyer
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styling & custom coffee scrollbar
│   │   ├── layout.tsx        # Root HTML layout with SEO metadata
│   │   └── page.tsx          # Single-page application entry
│   ├── components/
│   │   ├── BrandLogo.tsx     # Sacoon Cafe circular logo badge
│   │   ├── Navbar.tsx        # Navigation bar & language switcher
│   │   ├── Hero.tsx          # Hero banner with steam animation
│   │   ├── MenuSection.tsx   # Menu cards, search & size selector
│   │   ├── EquipmentSection.tsx # Wholesale & barista tools showcase
│   │   ├── AboutSection.tsx  # Brand story & core pillars
│   │   ├── TestimonialsSection.tsx # Reviews
│   │   ├── ContactSection.tsx# Location, opening hours & QR code
│   │   ├── CartDrawer.tsx    # Slide-over order tray & WhatsApp checkout
│   │   ├── Toast.tsx         # Add-to-cart alert
│   │   └── Footer.tsx        # Footer with brand details
│   ├── context/
│   │   └── AppContext.tsx    # State management for cart & language
│   ├── data/
│   │   ├── menu.ts           # Menu items & equipment database
│   │   └── translations.ts   # English & Pashto dictionaries
│   └── types/
│       └── index.ts          # TypeScript interfaces
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```
