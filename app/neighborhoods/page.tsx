"use client"

import { useState } from "react"
import { Building2, MapPin, TrendingUp, DollarSign, Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function NeighborhoodsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const neighborhoods = [
    {
      name: "Coral Gables",
      description: "Historic luxury community with Mediterranean-style architecture and tree-lined streets",
      image: "/placeholder.svg?height=300&width=400&text=Coral+Gables+Home",
      avgRent: "$3,200",
      occupancyRate: "95%",
      highlights: ["Historic Architecture", "Top-Rated Schools", "Upscale Dining", "University of Miami"],
      marketTrend: "up",
      propertyTypes: ["Single Family Homes", "Luxury Condos", "Historic Properties"],
    },
    {
      name: "Miami Beach",
      description: "Iconic beachfront living with Art Deco charm and vibrant nightlife",
      image: "/placeholder.svg?height=300&width=400&text=Miami+Beach+Property",
      avgRent: "$4,500",
      occupancyRate: "92%",
      highlights: ["Ocean Access", "Art Deco District", "World-Class Dining", "Tourist Destination"],
      marketTrend: "up",
      propertyTypes: ["Luxury Condos", "Beachfront Apartments", "Art Deco Buildings"],
    },
    {
      name: "Aventura",
      description: "Modern high-rise living with shopping, dining, and family-friendly amenities",
      image: "/placeholder.svg?height=300&width=400&text=Modern+Apartment+Building",
      avgRent: "$2,800",
      occupancyRate: "94%",
      highlights: ["Aventura Mall", "Modern High-Rises", "Family Friendly", "Golf Courses"],
      marketTrend: "up",
      propertyTypes: ["High-Rise Condos", "Luxury Apartments", "Townhomes"],
    },
    {
      name: "Fort Lauderdale",
      description: "Boating capital with waterfront properties and growing downtown district",
      image: "/placeholder.svg?height=300&width=400&text=Fort+Lauderdale+House",
      avgRent: "$2,400",
      occupancyRate: "91%",
      highlights: ["Waterfront Living", "Boating Culture", "Las Olas Boulevard", "Growing Tech Hub"],
      marketTrend: "up",
      propertyTypes: ["Waterfront Condos", "Single Family Homes", "Downtown Lofts"],
    },
    {
      name: "Doral",
      description: "Business hub with modern developments and excellent schools",
      image: "/placeholder.svg?height=300&width=400&text=Modern+Apartment+Building",
      avgRent: "$2,600",
      occupancyRate: "93%",
      highlights: ["Business District", "New Construction", "Top Schools", "Golf Communities"],
      marketTrend: "up",
      propertyTypes: ["Modern Condos", "Single Family Homes", "Townhomes"],
    },
    {
      name: "Hollywood",
      description: "Beachside community with boardwalk charm and affordable luxury",
      image: "/placeholder.svg?height=300&width=400&text=Miami+Beach+Property",
      avgRent: "$2,200",
      occupancyRate: "89%",
      highlights: ["Hollywood Beach", "Boardwalk", "Arts District", "Affordable Luxury"],
      marketTrend: "stable",
      propertyTypes: ["Beach Condos", "Apartments", "Single Family Homes"],
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
              <Link href="/services" className="text-gray-600 hover:text-gray-900">
                Services
              </Link>
              <Link href="/neighborhoods" className="text-blue-600 font-medium">
                Neighborhoods
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-gray-900">
                Blog
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
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Get Quote
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
                  className="text-gray-600 hover:text-gray-900 px-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/neighborhoods"
                  className="text-blue-600 font-medium px-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Neighborhoods
                </Link>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-gray-900 px-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
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
                <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-gray-200">
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <Phone className="h-4 w-4 mr-2" />
                    (305) 699-3437
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 w-full">
                    Get Free Quote
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">South Florida Neighborhoods</h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
            Discover the best neighborhoods for property investment across Miami-Dade and Broward Counties
          </p>
        </div>
      </section>

      {/* Neighborhoods Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {neighborhoods.map((neighborhood, index) => (
              <Card
                key={index}
                className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100">
                  <img
                    src={neighborhood.image || "/placeholder.svg"}
                    alt={neighborhood.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <CardHeader className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl font-bold text-gray-900">{neighborhood.name}</CardTitle>
                    <Badge
                      variant={neighborhood.marketTrend === "up" ? "default" : "secondary"}
                      className="bg-green-100 text-green-800"
                    >
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {neighborhood.marketTrend === "up" ? "Growing" : "Stable"}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-600">{neighborhood.description}</CardDescription>
                </CardHeader>

                <CardContent className="p-6 pt-0">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-lg font-bold text-blue-600">{neighborhood.avgRent}</div>
                      <div className="text-xs text-gray-600">Avg. Rent</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-lg font-bold text-green-600">{neighborhood.occupancyRate}</div>
                      <div className="text-xs text-gray-600">Occupancy</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Highlights</h4>
                    <div className="flex flex-wrap gap-1">
                      {neighborhood.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Property Types</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {neighborhood.propertyTypes.map((type, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                          {type}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <MapPin className="h-4 w-4 mr-2" />
                    Learn More About {neighborhood.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Invest in South Florida?</h2>
          <p className="text-lg sm:text-xl mb-8 text-blue-100">
            Get expert guidance on the best neighborhoods for your investment goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg">
              <Link href="/contact">
                <DollarSign className="h-5 w-5 mr-2" />
                Get Market Analysis
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 backdrop-blur-sm bg-transparent"
            >
              <Link href="/contact">
                <Phone className="h-5 w-5 mr-2" />
                Schedule Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
