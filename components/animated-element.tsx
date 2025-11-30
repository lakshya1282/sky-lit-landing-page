"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

type AnimationType = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "fade-in"

interface AnimatedElementProps {
  children: ReactNode
  animation?: AnimationType
  delay?: number
  className?: string
  threshold?: number
}

export function AnimatedElement({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
  threshold = 0.1,
}: AnimatedElementProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
          observer.unobserve(element)
        }
      },
      { threshold },
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [delay, threshold])

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-700 ease-out"

    if (!isVisible) {
      switch (animation) {
        case "fade-up":
          return `${baseClasses} opacity-0 translate-y-10`
        case "fade-down":
          return `${baseClasses} opacity-0 -translate-y-10`
        case "fade-left":
          return `${baseClasses} opacity-0 translate-x-10`
        case "fade-right":
          return `${baseClasses} opacity-0 -translate-x-10`
        case "zoom-in":
          return `${baseClasses} opacity-0 scale-90`
        case "fade-in":
          return `${baseClasses} opacity-0`
        default:
          return `${baseClasses} opacity-0`
      }
    }

    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`
  }

  return (
    <div ref={ref} className={`${getAnimationClasses()} ${className}`}>
      {children}
    </div>
  )
}
