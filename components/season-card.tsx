"use client"

import { useState } from "react"
import Image from "next/image"

interface Season {
  id: number
  title: string
  year: number
  image: string
  slides?: string[]
  description: string
}

export default function SeasonCard({ 
  season, 
  index, 
  currentSlide, 
  setCurrentSlide 
}: { 
  season: Season; 
  index: number;
  currentSlide?: number;
  setCurrentSlide?: (slide: number) => void;
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      id={`season-${season.id}`}
      className="group relative overflow-hidden rounded-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Image Side */}
        <div className={`relative h-96 md:h-full min-h-96 overflow-hidden ${index % 2 !== 0 ? "md:order-2" : ""}`}>
          {season.slides && currentSlide !== undefined ? (
            // Slideshow for Season 5
            <div className="relative w-full h-full">
              {season.slides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    slideIndex === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    src={slide}
                    alt={`${season.title} - Slide ${slideIndex + 1}`}
                    fill
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
              
              {/* Slideshow indicators */}
              {setCurrentSlide && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                  {season.slides.map((_, slideIndex) => (
                    <button
                      key={slideIndex}
                      onClick={() => setCurrentSlide(slideIndex)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        slideIndex === currentSlide 
                          ? 'bg-white scale-125' 
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            // Single image for other seasons
            <Image
              src={season.image || "/placeholder.svg"}
              alt={season.title}
              fill
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
            />
          )}
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />

          {/* Year Badge */}
          <div className="absolute top-6 left-6 bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold text-lg z-10">
            {season.year}
          </div>
        </div>

        {/* Content Side */}
        <div
          className={`relative p-8 md:p-12 flex flex-col justify-center ${index % 2 !== 0 ? "md:order-1" : ""} bg-card`}
        >
          <div className="space-y-6">
            <div>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-accent mb-3">{season.title}</h3>
              <div className="h-1 w-20 bg-gradient-to-r from-accent to-accent/50 rounded-full" />
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">{season.description}</p>

            {/* CTA Button */}
            {/* <div className="pt-6">
              <button className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                Learn More
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
