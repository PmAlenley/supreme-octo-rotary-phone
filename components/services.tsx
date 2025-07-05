import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Users, TrendingUp, Shield, CircleCheckBig } from "lucide-react"

const services = [
  {
    title: "Full-Service Property Management",
    price: "$150/month",
    icon: Building2,
    description:
      "Complete management of your rental properties including tenant screening, rent collection, and maintenance coordination.",
    features: ["Tenant Screening", "Rent Collection", "Property Maintenance", "Financial Reporting"],
    image: "/placeholder.svg?height=300&width=400&text=Modern+Apartment+Building",
  },
  {
    title: "Tenant Relations",
    price: "Included",
    icon: Users,
    description:
      "Professional tenant management with 24/7 support, ensuring high retention rates and satisfied renters.",
    features: ["24/7 Tenant Support", "Lease Management", "Move-in/Move-out", "Conflict Resolution"],
    image: "/placeholder.svg?height=300&width=400&text=Tenant+Relations",
  },
  {
    title: "Investment Optimization",
    price: "Included",
    icon: TrendingUp,
    description:
      "Maximize your property's ROI with AI-powered market analysis, strategic pricing, and performance optimization.",
    features: ["AI Market Analysis", "Dynamic Rent Pricing", "ROI Reporting", "Investment Consulting"],
    image: "/placeholder.svg?height=300&width=400&text=Financial+Growth",
  },
  {
    title: "Legal Compliance & Protection",
    price: "TBD",
    icon: Shield,
    description: "Stay compliant with Florida property laws and regulations with our expert legal guidance.",
    features: ["Florida Law Compliance", "Eviction Services", "Legal Documentation", "Risk Management"],
    image: "/placeholder.svg?height=300&width=400&text=Legal+Documents",
  },
]

export function Services() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Property Management Services</h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Comprehensive solutions for Miami-Dade and Broward County property owners
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-lg"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100">
                <img
                  alt={`${service.title} - Professional property management services in Miami`}
                  className="w-full h-full object-cover"
                  src={service.image || "/placeholder.svg"}
                />
              </div>
              <CardHeader className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-3 sm:space-y-0">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex-shrink-0">
                      <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                    </div>
                    <div className="font-semibold tracking-tight text-lg sm:text-xl">{service.title}</div>
                  </div>
                  <Badge className="text-blue-600 border-blue-600 bg-blue-50 w-fit">{service.price}</Badge>
                </div>
                <p className="text-muted-foreground text-sm sm:text-base">{service.description}</p>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CircleCheckBig className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 sm:p-8 rounded-2xl inline-block shadow-xl max-w-md mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Simple, Transparent Pricing</h3>
            <p className="text-3xl sm:text-4xl font-bold mb-2">$150 Flat Fee</p>
            <p className="text-blue-100 text-sm sm:text-base">For your first unit - No percentage fees</p>
          </div>
        </div>
      </div>
    </section>
  )
}
