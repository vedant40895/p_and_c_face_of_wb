"use client"

import { ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    "/slide-1.jpg",
    "/slide-2.jpg", 
    "/slide-3.jpg",
    "/slide-4.jpg"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [slides.length])

  const scrollToApply = () => {
    const element = document.getElementById("apply-section")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-[90vh] min-w-full flex items-center justify-center overflow-hidden pt-20 pb-24">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Slideshow indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-10 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-block mb-6 px-4 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
          <p className="text-sm font-medium text-white">Discover Your Crown</p>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-7xl font-serif font-bold mb-1 text-pretty leading-tight">
          <span className="text-white drop-shadow-2xl">
            P&C Face
          </span>
          <br />
          <span className="text-white drop-shadow-2xl">of West Bengal</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
          Where elegance meets ambition. Join our prestigious pageant and discover your true potential. Showcase your
          talent, grace, and confidence on our iconic stage.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-5">
          <a
            href="/apply"
            className="group px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block text-center"
          >
            Apply for Season 6
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <button
            onClick={() => document.getElementById("seasons")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
          >
            View Past Seasons
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 py-9 border-t border-b border-white/20">
          <div>
            <p className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">5</p>
            <p className="text-sm text-white/80 mt-1">Successful Seasons</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">2500+</p>
            <p className="text-sm text-white/80 mt-1">Participants</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">50M+</p>
            <p className="text-sm text-white/80 mt-1">Reach</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-9 flex justify-center animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/80" />
        </div>
      </div>
    </section>
  )
}
