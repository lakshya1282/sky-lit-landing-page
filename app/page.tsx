import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { GallerySection } from "@/components/gallery-section"
import { MenuSection } from "@/components/menu-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AOSInitializer } from "@/components/aos-initializer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <AOSInitializer />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <MenuSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
