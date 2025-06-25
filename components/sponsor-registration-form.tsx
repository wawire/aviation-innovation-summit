"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { User, Building, CreditCard, Check, Crown, Star, Award, Zap } from "lucide-react"

interface SponsorRegistrationData {
  // Company Information
  companyName: string
  contactPerson: string
  email: string
  phone: string
  website: string
  industry: string
  country: string
  companySize: string

  // Sponsorship Details
  sponsorshipTier: string
  customRequirements: string
  marketingObjectives: string[]

  // Contact Preferences
  preferredContactMethod: string
  bestTimeToCall: string

  // Additional Services
  additionalServices: string[]
  specialRequests: string

  // Payment Information
  paymentMethod: string
  transactionCode: string

  // Terms and Conditions
  agreeToTerms: boolean
  marketingConsent: boolean
}

const SponsorRegistrationForm = () => {
  const searchParams = useSearchParams()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<SponsorRegistrationData>({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    website: "",
    industry: "",
    country: "",
    companySize: "",
    sponsorshipTier: "",
    customRequirements: "",
    marketingObjectives: [],
    preferredContactMethod: "",
    bestTimeToCall: "",
    additionalServices: [],
    specialRequests: "",
    paymentMethod: "",
    transactionCode: "",
    agreeToTerms: false,
    marketingConsent: false,
  })

  useEffect(() => {
    const tier = searchParams.get("tier")
    if (tier) {
      setFormData((prev) => ({ ...prev, sponsorshipTier: tier }))
    }
  }, [searchParams])

  const sponsorshipTiers = [
    {
      id: "platinum",
      name: "Platinum",
      price: 50000,
      color: "bg-gradient-to-r from-gray-300 to-gray-100",
      icon: <Crown className="h-6 w-6" />,
      description: "Exclusive top-tier visibility and engagement",
      slots: 2,
      slotsRemaining: 1,
      features: [
        'Naming rights: "AAIS 2025 Powered by [Your Company]"',
        "Premium logo placement on all event materials",
        "Keynote speech opportunity",
        "Prime exhibition space",
        "VIP Lounge access for private networking",
        "Invitation to exclusive VIP dinner",
        "10 VIP passes",
      ],
    },
    {
      id: "gold",
      name: "Gold",
      price: 35000,
      color: "bg-gradient-to-r from-yellow-500 to-yellow-300",
      icon: <Star className="h-6 w-6" />,
      description: "Premium visibility with speaking opportunities",
      slots: 3,
      slotsRemaining: 2,
      features: [
        "Logo on all marketing collateral & digital promotions",
        "Panel discussion seat",
        "Premium exhibition booth",
        "Access to networking sessions & speaker lounge",
        "Dedicated sponsor highlight across social media",
        "Invitation to VIP networking cocktail",
        "6 VIP passes",
      ],
      popular: true,
    },
    {
      id: "silver",
      name: "Silver",
      price: 25000,
      color: "bg-gradient-to-r from-gray-400 to-gray-300",
      icon: <Award className="h-6 w-6" />,
      description: "Enhanced visibility with networking opportunities",
      slots: 4,
      slotsRemaining: 3,
      features: [
        "Logo placement on selected event branding",
        "Participation in a panel discussion",
        "Standard exhibition booth",
        "Access to curated networking events",
        "Logo placement in event recap materials",
        "Invitation to exclusive VIP dinner",
        "4 VIP passes",
      ],
    },
    {
      id: "bronze",
      name: "Bronze",
      price: 15000,
      color: "bg-gradient-to-r from-amber-700 to-amber-500",
      icon: <Zap className="h-6 w-6" />,
      description: "Essential visibility package for businesses",
      slots: 6,
      slotsRemaining: 5,
      features: [
        "Logo on event website & select signage",
        "Mention in event brochure",
        "Basic exhibition space",
        "General networking access",
        "Social media mentions",
        "Invitation to exclusive VIP dinner",
        "2 VIP passes",
      ],
    },
  ]

  const bankingDetails = {
    international: {
      bankName: "Citibank N A – Nairobi",
      accountName: "Kenya Airways Plc",
      accountNumber: "0100597217",
      swiftCode: "CITIKENA",
      branchCode: "16000",
      currency: "USD",
      instructions: "Please use your company name and 'AAIS2025' as reference when making the international transfer",
    },
    local: {
      bankName: "NCBA Bank",
      paybillNumber: "880100",
      accountNumber: "6606530056",
      currency: "KES",
      instructions:
        "1. Go to M-Pesa menu\n2. Select Lipa na M-Pesa\n3. Select Pay Bill\n4. Enter Paybill Number: 880100\n5. Enter Account Number: 6606530056\n6. Enter Amount in KES\n7. Enter your M-Pesa PIN\n8. Copy the transaction code from SMS",
    },
  }

  const industries = [
    "Aviation & Airlines",
    "Airports & Ground Services",
    "Government & Regulatory",
    "Finance & Investment",
    "Tourism & Hospitality",
    "Technology & Innovation",
    "Logistics & Supply Chain",
    "Consulting Services",
    "Manufacturing",
    "Energy & Utilities",
    "Telecommunications",
    "Other",
  ]

  const marketingObjectives = [
    "Brand Awareness",
    "Lead Generation",
    "Thought Leadership",
    "Product Launch",
    "Market Entry",
    "Partnership Development",
    "Talent Acquisition",
    "CSR Initiatives",
  ]

  const additionalServices = [
    "Custom Booth Design",
    "Additional Exhibition Space",
    "Branded Lanyards",
    "Welcome Bags Insert",
    "Mobile App Advertising",
    "Video Production",
    "Photography Services",
    "Interpreter Services",
  ]

  const handleInputChange = (field: keyof SponsorRegistrationData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleArrayChange = (field: keyof SponsorRegistrationData, value: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: checked
        ? [...(prev[field] as string[]), value]
        : (prev[field] as string[]).filter((item) => item !== value),
    }))
  }

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Sponsor registration data:", formData)
    alert("Sponsorship application submitted successfully! Our team will contact you within 24 hours.")
  }

  const getSelectedTier = () => {
    return sponsorshipTiers.find((tier) => tier.id === formData.sponsorshipTier)
  }

  const steps = [
    { number: 1, title: "Company Info", icon: <Building className="h-5 w-5" /> },
    { number: 2, title: "Sponsorship", icon: <Crown className="h-5 w-5" /> },
    { number: 3, title: "Requirements", icon: <User className="h-5 w-5" /> },
    { number: 4, title: "Payment", icon: <CreditCard className="h-5 w-5" /> },
  ]

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold mb-2 block">Partnership Opportunity</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Become a Sponsor</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Partner with AAIS 2025 to showcase your brand to Africa's aviation leaders and decision-makers. Position
            your organization at the forefront of the continent's aviation transformation.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-center">
            <div className="flex items-center space-x-4">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                      currentStep >= step.number
                        ? "bg-primary border-primary text-white"
                        : "border-muted-foreground text-muted-foreground"
                    }`}
                  >
                    {currentStep > step.number ? <Check className="h-5 w-5" /> : step.icon}
                  </div>
                  <div className="ml-2 hidden sm:block">
                    <p
                      className={`text-sm font-medium ${
                        currentStep >= step.number ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {step.title}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-16 h-0.5 mx-4 ${
                        currentStep > step.number ? "bg-primary" : "bg-muted-foreground/30"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {steps[currentStep - 1].icon}
                Step {currentStep}: {steps[currentStep - 1].title}
              </CardTitle>
              <CardDescription>
                {currentStep === 1 && "Tell us about your company and organization"}
                {currentStep === 2 && "Select your preferred sponsorship tier and benefits"}
                {currentStep === 3 && "Share your marketing objectives and special requirements"}
                {currentStep === 4 && "Review your sponsorship package and complete the application"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Step 1: Company Information */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="companyName">Company Name *</Label>
                      <Input
                        id="companyName"
                        value={formData.companyName}
                        onChange={(e) => handleInputChange("companyName", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="contactPerson">Primary Contact Person *</Label>
                      <Input
                        id="contactPerson"
                        value={formData.contactPerson}
                        onChange={(e) => handleInputChange("contactPerson", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="website">Company Website</Label>
                      <Input
                        id="website"
                        type="url"
                        placeholder="https://"
                        value={formData.website}
                        onChange={(e) => handleInputChange("website", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="industry">Industry *</Label>
                      <Select value={formData.industry} onValueChange={(value) => handleInputChange("industry", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          {industries.map((industry) => (
                            <SelectItem key={industry} value={industry}>
                              {industry}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="country">Country *</Label>
                      <Input
                        id="country"
                        value={formData.country}
                        onChange={(e) => handleInputChange("country", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="companySize">Company Size</Label>
                      <Select
                        value={formData.companySize}
                        onValueChange={(value) => handleInputChange("companySize", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="startup">Startup (1-10 employees)</SelectItem>
                          <SelectItem value="small">Small (11-50 employees)</SelectItem>
                          <SelectItem value="medium">Medium (51-200 employees)</SelectItem>
                          <SelectItem value="large">Large (201-1000 employees)</SelectItem>
                          <SelectItem value="enterprise">Enterprise (1000+ employees)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Sponsorship Tier */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <Label className="text-lg font-semibold mb-4 block">Select Sponsorship Tier *</Label>
                    <RadioGroup
                      value={formData.sponsorshipTier}
                      onValueChange={(value) => handleInputChange("sponsorshipTier", value)}
                      className="space-y-4"
                    >
                      {sponsorshipTiers.map((tier) => (
                        <div key={tier.id} className="relative">
                          <div
                            className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                              formData.sponsorshipTier === tier.id
                                ? "border-primary bg-primary/5"
                                : "border-muted hover:border-primary/50"
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <RadioGroupItem value={tier.id} id={tier.id} />
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <div className="flex items-center gap-2">
                                    <Label htmlFor={tier.id} className="text-lg font-semibold cursor-pointer">
                                      {tier.name}
                                    </Label>
                                    {tier.popular && <Badge className="bg-primary text-white">Most Popular</Badge>}
                                  </div>
                                  <div className="text-right">
                                    <span className="text-2xl font-bold text-primary">
                                      ${tier.price.toLocaleString()}
                                    </span>
                                  </div>
                                </div>
                                <p className="text-muted-foreground mb-3">{tier.description}</p>
                                <div className="flex flex-wrap gap-2 mb-2">
                                  {tier.features.map((feature) => (
                                    <Badge key={feature} variant="outline" className="text-xs">
                                      {feature}
                                    </Badge>
                                  ))}
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  {tier.slotsRemaining} of {tier.slots} slots remaining
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Requirements */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <Label className="text-lg font-semibold mb-4 block">Marketing Objectives</Label>
                    <p className="text-sm text-muted-foreground mb-4">
                      What are your primary goals for sponsoring AAIS 2025?
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {marketingObjectives.map((objective) => (
                        <div key={objective} className="flex items-center space-x-2">
                          <Checkbox
                            id={objective}
                            checked={formData.marketingObjectives.includes(objective)}
                            onCheckedChange={(checked) =>
                              handleArrayChange("marketingObjectives", objective, checked as boolean)
                            }
                          />
                          <Label htmlFor={objective} className="text-sm">
                            {objective}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <Label className="text-lg font-semibold mb-4 block">Additional Services</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                      {additionalServices.map((service) => (
                        <div key={service} className="flex items-center space-x-2">
                          <Checkbox
                            id={service}
                            checked={formData.additionalServices.includes(service)}
                            onCheckedChange={(checked) =>
                              handleArrayChange("additionalServices", service, checked as boolean)
                            }
                          />
                          <Label htmlFor={service} className="text-sm">
                            {service}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="customRequirements">Custom Requirements</Label>
                    <Textarea
                      id="customRequirements"
                      placeholder="Please describe any specific requirements or customizations you need..."
                      value={formData.customRequirements}
                      onChange={(e) => handleInputChange("customRequirements", e.target.value)}
                      rows={4}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="preferredContactMethod">Preferred Contact Method</Label>
                      <Select
                        value={formData.preferredContactMethod}
                        onValueChange={(value) => handleInputChange("preferredContactMethod", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select contact method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="phone">Phone</SelectItem>
                          <SelectItem value="video">Video Call</SelectItem>
                          <SelectItem value="meeting">In-Person Meeting</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="bestTimeToCall">Best Time to Contact</Label>
                      <Select
                        value={formData.bestTimeToCall}
                        onValueChange={(value) => handleInputChange("bestTimeToCall", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select best time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                          <SelectItem value="evening">Evening (5PM - 8PM)</SelectItem>
                          <SelectItem value="anytime">Anytime</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Payment & Review */}
              {currentStep === 4 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Sponsorship Summary */}
                  <div className="bg-muted/50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Sponsorship Summary</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Company:</span>
                        <span className="font-medium">{formData.companyName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Contact:</span>
                        <span className="font-medium">{formData.contactPerson}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Email:</span>
                        <span className="font-medium">{formData.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sponsorship Tier:</span>
                        <span className="font-medium">{getSelectedTier()?.name}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between text-lg font-bold">
                        <span>Investment Amount:</span>
                        <span className="text-primary">${getSelectedTier()?.price.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label className="text-lg font-semibold mb-4 block">Payment Method</Label>
                    <RadioGroup
                      value={formData.paymentMethod}
                      onValueChange={(value) => handleInputChange("paymentMethod", value)}
                      className="space-y-3"
                    >
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="international" id="international" />
                        <Label htmlFor="international" className="flex items-center gap-2 cursor-pointer">
                          <Building className="h-5 w-5" />
                          International Payments (USD)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="local" id="local" />
                        <Label htmlFor="local" className="flex items-center gap-2 cursor-pointer">
                          <CreditCard className="h-5 w-5" />
                          Local Payments (KES) / M-Pesa
                        </Label>
                      </div>
                    </RadioGroup>

                    {/* Payment Details Display */}
                    {formData.paymentMethod === "international" && (
                      <div>
                        <h4 className="font-semibold text-lg mb-4 text-primary">International Payment Details (USD)</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="font-medium">Bank Name:</span>
                            <span>{bankingDetails.international.bankName}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Account Name:</span>
                            <span>{bankingDetails.international.accountName}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">USD Account Number:</span>
                            <span className="font-mono">{bankingDetails.international.accountNumber}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">SWIFT Code:</span>
                            <span className="font-mono">{bankingDetails.international.swiftCode}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Branch Code:</span>
                            <span className="font-mono">{bankingDetails.international.branchCode}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Amount:</span>
                            <span className="font-mono text-lg text-primary">
                              ${getSelectedTier()?.price.toLocaleString()} USD
                            </span>
                          </div>
                        </div>
                        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                          <h5 className="font-medium mb-2">Transfer Instructions:</h5>
                          <p className="text-sm">{bankingDetails.international.instructions}</p>
                        </div>
                      </div>
                    )}

                    {formData.paymentMethod === "local" && (
                      <div>
                        <h4 className="font-semibold text-lg mb-4 text-primary">Local Payment Details (KES)</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="font-medium">Bank Name:</span>
                            <span>{bankingDetails.local.bankName}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Paybill Number:</span>
                            <span className="font-mono text-lg">{bankingDetails.local.paybillNumber}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Account Number:</span>
                            <span className="font-mono text-lg">{bankingDetails.local.accountNumber}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Amount:</span>
                            <span className="font-mono text-lg text-primary">
                              KES {(getSelectedTier()?.price * 130).toLocaleString()} (≈ $
                              {getSelectedTier()?.price.toLocaleString()} USD)
                            </span>
                          </div>
                        </div>
                        <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                          <h5 className="font-medium mb-2">M-Pesa Payment Instructions:</h5>
                          <pre className="text-sm whitespace-pre-wrap">{bankingDetails.local.instructions}</pre>
                        </div>
                      </div>
                    )}

                    {/* Transaction Code Input */}
                    <div className="mt-6">
                      <Label htmlFor="transactionCode" className="text-base font-medium">
                        Transaction Code / Reference Number *
                      </Label>
                      <Input
                        id="transactionCode"
                        placeholder={
                          formData.paymentMethod === "international"
                            ? "Enter bank transfer reference number"
                            : "Enter M-Pesa transaction code (e.g., QGH7X8Y9Z)"
                        }
                        value={formData.transactionCode}
                        onChange={(e) => handleInputChange("transactionCode", e.target.value)}
                        className="mt-2"
                        required
                      />
                      <p className="text-sm text-muted-foreground mt-2">
                        {formData.paymentMethod === "international"
                          ? "Enter the reference number provided by your bank for the international transfer"
                          : "Enter the transaction code you received via SMS after making the M-Pesa payment"}
                      </p>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked)}
                        required
                      />
                      <Label htmlFor="agreeToTerms" className="text-sm">
                        I agree to the{" "}
                        <a href="#" className="text-primary hover:underline">
                          Sponsorship Terms and Conditions
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-primary hover:underline">
                          Privacy Policy
                        </a>{" "}
                        *
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="marketingConsent"
                        checked={formData.marketingConsent}
                        onCheckedChange={(checked) => handleInputChange("marketingConsent", checked)}
                      />
                      <Label htmlFor="marketingConsent" className="text-sm">
                        I would like to receive updates about AAIS events and partnership opportunities
                      </Label>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6 border-t">
                <Button type="button" variant="outline" onClick={prevStep} disabled={currentStep === 1}>
                  Previous
                </Button>

                {currentStep < 4 ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    disabled={
                      (currentStep === 1 &&
                        (!formData.companyName ||
                          !formData.contactPerson ||
                          !formData.email ||
                          !formData.phone ||
                          !formData.industry ||
                          !formData.country)) ||
                      (currentStep === 2 && !formData.sponsorshipTier)
                    }
                  >
                    Next
                  </Button>
                ) : (
                  <Button type="submit" disabled={!formData.agreeToTerms} className="bg-primary hover:bg-primary/90">
                    Submit Application
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
    </section>
  )
}

export default SponsorRegistrationForm
