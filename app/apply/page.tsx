"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    city: "",
    height: "",
    weight: "",
    education: "",
    profession: "",
    experience: "",
    talents: "",
    whyParticipate: "",
    socialMedia: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Application submitted:", formData)
    // You can add API call or form validation here
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-6">
            <h1 className="text-4xl md:text-5xl font-serif font-bold bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
              Apply for P&C Face of West Bengal - Season 6
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join the most prestigious pageant in West Bengal. Fill out the form below to begin your journey to the crown.
            </p>
            <p className="text-sm text-accent font-medium">All fields marked with * are required</p>
          </div>

          {/* Application Form */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Personal Information Section */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-semibold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Personal Information</h3>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ml-14">
                  <div className="space-y-3">
                    <Label htmlFor="fullName" className="text-sm font-medium text-foreground">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="h-11"
                      required
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="h-11"
                      required
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="h-11"
                      required
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="age" className="text-sm font-medium text-foreground">
                      Age *
                    </Label>
                    <Input
                      id="age"
                      name="age"
                      type="number"
                      min="18"
                      max="30"
                      value={formData.age}
                      onChange={handleInputChange}
                      placeholder="18-30 years"
                      className="h-11"
                      required
                    />
                  </div>
                  
                  <div className="space-y-3 lg:col-span-2">
                    <Label htmlFor="city" className="text-sm font-medium text-foreground">
                      City *
                    </Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Enter your city"
                      className="h-11"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Physical Attributes Section */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-semibold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Physical Attributes</h3>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ml-14">
                  <div className="space-y-3">
                    <Label htmlFor="height" className="text-sm font-medium text-foreground">
                      Height (in cm) *
                    </Label>
                    <Input
                      id="height"
                      name="height"
                      type="number"
                      value={formData.height}
                      onChange={handleInputChange}
                      placeholder="e.g., 165"
                      className="h-11 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      required
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="weight" className="text-sm font-medium text-foreground">
                      Weight (in kg) *
                    </Label>
                    <Input
                      id="weight"
                      name="weight"
                      type="number"
                      value={formData.weight}
                      onChange={handleInputChange}
                      placeholder="e.g., 55"
                      className="h-11 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Background Information Section */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-semibold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Background Information</h3>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ml-14">
                  <div className="space-y-3">
                    <Label htmlFor="education" className="text-sm font-medium text-foreground">
                      Highest Education *
                    </Label>
                    <Input
                      id="education"
                      name="education"
                      value={formData.education}
                      onChange={handleInputChange}
                      placeholder="Bachelor's, Master's, etc."
                      className="h-11"
                      required
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="profession" className="text-sm font-medium text-foreground">
                      Current Profession *
                    </Label>
                    <Input
                      id="profession"
                      name="profession"
                      value={formData.profession}
                      onChange={handleInputChange}
                      placeholder="Student/Working professional"
                      className="h-11"
                      required
                    />
                  </div>
                  
                  <div className="space-y-3 lg:col-span-2">
                    <Label htmlFor="experience" className="text-sm font-medium text-foreground">
                      Previous Pageant/Modeling Experience
                    </Label>
                    <Textarea
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      placeholder="Describe your previous experience in pageants, modeling, or related fields (if any)"
                      rows={5}
                      className="resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Talents & Motivation Section */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-semibold">4</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Talents & Motivation</h3>
                </div>
                
                <div className="space-y-8 ml-14">
                  <div className="space-y-3">
                    <Label htmlFor="talents" className="text-sm font-medium text-foreground">
                      Special Talents *
                    </Label>
                    <Textarea
                      id="talents"
                      name="talents"
                      value={formData.talents}
                      onChange={handleInputChange}
                      placeholder="Dancing, singing, acting, sports, musical instruments, public speaking, etc."
                      rows={5}
                      className="resize-none"
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="whyParticipate" className="text-sm font-medium text-foreground">
                      Why do you want to participate in P&C Face of West Bengal? *
                    </Label>
                    <Textarea
                      id="whyParticipate"
                      name="whyParticipate"
                      value={formData.whyParticipate}
                      onChange={handleInputChange}
                      placeholder="Share your motivation, goals, and what this opportunity means to you..."
                      rows={6}
                      className="resize-none"
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="socialMedia" className="text-sm font-medium text-foreground">
                      Social Media Handle
                    </Label>
                    <Input
                      id="socialMedia"
                      name="socialMedia"
                      value={formData.socialMedia}
                      onChange={handleInputChange}
                      placeholder="@your_instagram_handle or Facebook profile"
                      className="h-11"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Section */}
              <div className="pt-8 mt-8 border-t border-border/20">
                <div className="flex flex-col sm:flex-row gap-6 items-center justify-between">
                  <div className="text-left flex-1">
                    <p className="text-sm text-muted-foreground">
                      By submitting this application, you agree to our terms and conditions and consent to the processing of your personal data.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="px-8 py-3 h-auto font-medium"
                      onClick={() => window.history.back()}
                    >
                      Go Back
                    </Button>
                    <Button
                      type="submit"
                      className="px-12 py-4 h-auto bg-gradient-to-r from-accent to-accent/80 text-accent-foreground hover:from-accent/90 hover:to-accent/70 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                    >
                      Submit Application →
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}