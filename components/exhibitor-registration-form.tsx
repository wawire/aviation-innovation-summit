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
import { User, Building, CreditCard, Check, Sparkles } from "lucide-react"

interface ExhibitorRegistrationData {
  // Company Information
  companyName: string
  contactPerson: string
  email: string
  phone: string
  website: string
  industry: string
  country: string
  companyDescription: string

  // Exhibition Details
  exhibitionPackage: string
  boothRequirements: string[]
  productCategories: string[]

  // Setup Requirements
  setupRequirements: string
  electricalNeeds: string
  internetRequirements: string

  // Marketing Materials
  companyLogo: string
  brochureDescription: string
  specialDisplays: string

  // Contact Preferences
  preferredContactMethod: string
  bestTimeToCall: string

  // Payment Information
  paymentMethod: string
  billingAddress: string
  taxId: string
  mpesaTransactionCode: string
  bankTransactionCode: string

  // Terms and Conditions
  agreeToTerms: boolean
  marketingConsent: boolean
}

const ExhibitorRegistrationForm = () => {
  const searchParams = useSearchParams()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<ExhibitorRegistrationData>({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    website: "",
    industry: "",
    country: "",
    companyDescription: "",
    exhibitionPackage: "",
    boothRequirements: [],
    productCategories: [],
    setupRequirements: "",
    electricalNeeds: "",
    internetRequirements: "",
    companyLogo: "",
    brochureDescription: "",
    specialDisplays: "",
    preferredContactMethod: "",
    bestTimeToCall: "",
    paymentMethod: "",
    billingAddress: "",
    taxId: "",
    mpesaTransactionCode: "",
    bankTransactionCode: "",
    agreeToTerms: false,
    marketingConsent: false,
  })

  useEffect(() => {
    const packageType = searchParams.get("package")
    if (packageType) {
      setFormData((prev) => ({ ...prev, exhibitionPackage: packageType }))
    }
  }, [searchParams])

  const exhibitionPackages = [
    {
      id: "premium",
      name: "Premium",
      price: 4000,
      description: "For established organizations",
      slots: 5,
      slotsRemaining: 3,
      features: [
        "VIP Networking Access",
        "Exhibition Booth 3m X 9m",
        "3 Rounded Tables",
        "6 Standard Chairs",
        "2 13 amps Electrical Socket",
        "Dustbin",
        "Backdrop design included",
      ],
    },
    {
      id: "modular",
      name: "Modular",
      price: 2500,
      description: "Great for growing companies",
      slots: 8,
      slotsRemaining: 5,
      features: [
        "Exhibition Booth 3m X 6m",
        "2 Round Table",
        "4 Standard Chairs",
        "1 13amp Electrical Socket",
        "Dustbin",
        "Basic backdrop",
      ],
      popular: true,
    },
    {
      id: "basic",
      name: "Basic",
      price: 1500,
      description: "Perfect for small businesses",
      slots: 12,
      slotsRemaining: 8,
      features: [
        "1 Exhibition Booth: 3m X 3m",
        "1 Rounded Table",
        "2 Standard Chairs",
        "1 13amp Electrical Socket",
        "Dustbin",
      ],
    },
  ]

  const industries = [
    "Aviation & Airlines",
    "Airports & Ground Services",
    "Aircraft Manufacturing",
    "Aviation Technology",
    "MRO Services",
    "Ground Support Equipment",
    "Aviation Software",
    "Safety & Security",
    "Cargo & Logistics",
    "Training & Education",
    "Finance & Insurance",
    "Other",
  ]

  const productCategories = [
    "Aircraft Systems",
    "Avionics",
    "Ground Support Equipment",
    "MRO Tools & Equipment",
    "Safety Equipment",
    "Software Solutions",
    "Training Systems",
    "Cargo Handling",
    "Airport Infrastructure",
    "Fuel Systems",
    "Communication Systems",
    "Navigation Systems",
  ]

  const boothRequirements = [
    "Additional Power Outlets",
    "High-Speed Internet",
    "Audio/Visual Equipment",
    "Storage Space",
    "Meeting Area",
    "Product Display Stands",
    "Lighting Enhancement",
    "Carpet/Flooring",
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

  const handleInputChange = (field: keyof ExhibitorRegistrationData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleArrayChange = (field: keyof ExhibitorRegistrationData, value: string, checked: boolean) => {
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
    console.log("Exhibitor registration data:", formData)
    alert("Exhibition application submitted successfully! Our team will contact you within 24 hours.")
  }

  const getSelectedPackage = () => {
    return exhibitionPackages.find((pkg) => pkg.id === formData.exhibitionPackage)
  }

  const steps = [
    { number: 1, title: "Company Info", icon: <Building className="h-5 w-5" /> },
    { number: 2, title: "Exhibition", icon: <Sparkles className="h-5 w-5" /> },
    { number: 3, title: "Setup", icon: <User className="h-5 w-5" /> },
    { number: 4, title: "Payment", icon: <CreditCard className="h-5 w-5" /> },
  ]

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold mb-2 block">Exhibition Opportunity</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Become an Exhibitor</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcase your products and services to Africa's aviation industry leaders. Connect directly with potential
            customers and partners at AAIS 2025.
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
                {currentStep === 1 && "Tell us about your company and what you'll be showcasing"}
                {currentStep === 2 && "Select your exhibition package and specify your product categories"}
                {currentStep === 3 && "Detail your booth setup requirements and technical needs"}
                {currentStep === 4 && "Review your exhibition package and complete the application"}
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
                    <Label htmlFor="companyDescription">Company Description *</Label>
                    <Textarea
                      id="companyDescription"
                      placeholder="Briefly describe your company and the products/services you'll be showcasing..."
                      value={formData.companyDescription}
                      onChange={(e) => handleInputChange("companyDescription", e.target.value)}
                      rows={4}
                      required
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 2: Exhibition Package */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <Label className="text-lg font-semibold mb-4 block">Select Exhibition Package *</Label>
                    <RadioGroup
                      value={formData.exhibitionPackage}
                      onValueChange={(value) => handleInputChange("exhibitionPackage", value)}
                      className="space-y-4"
                    >
                      {exhibitionPackages.map((pkg) => (
                        <div key={pkg.id} className="relative">
                          <div
                            className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                              formData.exhibitionPackage === pkg.id
                                ? "border-primary bg-primary/5"
                                : "border-muted hover:border-primary/50"
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <RadioGroupItem value={pkg.id} id={pkg.id} />
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <div className="flex items-center gap-2">
                                    <Label htmlFor={pkg.id} className="text-lg font-semibold cursor-pointer">
                                      {pkg.name}
                                    </Label>
                                    {pkg.popular && <Badge className="bg-primary text-white">Most Popular</Badge>}
                                  </div>
                                  <div className="text-right">
                                    <span className="text-2xl font-bold text-primary">${pkg.price}</span>
                                  </div>
                                </div>
                                <p className="text-muted-foreground mb-3">{pkg.description}</p>
                                <div className="flex flex-wrap gap-2 mb-2">
                                  {pkg.features.map((feature) => (
                                    <Badge key={feature} variant="outline" className="text-xs">
                                      {feature}
                                    </Badge>
                                  ))}
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  {pkg.slotsRemaining} of {pkg.slots} slots available
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <Separator />

                  <div>
                    <Label className="text-lg font-semibold mb-4 block">Product Categories</Label>
                    <p className="text-sm text-muted-foreground mb-4">
                      Select the categories that best describe your products/services
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {productCategories.map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox
                            id={category}
                            checked={formData.productCategories.includes(category)}
                            onCheckedChange={(checked) =>
                              handleArrayChange("productCategories", category, checked as boolean)
                            }
                          />
                          <Label htmlFor={category} className="text-sm">
                            {category}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Setup Requirements */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <Label className="text-lg font-semibold mb-4 block">Additional Booth Requirements</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {boothRequirements.map((requirement) => (
                        <div key={requirement} className="flex items-center space-x-2">
                          <Checkbox
                            id={requirement}
                            checked={formData.boothRequirements.includes(requirement)}
                            onCheckedChange={(checked) =>
                              handleArrayChange("boothRequirements", requirement, checked as boolean)
                            }
                          />
                          <Label htmlFor={requirement} className="text-sm">
                            {requirement}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="electricalNeeds">Electrical Requirements</Label>
                      <Select
                        value={formData.electricalNeeds}
                        onValueChange={(value) => handleInputChange("electricalNeeds", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select electrical needs" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">Standard (included in package)</SelectItem>
                          <SelectItem value="additional">Additional Power Outlets</SelectItem>
                          <SelectItem value="high-power">High Power Equipment</SelectItem>
                          <SelectItem value="custom">Custom Requirements</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="internetRequirements">Internet Requirements</Label>
                      <Select
                        value={formData.internetRequirements}
                        onValueChange={(value) => handleInputChange("internetRequirements", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select internet needs" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="wifi">Standard WiFi</SelectItem>
                          <SelectItem value="dedicated">Dedicated Connection</SelectItem>
                          <SelectItem value="high-speed">High-Speed Internet</SelectItem>
                          <SelectItem value="none">No Internet Required</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="setupRequirements">Special Setup Requirements</Label>
                    <Textarea
                      id="setupRequirements"
                      placeholder="Describe any special setup requirements, equipment needs, or booth customizations..."
                      value={formData.setupRequirements}
                      onChange={(e) => handleInputChange("setupRequirements", e.target.value)}
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label htmlFor="specialDisplays">Special Displays or Demonstrations</Label>
                    <Textarea
                      id="specialDisplays"
                      placeholder="Will you have any special displays, product demonstrations, or interactive elements?"
                      value={formData.specialDisplays}
                      onChange={(e) => handleInputChange("specialDisplays", e.target.value)}
                      rows={3}
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
                  {/* Exhibition Summary */}
                  <div className="bg-muted/50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Exhibition Summary</h3>
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
                        <span>Exhibition Package:</span>
                        <span className="font-medium">{getSelectedPackage()?.name}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total Amount:</span>
                        <span className="text-primary">${getSelectedPackage()?.price}</span>
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
                            <span className="font-mono text-lg text-primary">${getSelectedPackage()?.price} USD</span>
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
                              KES {(getSelectedPackage()?.price * 130).toLocaleString()} (≈ $
                              {getSelectedPackage()?.price} USD)
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
                        value={
                          formData.paymentMethod === "mpesa"
                            ? formData.mpesaTransactionCode
                            : formData.bankTransactionCode
                        }
                        onChange={(e) =>
                          handleInputChange(
                            formData.paymentMethod === "mpesa" ? "mpesaTransactionCode" : "bankTransactionCode",
                            e.target.value,
                          )
                        }
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

                  <div>
                    <Label htmlFor="billingAddress">Billing Address</Label>
                    <Textarea
                      id="billingAddress"
                      placeholder="Enter your complete billing address..."
                      value={formData.billingAddress}
                      onChange={(e) => handleInputChange("billingAddress", e.target.value)}
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="taxId">Tax ID / VAT Number (if applicable)</Label>
                    <Input
                      id="taxId"
                      value={formData.taxId}
                      onChange={(e) => handleInputChange("taxId", e.target.value)}
                    />
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
                          Exhibition Terms and Conditions
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
                        I would like to receive updates about AAIS events and exhibition opportunities
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
                          !formData.country ||
                          !formData.companyDescription)) ||
                      (currentStep === 2 && !formData.exhibitionPackage)
                    }
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    disabled={
                      !formData.agreeToTerms ||
                      !formData.paymentMethod ||
                      (formData.paymentMethod === "local" && !formData.mpesaTransactionCode) ||
                      (formData.paymentMethod === "international" && !formData.bankTransactionCode)
                    }
                    className="bg-primary hover:bg-primary/90"
                  >
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

export default ExhibitorRegistrationForm
