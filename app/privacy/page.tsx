import { Building2, Phone, Shield, Eye, Lock, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function PrivacyPage() {
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="p-4 bg-blue-100 rounded-full w-fit mx-auto mb-4">
            <Shield className="h-12 w-12 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-500 mt-2">Last updated: January 2024</p>
        </div>

        <div className="space-y-8">
          {/* Information We Collect */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="h-5 w-5 text-blue-600" />
                <span>Information We Collect</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Personal Information</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Name, email address, phone number</li>
                  <li>Property addresses and ownership information</li>
                  <li>Financial information for rent collection and payments</li>
                  <li>Emergency contact information</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Property Information</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Property details, photos, and condition reports</li>
                  <li>Rental history and lease agreements</li>
                  <li>Maintenance requests and service records</li>
                  <li>Tenant screening and application data</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Website Usage</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>IP address, browser type, and device information</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-blue-600" />
                <span>How We Use Your Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Provide property management services and tenant screening</li>
                <li>Process rent payments and financial transactions</li>
                <li>Communicate about property matters and maintenance</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Improve our services and website functionality</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Respond to inquiries and provide customer support</li>
              </ul>
            </CardContent>
          </Card>

          {/* Information Sharing */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Information Sharing and Disclosure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                We do not sell, trade, or rent your personal information to third parties. We may share your information
                in the following circumstances:
              </p>

              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  <strong>Service Providers:</strong> Contractors, maintenance companies, and other service providers
                  necessary for property management
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law, court order, or government regulation
                </li>
                <li>
                  <strong>Property Transactions:</strong> With potential buyers or sellers during property sales
                </li>
                <li>
                  <strong>Emergency Situations:</strong> To protect the safety of persons or property
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of our business
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lock className="h-5 w-5 text-blue-600" />
                <span>Data Security</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                We implement appropriate technical and organizational measures to protect your personal information:
              </p>

              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>SSL encryption for data transmission</li>
                <li>Secure servers and databases with access controls</li>
                <li>Regular security audits and updates</li>
                <li>Employee training on data protection</li>
                <li>Limited access to personal information on a need-to-know basis</li>
              </ul>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Your Rights and Choices</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  <strong>Access:</strong> Request access to your personal information
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal information (subject to legal
                  requirements)
                </li>
                <li>
                  <strong>Opt-out:</strong> Unsubscribe from marketing communications
                </li>
                <li>
                  <strong>Data Portability:</strong> Request a copy of your data in a portable format
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Cookies and Tracking</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                We use cookies and similar technologies to enhance your experience on our website:
              </p>

              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  <strong>Essential Cookies:</strong> Required for website functionality
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Help us understand website usage
                </li>
                <li>
                  <strong>Marketing Cookies:</strong> Used for targeted advertising (with consent)
                </li>
              </ul>

              <p className="text-gray-600">
                You can control cookies through your browser settings, but some website features may not function
                properly if cookies are disabled.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="border-0 shadow-lg bg-blue-50">
            <CardHeader>
              <CardTitle>Contact Us About Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                If you have questions about this Privacy Policy or want to exercise your rights, please contact us:
              </p>

              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Email:</strong> privacy@alenley.com
                </p>
                <p>
                  <strong>Phone:</strong> (305) 699-3437
                </p>
                <p>
                  <strong>Mail:</strong> Alenley Property Management
                  <br />
                  Privacy Officer
                  <br />
                  Miami, FL
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Updates */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Policy Updates</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by
                posting the new policy on our website and updating the "Last updated" date. Your continued use of our
                services after any changes constitutes acceptance of the updated policy.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
