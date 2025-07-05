import { Building2, Phone, CheckCircle, Star, Award, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing | Alenley Property Management - Transparent Flat Fee Pricing",
  description:
    "$150 flat fee property management in Miami-Dade & Broward Counties. No percentage fees, no hidden costs. Professional property management at an affordable price.",
  keywords: [
    "property management pricing Miami",
    "flat fee property management",
    "affordable property management Florida",
    "property management costs",
  ],
}

export default function PricingPage() {
  const pricingPlans = [
    {
      name: "Essential Management",
      price: "$150",
      period: "per month",
      description: "Perfect for single property owners who want professional management without percentage fees",
      features: [
        "Complete tenant screening & selection",
        "Monthly rent collection & reporting",
        "24/7 emergency maintenance coordination",
        "Property inspections & condition reports",
        "Lease preparation & execution",
        "Owner portal access",
        "Basic financial reporting",
        "Tenant relations management",
      ],
      popular: false,
      cta: "Get Started",
    },
    {
      name: "Professional Management",
      price: "$200",
      period: "per month",
      description: "Enhanced service with premium features for serious property investors",
      features: [
        "Everything in Essential Management",
        "Priority maintenance response",
        "Advanced financial analytics",
        "Quarterly property inspections",
        "Marketing optimization",
        "Dedicated account manager",
        "Investment performance reports",
        "Tax preparation assistance",
        "Preventive maintenance planning",
      ],
      popular: true,
      cta: "Most Popular",
    },
    {
      name: "Portfolio Management",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for property owners with multiple units or complex requirements",
      features: [
        "Everything in Professional Management",
        "Multi-property dashboard",
        "Portfolio optimization strategies",
        "Bulk property discounts",
        "Custom maintenance thresholds",
        "Investment consulting",
        "Priority support",
        "Custom reporting",
      ],
      popular: false,
      cta: "Contact Us",
    },
  ]

  const additionalServices = [
    {
      service: "New Tenant Placement",
      price: "One month's rent",
      description: "Complete tenant screening, marketing, and lease execution for new tenants",
    },
    {
      service: "Lease Renewal",
      price: "$200",
      description: "Lease renewal negotiation and documentation",
    },
    {
      service: "Property Setup",
      price: "Free",
      description: "Initial property evaluation, photography, and listing setup",
    },
    {
      service: "Eviction Services",
      price: "$500 + costs",
      description: "Complete eviction process management and legal coordination",
    },
    {
      service: "Property Inspections",
      price: "$75",
      description: "Detailed property condition reports with photos",
    },
    {
      service: "Maintenance Coordination",
      price: "10% markup",
      description: "Professional contractor coordination with quality assurance",
    },
  ]

  const competitorComparison = [
    {
      company: "Alenley Property Management",
      fee: "$150 flat fee",
      placement: "1 month rent",
      renewal: "$200",
      maintenance: "10% markup",
      highlight: true,
    },
    {
      company: "Typical Competitor A",
      fee: "8-12% of rent",
      placement: "1 month rent",
      renewal: "$300-500",
      maintenance: "15-20% markup",
      highlight: false,
    },
    {
      company: "Typical Competitor B",
      fee: "10% of rent",
      placement: "1.5 months rent",
      renewal: "50% month rent",
      maintenance: "20% markup",
      highlight: false,
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
              <Link href="/pricing" className="text-blue-600 font-medium">
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
          <h1 className="text-5xl font-bold mb-6">Transparent Pricing</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            No hidden fees. No percentage-based pricing. Just honest, affordable property management that works for you.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
            <div className="text-4xl font-bold mb-2">$150</div>
            <div className="text-blue-100">Flat monthly fee for your first property</div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-600">Professional property management that fits your needs and budget</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg ${
                  plan.popular ? "ring-2 ring-blue-600" : ""
                }`}
              >
                {plan.popular && (
                  <div className="bg-blue-600 text-white text-center py-2 text-sm font-medium">Most Popular</div>
                )}

                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-gray-900">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  <CardDescription className="text-base mt-4">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                    <Link href="/contact">{plan.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600">Optional services available when you need them</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{service.service}</h3>
                    <Badge variant="outline" className="text-blue-600 border-blue-600 bg-blue-50">
                      {service.price}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Competitor Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Compare</h2>
            <p className="text-xl text-gray-600">See why property owners choose Alenley over the competition</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Company</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Management Fee</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Placement Fee</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Renewal Fee</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Maintenance</th>
                </tr>
              </thead>
              <tbody>
                {competitorComparison.map((company, index) => (
                  <tr key={index} className={`border-t ${company.highlight ? "bg-blue-50 border-blue-200" : ""}`}>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        {company.highlight && <Award className="h-5 w-5 text-blue-600 mr-2" />}
                        <span className={`font-medium ${company.highlight ? "text-blue-900" : "text-gray-900"}`}>
                          {company.company}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">{company.fee}</td>
                    <td className="px-6 py-4 text-gray-700">{company.placement}</td>
                    <td className="px-6 py-4 text-gray-700">{company.renewal}</td>
                    <td className="px-6 py-4 text-gray-700">{company.maintenance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Flat Fee Pricing?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="p-3 bg-green-100 rounded-lg w-fit mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Predictable Costs</h3>
                <p className="text-gray-600">
                  Know exactly what you'll pay each month, regardless of rent increases or market changes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="p-3 bg-blue-100 rounded-lg w-fit mx-auto mb-4">
                  <Star className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Better Service</h3>
                <p className="text-gray-600">
                  Our success isn't tied to your rent amount, so we focus on providing the best service possible.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="p-3 bg-purple-100 rounded-lg w-fit mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Hidden Fees</h3>
                <p className="text-gray-600">
                  Transparent pricing with no surprise charges or percentage-based markups on services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Save Money?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Get professional property management at a fraction of the cost of percentage-based competitors.
          </p>

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
              <Link href="/contact">Get Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
