"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { AnimatedElement } from "@/components/animated-element"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your reservation request! We will contact you shortly.")
    setFormData({ name: "", email: "", phone: "", date: "", guests: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Sky Tower, 32nd Floor", "123 Downtown Avenue", "New York, NY 10001"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["reservations@skylit.com", "info@skylit.com"],
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Thu: 5PM - 11PM", "Fri-Sun: 5PM - 1AM"],
    },
  ]

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedElement animation="fade-down">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">Get in Touch</p>
          </AnimatedElement>

          <AnimatedElement animation="zoom-in" delay={100}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Contact Us</h2>
          </AnimatedElement>

          <AnimatedElement animation="zoom-in" delay={150}>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </AnimatedElement>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <AnimatedElement animation="fade-right" delay={200}>
            <div className="bg-secondary/50 rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Make a Reservation</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Your Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="bg-background border-border focus:border-primary transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Email Address</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="bg-background border-border focus:border-primary transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Phone</label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="bg-background border-border focus:border-primary transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Preferred Date</label>
                    <Input
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="bg-background border-border focus:border-primary transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Guests</label>
                    <Input
                      name="guests"
                      type="number"
                      min="1"
                      max="20"
                      value={formData.guests}
                      onChange={handleChange}
                      placeholder="2"
                      required
                      className="bg-background border-border focus:border-primary transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Special Requests</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any special requests or dietary requirements..."
                    rows={4}
                    className="bg-background border-border focus:border-primary resize-none transition-all duration-300"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] transition-all duration-300"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Submit Reservation
                </Button>
              </form>
            </div>
          </AnimatedElement>

          {/* Contact Info */}
          <AnimatedElement animation="fade-left" delay={300}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Visit Us</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Experience the magic of dining among the stars. We recommend making reservations in advance,
                  especially for weekend evenings and special occasions.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <AnimatedElement key={index} animation="fade-up" delay={400 + index * 100}>
                    <div className="flex gap-4 group">
                      <div className="p-3 bg-primary/10 rounded-lg h-fit group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-foreground font-semibold mb-2">{info.title}</p>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-muted-foreground text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </AnimatedElement>
                ))}
              </div>

              {/* Map Placeholder */}
              <AnimatedElement animation="zoom-in" delay={600}>
                <div className="relative h-64 bg-secondary rounded-lg border border-border overflow-hidden mt-8">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                      <p className="text-muted-foreground">Interactive Map Coming Soon</p>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  )
}
