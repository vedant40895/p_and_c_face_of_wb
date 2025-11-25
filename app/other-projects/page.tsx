"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import {
  Calendar,
  Camera,
  Sparkles,
  Users,
  Building,
  GraduationCap,
  Heart,
} from "lucide-react";

export default function OtherProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "English Calendar",
      description:
        "Professional calendar shoots featuring talented models in contemporary themes and seasonal concepts.",
      icon: Calendar,
      category: "Conceptual",
      color: "from-blue-500 to-cyan-500",
      image: "/eng-calender.jpg",
    },
    {
      id: 2,
      title: "Bengali Calendar",
      description:
        "Traditional Bengali calendar featuring cultural themes, festivals, and heritage photography.",
      icon: Calendar,
      category: "Cultural",
      color: "from-orange-500 to-red-500",
      image: "/beng-calender.jpg",
    },
    {
      id: 3,
      title: "Durga Puja Shoot",
      description:
        "Spectacular photography capturing the essence and grandeur of Durga Puja celebrations.",
      icon: Sparkles,
      category: "Festival",
      color: "from-purple-500 to-pink-500",
      image : "/durga-puja-shoot.jpg",
    },
    {
      id: 4,
      title: "Portfolio Shoot",
      description:
        "Professional portfolio photography sessions showcasing individual talent with creative and contemporary styling.",
      icon: Sparkles,
      category: "Photography",
      color: "from-yellow-500 to-orange-500",
      image : "/pf-shoot.jpg",
    
    },
    {
      id: 5,
      title: "Brand Shoots",
      description:
        "Professional brand photography and commercial shoots for various products and services.",
      icon: Camera,
      category: "Commercial",
      color: "from-gray-500 to-slate-600",
      image : "/brand-shoots.jpg",
      
    },
    {
      id: 6,
      title: "Grooming Sessions",
      description:
        "Professional grooming and styling sessions to enhance personality and confidence.",
      icon: GraduationCap,
      category: "Training",
      color: "from-emerald-500 to-teal-500",
      image: "/grooming.jpg",
    },
    {
      id: 7,
      title: "5 Successful Events",
      description:
        "Celebrating our milestone of successfully organizing 5 impactful events that brought communities together and created lasting memories.",
      icon: Heart,
      category: "Milestone",
      color: "from-rose-500 to-pink-500",
      image : "/milestone.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-accent/10 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              <span className="text-accent">Other</span>{" "}
              <span className="text-foreground">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our diverse portfolio of creative projects spanning
              photography, cultural celebrations, brand collaborations, and
              community initiatives.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105"
              >
                {/* Project Image/SVG */}
                <div className={`relative overflow-hidden ${project.id === 7 ? 'h-120' : 'h-64'}`}>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full">{project.image}</div>
                  )}
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>

                  {/* Icon */}
                  {/* <div className="absolute top-4 right-4">
                    <div
                      className={`w-10 h-10 bg-gradient-to-br ${project.color} rounded-full flex items-center justify-center shadow-lg`}
                    >
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                  </div> */}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors flex-1">
                      {project.title}
                    </h3>
                    {/* Category Badge */}
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full ml-3 flex-shrink-0">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
