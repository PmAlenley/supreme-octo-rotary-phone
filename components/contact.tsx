"use client"

import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react"
import { submitContactForm } from "@/app/actions/contact-actions"
import { BUSINESS_INFO } from "./business-info"

export function Contact() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to experience professional property management? Get in touch with us today for a free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Get Your Free Consultation</CardTitle>
              <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
            </CardHeader>
            <CardContent>
              <form action={formAction} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" name="firstName" type="text" required className="mt-1" placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" name="lastName" type="text" required className="mt-1" placeholder="Smith" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" name="phone" type="tel" required className="mt-1" placeholder="(305) 123-4567" />
                </div>

                <div>
                  <Label htmlFor="propertyAddress">Property Address</Label>
                  <Input
                    id="propertyAddress"
                    name="propertyAddress"
                    type="text"
                    className="mt-1"
                    placeholder="123 Main St, Miami, FL 33101"
                  />
                </div>

                <div>
                  <Label htmlFor="propertyType">Property Type</Label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select Property Type</option>
                    <option value="single-family">Single Family Home</option>
                    <option value="condo">Condominium</option>
                    <option value="townhouse">Townhouse</option>
                    <option value="duplex">Duplex</option>
                    <option value="multi-family">Multi-Family</option>
                    <option value="commercial">Commercial</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="currentRent">Current Monthly Rent (if applicable)</Label>
                  <Input id="currentRent" name="currentRent" type="text" className="mt-1" placeholder="$2,500" />
                </div>

                <div>
                  <Label htmlFor="serviceType">Service Needed</Label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select Service</option>
                    <option value="full-management">Full Property Management</option>
                    <option value="tenant-placement">Tenant Placement Only</option>
                    <option value="maintenance">Maintenance Services</option>
                    <option value="consultation">Free Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1"
                    placeholder="Tell us about your property management needs..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                >
                  {isPending ? "Sending..." : "Send Message"}
                </Button>

                {state?.success && (
                  <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-md">
                    <CheckCircle className="h-5 w-5" />
                    <span>Thank you! We'll contact you within 2 hours.</span>
                  </div>
                )}

                {state?.error && <div className="text-red-600 bg-red-50 p-3 rounded-md">{state.error}</div>}
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <a
                      href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, "")}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                    <p className="text-sm text-gray-600">24/7 Emergency Line Available</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a href={`mailto:${BUSINESS_INFO.email}`} className="text-blue-600 hover:text-blue-800">
                      {BUSINESS_INFO.email}
                    </a>
                    <p className="text-sm text-gray-600">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Office Address</h3>
                    <div className="text-gray-700">
                      <p>{BUSINESS_INFO.address.street}</p>
                      <p>{BUSINESS_INFO.address.suite}</p>
                      <p>
                        {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}
                      </p>
                    </div>
                    <p className="text-sm text-gray-600">By appointment only</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-2">
                  <Clock className="h-6 w-6 text-blue-600" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Saturday:</span>
                    <span className="font-medium">By Appointment</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-red-800 font-medium">🚨 Emergency Maintenance</p>
                  <p className="text-red-700 text-sm">Available 24/7 for current clients</p>
                </div>
              </CardContent>
            </Card>

            {/* Summer Special */}
            <Card className="shadow-lg bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-2xl text-green-800">🌞 Summer Special Offer</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-green-700 font-medium">First 2 months FREE for new property management clients!</p>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Save $300 in management fees</li>
                    <li>• Limited to first 25 properties</li>
                    <li>• 3-month minimum commitment</li>
                    <li>• All services included</li>
                  </ul>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <Phone className="h-4 w-4 mr-2" />
                    Claim Your FREE 2 Months
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

// Default export for compatibility
export default Contact
