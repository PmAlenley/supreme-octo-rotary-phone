import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Building2,
  FileText,
  Wrench,
  Users,
  TrendingUp,
  Bell,
  CreditCard,
  BarChart3,
  Globe,
  CheckCircle,
  Shield,
  Clock,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"
import Link from "next/link"

export default function OwnerPortalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Alenley</span>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link
                  href="/services"
                  className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  href="/pricing"
                  className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Pricing
                </Link>
                <Link
                  href="/virtual-tours"
                  className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Virtual Tours
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/owner-portal">
                <Button variant="outline" size="sm">
                  Owner Portal
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="sm">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Professional Owner Portal Access</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              24/7 access to your property performance, financials, and management tools
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Request Portal Access
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  Schedule Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portal Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Property Management Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use industry-leading Rentec Direct software to provide you with comprehensive property management tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Financial Dashboard</CardTitle>
                <CardDescription>Real-time financial performance and detailed reporting</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Monthly income statements
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Expense tracking & categorization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Tax-ready financial reports
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    ROI performance metrics
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CreditCard className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Rent Collection</CardTitle>
                <CardDescription>Automated rent collection and payment processing</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Online rent payments
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Automatic late fee processing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Payment history tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Direct deposit to your account
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Wrench className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Maintenance Tracking</CardTitle>
                <CardDescription>Complete maintenance request and work order management</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Real-time maintenance requests
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Work order status updates
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Contractor coordination
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Maintenance cost tracking
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Tenant Management</CardTitle>
                <CardDescription>Complete tenant information and lease management</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Tenant contact information
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Lease agreement storage
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Tenant communication history
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Lease renewal tracking
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Document Management</CardTitle>
                <CardDescription>Secure storage and access to all property documents</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Lease agreements
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Insurance documents
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Inspection reports
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Tax documents
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Bell className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Alerts & Notifications</CardTitle>
                <CardDescription>Stay informed with real-time property updates</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Rent payment notifications
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Maintenance request alerts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Lease expiration reminders
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Emergency notifications
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why We Use Professional Property Management Software
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading technology ensures reliable, secure, and comprehensive property management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Bank-Level Security</h3>
              <p className="text-gray-600">Your data is protected with enterprise-grade security and encryption</p>
            </div>

            <div className="text-center">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">24/7 Access</h3>
              <p className="text-gray-600">Access your property information anytime, anywhere from any device</p>
            </div>

            <div className="text-center">
              <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Web Optimized</h3>
              <p className="text-gray-600">Fully responsive platform works perfectly on desktop, tablet, and mobile</p>
            </div>

            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Real-Time Updates</h3>
              <p className="text-gray-600">Instant notifications and real-time data synchronization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Started with Professional Property Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our property management service and get instant access to your owner portal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>Schedule a consultation to discuss your property management needs</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/contact">
                  <Button className="w-full">Schedule Consultation</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <CardTitle>Property Onboarding</CardTitle>
                <CardDescription>We'll set up your property in our professional management system</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent" disabled>
                  Automated Setup
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <CardTitle>Portal Access</CardTitle>
                <CardDescription>
                  Receive your secure login credentials and start managing your property
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent" disabled>
                  Instant Access
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Professional Property Management?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Get started today and gain access to our comprehensive owner portal
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Started Today
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Request Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Building2 className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">Alenley</span>
              </div>
              <p className="text-gray-300">
                Miami's premier property management company, dedicated to maximizing your rental income.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>(305) 555-0123</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>info@alenley.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Miami, FL</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/services" className="hover:text-white">
                    Property Management
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Tenant Screening
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Maintenance
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Financial Reporting
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/owner-portal" className="hover:text-white">
                    Owner Portal
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
