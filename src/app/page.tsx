import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { MenuSection } from '../components/MenuSection';
import { EquipmentSection } from '../components/EquipmentSection';
import { AboutSection } from '../components/AboutSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { CartDrawer } from '../components/CartDrawer';
import { Toast } from '../components/Toast';

export default function Home() {
  return (
    <main className="min-h-screen bg-cafe-950 text-zinc-100 relative">
      <Navbar />
      <Hero />
      <MenuSection />
      <EquipmentSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <CartDrawer />
      <Toast />
    </main>
  );
}
