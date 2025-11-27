"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Hero from "@/components/hero"
import SeasonCard from "@/components/season-card"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Home() {
  const [showButton, setShowButton] = useState(false)
  const [buttonBottom, setButtonBottom] = useState('2rem')
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const season5Slides = [
    "/season-5.jpg",
    "/season-5(2).jpg"
  ]
  
  const [seasons] = useState([
    {
      id: 1,
      title: "Season 1",
      year: 2021,
      image: "/season-1.jpg",
      description:
        "The inaugural season that launched P&C Face of West Bengal, discovering fresh talent and establishing our legacy.",
    },
    {
      id: 2,
      title: "Season 2",
      year: 2022,
      image: "/season-2.jpg",
      description:
        "Expansion and elevated excellence, bringing the pageant to new heights with international standards.",
    },
    {
      id: 3,
      title: "Season 3",
      year: 2023,
      image: "/season-3.jpg",
      description:
        "Digital transformation bringing the pageant experience online while maintaining its prestige and grandeur.",
    },
    {
      id: 4,
      title: "Season 4",
      year: 2024,
      image: "/season-4.jpg",
      description: "Record-breaking season with unprecedented participation and international collaborations.",
      // highlights: ["200+ Participants", "International Panel"],
    },
    {
      id: 5,
      title: "Season 5",
      year: 2025,
      image: "/season-5.jpg",
      slides: season5Slides,
      description: "The most successful season yet, showcasing the best talent West Bengal has to offer.",
    },
  ])

  useEffect(() => {
    const handleScroll = () => {
      const seasonsSection = document.getElementById('seasons')
      const footer = document.querySelector('footer')
      
      if (seasonsSection && footer) {
        const seasonsRect = seasonsSection.getBoundingClientRect()
        const footerRect = footer.getBoundingClientRect()
        const windowHeight = window.innerHeight
        
        // Show button when seasons section is in view
        const seasonsInView = seasonsRect.top < windowHeight && seasonsRect.bottom > 0
        
        // Calculate button position - stop at footer with some margin
        const footerDistance = footerRect.top - windowHeight
        const minBottom = 32 // 2rem in pixels
        const footerMargin = 100 // Space above footer
        
        if (footerDistance < footerMargin && footerDistance > -footerMargin) {
          // Footer is close, adjust button position
          const adjustedBottom = minBottom + (footerMargin - footerDistance)
          setButtonBottom(`${adjustedBottom}px`)
        } else {
          // Normal position
          setButtonBottom('2rem')
        }
        
        setShowButton(seasonsInView)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Season 5 slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % season5Slides.length)
    }, 2500) // Change slide every 2 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />

      <section id="seasons" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-pretty">
              <span className="text-accent">Our Legacy</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Five extraordinary seasons of discovering, celebrating, and launching the iconic faces of West Bengal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-12">
            {seasons.map((season, index) => (
              <SeasonCard 
                key={season.id} 
                season={season} 
                index={index}
                currentSlide={season.id === 5 ? currentSlide : undefined}
                setCurrentSlide={season.id === 5 ? setCurrentSlide : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Floating Explore Button */}
      {showButton && (
        <div 
          className="fixed right-8 z-50 animate-pulse transition-all duration-300 ease-in-out"
          style={{ bottom: buttonBottom }}
        >
          <div className="relative">
            {/* Glowing Ring */}
            <div className="absolute -inset-2 bg-gradient-to-r from-accent via-pink-500 to-accent rounded-full blur-md opacity-60 animate-spin-slow"></div>
            
            {/* Button */}
            <Link
              href="/other-projects"
              className="relative inline-flex items-center gap-2 md:gap-3 px-4 py-3 md:px-8 md:py-5 bg-gradient-to-br from-accent via-pink-500 to-accent hover:from-pink-500 hover:via-accent hover:to-pink-500 text-white rounded-full font-bold text-xs md:text-base shadow-2xl hover:shadow-pink-500/40 transition-all duration-500 hover:scale-125 transform hover:rotate-2 border-2 border-white/20 backdrop-blur-sm"
            >
              {/* <span className="animate-bounce"></span> */}
              <span className="relative overflow-hidden">
                <span className="block transition-transform duration-300 hover:translate-y-[-100%]">
                  <span className="hidden sm:inline">Explore Other Projects</span>
                  <span className="sm:hidden">Explore More Projects</span>
                </span>
                {/* <span className="absolute top-full left-0 transition-transform duration-300 hover:translate-y-[-100%] text-yellow-200">
                  <span className="hidden sm:inline">Discover Amazing Work!</span>
                  <span className="sm:hidden">Discover!</span>
                </span> */}
              </span>
              
              {/* Sparkle Effects */}
              <div className="absolute top-1 right-2 w-2 h-2 bg-yellow-300 rounded-full animate-ping"></div>
              <div className="absolute bottom-2 left-3 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-300"></div>
              <div className="absolute top-3 left-1 w-1 h-1 bg-pink-300 rounded-full animate-bounce delay-500"></div>
            </Link>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
