"use client"

import {
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Home,
  FileText,
  ExternalLink,
  Heart
} from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h3 className="text-3xl font-serif font-bold mb-4">
                  <span className="text-accent">P&C</span>
                  <br />
                  <span className="text-white text-2xl">Face of West Bengal</span>
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Discovering the most talented and graceful faces of West Bengal through professional photography and modeling opportunities.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/pcfaceofwestbengal/" 
                  className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-pink-500/25"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="https://www.facebook.com/PCArtArena/" 
                  className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/pcartarena/" 
                  className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-400/25"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white flex items-center gap-3">
                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                  <ExternalLink className="w-4 h-4 text-accent" />
                </div>
                Quick Links
              </h4>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="/" 
                    className="text-slate-300 hover:text-accent transition-colors duration-300 flex items-center gap-3 group"
                  >
                    <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/director-desk" 
                    className="text-slate-300 hover:text-accent transition-colors duration-300 flex items-center gap-3 group"
                  >
                    <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>Director's Desk</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/other-projects" 
                    className="text-slate-300 hover:text-accent transition-colors duration-300 flex items-center gap-3 group"
                  >
                    <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>Other Projects</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/apply" 
                    className="text-slate-300 hover:text-accent transition-colors duration-300 flex items-center gap-3 group"
                  >
                    <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>Apply Now</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white flex items-center gap-3">
                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Heart className="w-4 h-4 text-accent" />
                </div>
                Our Services
              </h4>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Professional Photography</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Modeling Opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Brand Collaborations</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Portfolio Development</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Grooming & Training</span>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white flex items-center gap-3">
                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="mailto:faceofwestbengal@gmail.com" 
                    className="text-slate-300 hover:text-accent transition-colors duration-300 flex items-start gap-3 group"
                  >
                    <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider">Email</div>
                      <div className="break-all">faceofwestbengal@gmail.com</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+917980901539" 
                    className="text-slate-300 hover:text-accent transition-colors duration-300 flex items-center gap-3 group"
                  >
                    <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider">Phone</div>
                      <div>+91 79809 01539</div>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="text-slate-300 flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider">Location</div>
                      <div>Kolkata, West Bengal, India</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 py-6">
          <div className="flex flex-col gap-4">
            {/* Copyright and Designer Credit */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
              <div className="flex items-center gap-2">
                {/* <Heart className="w-4 h-4 text-red-400" /> */}
                <p className="text-slate-400 text-sm">
                  © 2025 P&C Face of West Bengal.
                </p>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <span className="font-medium">Designed by Vedant Khanna</span>
                <a 
                  href="https://www.linkedin.com/in/vedant-khanna-aaa48a258/" 
                  className="w-6 h-6 bg-slate-700 rounded-md flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 text-white" />
                </a>
                <a 
                  href="mailto:vedantkhanna40@gmail.com" 
                  className="w-6 h-6 bg-slate-700 rounded-md flex items-center justify-center hover:bg-accent transition-colors duration-300"
                  title="Email"
                >
                  <Mail className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
            
            {/* Policy Links */}
            <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm justify-center sm:justify-start">
              <a href="#" className="text-slate-400 hover:text-accent transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-accent transition-colors duration-300">
                Terms & Conditions
              </a>
              <a href="#" className="text-slate-400 hover:text-accent transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
