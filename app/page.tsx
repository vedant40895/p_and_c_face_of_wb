"use client"

import { useState } from "react"
import Hero from "@/components/hero"
import SeasonCard from "@/components/season-card"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Home() {
  const [seasons] = useState([
    {
      id: 1,
      title: "Season 1",
      year: 2018,
      image: "/elegant-fashion-pageant-season-1-winner.jpg",
      description:
        "The inaugural season that launched P&C Face of West Bengal, discovering fresh talent and establishing our legacy.",
      highlights: ["250+ Participants", "Sold-out Finale", "Grand Finale Prize: ₹5 Lakhs"],
    },
    {
      id: 2,
      title: "Season 2",
      year: 2019,
      image: "/glamorous-fashion-pageant-season-2.jpg",
      description:
        "Expansion and elevated excellence, bringing the pageant to new heights with international standards.",
      highlights: ["400+ Participants", "Celebrity Judges", "Grand Finale Prize: ₹8 Lakhs"],
    },
    {
      id: 3,
      title: "Season 3",
      year: 2021,
      image: "/stunning-fashion-pageant-season-3.jpg",
      description:
        "Digital transformation bringing the pageant experience online while maintaining its prestige and grandeur.",
      highlights: ["500+ Participants", "Virtual Format", "Grand Finale Prize: ₹10 Lakhs"],
    },
    {
      id: 4,
      title: "Season 4",
      year: 2023,
      image: "/luxurious-fashion-pageant-season-4.jpg",
      description: "Record-breaking season with unprecedented participation and international collaborations.",
      highlights: ["650+ Participants", "International Panel", "Grand Finale Prize: ₹12 Lakhs"],
    },
    {
      id: 5,
      title: "Season 5",
      year: 2024,
      image: "/premium-fashion-pageant-season-5.jpg",
      description: "The most successful season yet, showcasing the best talent West Bengal has to offer.",
      highlights: ["800+ Participants", "Media Coverage", "Grand Finale Prize: ₹15 Lakhs"],
    },
  ])

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
              <SeasonCard key={season.id} season={season} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
