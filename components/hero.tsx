"use client"

import { ChevronDown } from "lucide-react"

export default function Hero() {
  const scrollToApply = () => {
    const element = document.getElementById("apply-section")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-[90vh] min-w-full flex items-center justify-center overflow-hidden pt-20 pb-24">
      {/* Elegant background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-50" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-10 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-block mb-6 px-4 py-1 bg-accent/10 border border-accent/20 rounded-full">
          <p className="text-sm font-medium text-accent">Discover Your Crown</p>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-7xl font-serif font-bold mb-1 text-pretty leading-tight">
          <span className="bg-gradient-to-r from-accent via-accent to-accent/70 bg-clip-text text-transparent">
            P&C Face
          </span>
          <br />
          <span className="text-foreground bg-gradient-to-r from-accent via-accent to-accent/70 bg-clip-text text-transparent">of West Bengal</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Where elegance meets ambition. Join our prestigious pageant and discover your true potential. Showcase your
          talent, grace, and confidence on our iconic stage.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-5">
          <a
            href="/apply"
            className="group px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 inline-block text-center"
          >
            Apply for Season 6
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <button
            onClick={() => document.getElementById("seasons")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-card border-2 border-accent text-accent rounded-full font-semibold text-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            View Past Seasons
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 py-9 border-t border-b border-border/50">
          <div>
            <p className="text-3xl md:text-4xl font-bold text-accent">5</p>
            <p className="text-sm text-muted-foreground mt-1">Successful Seasons</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-accent">2500+</p>
            <p className="text-sm text-muted-foreground mt-1">Participants</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-accent">50M+</p>
            <p className="text-sm text-muted-foreground mt-1">Reach</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-9 flex justify-center animate-bounce">
          <ChevronDown className="w-8 h-8 text-accent/60" />
        </div>
      </div>
    </section>
  )
}