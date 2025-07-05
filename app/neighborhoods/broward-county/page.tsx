import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, TrendingUp, Building, Phone, Anchor, Home, ArrowRight, Star } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import AIChatWidget from "@/components/ai-chat-widget"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Broward County Property Management | Alenley Property Management",
  description:
    "Professional property management throughout Broward County, FL. Waterfront specialists. $150/month flat fee. Fort Lauderdale, Hollywood, Pompano Beach.",
  keywords:
    "Broward County property management, Fort Lauderdale property manager, Hollywood property management, Pompano Beach rental management",
}

export default function BrowardCountyPropertyManagement() {
  const browardCities = [
    {
      name: "Fort Lauderdale",
      properties: 85,
      avgRent: "$2,600",
      occupancy: "93%",
      specialty: "Waterfront",
      growth: "+6.2%",
    },
    {
      name: "Hollywood",
      properties: 45,
      avgRent: "$2,200",
      occupancy: "95%",
      specialty: "Beach Properties",
      growth: "+5.5%",
    },
    {
      name: "Pompano Beach",
      properties: 35,
      avgRent: "$2,100",
      occupancy: "94%",
      specialty: "Coastal Living",
      growth: "+6.8%",
    },
    {
      name: "Coral Springs",
      properties: 30,
      avgRent: "$2,300",
      occupancy: "96%",
      specialty: "Family Homes",
      growth: "+4.9%",
    },
    { name: "Plantation", properties: 25, avgRent: "$2,400", occupancy: "95%", specialty: "Suburban", growth: "+5.1%" },
    { name: "Sunrise", properties: 20, avgRent: "$2,000", occupancy: "97%", specialty: "Affordable", growth: "+4.3%" },
    { name: "Davie", properties: 18, avgRent: "$2,200", occupancy: "94%", specialty: "Equestrian", growth: "+5.0%" },
    {
      name: "Pembroke Pines",
      properties: 22,
      avgRent: "$2,300",
      occupancy: "96%",
      specialty: "Family",
      growth: "+4.8%",
    },
    { name: "Miramar", properties: 15, avgRent: "$2,100", occupancy: "95%", specialty: "Residential", growth: "+5.3%" },
    { name: "Weston", properties: 12, avgRent: "$3,200", occupancy: "91%", specialty: "Luxury", growth: "+3.8%" },
    {
      name: "Deerfield Beach",
      properties: 16,
      avgRent: "$2,000",
      occupancy: "93%",
      specialty: "Beach Access",
      growth: "+5.7%",
    },
    {
      name: "Coconut Creek",
      properties: 14,
      avgRent: "$2,200",
      occupancy: "94%",
      specialty: "Golf Community",
      growth: "+4.6%",
    },
  ]

  const waterfrontSpecialties = [
    "Intracoastal Waterway properties",
    "Ocean-front condominiums",
    "Marina and yacht slip management",
    "Hurricane preparation and recovery",
    "Salt-air maintenance protocols",
    "Luxury waterfront amenities",
  ]

  const hoaManagement = [
    "HOA compliance and coordination",
    "Community association relations",
    "Architectural review submissions",
    "Amenity access management",
    "Community event coordination",
    "Violation resolution services",
  ]

  const testimonials = [
    {
      name: "Robert Chen",
      location: "Fort Lauderdale Waterfront",
      text: "Alenley's waterfront expertise is unmatched. They handle everything from hurricane prep to marina coordination.",
      rating: 5,
    },
    {
      name: "Lisa Martinez",
      location: "Hollywood Beach Condo",
      text: "Professional HOA coordination and excellent tenant screening. My property stays occupied year-round.",
      rating: 5,
    },
    {
      name: "David Thompson",
      location: "Coral Springs Family Home",
      text: "They understand Broward's family communities. Great communication and transparent reporting.",
      rating: 5,
    },
  ]

  return (
    <>
      <AIChatWidget />
      <Header />

      <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
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
              <span className="text-gray-900">Broward County</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-4 bg-teal-600 text-white">Waterfront Specialists</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Broward County Property Management</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Specialized waterfront and community property management throughout Broward County. Expert HOA
              coordination. $150/month flat fee.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700" asChild>
                <a href="tel:+13056993437">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (305) 699-3437
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  Broward Property Analysis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-center">
              <div>
                <div className="text-2xl font-bold text-teal-600">337</div>
                <div className="text-sm text-gray-600">Properties</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">45%</div>
                <div className="text-sm text-gray-600">Waterfront</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">94%</div>
                <div className="text-sm text-gray-600">Occupancy</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">78%</div>
                <div className="text-sm text-gray-600">HOA</div>
              </div>
            </div>
          </div>
        </section>

        {/* Broward County Stats */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Broward County Market Overview</h2>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Building className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">337</h3>
                  <p className="text-gray-600">Properties Managed</p>
                  <p className="text-sm text-green-600 mt-1">+15% this year</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Anchor className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">45%</h3>
                  <p className="text-gray-600">Waterfront Properties</p>
                  <p className="text-sm text-blue-600 mt-1">Specialty focus</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Home className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">78%</h3>
                  <p className="text-gray-600">HOA Communities</p>
                  <p className="text-sm text-green-600 mt-1">Expert coordination</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">94%</h3>
                  <p className="text-gray-600">Avg Occupancy Rate</p>
                  <p className="text-sm text-purple-600 mt-1">Above market avg</p>
                </CardContent>
              </Card>
            </div>

            {/* Market Insights */}
            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-teal-900">Broward County Market Insights</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong className="text-teal-800">Average Rent Growth:</strong>
                  <p className="text-gray-700">5.8% annually across all property types</p>
                </div>
                <div>
                  <strong className="text-teal-800">Days on Market:</strong>
                  <p className="text-gray-700">15 days average (faster than Miami-Dade)</p>
                </div>
                <div>
                  <strong className="text-teal-800">Tenant Demographics:</strong>
                  <p className="text-gray-700">Young professionals, families, retirees</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Broward Cities */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Broward County Cities We Serve</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {browardCities.map((city, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2 group-hover:text-teal-600 transition-colors">
                      <MapPin className="h-4 w-4 text-teal-600" />
                      {city.name}
                    </CardTitle>
                    <CardDescription>{city.properties} properties managed</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Avg Rent:</span>
                        <span className="font-semibold">{city.avgRent}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Occupancy:</span>
                        <span className="font-semibold text-green-600">{city.occupancy}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Growth:</span>
                        <span className="font-semibold text-blue-600">{city.growth}</span>
                      </div>
                      <Badge variant="outline" className="text-xs mt-2">
                        {city.specialty}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Waterfront Specialization */}
        <section className="py-16 px-4 bg-teal-600 text-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Waterfront Property Expertise</h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Anchor className="h-8 w-8" />
                  Broward Waterfront Specialists
                </h3>
                <div className="space-y-4">
                  {waterfrontSpecialties.map((specialty, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-teal-600 text-sm">✓</span>
                      </div>
                      <p>{specialty}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Broward Waterfront Advantages</h3>
                <ul className="space-y-2">
                  <li>• 23 miles of Atlantic coastline</li>
                  <li>• Extensive Intracoastal Waterway</li>
                  <li>• 300+ miles of navigable waterways</li>
                  <li>• Year-round boating season</li>
                  <li>• Premium rental rates (+25-40%)</li>
                  <li>• High-end tenant demographics</li>
                </ul>
                <Button className="mt-4 bg-white text-teal-600 hover:bg-gray-100" asChild>
                  <Link href="/contact">
                    Get Waterfront Analysis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* HOA Management */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">HOA Community Management</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Home className="h-6 w-6 text-teal-600" />
                  Community Association Expertise
                </h3>
                <div className="space-y-4">
                  {hoaManagement.map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <p className="text-gray-700">{service}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6">Common Broward HOA Requirements</h3>
                <div className="space-y-4">
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">Architectural Standards</h4>
                      <p className="text-sm text-gray-600">Paint colors, landscaping, exterior modifications</p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">Rental Restrictions</h4>
                      <p className="text-sm text-gray-600">Minimum lease terms, tenant approval processes</p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">Amenity Access</h4>
                      <p className="text-sm text-gray-600">Pool, gym, clubhouse, tennis court privileges</p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">Parking Regulations</h4>
                      <p className="text-sm text-gray-600">Assigned spaces, guest parking, commercial vehicles</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Broward County Success Stories</h2>
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

        {/* Market Comparison */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Broward vs Miami-Dade Comparison</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-teal-600 hover:shadow-xl transition-shadow">
                <CardHeader className="bg-teal-600 text-white">
                  <CardTitle>Broward County Advantages</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>Lower property taxes than Miami-Dade</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>More affordable luxury waterfront properties</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>Excellent schools and family communities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>Less congested than central Miami</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>Strong rental demand from young professionals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>Proximity to Fort Lauderdale airport</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle>Investment Opportunities</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-green-600">Emerging Markets</h4>
                      <p className="text-sm text-gray-600">Hollywood, Pompano Beach seeing rapid growth</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-blue-600">Stable Markets</h4>
                      <p className="text-sm text-gray-600">Coral Springs, Plantation, Weston established</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-purple-600">Luxury Markets</h4>
                      <p className="text-sm text-gray-600">Fort Lauderdale waterfront, Weston estates</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-orange-600">Value Markets</h4>
                      <p className="text-sm text-gray-600">Sunrise, Davie, Miramar affordable options</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready for Expert Broward County Property Management?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Waterfront specialists serving all Broward County communities with professional HOA coordination
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700" asChild>
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
                  Get Broward Property Analysis
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
