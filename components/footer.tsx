"use client"

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold">
              <span className="text-accent">P&C</span> <span className="text-foreground">Face of West Bengal</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              Discovering the most talented and graceful faces of West Bengal
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 bg-accent/5 p-6 rounded-2xl border border-accent/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-accent/10">
            <h4 className="font-bold text-foreground text-lg flex items-center gap-2">
              <span className="text-accent">🔗</span> Quick Links
            </h4>
            <ul className="space-y-4 text-base">
              <li>
                <a href="#" className="text-foreground font-medium hover:text-accent transition-colors flex items-center gap-3">
                  <span className="text-lg">🏠</span> Home
                </a>
              </li>
              {/* <li>
                <a href="#" className="text-foreground font-medium hover:text-accent transition-colors flex items-center gap-3">
                  <span className="text-lg">ℹ️</span> About Us
                </a>
              </li> */}
              <li>
                <a href="/apply" className="text-foreground font-medium hover:text-accent transition-colors flex items-center gap-3">
                  <span className="text-lg">📝</span> Apply Now
                </a>
              </li>
              {/* <li>
                <a href="#" className="text-foreground font-medium hover:text-accent transition-colors flex items-center gap-3">
                  <span className="text-lg">📞</span> Contact
                </a>
              </li> */}
            </ul>
          </div>

          {/* Follow Us */}
          <div className="space-y-4 bg-accent/5 p-6 rounded-2xl border border-accent/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-accent/10">
            <h4 className="font-bold text-foreground text-lg flex items-center gap-2">
              <span className="text-accent">👥</span> Follow Us
            </h4>
            <ul className="space-y-4 text-base">
              <li>
                <a href="https://www.instagram.com/pcfaceofwestbengal/" className="text-foreground font-medium hover:text-accent transition-colors flex items-center gap-3">
                  <span className="text-lg">📷</span> Instagram
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/PCArtArena/" className="text-foreground font-medium hover:text-accent transition-colors flex items-center gap-3">
                  <span className="text-lg">📘</span> Facebook
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/pcartarena/" className="text-foreground font-medium hover:text-accent transition-colors flex items-center gap-3">
                  <span className="text-lg">💼</span> LinkedIn
                </a>
              </li>
              
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 bg-accent/5 p-6 rounded-2xl border border-accent/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-accent/10">
            <h4 className="font-bold text-foreground text-lg flex items-center gap-2">
              <span className="text-accent">📞</span> Contact Us
            </h4>
            <ul className="space-y-4 text-sm sm:text-base">
              <li className="text-foreground font-medium flex items-start gap-3 hover:text-accent transition-colors cursor-pointer">
                <span className="text-xl flex-shrink-0 mt-0.5">📧</span> 
                <span className="break-all text-xs sm:text-sm md:text-base leading-relaxed">faceofwestbengal@gmail.com</span>
              </li>
              <li className="text-foreground font-medium flex items-center gap-3 hover:text-accent transition-colors cursor-pointer">
                <span className="text-xl flex-shrink-0">📱</span> 
                <span className="text-sm sm:text-base">+91 79809 01539</span>
              </li>
              <li className="text-foreground font-medium flex items-center gap-3 hover:text-accent transition-colors cursor-pointer">
                <span className="text-xl flex-shrink-0">📍</span> 
                <span className="text-sm sm:text-base">Kolkata, West Bengal</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2025 P&C Face of West Bengal. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
