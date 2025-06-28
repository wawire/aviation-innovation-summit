'use client';

import type React from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import {
  AlertCircle,
  Building,
  Calendar,
  Check,
  CreditCard,
  Plus,
  Trash2,
  User,
  Users,
} from 'lucide-react';
import { useState } from 'react';

interface Attendee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  dietaryRequirements: string[];
}

interface RegistrationData {
  // Personal Information (Primary Contact for Corporate)
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  jobTitle: string;
  company: string;
  industry: string;
  country: string;

  // Registration Type
  registrationType: string;

  // Corporate Package Attendees
  corporateAttendees: Attendee[];
  additionalPackages: { type: string; count: number }[];

  // Accommodation
  needsAccommodation: boolean;
  accommodationType: string;
  checkIn: string;
  checkOut: string;

  // Dietary Requirements (for individual bookings)
  dietaryRequirements: string[];
  specialRequests: string;

  // Networking Preferences
  networkingInterests: string[];

  // Payment Information
  paymentMethod: string;

  // Terms and Conditions
  agreeToTerms: boolean;
  marketingConsent: boolean;
}

const RegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<RegistrationData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: '',
    company: '',
    industry: '',
    country: '',
    registrationType: '',
    corporateAttendees: [],
    additionalPackages: [],
    needsAccommodation: false,
    accommodationType: '',
    checkIn: '',
    checkOut: '',
    dietaryRequirements: [],
    specialRequests: '',
    networkingInterests: [],
    paymentMethod: '',
    agreeToTerms: false,
    marketingConsent: false,
  });

  const [showPaymentDetails, setShowPaymentDetails] = useState(false);
  const [paymentProof, setPaymentProof] = useState('');

  const bankingDetails = {
    international: {
      bankName: 'Citibank N A – Nairobi',
      accountName: 'Kenya Airways Plc',
      accountNumber: '0100597217',
      swiftCode: 'CITIKENA',
      branchCode: '16000',
      currency: 'USD',
      instructions:
        "Please use your company name and 'AAIS2025' as reference when making the international transfer",
    },
    local: {
      bankName: 'NCBA Bank',
      paybillNumber: '880100',
      accountNumber: '6606530056',
      currency: 'KES',
      instructions:
        '1. Go to M-Pesa menu\n2. Select Lipa na M-Pesa\n3. Select Pay Bill\n4. Enter Paybill Number: 880100\n5. Enter Account Number: 6606530056\n6. Enter Amount in KES\n7. Enter your M-Pesa PIN\n8. Copy the transaction code from SMS',
    },
  };

  const registrationTypes = [
    {
      id: 'early-bird',
      name: 'Early Bird Delegate',
      price: 300,
      originalPrice: 350,
      description:
        'Full access to all sessions, networking events, and materials',
      features: [
        'All keynote sessions',
        'Panel discussions',
        'Networking events',
        'Conference materials',
        'Lunch & refreshments',
        'Gala Dinner',
      ],
      deadline: 'August 31, 2025',
      popular: true,
    },
    {
      id: 'standard',
      name: 'Standard Delegate',
      price: 350,
      description:
        'Full access to all sessions, networking events, and materials',
      features: [
        'All keynote sessions',
        'Panel discussions',
        'Networking events',
        'Conference materials',
        'Lunch & refreshments',
        'Gala Dinner',
      ],
    },
    {
      id: 'corporate',
      name: 'Corporate Package',
      price: 1200,
      originalPrice: 1500,
      description:
        'Team package for up to 5 delegates from the same organization',
      features: [
        'Up to 5 delegates included',
        'All keynote sessions',
        'Panel discussions',
        'Priority networking events',
        'Premium conference materials',
        'Lunch & refreshments',
        'VIP Gala Dinner seating',
        'Corporate branding opportunities',
        'Dedicated account manager',
      ],
      maxAttendees: 5,
      minAttendees: 2,
      note: 'Additional attendees beyond 5 require separate individual packages',
      corporate: true,
    },
    {
      id: 'student',
      name: 'Student/Academic',
      price: 150,
      description: 'Special rate for students and academic professionals',
      features: [
        'All keynote sessions',
        'Panel discussions',
        'Networking events',
        'Conference materials',
        'Gala Dinner',
      ],
      note: 'Valid student ID required',
    },
  ];

  const industries = [
    'Aviation & Airlines',
    'Airports & Ground Services',
    'Government & Regulatory',
    'Finance & Investment',
    'Tourism & Hospitality',
    'Technology & Innovation',
    'Logistics & Supply Chain',
    'Consulting Services',
    'Academia & Research',
    'Media & Communications',
    'Other',
  ];

  const countries = [
    'Kenya',
    'Nigeria',
    'South Africa',
    'Ghana',
    'Ethiopia',
    'Egypt',
    'Morocco',
    'Tanzania',
    'Uganda',
    'Rwanda',
    'Botswana',
    'Zambia',
    'Zimbabwe',
    'Namibia',
    'Mauritius',
    'Senegal',
    'Ivory Coast',
    'Cameroon',
    'Tunisia',
    'Algeria',
    'United States',
    'United Kingdom',
    'Germany',
    'France',
    'Netherlands',
    'Canada',
    'Australia',
    'China',
    'India',
    'UAE',
    'Other',
  ];

  const networkingInterests = [
    'Investment Opportunities',
    'Technology Innovation',
    'Regulatory Affairs',
    'Sustainability Initiatives',
    'Regional Partnerships',
    'Infrastructure Development',
    'Digital Transformation',
    'Market Expansion',
    'Policy Development',
    'Talent Development',
  ];

  const dietaryOptions = [
    'Vegetarian',
    'Vegan',
    'Halal',
    'Kosher',
    'Gluten-free',
    'Dairy-free',
    'Nut allergies',
    'Other allergies',
  ];

  const handleInputChange = (field: keyof RegistrationData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayChange = (
    field: keyof RegistrationData,
    value: string,
    checked: boolean
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked
        ? [...(prev[field] as string[]), value]
        : (prev[field] as string[]).filter(item => item !== value),
    }));
  };

  // Corporate attendee management
  const addCorporateAttendee = () => {
    if (formData.corporateAttendees.length < 5) {
      const newAttendee: Attendee = {
        id: Date.now().toString(),
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        dietaryRequirements: [],
      };
      setFormData(prev => ({
        ...prev,
        corporateAttendees: [...prev.corporateAttendees, newAttendee],
      }));
    }
  };

  const removeCorporateAttendee = (id: string) => {
    setFormData(prev => ({
      ...prev,
      corporateAttendees: prev.corporateAttendees.filter(
        attendee => attendee.id !== id
      ),
    }));
  };

  const updateCorporateAttendee = (
    id: string,
    field: keyof Attendee,
    value: any
  ) => {
    setFormData(prev => ({
      ...prev,
      corporateAttendees: prev.corporateAttendees.map(attendee =>
        attendee.id === id ? { ...attendee, [field]: value } : attendee
      ),
    }));
  };

  const updateAttendeeDietary = (
    id: string,
    dietary: string,
    checked: boolean
  ) => {
    setFormData(prev => ({
      ...prev,
      corporateAttendees: prev.corporateAttendees.map(attendee =>
        attendee.id === id
          ? {
              ...attendee,
              dietaryRequirements: checked
                ? [...attendee.dietaryRequirements, dietary]
                : attendee.dietaryRequirements.filter(item => item !== dietary),
            }
          : attendee
      ),
    }));
  };

  const addAdditionalPackage = (type: string) => {
    setFormData(prev => {
      const existing = prev.additionalPackages.find(pkg => pkg.type === type);
      if (existing) {
        return {
          ...prev,
          additionalPackages: prev.additionalPackages.map(pkg =>
            pkg.type === type ? { ...pkg, count: pkg.count + 1 } : pkg
          ),
        };
      } else {
        return {
          ...prev,
          additionalPackages: [...prev.additionalPackages, { type, count: 1 }],
        };
      }
    });
  };

  const removeAdditionalPackage = (type: string) => {
    setFormData(prev => ({
      ...prev,
      additionalPackages: prev.additionalPackages
        .map(pkg =>
          pkg.type === type ? { ...pkg, count: pkg.count - 1 } : pkg
        )
        .filter(pkg => pkg.count > 0),
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const submissionData = {
      ...formData,
      paymentProof: paymentProof,
      totalAmount: calculateTotalAmount(),
    };
    console.log('Registration data:', submissionData);
    alert(
      'Registration submitted successfully! We will verify your payment and send confirmation within 24 hours.'
    );
  };

  const getSelectedRegistrationType = () => {
    return registrationTypes.find(
      type => type.id === formData.registrationType
    );
  };

  const calculateTotalAmount = () => {
    const basePackage = getSelectedRegistrationType();
    if (!basePackage) return 0;

    let total = basePackage.price;

    // Add additional packages for corporate overflow
    formData.additionalPackages.forEach(pkg => {
      const packageType = registrationTypes.find(type => type.id === pkg.type);
      if (packageType) {
        total += packageType.price * pkg.count;
      }
    });

    return total;
  };

  const steps = [
    { number: 1, title: 'Personal Info', icon: <User className="h-5 w-5" /> },
    {
      number: 2,
      title: 'Registration',
      icon: <Calendar className="h-5 w-5" />,
    },
    { number: 3, title: 'Preferences', icon: <Users className="h-5 w-5" /> },
    { number: 4, title: 'Payment', icon: <CreditCard className="h-5 w-5" /> },
  ];

  const isCorporatePackage = formData.registrationType === 'corporate';
  const corporateAttendeesValid =
    !isCorporatePackage ||
    (formData.corporateAttendees.length >= 2 &&
      formData.corporateAttendees.every(
        attendee =>
          attendee.firstName &&
          attendee.lastName &&
          attendee.email &&
          attendee.jobTitle
      ));

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold mb-2 block">Join Us</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Register for AAIS 2025
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Secure your place at Africa's premier aviation innovation summit.
            Connect with industry leaders, explore investment opportunities, and
            shape the future of African aviation.
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
                        ? 'bg-primary border-primary text-white'
                        : 'border-muted-foreground text-muted-foreground'
                    }`}
                  >
                    {currentStep > step.number ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      step.icon
                    )}
                  </div>
                  <div className="ml-2 hidden sm:block">
                    <p
                      className={`text-sm font-medium ${
                        currentStep >= step.number
                          ? 'text-primary'
                          : 'text-muted-foreground'
                      }`}
                    >
                      {step.title}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-16 h-0.5 mx-4 ${
                        currentStep > step.number
                          ? 'bg-primary'
                          : 'bg-muted-foreground/30'
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
                {currentStep === 1 &&
                  (isCorporatePackage
                    ? 'Please provide the primary contact information for your corporate registration'
                    : 'Please provide your personal and professional information')}
                {currentStep === 2 &&
                  'Choose your registration type and accommodation preferences'}
                {currentStep === 3 &&
                  'Tell us about your networking interests and dietary requirements'}
                {currentStep === 4 &&
                  'Review your registration and complete payment'}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {isCorporatePackage && (
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                        Corporate Package - Primary Contact
                      </h3>
                      <p className="text-sm text-blue-800 dark:text-blue-200">
                        This information will be used as the primary contact for
                        your corporate registration. You'll be able to add up to
                        5 team members in the next step.
                      </p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={e =>
                          handleInputChange('firstName', e.target.value)
                        }
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={e =>
                          handleInputChange('lastName', e.target.value)
                        }
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
                        onChange={e =>
                          handleInputChange('email', e.target.value)
                        }
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={e =>
                          handleInputChange('phone', e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="jobTitle">Job Title *</Label>
                      <Input
                        id="jobTitle"
                        value={formData.jobTitle}
                        onChange={e =>
                          handleInputChange('jobTitle', e.target.value)
                        }
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company/Organization *</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={e =>
                          handleInputChange('company', e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="industry">Industry *</Label>
                      <Select
                        value={formData.industry}
                        onValueChange={value =>
                          handleInputChange('industry', value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          {industries.map(industry => (
                            <SelectItem key={industry} value={industry}>
                              {industry}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="country">Country *</Label>
                      <Select
                        value={formData.country}
                        onValueChange={value =>
                          handleInputChange('country', value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent>
                          {countries.map(country => (
                            <SelectItem key={country} value={country}>
                              {country}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Registration Type */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <Label className="text-lg font-semibold mb-4 block">
                      Choose Registration Type *
                    </Label>
                    <RadioGroup
                      value={formData.registrationType}
                      onValueChange={value => {
                        handleInputChange('registrationType', value);
                        // Reset corporate attendees if switching away from corporate
                        if (value !== 'corporate') {
                          handleInputChange('corporateAttendees', []);
                          handleInputChange('additionalPackages', []);
                        }
                      }}
                      className="space-y-4"
                    >
                      {registrationTypes.map(type => (
                        <div key={type.id} className="relative">
                          <div
                            className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                              formData.registrationType === type.id
                                ? 'border-primary bg-primary/5'
                                : 'border-muted hover:border-primary/50'
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <RadioGroupItem value={type.id} id={type.id} />
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <div className="flex items-center gap-2">
                                    <Label
                                      htmlFor={type.id}
                                      className="text-lg font-semibold cursor-pointer"
                                    >
                                      {type.name}
                                    </Label>
                                    {type.popular && (
                                      <Badge className="bg-primary text-white">
                                        Most Popular
                                      </Badge>
                                    )}
                                    {type.corporate && (
                                      <Badge className="bg-blue-600 text-white">
                                        Corporate
                                      </Badge>
                                    )}
                                  </div>
                                  <div className="text-right">
                                    {type.originalPrice && (
                                      <span className="text-sm text-muted-foreground line-through mr-2">
                                        ${type.originalPrice}
                                      </span>
                                    )}
                                    <span className="text-2xl font-bold text-primary">
                                      ${type.price}
                                    </span>
                                    {type.corporate && (
                                      <span className="text-sm text-muted-foreground block">
                                        for up to 5 people
                                      </span>
                                    )}
                                  </div>
                                </div>
                                <p className="text-muted-foreground mb-3">
                                  {type.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-2">
                                  {type.features.map(feature => (
                                    <Badge
                                      key={feature}
                                      variant="outline"
                                      className="text-xs"
                                    >
                                      {feature}
                                    </Badge>
                                  ))}
                                </div>
                                {type.deadline && (
                                  <p className="text-sm text-primary font-medium">
                                    Early bird deadline: {type.deadline}
                                  </p>
                                )}
                                {type.note && (
                                  <p className="text-sm text-muted-foreground italic">
                                    Note: {type.note}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Corporate Attendee Management */}
                  {isCorporatePackage && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <Separator />

                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <Label className="text-lg font-semibold">
                            Corporate Team Members (
                            {formData.corporateAttendees.length}/5)
                          </Label>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={addCorporateAttendee}
                            disabled={formData.corporateAttendees.length >= 5}
                            className="flex items-center gap-2"
                          >
                            <Plus className="h-4 w-4" />
                            Add Member
                          </Button>
                        </div>

                        {formData.corporateAttendees.length < 2 && (
                          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mb-4">
                            <div className="flex items-center gap-2">
                              <AlertCircle className="h-5 w-5 text-yellow-600" />
                              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                                Corporate packages require a minimum of 2
                                attendees (including yourself).
                              </p>
                            </div>
                          </div>
                        )}

                        <div className="space-y-4">
                          {formData.corporateAttendees.map(
                            (attendee, index) => (
                              <div
                                key={attendee.id}
                                className="border rounded-lg p-4"
                              >
                                <div className="flex items-center justify-between mb-4">
                                  <h4 className="font-medium">
                                    Attendee {index + 1}
                                  </h4>
                                  <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    onClick={() =>
                                      removeCorporateAttendee(attendee.id)
                                    }
                                    className="text-red-600 hover:text-red-800"
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                  <div>
                                    <Label htmlFor={`firstName-${attendee.id}`}>
                                      First Name *
                                    </Label>
                                    <Input
                                      id={`firstName-${attendee.id}`}
                                      value={attendee.firstName}
                                      onChange={e =>
                                        updateCorporateAttendee(
                                          attendee.id,
                                          'firstName',
                                          e.target.value
                                        )
                                      }
                                      required
                                    />
                                  </div>
                                  <div>
                                    <Label htmlFor={`lastName-${attendee.id}`}>
                                      Last Name *
                                    </Label>
                                    <Input
                                      id={`lastName-${attendee.id}`}
                                      value={attendee.lastName}
                                      onChange={e =>
                                        updateCorporateAttendee(
                                          attendee.id,
                                          'lastName',
                                          e.target.value
                                        )
                                      }
                                      required
                                    />
                                  </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                  <div>
                                    <Label htmlFor={`email-${attendee.id}`}>
                                      Email Address *
                                    </Label>
                                    <Input
                                      id={`email-${attendee.id}`}
                                      type="email"
                                      value={attendee.email}
                                      onChange={e =>
                                        updateCorporateAttendee(
                                          attendee.id,
                                          'email',
                                          e.target.value
                                        )
                                      }
                                      required
                                    />
                                  </div>
                                  <div>
                                    <Label htmlFor={`jobTitle-${attendee.id}`}>
                                      Job Title *
                                    </Label>
                                    <Input
                                      id={`jobTitle-${attendee.id}`}
                                      value={attendee.jobTitle}
                                      onChange={e =>
                                        updateCorporateAttendee(
                                          attendee.id,
                                          'jobTitle',
                                          e.target.value
                                        )
                                      }
                                      required
                                    />
                                  </div>
                                </div>

                                <div>
                                  <Label className="text-sm font-medium mb-2 block">
                                    Dietary Requirements
                                  </Label>
                                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                    {dietaryOptions.map(option => (
                                      <div
                                        key={option}
                                        className="flex items-center space-x-2"
                                      >
                                        <Checkbox
                                          id={`${option}-${attendee.id}`}
                                          checked={attendee.dietaryRequirements.includes(
                                            option
                                          )}
                                          onCheckedChange={checked =>
                                            updateAttendeeDietary(
                                              attendee.id,
                                              option,
                                              checked as boolean
                                            )
                                          }
                                        />
                                        <Label
                                          htmlFor={`${option}-${attendee.id}`}
                                          className="text-xs"
                                        >
                                          {option}
                                        </Label>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                        </div>

                        {formData.corporateAttendees.length === 5 && (
                          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                              Need More Attendees?
                            </h4>
                            <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                              Your corporate package includes 5 attendees. For
                              additional team members, you can add individual
                              packages below:
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() =>
                                  addAdditionalPackage('early-bird')
                                }
                                className="flex items-center gap-2"
                              >
                                <Plus className="h-4 w-4" />
                                Add Early Bird ($300)
                              </Button>
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => addAdditionalPackage('standard')}
                                className="flex items-center gap-2"
                              >
                                <Plus className="h-4 w-4" />
                                Add Standard ($350)
                              </Button>
                            </div>

                            {formData.additionalPackages.length > 0 && (
                              <div className="mt-4 space-y-2">
                                <h5 className="font-medium text-blue-900 dark:text-blue-100">
                                  Additional Packages:
                                </h5>
                                {formData.additionalPackages.map(pkg => {
                                  const packageType = registrationTypes.find(
                                    type => type.id === pkg.type
                                  );
                                  return (
                                    <div
                                      key={pkg.type}
                                      className="flex items-center justify-between bg-white dark:bg-gray-800 p-2 rounded"
                                    >
                                      <span className="text-sm">
                                        {packageType?.name} x{pkg.count} = $
                                        {(packageType?.price ?? 0) * pkg.count}
                                      </span>
                                      <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        onClick={() =>
                                          removeAdditionalPackage(pkg.type)
                                        }
                                        className="text-red-600 hover:text-red-800"
                                      >
                                        <Trash2 className="h-4 w-4" />
                                      </Button>
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}

                  <Separator />

                  <div>
                    <Label className="text-lg font-semibold mb-4 block">
                      Accommodation
                    </Label>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="needsAccommodation"
                          checked={formData.needsAccommodation}
                          onCheckedChange={checked =>
                            handleInputChange('needsAccommodation', checked)
                          }
                        />
                        <Label htmlFor="needsAccommodation">
                          I need accommodation assistance
                        </Label>
                      </div>

                      {formData.needsAccommodation && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.3 }}
                          className="space-y-4 pl-6"
                        >
                          <div>
                            <Label htmlFor="accommodationType">
                              Accommodation Type
                            </Label>
                            <Select
                              value={formData.accommodationType}
                              onValueChange={value =>
                                handleInputChange('accommodationType', value)
                              }
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select accommodation type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="luxury">
                                  Luxury Hotel (5-star)
                                </SelectItem>
                                <SelectItem value="business">
                                  Business Hotel (4-star)
                                </SelectItem>
                                <SelectItem value="standard">
                                  Standard Hotel (3-star)
                                </SelectItem>
                                <SelectItem value="budget">
                                  Budget Accommodation
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="checkIn">Check-in Date</Label>
                              <Input
                                id="checkIn"
                                type="date"
                                value={formData.checkIn}
                                onChange={e =>
                                  handleInputChange('checkIn', e.target.value)
                                }
                                min="2025-10-15"
                                max="2025-10-17"
                              />
                            </div>
                            <div>
                              <Label htmlFor="checkOut">Check-out Date</Label>
                              <Input
                                id="checkOut"
                                type="date"
                                value={formData.checkOut}
                                onChange={e =>
                                  handleInputChange('checkOut', e.target.value)
                                }
                                min="2025-10-17"
                                max="2025-10-20"
                              />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Preferences */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <Label className="text-lg font-semibold mb-4 block">
                      Networking Interests
                    </Label>
                    <p className="text-sm text-muted-foreground mb-4">
                      Select areas you're interested in to help us connect you
                      with relevant attendees
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {networkingInterests.map(interest => (
                        <div
                          key={interest}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={interest}
                            checked={formData.networkingInterests.includes(
                              interest
                            )}
                            onCheckedChange={checked =>
                              handleArrayChange(
                                'networkingInterests',
                                interest,
                                checked as boolean
                              )
                            }
                          />
                          <Label htmlFor={interest} className="text-sm">
                            {interest}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Dietary Requirements for individual packages */}
                  {!isCorporatePackage && (
                    <div>
                      <Label className="text-lg font-semibold mb-4 block">
                        Dietary Requirements
                      </Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                        {dietaryOptions.map(option => (
                          <div
                            key={option}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox
                              id={option}
                              checked={formData.dietaryRequirements.includes(
                                option
                              )}
                              onCheckedChange={checked =>
                                handleArrayChange(
                                  'dietaryRequirements',
                                  option,
                                  checked as boolean
                                )
                              }
                            />
                            <Label htmlFor={option} className="text-sm">
                              {option}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {isCorporatePackage && (
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <p className="text-sm text-blue-800 dark:text-blue-200">
                        <strong>Note:</strong> Dietary requirements for your
                        team members have been collected in the previous step.
                        The preferences below apply to your corporate group's
                        networking interests.
                      </p>
                    </div>
                  )}

                  <div>
                    <Label htmlFor="specialRequests">
                      Special Requests or Additional Information
                    </Label>
                    <Textarea
                      id="specialRequests"
                      placeholder="Please let us know if you have any special requirements, accessibility needs, or other requests..."
                      value={formData.specialRequests}
                      onChange={e =>
                        handleInputChange('specialRequests', e.target.value)
                      }
                      rows={4}
                    />
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
                  {/* Registration Summary */}
                  <div className="bg-muted/50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">
                      Registration Summary
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Primary Contact:</span>
                        <span className="font-medium">
                          {formData.firstName} {formData.lastName}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Email:</span>
                        <span className="font-medium">{formData.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Company:</span>
                        <span className="font-medium">{formData.company}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Registration Type:</span>
                        <span className="font-medium">
                          {getSelectedRegistrationType()?.name}
                        </span>
                      </div>

                      {isCorporatePackage && (
                        <div className="mt-4 p-3 bg-white dark:bg-gray-800 rounded">
                          <h4 className="font-medium mb-2">
                            Corporate Team Members:
                          </h4>
                          <div className="space-y-1 text-sm">
                            <div>
                              Primary Contact: {formData.firstName}{' '}
                              {formData.lastName}
                            </div>
                            {formData.corporateAttendees.map(
                              (attendee, index) => (
                                <div key={attendee.id}>
                                  Member {index + 1}: {attendee.firstName}{' '}
                                  {attendee.lastName}
                                </div>
                              )
                            )}
                          </div>
                          <div className="mt-2 text-sm font-medium">
                            Total Corporate Attendees:{' '}
                            {formData.corporateAttendees.length + 1}/5
                          </div>
                        </div>
                      )}

                      <Separator />

                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>{getSelectedRegistrationType()?.name}:</span>
                          <span>${getSelectedRegistrationType()?.price}</span>
                        </div>

                        {formData.additionalPackages.map(pkg => {
                          const packageType = registrationTypes.find(
                            type => type.id === pkg.type
                          );
                          return (
                            <div
                              key={pkg.type}
                              className="flex justify-between"
                            >
                              <span>
                                {packageType?.name} x{pkg.count}:
                              </span>
                              <span>
                                ${(packageType?.price ?? 0) * pkg.count}
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      <Separator />
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total Amount:</span>
                        <span className="text-primary">
                          ${calculateTotalAmount()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label className="text-lg font-semibold mb-4 block">
                      Payment Method
                    </Label>
                    <RadioGroup
                      value={formData.paymentMethod}
                      onValueChange={value => {
                        handleInputChange('paymentMethod', value);
                        setShowPaymentDetails(true);
                      }}
                      className="space-y-3"
                    >
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem
                          value="international"
                          id="international"
                        />
                        <Label
                          htmlFor="international"
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <Building className="h-5 w-5" />
                          International Payments (USD)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="local" id="local" />
                        <Label
                          htmlFor="local"
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <CreditCard className="h-5 w-5" />
                          Local Payments (KES) / M-Pesa
                        </Label>
                      </div>
                    </RadioGroup>

                    {/* Payment Details Display */}
                    {showPaymentDetails && formData.paymentMethod && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 p-6 bg-muted/50 rounded-lg"
                      >
                        {formData.paymentMethod === 'international' && (
                          <div>
                            <h4 className="font-semibold text-lg mb-4 text-primary">
                              International Payment Details (USD)
                            </h4>
                            <div className="space-y-3">
                              <div className="flex justify-between">
                                <span className="font-medium">Bank Name:</span>
                                <span>
                                  {bankingDetails.international.bankName}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="font-medium">
                                  Account Name:
                                </span>
                                <span>
                                  {bankingDetails.international.accountName}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="font-medium">
                                  USD Account Number:
                                </span>
                                <span className="font-mono">
                                  {bankingDetails.international.accountNumber}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="font-medium">SWIFT Code:</span>
                                <span className="font-mono">
                                  {bankingDetails.international.swiftCode}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="font-medium">
                                  Branch Code:
                                </span>
                                <span className="font-mono">
                                  {bankingDetails.international.branchCode}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="font-medium">Amount:</span>
                                <span className="font-mono text-lg text-primary">
                                  ${calculateTotalAmount()} USD
                                </span>
                              </div>
                            </div>
                            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                              <h5 className="font-medium mb-2">
                                Transfer Instructions:
                              </h5>
                              <p className="text-sm">
                                {bankingDetails.international.instructions}
                              </p>
                            </div>
                          </div>
                        )}

                        {formData.paymentMethod === 'local' && (
                          <div>
                            <h4 className="font-semibold text-lg mb-4 text-primary">
                              Local Payment Details (KES)
                            </h4>
                            <div className="space-y-3">
                              <div className="flex justify-between">
                                <span className="font-medium">Bank Name:</span>
                                <span>{bankingDetails.local.bankName}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="font-medium">
                                  Paybill Number:
                                </span>
                                <span className="font-mono text-lg">
                                  {bankingDetails.local.paybillNumber}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="font-medium">
                                  Account Number:
                                </span>
                                <span className="font-mono text-lg">
                                  {bankingDetails.local.accountNumber}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="font-medium">Amount:</span>
                                <span className="font-mono text-lg text-primary">
                                  KES{' '}
                                  {(
                                    calculateTotalAmount() * 130
                                  ).toLocaleString()}{' '}
                                  (≈ ${calculateTotalAmount()} USD)
                                </span>
                              </div>
                            </div>
                            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                              <h5 className="font-medium mb-2">
                                M-Pesa Payment Instructions:
                              </h5>
                              <pre className="text-sm whitespace-pre-wrap">
                                {bankingDetails.local.instructions}
                              </pre>
                            </div>
                          </div>
                        )}

                        {/* Transaction Code Input */}
                        <div className="mt-6">
                          <Label
                            htmlFor="paymentProof"
                            className="text-base font-medium"
                          >
                            Transaction Code / Reference Number *
                          </Label>
                          <Input
                            id="paymentProof"
                            placeholder={
                              formData.paymentMethod === 'international'
                                ? 'Enter bank transfer reference number'
                                : 'Enter M-Pesa transaction code (e.g., QGH7X8Y9Z)'
                            }
                            value={paymentProof}
                            onChange={e => setPaymentProof(e.target.value)}
                            className="mt-2"
                            required
                          />
                          <p className="text-sm text-muted-foreground mt-2">
                            {formData.paymentMethod === 'international'
                              ? 'Enter the reference number provided by your bank for the international transfer'
                              : 'Enter the transaction code you received via SMS after making the M-Pesa payment'}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={checked =>
                          handleInputChange('agreeToTerms', checked)
                        }
                        required
                      />
                      <Label htmlFor="agreeToTerms" className="text-sm">
                        I agree to the{' '}
                        <a href="#" className="text-primary hover:underline">
                          Terms and Conditions
                        </a>{' '}
                        and{' '}
                        <a href="#" className="text-primary hover:underline">
                          Privacy Policy
                        </a>{' '}
                        *
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="marketingConsent"
                        checked={formData.marketingConsent}
                        onCheckedChange={checked =>
                          handleInputChange('marketingConsent', checked)
                        }
                      />
                      <Label htmlFor="marketingConsent" className="text-sm">
                        I would like to receive updates about future AAIS events
                        and aviation industry news
                      </Label>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6 border-t">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                >
                  Previous
                </Button>

                {currentStep < 4 ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    disabled={
                      (currentStep === 1 &&
                        (!formData.firstName ||
                          !formData.lastName ||
                          !formData.email ||
                          !formData.phone ||
                          !formData.jobTitle ||
                          !formData.company ||
                          !formData.industry ||
                          !formData.country)) ||
                      (currentStep === 2 &&
                        (!formData.registrationType ||
                          !corporateAttendeesValid)) ||
                      (currentStep === 3 && false) // No required fields in step 3
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
                      ((formData.paymentMethod === 'international' ||
                        formData.paymentMethod === 'local') &&
                        !paymentProof)
                    }
                    className="bg-primary hover:bg-primary/90"
                  >
                    Complete Registration
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;
