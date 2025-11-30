"use client";

import { Utensils, Clock, MapPin, Star, Users, Wine } from "lucide-react"
import { AnimatedElement } from "@/components/animated-element"
import SpotlightCard from "@/components/SpotlightCard";



const facts = [
  {
    icon: MapPin,
    value: "32nd",
    label: "Floor Location",
    description: "Perched high above the city skyline",
  },
  {
    icon: Star,
    value: "4.9",
    label: "Customer Rating",
    description: "Based on 2,500+ reviews",
  },
  {
    icon: Users,
    value: "150+",
    label: "Seating Capacity",
    description: "Indoor & outdoor arrangements",
  },
  {
    icon: Clock,
    value: "8+",
    label: "Years of Excellence",
    description: "Serving since 2016",
  },
  {
    icon: Utensils,
    value: "50+",
    label: "Signature Dishes",
    description: "Curated by award-winning chefs",
  },
  {
    icon: Wine,
    value: "200+",
    label: "Wine Selection",
    description: "From vineyards worldwide",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedElement animation="fade-down">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">Discover Our Story</p>
          </AnimatedElement>

          <AnimatedElement animation="zoom-in" delay={100}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Us</h2>
          </AnimatedElement>

          <AnimatedElement animation="zoom-in" delay={150}>
            <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          </AnimatedElement>

          <AnimatedElement animation="fade-up" delay={200}>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              SKY LIT Rooftop Cafe is more than just a restaurant—it{"'"}s an experience. Nestled high above the
              bustling city streets, we offer a sanctuary where exquisite cuisine meets panoramic views. Our passionate
              team of culinary artists crafts each dish with precision and creativity, ensuring every meal becomes a
              cherished memory.
            </p>
          </AnimatedElement>
        </div>

        {/* Facts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facts.map((fact, index) => (
            <AnimatedElement
              key={index}
              animation={index % 3 === 0 ? "fade-up" : index % 3 === 1 ? "zoom-in" : "fade-up"}
              delay={100 + index * 100}
            >  <SpotlightCard
                className="h-full"
                // optional props you can tweak:
                spotlightColor={"rgba(255,255,255,0.14)" as unknown as `rgba(${number}, ${number}, ${number}, ${number})`}
                radius="70%"
              >
              <div className="group p-8 bg-secondary/50 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <fact.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground mb-1">{fact.value}</p>
                    <p className="text-primary font-medium mb-2">{fact.label}</p>
                    <p className="text-muted-foreground text-sm">{fact.description}</p>
                  </div>
                </div>
              </div>
              </SpotlightCard>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  )
}
