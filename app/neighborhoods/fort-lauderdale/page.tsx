import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, ArrowRight, Star, Waves, Shield, Calendar } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import AIChatWidget from "@/components/ai-chat-widget"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Fort Lauderdale Property Management | Alenley Property Management",
  description:
    "Professional property management in Fort Lauderdale, FL. $150/month flat fee. Waterfront properties, condos, and vacation rentals. Venice of America specialists.",
  keywords:
    "Fort Lauderdale property management, property manager Fort Lauderdale, Broward County property management, waterfront property management, Las Olas property management",
}

export default function FortLauderdalePropertyManagement() {
  const fortLauderdaleAreas = [
    {
      name: "Las Olas Boulevard",
      averageRent: "$2,600",
      occupancyRate: "95%",
      propertyTypes: ["Luxury condos", "High-rise apartments", "Waterfront units"],
      highlights: ["Upscale dining", "Shopping", "Beach access", "Nightlife"],
      growth: "+7.2%",
      properties: 45,
    },
    {
      name: "Victoria Park",
      averageRent: "$2,200",
      occupancyRate: "93%",
      propertyTypes: ["Single-family homes", "Townhouses", "Duplexes"],
      highlights: ["Historic neighborhood", "Tree-lined streets", "Close to downtown"],
      growth: "+5.8%",
      properties: 32,
    },
    {
      name: "Harbour Beach",
      averageRent: "$3,800",
      occupancyRate: "88%",
      propertyTypes: ["Luxury waterfront condos", "Penthouses", "Marina units"],
      highlights: ["Direct ocean access", "Private beach", "Yacht slips"],
      growth: "+4.2%",
      properties: 18,
    },
    {
      name: "Rio Vista",
      averageRent: "$2,800",
      occupancyRate: "91%",
      propertyTypes: ["Waterfront homes", "Canal-front properties", "Condos"],
      highlights: ["Boating community", "Intracoastal access", "Luxury living"],
      growth: "+6.1%",
      properties: 28,
    },
    {
      name: "Downtown Fort Lauderdale",
      averageRent: "$2,400",
      occupancyRate: "94%",
      propertyTypes: ["Modern apartments", "Lofts", "High-rise condos"],
      highlights: ["Business district", "Riverwalk", "Cultural attractions"],
      growth: "+6.5%",
      properties: 38,
    },
    {
      name: "Wilton Manors",
      averageRent: "$1,900",
      occupancyRate: "96%",
      propertyTypes: ["Apartments", "Small condos", "Townhouses"],
      highlights: ["Vibrant community", "Walkable", "Diverse dining"],
      growth: "+8.1%",
      properties: 25,
    },
    {
      name: "Colee Hammock",
      averageRent: "$2,300",
      occupancyRate: "92%",
      propertyTypes: ["Historic homes", "Renovated properties", "Boutique condos"],
      highlights: ["Historic charm", "Walkable to beach", "Quiet residential"],
      growth: "+5.4%",
      properties: 22,
    },
    {
      name: "Sailboat Bend",
      averageRent: "$2,100",
      occupancyRate: "94%",
      propertyTypes: ["Lofts", "Converted warehouses", "Modern apartments"],
      highlights: ["Arts district", "Trendy restaurants", "River access"],
      growth: "+7.8%",
      properties: 19,
    },
  ]

  const waterfrontServices = [
    "Specialized waterfront property management",
    "Boat slip and marina coordination",
    "Hurricane preparation and recovery",
    "Seasonal rental management",
    "Luxury property concierge services",
    "Marine contractor network",
  ]

  const seasonalManagement = [
    {
      season: "Winter Season (Dec-Apr)",
      features: [
        "Premium seasonal rates",
        "Snowbird tenant management",
        "Extended stay coordination",
        "Concierge services",
      ],
      occupancy: "98%",
      premiumRate: "+40%",
    },
    {
      season: "Summer Season (May-Aug)",
      features: ["Hurricane preparation", "Maintenance scheduling", "Local tenant focus", "Property improvements"],
      occupancy: "89%",
      premiumRate: "Standard",
    },
    {
      season: "Transition Periods",
      features: ["Deep cleaning coordination", "Maintenance catch-up", "Marketing for next season", "Tenant screening"],
      occupancy: "85%",
      premiumRate: "+15%",
    },
  ]

  const testimonials = [
    {
      name: "Michael Rodriguez",
      location: "Las Olas Waterfront Condo",
      text: "Alenley's waterfront expertise is exceptional. They handle everything from marina coordination to hurricane prep with professionalism.",
      rating: 5,
    },
    {
      name: "Jennifer Walsh",
      location: "Victoria Park Home",
      text: "Outstanding property management. They keep my historic home in perfect condition and always find quality tenants quickly.",
      rating: 5,
    },
    {
      name: "Robert Chen",
      location: "Harbour Beach Penthouse",
      text: "Managing luxury waterfront properties requires special expertise. Alenley delivers white-glove service every time.",
      rating: 5,
    },
  ]

  const marketInsights = [
    {
      title: "Venice of America",
      description: "Fort Lauderdale's extensive canal system creates unique waterfront opportunities",
      stat: "300+ miles",
      detail: "of navigable waterways",
    },
    {
      title: "Luxury Market Growth",
      description: "High-end waterfront properties seeing strongest appreciation",
      stat: "+12.3%",
      detail: "luxury property value increase",
    },
    {
      title: "Seasonal Premium",
      description: "Winter season commands premium rates for waterfront properties",
      stat: "+40%",
      detail: "seasonal rate increase",
    },
    {
      title: "Occupancy Excellence",
      description: "Professional management maintains high occupancy year-round",
      stat: "93%",
      detail: "average occupancy rate",
    },
  ]

  return (
    <>
      <AIChatWidget />
      <Header />

      <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
              <span>›</span>
              <Link href="/neighborhoods" className="hover:text-blue-600">
                Neighborhoods
              </Link>
              <span>›</span>
              <span className="text-gray-900">Fort Lauderdale</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-4 bg-cyan-600 text-white">Venice of America Specialists</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Fort Lauderdale Property Management</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Specialized waterfront and luxury property management in Fort Lauderdale. Expert marina coordination,
              seasonal rentals, and hurricane preparation. $150/month flat fee.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700" asChild>
                <a href="tel:+13056993437">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (305) 699-3437
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  Waterfront Property Analysis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-center">
              <div>
                <div className="text-2xl font-bold text-cyan-600">186</div>
                <div className="text-sm text-gray-600">Properties</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">65%</div>
                <div className="text-sm text-gray-600">Waterfront</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">93%</div>
                <div className="text-sm text-gray-600">Occupancy</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">$2,600</div>
                <div className="text-sm text-gray-600">Avg Rent</div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Insights */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Fort Lauderdale Market Insights</h2>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {marketInsights.map((insight, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-cyan-600 mb-2">{insight.stat}</div>
                    <div className="text-sm text-gray-600 mb-3">{insight.detail}</div>
                    <h3 className="font-semibold mb-2">{insight.title}</h3>
                    <p className="text-sm text-gray-600">{insight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Market Overview */}
            <div className="bg-cyan-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-cyan-900">Fort Lauderdale Investment Advantages</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong className="text-cyan-800">Waterfront Premium:</strong>
                  <p className="text-gray-700">Waterfront properties command 25-40% premium rates</p>
                </div>
                <div>
                  <strong className="text-cyan-800">Seasonal Demand:</strong>
                  <p className="text-gray-700">Winter season occupancy reaches 98% with premium pricing</p>
                </div>
                <div>
                  <strong className="text-cyan-800">Growth Market:</strong>
                  <p className="text-gray-700">Consistent 6-8% annual appreciation in prime areas</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fort Lauderdale Areas */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Fort Lauderdale Areas We Serve</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {fortLauderdaleAreas.map((area, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2 group-hover:text-cyan-600 transition-colors">
                      <MapPin className="h-4 w-4 text-cyan-600" />
                      {area.name}
                    </CardTitle>
                    <CardDescription>{area.properties} properties managed</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2 text-sm mb-4">
                      <div className="flex justify-between">
                        <span>Avg Rent:</span>
                        <span className="font-semibold">{area.averageRent}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Occupancy:</span>
                        <span className="font-semibold text-green-600">{area.occupancyRate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Growth:</span>
                        <span className="font-semibold text-blue-600">{area.growth}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold mb-2 text-xs text-gray-600 uppercase">Property Types:</h4>
                        <div className="flex flex-wrap gap-1">
                          {area.propertyTypes.map((type, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {type}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 text-xs text-gray-600 uppercase">Highlights:</h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {area.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-center gap-1">
                              <span className="w-1 h-1 bg-cyan-600 rounded-full"></span>
                              {highlight}
                            </li>
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

        {/* Waterfront Specialization */}
        <section className="py-16 px-4 bg-cyan-600 text-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Waterfront Property Specialists</h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Waves className="h-8 w-8" />
                  Venice of America Expertise
                </h3>
                <div className="space-y-4">
                  {waterfrontServices.map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-cyan-600 text-sm">✓</span>
                      </div>
                      <p>{service}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Fort Lauderdale Waterfront Advantages</h3>
                <ul className="space-y-2">
                  <li>• 300+ miles of navigable waterways</li>
                  <li>• Direct Intracoastal and ocean access</li>
                  <li>• Year-round boating and water sports</li>
                  <li>• Premium rental rates (+25-40%)</li>
                  <li>• High-end tenant demographics</li>
                  <li>• Strong seasonal rental demand</li>
                  <li>• Marina and yacht slip management</li>
                  <li>• Hurricane-resistant construction</li>
                </ul>
                <Button className="mt-4 bg-white text-cyan-600 hover:bg-gray-100" asChild>
                  <Link href="/contact">
                    Get Waterfront Analysis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Seasonal Rental Management */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Seasonal Rental Management</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {seasonalManagement.map((season, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-cyan-600" />
                      {season.season}
                    </CardTitle>
                    <CardDescription>
                      Occupancy: {season.occupancy} | Rate: {season.premiumRate}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      {season.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-cyan-600 mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Seasonal Management Benefits</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-cyan-600">Winter Season Advantages</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Snowbird tenant base with higher income</li>
                    <li>• Extended 3-6 month lease terms</li>
                    <li>• Premium pricing for waterfront properties</li>
                    <li>• Reduced maintenance during mild weather</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-cyan-600">Year-Round Strategy</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Maximize revenue through seasonal pricing</li>
                    <li>• Strategic maintenance scheduling</li>
                    <li>• Tenant retention programs</li>
                    <li>• Hurricane preparation protocols</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Fort Lauderdale Success Stories</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 mb-4 italic">"{testimonial.text}"</blockquote>
                    <cite className="font-semibold text-gray-900 not-italic">{testimonial.name}</cite>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Hurricane Preparation */}
        <section className="py-16 px-4 bg-blue-600 text-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Hurricane Preparation Specialists</h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Shield className="h-8 w-8" />
                  Comprehensive Storm Protection
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 text-sm">✓</span>
                    </div>
                    <p>Pre-season property inspections and preparations</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 text-sm">✓</span>
                    </div>
                    <p>Storm shutter installation and maintenance</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 text-sm">✓</span>
                    </div>
                    <p>Waterfront property securing and boat coordination</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 text-sm">✓</span>
                    </div>
                    <p>24/7 emergency response and recovery services</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Hurricane Season Protocol</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Pre-Season (May)</h4>
                    <p className="text-sm">Property inspections, emergency plans, tenant education</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Storm Watch (72 hours)</h4>
                    <p className="text-sm">Shutter installation, property securing, tenant coordination</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Post-Storm (24 hours)</h4>
                    <p className="text-sm">Damage assessment, emergency repairs, insurance coordination</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Recovery Phase</h4>
                    <p className="text-sm">Full restoration, contractor management, tenant relocation if needed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready for Professional Fort Lauderdale Property Management?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Specialized in waterfront properties, seasonal rentals, and hurricane preparation throughout the Venice of
              America
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700" asChild>
                <a href="tel:+13056993437">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (305) 699-3437 Now
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                asChild
              >
                <Link href="/contact">
                  Get Waterfront Property Analysis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
