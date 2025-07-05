import { Building2, Phone, FileText, Scale, AlertTriangle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function TermsPage() {
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
            <Scale className="h-12 w-12 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-600">
            Please read these terms carefully before using our property management services.
          </p>
          <p className="text-sm text-gray-500 mt-2">Last updated: January 2024</p>
        </div>

        <div className="space-y-8">
          {/* Acceptance of Terms */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <span>Acceptance of Terms</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                By engaging Alenley Property Management LLC ("Alenley," "we," "us," or "our") for property management
                services, accessing our website, or using our services, you ("Client," "Property Owner," or "you") agree
                to be bound by these Terms of Service and all applicable laws and regulations.
              </p>
            </CardContent>
          </Card>

          {/* Services */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-blue-600" />
                <span>Property Management Services</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Services Included</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Tenant screening, selection, and lease execution</li>
                  <li>Rent collection and financial reporting</li>
                  <li>Property maintenance coordination and oversight</li>
                  <li>Regular property inspections and condition reports</li>
                  <li>Tenant relations and lease enforcement</li>
                  <li>Eviction proceedings when necessary</li>
                  <li>24/7 emergency maintenance coordination</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Service Limitations</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>We are not responsible for tenant damage beyond normal wear and tear</li>
                  <li>Major capital improvements require prior written approval</li>
                  <li>Legal advice is not provided; we recommend consulting an attorney for legal matters</li>
                  <li>Insurance claims must be filed by the property owner</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Fees and Payment */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Fees and Payment Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Management Fees</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Monthly management fee: $150 for the first unit</li>
                  <li>Additional units: As specified in individual agreements</li>
                  <li>Leasing fee: One month's rent for new tenant placement</li>
                  <li>Renewal fee: $200 for lease renewals</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Payment Terms</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Management fees are deducted from collected rent</li>
                  <li>Owner disbursements are made within 5 business days of rent collection</li>
                  <li>Maintenance expenses are deducted from rent or billed separately</li>
                  <li>Late fees apply to overdue owner payments</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Owner Responsibilities */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Property Owner Responsibilities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Maintain property in compliance with local housing codes and regulations</li>
                <li>Provide adequate insurance coverage for the property</li>
                <li>Pay all property taxes, HOA fees, and utilities as agreed</li>
                <li>Approve maintenance and repairs over the agreed threshold amount</li>
                <li>Provide accurate property information and necessary documentation</li>
                <li>Comply with Fair Housing laws and regulations</li>
                <li>Maintain sufficient funds for property expenses and improvements</li>
              </ul>
            </CardContent>
          </Card>

          {/* Liability and Insurance */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
                <span>Liability and Insurance</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Limitation of Liability</h4>
                <p className="text-gray-600">
                  Alenley's liability is limited to the amount of management fees paid in the 12 months preceding any
                  claim. We are not liable for consequential, indirect, or punitive damages.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Insurance Requirements</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Property owners must maintain adequate property insurance</li>
                  <li>Liability insurance covering rental activities is required</li>
                  <li>Alenley maintains professional liability and general liability insurance</li>
                  <li>Property owners should consider landlord insurance policies</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Agreement Termination</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Termination by Owner</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>30-day written notice required for termination</li>
                  <li>All outstanding fees and expenses must be paid</li>
                  <li>Property keys, documents, and tenant information will be transferred</li>
                  <li>Security deposits will be transferred to owner or new management company</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Termination by Alenley</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>30-day written notice for convenience termination</li>
                  <li>Immediate termination for breach of agreement or non-payment</li>
                  <li>Termination for illegal activities or property code violations</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Legal Compliance */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Legal Compliance</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>All services comply with Florida real estate and property management laws</li>
                <li>Fair Housing Act compliance in all tenant-related activities</li>
                <li>Local ordinances and building codes are followed</li>
                <li>Required licenses and certifications are maintained</li>
                <li>Disputes are subject to Florida state law and jurisdiction</li>
              </ul>
            </CardContent>
          </Card>

          {/* Privacy and Data */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Privacy and Data Protection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Your privacy is important to us. Please review our Privacy Policy for information about how we collect,
                use, and protect your personal information. By using our services, you consent to our privacy practices
                as described in our Privacy Policy.
              </p>
            </CardContent>
          </Card>

          {/* Modifications */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Modifications to Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We reserve the right to modify these Terms of Service at any time. Material changes will be communicated
                to clients with 30 days' notice. Continued use of our services after changes constitutes acceptance of
                the modified terms.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="border-0 shadow-lg bg-blue-50">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">For questions about these Terms of Service, please contact us:</p>

              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Email:</strong> legal@alenley.com
                </p>
                <p>
                  <strong>Phone:</strong> (305) 699-3437
                </p>
                <p>
                  <strong>Mail:</strong> Alenley Property Management LLC
                  <br />
                  Legal Department
                  <br />
                  Miami, FL
                </p>
              </div>
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
