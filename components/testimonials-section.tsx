"use client";
import { Star, Quote } from "lucide-react"
import Image from "next/image"
import { AnimatedElement } from "@/components/animated-element"
import SpotlightCard from "@/components/SpotlightCard";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Food Critic",
    image: "/professional-woman-portrait.png",
    rating: 5,
    text: "An absolutely breathtaking experience. The view paired with the exquisite cuisine makes SKY LIT a must-visit destination. The sunset dinner was magical.",
  },
  {
    name: "James Chen",
    role: "Business Executive",
    image: "/professional-man-portrait.png",
    rating: 5,
    text: "Perfect for client dinners and special occasions. The service is impeccable, and the atmosphere creates an unforgettable impression every time.",
  },
  {
    name: "Emma Rodriguez",
    role: "Travel Blogger",
    image: "/smiling-young-woman.png",
    rating: 5,
    text: "SKY LIT has become my favorite spot in the city. The rooftop ambiance combined with innovative dishes keeps me coming back. Highly recommend!",
  },
  {
    name: "Michael Thompson",
    role: "Local Resident",
    image: "/middle-aged-man-portrait.jpg",
    rating: 5,
    text: "We celebrated our anniversary here and it exceeded all expectations. The staff made us feel special, and the tasting menu was extraordinary.",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedElement animation="fade-down">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">Guest Experiences</p>
          </AnimatedElement>

          <AnimatedElement animation="zoom-in" delay={100}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">What Our Guests Say</h2>
          </AnimatedElement>

          <AnimatedElement animation="zoom-in" delay={150}>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </AnimatedElement>
        </div>

        {/* Testimonials Row */}
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <AnimatedElement key={index} animation={index % 2 === 0 ? "fade-up" : "zoom-in"} delay={100 + index * 100}>
               <SpotlightCard
                className="h-full"
                // optional props you can tweak:
                spotlightColor={"rgba(255,255,255,0.14)" as unknown as `rgba(${number}, ${number}, ${number}, ${number})`}
                radius="70%"
              >
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group h-full">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary/30 mb-4 group-hover:text-primary/50 transition-colors duration-300" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{testimonial.text}</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-muted-foreground text-xs">{testimonial.role}</p>
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
