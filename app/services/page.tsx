"use client"

import { useState } from "react"
import { Building2, Users, Shield, TrendingUp, Phone, CheckCircle, Sparkles, Home, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function ServicesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const services = [
    {
      icon: Building2,
      title: "Full-Service Property Management",
      description:
        "Complete end-to-end management of your rental properties including tenant screening, rent collection, maintenance coordination, and financial reporting.",
      features: [
        "Professional tenant screening & selection",
        "Monthly rent collection & late fee enforcement",
        "24/7 emergency maintenance coordination",
        "Detailed monthly financial reporting",
        "Property inspections & condition reports",
        "Lease agreement preparation & execution",
        "Eviction proceedings when necessary",
        "Owner portal access with real-time updates",
      ],
      price: "$150/month",
      popular: true,
    },
    {
      icon: Users,
      title: "Tenant Relations & Leasing",
      description:
        "Professional tenant management with 24/7 support, ensuring high retention rates and satisfied renters while protecting your investment.",
      features: [
        "24/7 tenant support hotline",
        "Professional lease management",
        "Move-in & move-out coordination",
        "Tenant conflict resolution",
        "Lease renewal negotiations",
        "Tenant retention programs",
        "Fair Housing compliance",
        "Tenant satisfaction surveys",
      ],
      price: "Included",
      popular: false,
    },
    {
      icon: TrendingUp,
      title: "Investment Optimization",
      description:
        "Maximize your property's ROI with AI-powered market analysis, strategic pricing, and performance optimization tailored to South Florida markets.",
      features: [
        "AI-powered market analysis",
        "Dynamic rent pricing strategies",
        "ROI reporting & analytics",
        "Investment consulting services",
        "Market trend analysis",
        "Property value optimization",
        "Portfolio performance tracking",
        "Strategic growth planning",
      ],
      price: "Included",
      popular: false,
    },
    {
      icon: Shield,
      title: "Legal Compliance & Protection",
      description:
        "Stay compliant with Florida property laws and regulations with our expert legal guidance and comprehensive risk management.",
      features: [
        "Florida law compliance monitoring",
        "Professional eviction services",
        "Legal documentation preparation",
        "Risk management consulting",
        "Fair Housing law adherence",
        "Local ordinance compliance",
        "Insurance coordination",
        "Legal referral network",
      ],
      price: "As needed",
      popular: false,
    },
    {
      icon: Sparkles,
      title: "Premium Property Care Services",
      description:
        "Professional cleaning and maintenance services to keep your properties in pristine condition and maximize tenant satisfaction.",
      features: [
        "Move-in/Move-out deep cleaning",
        "Post-maintenance cleaning",
        "Carpet and upholstery cleaning",
        "Window cleaning services",
        "Pressure washing (exterior)",
        "Emergency cleaning services",
        "Pre-showing property preparation",
        "Seasonal deep cleaning",
      ],
      price: "Starting at $150",
      popular: false,
    },
    {
      icon: Home,
      title: "Maintenance & Repairs",
      description:
        "Comprehensive maintenance services with vetted contractors, quality assurance, and transparent pricing to protect your investment.",
      features: [
        "24/7 emergency maintenance",
        "Preventive maintenance programs",
        "Vetted contractor network",
        "Quality assurance inspections",
        "Maintenance request tracking",
        "Cost-effective repair solutions",
        "Seasonal maintenance planning",
        "Warranty management",
      ],
      price: "10% markup",
      popular: false,
    },
  ]

  const processSteps = [
    {
      step: "1",
      title: "Free Consultation",
      description: "We evaluate your property and discuss your management goals and expectations.",
    },
    {
      step: "2",
      title: "Custom Proposal",
      description: "Receive a detailed management proposal tailored to your specific property and needs.",
    },
    {
      step: "3",
      title: "Agreement & Setup",
      description: "Sign the management agreement and we handle all setup including marketing and tenant screening.",
    },
    {
      step: "4",
      title: "Ongoing Management",
      description: "Enjoy hands-off property ownership while we handle all day-to-day management tasks.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Building2 className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
              <div>
                <h1 className="text-lg sm:text-2xl font-bold text-gray-900">Alenley</h1>
                <p className="text-xs text-gray-600">Property Management</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link href="/services" className="text-blue-600 font-medium">
                Services
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
                Pricing
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">
                About
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </Link>
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Phone className="h-4 w-4 mr-2" />
                <span className="hidden lg:inline">(305) 699-3437</span>
                <span className="lg:hidden">Call</span>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-gray-600 hover:text-gray-900 px-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="text-blue-600 font-medium px-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/pricing"
                  className="text-gray-600 hover:text-gray-900 px-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-900 px-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-gray-900 px-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <div className="px-4 pt-4 border-t border-gray-200">
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <Phone className="h-4 w-4 mr-2" />
                    (305) 699-3437
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Property Management Services</h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mb-6 sm:mb-8">
            Comprehensive property management solutions designed to maximize your investment returns while minimizing
            your involvement in day-to-day operations.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to successfully manage your rental properties in South Florida
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg ${service.popular ? "ring-2 ring-blue-600" : ""}`}
              >
                {service.popular && (
                  <div className="bg-blue-600 text-white text-center py-2 text-sm font-medium">Most Popular</div>
                )}
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-3 sm:space-y-0">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex-shrink-0">
                        <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                        <Badge variant="outline" className="text-blue-600 border-blue-600 bg-blue-50 mt-1 w-fit">
                          {service.price}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-sm sm:text-base">{service.description}</CardDescription>
                </CardHeader>

                <CardContent className="p-4 sm:p-6 pt-0">
                  <ul className="space-y-2 sm:space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 sm:mt-6">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Learn More</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Property Care Services Detail */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Premium Property Care Services</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Professional cleaning and maintenance services that protect your investment and keep tenants happy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Move-In/Move-Out Deep Clean",
                price: "$200-350",
                description: "Complete deep cleaning between tenants",
                features: ["All rooms deep cleaned", "Appliance cleaning", "Bathroom sanitization", "Floor care"],
              },
              {
                title: "Post-Maintenance Cleaning",
                price: "$100-200",
                description: "Clean up after repairs or maintenance work",
                features: ["Dust removal", "Surface cleaning", "Debris cleanup", "Touch-up cleaning"],
              },
              {
                title: "Pre-Showing Preparation",
                price: "$75-150",
                description: "Property preparation for prospective tenants",
                features: ["Quick clean & tidy", "Window cleaning", "Fresh scent", "Curb appeal boost"],
              },
              {
                title: "Carpet & Upholstery Care",
                price: "$150-300",
                description: "Professional carpet and furniture cleaning",
                features: ["Steam cleaning", "Stain removal", "Deodorizing", "Fabric protection"],
              },
              {
                title: "Pressure Washing",
                price: "$200-400",
                description: "Exterior cleaning for driveways, patios, siding",
                features: ["Driveway cleaning", "Patio restoration", "Siding wash", "Walkway cleaning"],
              },
              {
                title: "Emergency Cleaning",
                price: "$150-250",
                description: "Urgent cleaning for unexpected situations",
                features: ["Same-day service", "Damage cleanup", "Odor removal", "Quick turnaround"],
              },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 space-y-2 sm:space-y-0">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">{service.title}</h3>
                    <Badge variant="outline" className="text-blue-600 border-blue-600 bg-blue-50 w-fit">
                      {service.price}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm mb-4">{service.description}</p>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                        <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg inline-block">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Why Choose Our Property Care Services?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-4">
                <div className="text-center">
                  <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-xs sm:text-sm font-medium">Insured & Bonded</p>
                </div>
                <div className="text-center">
                  <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-xs sm:text-sm font-medium">Premium Quality</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-xs sm:text-sm font-medium">Satisfaction Guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Simple steps to get started with professional property management
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg sm:text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-blue-100">
            Contact us today for a free property evaluation and custom management proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 w-full sm:w-auto">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Call (305) 699-3437
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 w-full sm:w-auto bg-transparent"
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
