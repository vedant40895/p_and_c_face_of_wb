 "use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ApplyPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
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
    interests: [] as string[],
    experience: "",
    talents: "",
    whyParticipate: "",
    socialMedia: "",
    disclaimerAgreed: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, interest]
        : prev.interests.filter(i => i !== interest)
    }))
  }

  const handleDisclaimerChange = (checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      disclaimerAgreed: checked
    }))
  }

  const validateForm = () => {
    const requiredFields = [
      'fullName', 'email', 'phone', 'age', 'city', 'height', 
      'weight', 'education', 'profession', 'talents', 'whyParticipate'
    ]
    
    for (const field of requiredFields) {
      const value = formData[field as keyof typeof formData]
      if (typeof value === 'string' && !value.trim()) {
        return false
      }
    }
    
    // Check if at least one interest is selected
    if (formData.interests.length === 0) {
      return false
    }
    
    // Check if disclaimer is agreed
    if (!formData.disclaimerAgreed) {
      return false
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return false
    }
    
    // Age validation
    const age = parseInt(formData.age)
    if (age < 18 || age > 30) {
      return false
    }
    
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      toast({
        title: "Form Validation Error",
        description: "Please fill all required fields correctly, select at least one interest, agree to the fee disclaimer, and ensure age is between 18-30.",
        variant: "destructive",
      })
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Call both APIs simultaneously
      const [emailResponse, submitResponse] = await Promise.all([
        fetch('/api/email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }),
        fetch('/api/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          }, 
          body: JSON.stringify(formData),
        })
      ])

      const emailResult = await emailResponse.json()
      const submitResult = await submitResponse.json()

      // Check if both requests were successful
      if (!emailResponse.ok) {
        throw new Error(emailResult.error || 'Failed to send confirmation email')
      }
      
      if (!submitResponse.ok) {
        throw new Error(submitResult.error || 'Failed to notify admin')
      }
      
      toast({
        title: "Application Submitted Successfully! 🎉",
        description: "Thank you for applying to P&C Face of West Bengal. Check your email for confirmation.",
      })
      
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        age: "",
        city: "",
        height: "",
        weight: "",
        education: "",
        profession: "",
        interests: [],
        experience: "",
        talents: "",
        whyParticipate: "",
        socialMedia: "",
        disclaimerAgreed: false,
      })
      
    } catch (error) {
      console.error('Submission error:', error)
      toast({
        title: "Submission Failed",
        description: error instanceof Error ? error.message : "There was an error submitting your application. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 space-y-4 sm:space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent leading-tight">
              Apply for P&C Face of West Bengal - Season 6
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
              Join the most prestigious pageant in West Bengal. Fill out the form below to begin your journey to the crown.
            </p>
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-3 sm:p-4 mx-auto max-w-md">
              <p className="text-xs sm:text-sm text-accent font-medium">All fields marked with * are required</p>
            </div>
          </div>

          {/* Application Form */}
          <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10 lg:space-y-12">
              {/* Personal Information Section */}
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-semibold text-sm sm:text-base">1</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground">Personal Information</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 ml-0 sm:ml-14">
                  <div className="space-y-2 sm:space-y-3">
                    <Label htmlFor="fullName" className="text-sm font-medium text-foreground">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="h-10 sm:h-11 text-sm sm:text-base"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3">
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
                      className="h-10 sm:h-11 text-sm sm:text-base"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3">
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
                      className="h-10 sm:h-11 text-sm sm:text-base"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3">
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
                      className="h-10 sm:h-11 text-sm sm:text-base"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3 md:col-span-2">
                    <Label htmlFor="city" className="text-sm font-medium text-foreground">
                      City *
                    </Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Enter your city"
                      className="h-10 sm:h-11 text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Physical Attributes Section */}
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-semibold text-sm sm:text-base">2</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground">Physical Attributes</h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 ml-0 sm:ml-14">
                  <div className="space-y-2 sm:space-y-3">
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
                      className="h-10 sm:h-11 text-sm sm:text-base [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3">
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
                      className="h-10 sm:h-11 text-sm sm:text-base [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Background Information Section */}
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-semibold text-sm sm:text-base">3</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground">Background Information</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 ml-0 sm:ml-14">
                  <div className="space-y-2 sm:space-y-3">
                    <Label htmlFor="education" className="text-sm font-medium text-foreground">
                      Highest Education *
                    </Label>
                    <Input
                      id="education"
                      name="education"
                      value={formData.education}
                      onChange={handleInputChange}
                      placeholder="Bachelor's, Master's, etc."
                      className="h-10 sm:h-11 text-sm sm:text-base"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3">
                    <Label htmlFor="profession" className="text-sm font-medium text-foreground">
                      Current Profession *
                    </Label>
                    <Input
                      id="profession"
                      name="profession"
                      value={formData.profession}
                      onChange={handleInputChange}
                      placeholder="Student/Working professional"
                      className="h-10 sm:h-11 text-sm sm:text-base"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3 md:col-span-2">
                    <Label className="text-sm font-medium text-foreground">
                      What are you interested in? *
                    </Label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                      {[
                        { id: 'pageant', label: 'Pageant Show' },
                        { id: 'calendar', label: 'Calendar Shoot' },
                        { id: 'campaign', label: 'Campaign Shoots' }
                      ].map((option) => (
                        <label
                          key={option.id}
                          className="flex items-center gap-3 p-3 sm:p-4 border border-border rounded-lg cursor-pointer hover:bg-accent/5 transition-colors"
                        >
                          <input
                            type="checkbox"
                            checked={formData.interests.includes(option.id)}
                            onChange={(e) => handleInterestChange(option.id, e.target.checked)}
                            className="w-4 h-4 text-accent border-border rounded focus:ring-accent focus:ring-2"
                          />
                          <span className="text-sm font-medium text-foreground">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3 md:col-span-2">
                    <Label htmlFor="experience" className="text-sm font-medium text-foreground">
                      Previous Pageant/Modeling Experience
                    </Label>
                    <Textarea
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      placeholder="Describe your previous experience in pageants, modeling, or related fields (if any)"
                      rows={4}
                      className="resize-none text-sm sm:text-base min-h-[80px] sm:min-h-[100px]"
                    />
                  </div>
                </div>
              </div>

              {/* Talents & Motivation Section */}
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-semibold text-sm sm:text-base">4</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground">Talents & Motivation</h3>
                </div>
                
                <div className="space-y-6 sm:space-y-8 ml-0 sm:ml-14">
                  <div className="space-y-2 sm:space-y-3">
                    <Label htmlFor="talents" className="text-sm font-medium text-foreground">
                      Special Talents *
                    </Label>
                    <Textarea
                      id="talents"
                      name="talents"
                      value={formData.talents}
                      onChange={handleInputChange}
                      placeholder="Dancing, singing, acting, sports, musical instruments, public speaking, etc."
                      rows={4}
                      className="resize-none text-sm sm:text-base min-h-[80px] sm:min-h-[100px]"
                      required
                    />
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <Label htmlFor="whyParticipate" className="text-sm font-medium text-foreground">
                      Why do you want to participate in P&C Face of West Bengal? *
                    </Label>
                    <Textarea
                      id="whyParticipate"
                      name="whyParticipate"
                      value={formData.whyParticipate}
                      onChange={handleInputChange}
                      placeholder="Share your motivation, goals, and what this opportunity means to you..."
                      rows={5}
                      className="resize-none text-sm sm:text-base min-h-[100px] sm:min-h-[120px]"
                      required
                    />
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <Label htmlFor="socialMedia" className="text-sm font-medium text-foreground">
                      Social Media Handle
                    </Label>
                    <Input
                      id="socialMedia"
                      name="socialMedia"
                      value={formData.socialMedia}
                      onChange={handleInputChange}
                      placeholder="@your_instagram_handle or Facebook profile"
                      className="h-10 sm:h-11 text-sm sm:text-base"
                    />
                  </div>
                </div>
              </div>

              {/* Fee Disclaimer Section */}
              <div className="space-y-6 sm:space-y-8">
                <div className="ml-0 sm:ml-14">
                  <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 sm:p-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5">
                          ⚠️
                        </div>
                        <div className="space-y-3">
                          <p className="text-sm sm:text-base text-amber-800 dark:text-amber-200 leading-relaxed">
                            Before proceeding, please note that <span className="font-semibold">all projects, sessions, and campaigns involve associated fees</span>.
                            <br />
                            By filling out the form, <span className="font-semibold">you acknowledge and agree</span> to the payment of these fees as applicable.
                          </p>
                          
                          <label className="flex items-start gap-3 cursor-pointer group">
                            <input
                              type="checkbox"
                              checked={formData.disclaimerAgreed}
                              onChange={(e) => handleDisclaimerChange(e.target.checked)}
                              className="w-5 h-5 text-accent border-amber-300 dark:border-amber-600 rounded focus:ring-accent focus:ring-2 mt-0.5 flex-shrink-0"
                              required
                            />
                            <span className="text-sm font-medium text-amber-800 dark:text-amber-200 group-hover:text-amber-900 dark:group-hover:text-amber-100 transition-colors">
                              ✔ Click "Agree" to confirm and continue.
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Section */}
              <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-border/20">
                <div className="flex flex-col gap-4 sm:gap-6">
                  <div className="order-2 sm:order-1">
                    <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left leading-relaxed">
                      By submitting this application, you agree to our terms and conditions and consent to the processing of your personal data.
                    </p>
                  </div>
                  <div className="order-1 sm:order-2 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full sm:w-auto px-6 sm:px-8 py-3 h-auto font-medium text-sm sm:text-base order-2 sm:order-1"
                      onClick={() => window.history.back()}
                    >
                      Go Back
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 sm:px-12 py-4 h-auto bg-gradient-to-r from-accent to-accent/80 text-accent-foreground hover:from-accent/90 hover:to-accent/70 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg order-1 sm:order-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                          <span className="hidden sm:inline">Submitting...</span>
                          <span className="sm:hidden">Submitting...</span>
                        </span>
                      ) : (
                        <>
                          <span className="hidden sm:inline">Submit Application →</span>
                          <span className="sm:hidden">Submit Application</span>
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
      <Toaster />
    </main>
  )
}