import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Phone,
  Mail,
  Star,
  TrendingUp,
  Shield,
  Clock,
  Users,
  DollarSign,
  Home,
  Award,
  Zap,
} from "lucide-react"
import { BUSINESS_INFO } from "@/components/business-info"
import AIChatWidget from "@/components/ai-chat-widget"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <AIChatWidget />
      {/* Special Offer Banner */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-sm md:text-base font-semibold">
            <Zap className="h-5 w-5" />
            <span>🎉 LIMITED TIME: First 2 Months FREE for New Clients!</span>
            <Badge variant="secondary" className="bg-white text-green-600 font-bold">
              Only 25 Spots Available
            </Badge>
          </div>
        </div>
      </div>
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Home className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{BUSINESS_INFO.name}</h1>
                <p className="text-sm text-gray-600">Property Management  </p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">
                Services
              </Link>
              <Link href="/pricing" className="text-gray-700 hover:text-blue-600 transition-colors">
                Pricing
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
              <Button asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-green-500 hover:bg-green-600 text-white border-0">
            🎉 SUMMER SPECIAL: 2 MONTHS FREE
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Miami's Premier Property Management</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Licensed Realtor with years of experience. Professional property management with transparent pricing and cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white border-0">
              <Phone className="mr-2 h-5 w-5" />
              Claim Your FREE 2 Months
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-blue-600 border-white hover:bg-blue-50">
              <Mail className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>
          <div className="flex items-center justify-center gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              <span>Licensed Realtor</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5" />
              <span>5-Star Service</span>
            </div>
          </div>
        </div>
      </section>
      {/* Special Offer Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-green-500 text-white text-lg px-4 py-2">🚀 SUMMER SPECIAL OFFER</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">First 2 Months Completely FREE</h2>
            <p className="text-xl text-gray-700 mb-8">
              We're so confident in our service quality that we're offering the first 2 months FREE to our first 25
              clients. That's a $300 value at no cost to you!
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="border-green-200 bg-white">
                <CardHeader>
                  <DollarSign className="h-8 w-8 text-green-600 mx-auto" />
                  <CardTitle className="text-green-600">$300 Value FREE</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Save $150/month for your first 2 months of professional property management
                  </p>
                </CardContent>
              </Card>
              <Card className="border-green-200 bg-white">
                <CardHeader>
                  <Users className="h-8 w-8 text-green-600 mx-auto" />
                  <CardTitle className="text-green-600">Limited to 25 Properties</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Exclusive offer for our first 25 clients to ensure personalized attention
                  </p>
                </CardContent>
              </Card>
              <Card className="border-green-200 bg-white">
                <CardHeader>
                  <Star className="h-8 w-8 text-green-600 mx-auto" />
                  <CardTitle className="text-green-600">Review After 3 Months</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Simply provide an honest review after 3 months of service</p>
                </CardContent>
              </Card>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-green-200 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What You Get FREE:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Professional tenant screening</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>24/7 maintenance coordination</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Monthly financial reports</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Online owner portal access</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Professional photography</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>AI-powered rent optimization</span>
                </div>
              </div>
            </div>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4">
              <Phone className="mr-2 h-5 w-5" />
              Claim Your FREE 2 Months Now
            </Button>
            <p className="text-sm text-gray-600 mt-4">
              * 3-month minimum commitment required. Offer valid for first 25 properties only.
            </p>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Property Owners Choose Alenley</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As a licensed Realtor with years of experience, I bring unmatched expertise and personal attention to every property.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Licensed Real Estate Professional</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Licensed Realtor with deep market knowledge and legal expertise to protect your investment.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>AI-Powered Rent Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Advanced technology analyzes market data to maximize your rental income and minimize vacancy.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Transparent Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Simple $150/month flat fee. No hidden costs, no percentage fees, no surprises.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>24/7 Emergency Response</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Round-the-clock emergency maintenance coordination to protect your property and tenants.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Professional Tenant Screening</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Comprehensive background checks, credit verification, and employment validation.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Star className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Personal Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Direct access to me, not a call center. Personal attention for every property owner.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Property Management Services</h2>
            <p className="text-xl text-gray-600">Everything you need to maximize your rental property investment</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Home className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-lg">Property Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Professional photography</li>
                  <li>• 360° virtual tours</li>
                  <li>• Multi-platform listing</li>
                  <li>• AI-optimized pricing</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-lg">Tenant Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Comprehensive screening</li>
                  <li>• Lease preparation</li>
                  <li>• Rent collection</li>
                  <li>• Tenant relations</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-lg">Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 24/7 emergency response</li>
                  <li>• Vetted contractor network</li>
                  <li>• Preventive maintenance</li>
                  <li>• Quality inspections</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-lg">Financial Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Monthly statements</li>
                  <li>• Online owner portal</li>
                  <li>• Tax documentation</li>
                  <li>• Performance analytics</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join the first 25 property owners to experience premium property management with 2 months completely FREE.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white border-0">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: {BUSINESS_INFO.phone}
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-blue-600 border-white hover:bg-blue-50">
              <Mail className="mr-2 h-5 w-5" />
              Get Free Consultation
            </Button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Home className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{BUSINESS_INFO.name}</h3>
                  <p className="text-xs text-gray-400">Property Management</p>
                </div>
              </div>
              <div className="space-y-1 text-sm text-gray-400">
                <p className="font-semibold text-white">{BUSINESS_INFO.name}</p>
                <p>{BUSINESS_INFO.address.street}</p>
                <p>{BUSINESS_INFO.address.suite}</p>
                <p>
                  {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}
                </p>
              </div>
              <div className="mt-4 space-y-2 text-sm text-gray-400">
                
                
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Property Management
                  </Link>
                </li>
                <li>
                  <Link href="/tenants" className="hover:text-white transition-colors">
                    Tenant Services
                  </Link>
                </li>
                <li>
                  <Link href="/maintenance" className="hover:text-white transition-colors">
                    Maintenance
                  </Link>
                </li>
                <li>
                  <Link href="/finances" className="hover:text-white transition-colors">
                    Financial Reporting
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/pricing" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/virtual-tours" className="hover:text-white transition-colors">
                    Virtual Tours
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>{BUSINESS_INFO.phone}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>{BUSINESS_INFO.email}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 {BUSINESS_INFO.name}. All rights reserved. Licensed Real Estate Professional.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
