"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { AnimatedElement } from "@/components/animated-element"

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80",
    alt: "Rooftop dining area with city view",
  },
  {
    src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80",
    alt: "Elegant outdoor seating arrangement",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
    alt: "Beautiful sunset view from rooftop",
  },
  {
    src: "https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?w=800&q=80",
    alt: "Gourmet dishes presentation",
  },
  {
    src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80",
    alt: "Cocktail bar setup",
  },
  {
    src: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=80",
    alt: "Night ambiance with string lights",
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedElement animation="fade-down">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">Visual Journey</p>
          </AnimatedElement>

          <AnimatedElement animation="zoom-in" delay={100}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Gallery</h2>
          </AnimatedElement>

          <AnimatedElement animation="zoom-in" delay={150}>
            <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          </AnimatedElement>

          <AnimatedElement animation="fade-up" delay={200}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Take a glimpse into the enchanting atmosphere of SKY LIT
            </p>
          </AnimatedElement>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <AnimatedElement key={index} animation={index % 2 === 0 ? "zoom-in" : "fade-up"} delay={100 + index * 100}>
              <div
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <p className="text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4 font-medium">
                    {image.alt}
                  </p>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-foreground hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <div className="relative w-full max-w-4xl aspect-video">
            <Image src={selectedImage || "/placeholder.svg"} alt="Gallery image" fill className="object-contain" />
          </div>
        </div>
      )}
    </section>
  )
}
