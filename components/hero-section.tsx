"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { AnimatedElement } from "@/components/animated-element"

export function HeroSection() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <AnimatedElement animation="fade-down" delay={100}>
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">Welcome to</p>
        </AnimatedElement>

        <AnimatedElement animation="zoom-in" delay={200}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 tracking-tight">SKY LIT</h1>
        </AnimatedElement>

        <AnimatedElement animation="fade-up" delay={300}>
          <p className="text-2xl md:text-3xl text-primary font-light tracking-wide mb-6">ROOFTOP CAFE</p>
        </AnimatedElement>

        <AnimatedElement animation="fade-up" delay={400}>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Elevate your dining experience above the city lights. Where culinary excellence meets breathtaking views.
          </p>
        </AnimatedElement>

        <AnimatedElement animation="fade-up" delay={500}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 px-8 py-6 text-lg"
            >
              Reserve Your Table
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={(e) => handleSmoothScroll(e, "#menu")}
              className="border-foreground text-foreground hover:bg-foreground/10 hover:scale-105 transition-all duration-300 px-8 py-6 text-lg bg-transparent"
            >
              Explore Menu
            </Button>
          </div>
        </AnimatedElement>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        onClick={(e) => handleSmoothScroll(e, "#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  )
}
