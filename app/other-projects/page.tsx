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
      category: "Photography",
      color: "from-blue-500 to-cyan-500",
      svgPlaceholder: (
        <svg
          className="w-full h-full"
          viewBox="0 0 400 300"
          fill="none"
          xmlns="/eng-calender.jpg"
        >
          <rect width="400" height="300" fill="url(#gradient1)" />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          <rect
            x="50"
            y="50"
            width="300"
            height="200"
            rx="10"
            fill="white"
            fillOpacity="0.9"
          />
          <rect x="70" y="70" width="60" height="40" rx="5" fill="#3b82f6" />
          <rect x="150" y="70" width="60" height="40" rx="5" fill="#3b82f6" />
          <rect x="230" y="70" width="60" height="40" rx="5" fill="#3b82f6" />
          <rect x="310" y="70" width="30" height="40" rx="5" fill="#3b82f6" />
          <text
            x="200"
            y="150"
            textAnchor="middle"
            className="fill-blue-600 text-lg font-bold"
          >
            English Calendar
          </text>
          <circle cx="100" cy="180" r="15" fill="#06b6d4" />
          <circle cx="140" cy="180" r="15" fill="#06b6d4" />
          <circle cx="180" cy="180" r="15" fill="#06b6d4" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Bengali Calendar",
      description:
        "Traditional Bengali calendar featuring cultural themes, festivals, and heritage photography.",
      icon: Calendar,
      category: "Cultural",
      color: "from-orange-500 to-red-500",
      svgPlaceholder: (
        <svg
          className="w-full h-full"
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="400" height="300" fill="url(#gradient2)" />
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
          </defs>
          <rect
            x="50"
            y="50"
            width="300"
            height="200"
            rx="10"
            fill="white"
            fillOpacity="0.9"
          />
          <path d="M200 80 L220 120 L180 120 Z" fill="#f97316" />
          <circle
            cx="200"
            cy="140"
            r="30"
            fill="none"
            stroke="#ef4444"
            strokeWidth="3"
          />
          <text
            x="200"
            y="180"
            textAnchor="middle"
            className="fill-orange-600 text-lg font-bold"
          >
            বাংলা ক্যালেন্ডার
          </text>
          <rect x="80" y="200" width="20" height="20" fill="#f97316" />
          <rect x="120" y="200" width="20" height="20" fill="#ef4444" />
          <rect x="160" y="200" width="20" height="20" fill="#f97316" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Durga Puja Shoot",
      description:
        "Spectacular photography capturing the essence and grandeur of Durga Puja celebrations.",
      icon: Sparkles,
      category: "Festival",
      color: "from-purple-500 to-pink-500",
      svgPlaceholder: (
        <svg
          className="w-full h-full"
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="400" height="300" fill="url(#gradient3)" />
          <defs>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
          <rect
            x="50"
            y="60"
            width="300"
            height="180"
            rx="15"
            fill="white"
            fillOpacity="0.9"
          />
          <path
            d="M200 80 L210 100 L230 100 L216 114 L222 134 L200 122 L178 134 L184 114 L170 100 L190 100 Z"
            fill="#a855f7"
          />
          <circle cx="150" cy="140" r="8" fill="#ec4899" />
          <circle cx="250" cy="140" r="8" fill="#ec4899" />
          <circle cx="180" cy="180" r="6" fill="#a855f7" />
          <circle cx="220" cy="180" r="6" fill="#a855f7" />
          <text
            x="200"
            y="210"
            textAnchor="middle"
            className="fill-purple-600 text-lg font-bold"
          >
            Durga Puja
          </text>
        </svg>
      ),
    },
    {
      id: 4,
      title: "Diwali Shoot",
      description:
        "Vibrant photography showcasing the festival of lights with traditional and contemporary themes.",
      icon: Sparkles,
      category: "Festival",
      color: "from-yellow-500 to-orange-500",
      svgPlaceholder: (
        <svg
          className="w-full h-full"
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="400" height="300" fill="url(#gradient4)" />
          <defs>
            <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#eab308" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
          </defs>
          <rect
            x="50"
            y="60"
            width="300"
            height="180"
            rx="15"
            fill="white"
            fillOpacity="0.9"
          />
          <ellipse cx="120" cy="120" rx="15" ry="25" fill="#eab308" />
          <ellipse cx="160" cy="115" rx="15" ry="30" fill="#f97316" />
          <ellipse cx="200" cy="110" rx="15" ry="35" fill="#eab308" />
          <ellipse cx="240" cy="115" rx="15" ry="30" fill="#f97316" />
          <ellipse cx="280" cy="120" rx="15" ry="25" fill="#eab308" />
          <circle cx="100" cy="180" r="4" fill="#f97316" />
          <circle cx="150" cy="185" r="4" fill="#eab308" />
          <circle cx="200" cy="180" r="4" fill="#f97316" />
          <circle cx="250" cy="185" r="4" fill="#eab308" />
          <circle cx="300" cy="180" r="4" fill="#f97316" />
          <text
            x="200"
            y="210"
            textAnchor="middle"
            className="fill-yellow-600 text-lg font-bold"
          >
            Diwali Celebration
          </text>
        </svg>
      ),
    },
    {
      id: 5,
      title: "Brand Shoots",
      description:
        "Professional brand photography and commercial shoots for various products and services.",
      icon: Camera,
      category: "Commercial",
      color: "from-gray-500 to-slate-600",
      svgPlaceholder: (
        <svg
          className="w-full h-full"
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="400" height="300" fill="url(#gradient5)" />
          <defs>
            <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6b7280" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
          </defs>
          <rect
            x="50"
            y="80"
            width="300"
            height="140"
            rx="20"
            fill="white"
            fillOpacity="0.9"
          />
          <rect
            x="120"
            y="100"
            width="160"
            height="100"
            rx="10"
            fill="#6b7280"
          />
          <circle cx="200" cy="150" r="30" fill="white" />
          <circle cx="200" cy="150" r="20" fill="#475569" />
          <rect x="90" y="110" width="20" height="10" rx="5" fill="#6b7280" />
          <rect x="290" y="110" width="20" height="10" rx="5" fill="#6b7280" />
          <text
            x="200"
            y="240"
            textAnchor="middle"
            className="fill-gray-600 text-lg font-bold"
          >
            Brand Photography
          </text>
        </svg>
      ),
    },
    {
      id: 6,
      title: "Grooming Sessions",
      description:
        "Professional grooming and styling sessions to enhance personality and confidence.",
      icon: GraduationCap,
      category: "Training",
      color: "from-emerald-500 to-teal-500",
      svgPlaceholder: (
        <svg
          className="w-full h-full"
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="400" height="300" fill="url(#gradient6)" />
          <defs>
            <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
          </defs>
          <rect
            x="50"
            y="60"
            width="300"
            height="180"
            rx="15"
            fill="white"
            fillOpacity="0.9"
          />
          <circle cx="150" cy="120" r="25" fill="#10b981" />
          <circle cx="150" cy="115" r="15" fill="white" />
          <rect x="120" y="145" width="60" height="40" rx="20" fill="#14b8a6" />
          <circle cx="250" cy="120" r="25" fill="#10b981" />
          <circle cx="250" cy="115" r="15" fill="white" />
          <rect x="220" y="145" width="60" height="40" rx="20" fill="#14b8a6" />
          <path d="M200 200 L210 180 L220 200 L210 190 Z" fill="#10b981" />
          <text
            x="200"
            y="220"
            textAnchor="middle"
            className="fill-emerald-600 text-lg font-bold"
          >
            Grooming & Styling
          </text>
        </svg>
      ),
    },
    {
      id: 7,
      title: "CSR Events",
      description:
        "Corporate Social Responsibility events and community engagement initiatives.",
      icon: Heart,
      category: "Social",
      color: "from-rose-500 to-pink-500",
      svgPlaceholder: (
        <svg
          className="w-full h-full"
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="400" height="300" fill="url(#gradient7)" />
          <defs>
            <linearGradient id="gradient7" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
          <rect
            x="50"
            y="60"
            width="300"
            height="180"
            rx="15"
            fill="white"
            fillOpacity="0.9"
          />
          <path
            d="M200 100 C190 90, 170 90, 170 110 C170 130, 200 150, 200 150 C200 150, 230 130, 230 110 C230 90, 210 90, 200 100 Z"
            fill="#f43f5e"
          />
          <circle cx="120" cy="180" r="12" fill="#ec4899" />
          <circle cx="160" cy="190" r="8" fill="#f43f5e" />
          <circle cx="200" cy="185" r="10" fill="#ec4899" />
          <circle cx="240" cy="190" r="8" fill="#f43f5e" />
          <circle cx="280" cy="180" r="12" fill="#ec4899" />
          <text
            x="200"
            y="220"
            textAnchor="middle"
            className="fill-rose-600 text-lg font-bold"
          >
            CSR Initiatives
          </text>
        </svg>
      ),
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
                <div className="relative h-48 overflow-hidden">
                  <div className="w-full h-full">{project.svgPlaceholder}</div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="absolute top-4 right-4">
                    <div
                      className={`w-10 h-10 bg-gradient-to-br ${project.color} rounded-full flex items-center justify-center shadow-lg`}
                    >
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
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
