"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import { Instagram, Facebook, Linkedin, Trophy, Users, Star, Target, Rocket, Phone, Sparkles, ArrowRight } from "lucide-react";

export default function DirectorDeskPage() {
  const scrollToConnect = () => {
    const element = document.getElementById('connect-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-accent/10 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              <span className="text-accent">Director's</span>{" "}
              <span className="text-foreground">Desk</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Meet the visionary behind P&C Face of West Bengal - driving
              excellence, nurturing talent, and creating opportunities for
              aspiring models and artists.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Director Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Director Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
              <div className="aspect-[4/5] bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl overflow-hidden">
                <Image
                  src="/director.jpg"
                  alt="Bilkes Perveen - Founder & Managing Director"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Director Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                Bilkes Perveen
              </h2>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-accent text-white rounded-full text-sm font-medium">
                  Founder Director
                </span>
                <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  perveen & Chatterjee OPC Pvt. Ltd.
                </span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Bilkes Perveen, CEO of P&C Group, brings with her over
                a decade of corporate experience, before choosing to follow her
                passion and carve a new path in the world of fashion and
                empowerment. Today, she is a Enreprenuer, successful model,Show
                Director ,fashion & lifestyle influencer, sports presenter, and
                speaker, inspiring thousands with her journey.
              </p>
              {/* <p className="text-muted-foreground leading-relaxed text-lg">
                Our pageant celebrates the beauty, intelligence, and cultural
                richness of West Bengal, empowering young women to pursue their
                dreams and make a meaningful impact in society.
              </p> */}
            </div>

            {/* Social Media Links */}
            <div className="pt-4">
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.instagram.com/bilkesperveen?igsh=ejYyMHlkdnh4cmMw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <Instagram className="w-6 h-6" />
                  <span className="font-medium">Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/bilkesperveen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <Facebook className="w-6 h-6" />
                  <span className="font-medium">Facebook</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/bilkes-perveen-2536a3177/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 py-3 bg-blue-700 text-white hover:bg-blue-800 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <Linkedin className="w-6 h-6" />
                  <span className="font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Co-Founder Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Co-Founder Info */}
          <div className="space-y-8 lg:order-1">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                Tanmay Chatterjee
              </h2>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-accent text-white rounded-full text-sm font-medium">
                  Co-Founder
                </span>
                <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  perveen & Chatterjee OPC Pvt. Ltd.
                </span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Tanmay Chatterjee, a senior corporate leader with over 15 years of experience, is the strong foundation and true backbone of this organisation. His vision and support laid the pillars on which Perveen & Chatterjee OPC Pvt Ltd thrives today. He broke the stereotype that women cannot achieve anything after marriage by supporting his own wife Bilkes Perveen to take this bold step of doing something new, proving that behind every successful woman there can be a man as well. With his corporate expertise and open-minded approach, Tanmay fosters a culture of equality and growth.
              </p>
            </div>

            {/* Social Media Links */}
            {/* <div className="pt-4">
              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <Instagram className="w-6 h-6" />
                  <span className="font-medium">Instagram</span>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <Facebook className="w-6 h-6" />
                  <span className="font-medium">Facebook</span>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 py-3 bg-blue-700 text-white hover:bg-blue-800 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <Linkedin className="w-6 h-6" />
                  <span className="font-medium">LinkedIn</span>
                </a>
              </div>
            </div> */}
          </div>

          {/* Co-Founder Image */}
          <div className="relative group lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
              <div className="aspect-[4/5] bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl overflow-hidden">
                <Image
                  src="/co-founder.jpg"
                  alt="Co-Founder & Managing Director"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Vision */}
          <div className="bg-accent/5 p-8 md:p-12 rounded-3xl border border-accent/20 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Our Vision
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Driven by a vision to boost confidence, spread positivity, and
              create opportunities, she founded Perveen & Chatterjee OPC Pvt Ltd
              as a platform where individuals can rediscover themselves through
              the art of fashion and grooming. She believes deeply in learning,
              growing, and sharing that growth with others.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-accent/5 p-8 md:p-12 rounded-3xl border border-accent/20 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                <Rocket className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Our Mission
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              As the chief mentor and grooming expert, Bilkes personally guides
              every individual who joins the organisation, and her expertise is
              sought after even beyond P&C. Her philosophy is rooted in
              self-confidence, a positive mindset, hard work, and a
              never-give-up attitude — values she instills in every talent she
              nurtures.
            </p>
          </div>
        </div>

        {/* Achievements & Recognition */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Achievements & Recognition
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our journey of excellence and the milestones we've achieved
              together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className="relative text-center p-8 rounded-2xl hover:shadow-lg transition-all duration-300 overflow-hidden bg-cover bg-center"
              style={{ 
                backgroundImage: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(236, 72, 153, 0.1)), url("/milestones-2.jpg")'
              }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">5+</h4>
              <p className="text-white/90 font-medium">Successful Seasons</p>
            </div>
            <div 
              className="relative text-center p-8 rounded-2xl hover:shadow-lg transition-all duration-300 overflow-hidden bg-cover bg-center"
              style={{ 
                backgroundImage: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(236, 72, 153, 0.1)), url("/participants.jpg")'
              }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">500+</h4>
              <p className="text-white/90 font-medium">Talented Participants</p>
            </div>
            <div 
              className="relative text-center p-8 rounded-2xl hover:shadow-lg transition-all duration-300 overflow-hidden bg-cover bg-center"
              style={{ 
                backgroundImage: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(236, 72, 153, 0.1)), url("/media.jpg")'
              }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                  <Star className="w-8 h-8 text-white" />
                </div>
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">500+</h4>
              <p className="text-white/90 font-medium">Media Coverage</p>
            </div>
          </div>
        </div>

        {/* Social Media & Connect Section */}
        <div id="connect-section" className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Connect With Me
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Follow my journey and stay updated with the latest from P&C Face of
            West Bengal
          </p>

          {/* Social Media Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a
              href="https://www.instagram.com/bilkesperveen?igsh=ejYyMHlkdnh4cmMw"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Instagram className="w-6 h-6" />
              <span className="font-medium">Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/bilkesperveen"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Facebook className="w-6 h-6" />
              <span className="font-medium">Facebook</span>
            </a>
            <a
              href="https://www.linkedin.com/in/bilkes-perveen-2536a3177/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-blue-700 text-white hover:bg-blue-800 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Linkedin className="w-6 h-6" />
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="mb-6">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
              Ready to Begin?
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Join the most prestigious pageant in West Bengal and showcase your talent to the world.
            </p>
          </div>
          <Link
            href="/apply"
            className="group inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-white rounded-full font-bold text-xl transition-all duration-300 hover:shadow-2xl hover:shadow-accent/30 hover:scale-105 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[400%] transition-transform duration-700 ease-in-out"></div>
            <Sparkles className="w-6 h-6 animate-pulse" />
            <span className="relative z-10">Start Your Journey Today</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}
