"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className=" z-50 bg-pink-200 backdrop-blur-sm border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 flex-shrink-0">
              <img
                src="/logo.jpg"
                alt="P&C Group Logo"
                className="w-10 h-10 md:w-12 md:h-12"
              />
              <div>
                <h1 className="text-2xl md:text-3xl font-serif font-bold">
                  <span className="text-accent">P&C</span>
                </h1>
                <p className="text-xs text-muted-foreground">
                  Face of West Bengal
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/">
              <button
                onClick={() => scrollToSection("home")}
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                Home
              </button>
            </Link>
            <Link href="/apply">
              <button
                onClick={() => scrollToSection("apply")}
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                Apply Now
              </button>
            </Link>
            <button
              onClick={() => scrollToSection("seasons")}
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              Past Seasons
            </button>
            <Link href="/other-projects">
              <button
                onClick={() => scrollToSection("other-projects")}
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                Other Projects
              </button>
            </Link>
            <Link href="/director-desk">
              <button
                onClick={() => scrollToSection("director-desk")}
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                Director's desk
              </button>
            </Link>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-muted"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <Link href="/">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-3 py-2 text-sm font-medium hover:text-accent"
              >
                Home
              </button>
            </Link>
            <Link href="/apply">
              <button
                onClick={() => scrollToSection("apply")}
                className="block w-full text-left px-3 py-2 text-sm font-medium hover:text-accent"
              >
                Apply Now
              </button>
            </Link>
            <Link href="/">
              <button
                onClick={() => scrollToSection("seasons")}
                className="block w-full text-left px-3 py-2 text-sm font-medium hover:text-accent"
              >
                Past Seasons
              </button>
            </Link>
            <Link href="/other-projects">
              <button
                onClick={() => {
                  scrollToSection("other-projects");
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-sm font-medium hover:text-accent"
              >
                Other Projects
              </button>
            </Link>
            <Link href="/director-desk">
              <button
                onClick={() => {
                  scrollToSection("director-desk");
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-sm font-medium hover:text-accent"
              >
                Director's Desk
              </button>
            </Link>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-3 py-2 text-sm font-medium hover:text-accent"
            >
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
