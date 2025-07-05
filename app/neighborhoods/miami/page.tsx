import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, DollarSign, TrendingUp, Users, Building, Phone, Star, Shield, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Miami Property Management Services | Alenley Property Management",
  description:
    "Professional property management in Miami, FL. $150/month flat fee. Serving Downtown, Brickell, Coral Gables, and all Miami neighborhoods.",
  keywords: "Miami property management, property manager Miami, rental management Miami, Miami property services",
}

export default function MiamiPropertyManagement() {
  const miamiNeighborhoods = [
    {
      name: "Downtown Miami",
      averageRent: "$2,800",
      occupancyRate: "94%",
      propertyTypes: ["High-rise condos", "Luxury apartments", "Lofts"],
      highlights: ["Business district", "Waterfront views", "Transit hub"],
    },
    {
      name: "Brickell",
      averageRent: "$3,200",
      occupancyRate: "96%",
      propertyTypes: ["Luxury condos", "High-rise apartments"],
      highlights: ["Financial district", "Upscale dining", "Bayfront location"],
    },
    {
      name: "Coral Gables",
      averageRent: "$2,600",
      occupancyRate: "92%",
      propertyTypes: ["Single-family homes", "Townhouses", "Condos"],
      highlights: ["Historic charm", "Top schools", "Mediterranean architecture"],
    },
    {
      name: "Coconut Grove",
      averageRent: "$2,400",
      occupancyRate: "90%",
      propertyTypes: ["Condos", "Townhouses", "Single-family homes"],
      highlights: ["Bohemian culture", "Waterfront", "Arts scene"],
    },
    {
      name: "Wynwood",
      averageRent: "$2,200",
      occupancyRate: "88%",
      propertyTypes: ["Modern apartments", "Lofts", "Converted warehouses"],
      highlights: ["Art district", "Trendy restaurants", "Young professionals"],
    },
    {
      name: "South Beach",
      averageRent: "$3,500",
      occupancyRate: "85%",
      propertyTypes: ["Luxury condos", "Art Deco apartments", "Penthouses"],
      highlights: ["Beach access", "Nightlife", "Tourist destination"],
    },
    {
      name: "Aventura",
      averageRent: "$2,900",
      occupancyRate: "93%",
      propertyTypes: ["High-rise condos", "Luxury apartments", "Townhomes"],
      highlights: ["Shopping destination", "Family-friendly", "Modern amenities"],
    },
    {
      name: "Key Biscayne",
      averageRent: "$4,200",
      occupancyRate: "89%",
      propertyTypes: ["Waterfront condos", "Single-family homes", "Luxury rentals"],
      highlights: ["Island living", "Beach access", "Exclusive community"],
    },
  ]

  const services = [
    {
      title: "Professional Tenant Screening",
      description:
        "Comprehensive background checks, credit verification, and employment validation to ensure quality tenants for your Miami property.",
      icon: <Users className="h-8 w-8 text-blue-600" />,
    },
    {
      title: "Monthly Rent Collection & Reporting",
      description:
        "Automated rent collection with detailed monthly financial reports and direct deposit to your account.",
      icon: <DollarSign className="h-8 w-8 text-green-600" />,
    },
    {
      title: "24/7 Emergency Maintenance",
      description:
        "Round-the-clock emergency response with our network of licensed Miami contractors and maintenance professionals.",
      icon: <Phone className="h-8 w-8 text-red-600" />,
    },
    {
      title: "Property Inspections & Photos",
      description:
        "Regular property condition reports with detailed photos to protect your investment and ensure tenant compliance.",
      icon: <Building className="h-8 w-8 text-purple-600" />,
    },
    {
      title: "Legal Compliance & Evictions",
      description:
        "Full legal compliance with Florida landlord-tenant law and professional eviction services when necessary.",
      icon: <Shield className="h-8 w-8 text-orange-600" />,
    },
    {
      title: "Marketing & Vacancy Management",
      description: "Professional photography, online marketing, and tenant placement to minimize vacancy periods.",
      icon: <TrendingUp className="h-8 w-8 text-cyan-600" />,
    },
  ]

  const miamiExpertise = [
    {
      title: "Hurricane Season Preparation",
      description:
        "Comprehensive hurricane preparedness including property securing, emergency contacts, and post-storm inspections.",
    },
    {
      title: "Waterfront Property Maintenance",
      description:
        "Specialized care for waterfront properties including salt air protection, dock maintenance, and marine systems.",
    },
    {
      title: "International Tenant Services",
      description:
        "Experience working with international tenants, visa documentation, and cultural accommodation needs.",
    },
    {
      title: "Luxury Amenity Management",
      description:
        "High-end property amenity coordination including concierge services, valet, and luxury building management.",
    },
  ]

  const testimonials = [
    {
      name: "Carlos Rodriguez",
      property: "Brickell Condo",
      rating: 5,
      text: "Alenley has managed my Brickell condo for 2 years. Their flat fee saved me thousands compared to percentage-based companies, and the service is outstanding.",
    },
    {
      name: "Maria Santos",
      property: "Coral Gables Home",
      rating: 5,
      text: "Professional, responsive, and transparent. They handle everything from tenant screening to maintenance. My property stays occupied and well-maintained.",
    },
    {
      name: "David Chen",
      property: "South Beach Investment",
      rating: 5,
      text: "As an out-of-state investor, I needed reliable local management. Alenley provides detailed reports and handles all the Miami-specific challenges perfectly.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Miami Property Management</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Professional property management services throughout Miami-Dade County. Flat $150/month fee with no
            percentage charges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Phone className="mr-2 h-5 w-5" />
              Call (305) 699-3437
            </Button>
            <Button size="lg" variant="outline">
              Get Free Rental Analysis
            </Button>
          </div>
        </div>
      </section>

      {/* Miami Market Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Miami Rental Market Overview</h2>
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold">$2,800</h3>
                <p className="text-gray-600">Average Rent</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold">92%</h3>
                <p className="text-gray-600">Occupancy Rate</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold">500+</h3>
                <p className="text-gray-600">Properties Managed</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Building className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold">15+</h3>
                <p className="text-gray-600">Neighborhoods</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Miami Neighborhoods */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Miami Neighborhoods We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {miamiNeighborhoods.map((neighborhood, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    {neighborhood.name}
                  </CardTitle>
                  <CardDescription>
                    Average Rent: {neighborhood.averageRent} | Occupancy: {neighborhood.occupancyRate}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Property Types:</h4>
                      <div className="flex flex-wrap gap-1">
                        {neighborhood.propertyTypes.map((type, idx) => (
                          <Badge key={idx} variant="secondary">
                            {type}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Highlights:</h4>
                      <ul className="text-sm text-gray-600">
                        {neighborhood.highlights.map((highlight, idx) => (
                          <li key={idx}>• {highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Miami Property Management Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Miami Expertise */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Miami-Specific Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {miamiExpertise.map((expertise, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-6 w-6 text-blue-600" />
                    {expertise.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{expertise.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Miami Property Owners Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.property}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Transparent Miami Property Management Pricing</h2>
          <div className="text-6xl font-bold mb-4">$150</div>
          <p className="text-xl mb-8">Per month, flat fee. No percentage of rent. No hidden costs.</p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="font-semibold mb-2">Traditional Companies</h3>
              <p className="text-blue-200">8-12% of monthly rent</p>
              <p className="text-blue-200">$224-336/month on $2,800 rent</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Alenley Property Management</h3>
              <p className="text-white font-bold">$150/month flat fee</p>
              <p className="text-white font-bold">Save $74-186 every month</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Annual Savings</h3>
              <p className="text-blue-200">$888-2,232 per year</p>
              <p className="text-blue-200">More profit in your pocket</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Professional Miami Property Management?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 500+ Miami property owners who trust Alenley Property Management
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Phone className="mr-2 h-5 w-5" />
              Call (305) 699-3437 Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
