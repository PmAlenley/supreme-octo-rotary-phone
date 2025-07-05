import { Building2, Phone, Eye, Play, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import VirtualTour from "@/components/virtual-tour"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Virtual Tours | Alenley Property Management - 360° Property Views",
  description:
    "Experience our Miami-Dade & Broward County properties with immersive 360° virtual tours. View every room from home with interactive property tours.",
  keywords: [
    "virtual property tours Miami",
    "360 degree property tours",
    "Miami property virtual tours",
    "interactive property viewing",
  ],
}

export default function VirtualToursPage() {
  const featuredProperties = [
    {
      id: "luxury-miami-beach-condo",
      name: "Luxury Miami Beach Condo",
      address: "1500 Ocean Drive, Miami Beach, FL",
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1200,
      rent: "$4,500/month",
      image: "/placeholder.svg?height=300&width=400&text=Miami+Beach+Luxury+Condo",
      features: ["Ocean View", "Balcony", "Pool Access", "Gym"],
      available: true,
    },
    {
      id: "modern-downtown-apartment",
      name: "Modern Downtown Miami Apartment",
      address: "200 Biscayne Blvd, Miami, FL",
      bedrooms: 1,
      bathrooms: 1,
      sqft: 800,
      rent: "$3,200/month",
      image: "/placeholder.svg?height=300&width=400&text=Modern+Downtown+Apartment",
      features: ["City View", "Modern Kitchen", "Fitness Center", "Rooftop"],
      available: true,
    },
    {
      id: "coral-gables-townhouse",
      name: "Coral Gables Family Home",
      address: "456 Coral Way, Coral Gables, FL",
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 1800,
      rent: "$5,800/month",
      image: "/placeholder.svg?height=300&width=400&text=Coral+Gables+Family+Home",
      features: ["Private Garden", "Garage", "Updated Kitchen", "Quiet Street"],
      available: false,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Building2 className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Alenley</h1>
                <p className="text-xs text-gray-600">Property Management</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-gray-900">
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
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Phone className="h-4 w-4 mr-2" />
                (305) 699-3437
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">360° Virtual Property Tours</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Experience our premium properties like never before with immersive virtual tours. Explore every room from
            the comfort of your home.
          </p>
          <Badge className="bg-blue-600 text-white mb-8 border-blue-500 text-lg px-4 py-2">
            <Eye className="h-5 w-5 mr-2" />
            Interactive 360° Technology
          </Badge>
        </div>
      </section>

      {/* Featured Virtual Tour */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Virtual Tour</h2>
            <p className="text-xl text-gray-600">Take a complete 360° tour of our luxury Miami Beach property</p>
          </div>
          <VirtualTour
            propertyId="luxury-miami-beach-condo"
            propertyName="Luxury Miami Beach Condo - 1500 Ocean Drive"
          />
        </div>
      </section>

      {/* Property Listings with Virtual Tours */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Available Properties</h2>
            <p className="text-xl text-gray-600">Browse our current listings with virtual tour technology</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => (
              <Card
                key={property.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
              >
                <div className="relative">
                  <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button className="bg-white text-gray-900 hover:bg-gray-100">
                      <Play className="h-5 w-5 mr-2" />
                      Start Virtual Tour
                    </Button>
                  </div>
                  <Badge className={`absolute top-4 right-4 ${property.available ? "bg-green-600" : "bg-red-600"}`}>
                    {property.available ? "Available" : "Rented"}
                  </Badge>
                  <Badge className="absolute top-4 left-4 bg-blue-600">
                    <Eye className="h-4 w-4 mr-1" />
                    360° Tour
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{property.name}</CardTitle>
                  <CardDescription>{property.address}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-2xl font-bold text-blue-600">{property.rent}</div>
                    <div className="text-sm text-gray-600">
                      {property.bedrooms} bed • {property.bathrooms} bath • {property.sqft} sqft
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {property.features.map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                      <Eye className="h-4 w-4 mr-2" />
                      Virtual Tour
                    </Button>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Virtual Tour Features</h2>
            <p className="text-xl text-gray-600">Experience properties like never before</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="p-3 bg-blue-100 rounded-lg w-fit mx-auto mb-4">
                  <Eye className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">360° Views</h3>
                <p className="text-gray-600 text-sm">Complete panoramic views of every room and space</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="p-3 bg-green-100 rounded-lg w-fit mx-auto mb-4">
                  <Play className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Interactive Controls</h3>
                <p className="text-gray-600 text-sm">Drag to rotate, zoom in/out, and navigate between rooms</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="p-3 bg-purple-100 rounded-lg w-fit mx-auto mb-4">
                  <Phone className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobile Friendly</h3>
                <p className="text-gray-600 text-sm">Perfect experience on desktop, tablet, and mobile devices</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="p-3 bg-orange-100 rounded-lg w-fit mx-auto mb-4">
                  <ArrowRight className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Room Navigation</h3>
                <p className="text-gray-600 text-sm">Seamlessly move between different rooms and areas</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Tour Your Next Home?</h2>
          <p className="text-xl mb-8 text-blue-100">Schedule a virtual tour or visit one of our properties today</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <a href="tel:+13056993437">
                <Phone className="h-5 w-5 mr-2" />
                Call (305) 699-3437
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/contact">Schedule Tour</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
