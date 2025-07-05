"use client"

import { useState } from "react"
import { CheckCircle, Users, Home, TrendingUp, Award, Shield, Clock, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export function AboutPageClient() {
  const [activeTab, setActiveTab] = useState("story")

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Alenley Management</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Professional Property Management - Licensed Realtor with 10+ years experience managing real estate
          </p>
          <div className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold">
            <span className="mr-2">🌞</span>
            Summer Special: First 2 Months FREE!
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveTab("story")}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === "story" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Our Story
            </button>
            <button
              onClick={() => setActiveTab("credentials")}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === "credentials" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Credentials
            </button>
            <button
              onClick={() => setActiveTab("stats")}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === "stats" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Our Results
            </button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === "story" && (
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl text-center">Our Story</CardTitle>
                  <CardDescription className="text-center text-lg">
                    How Alenley Management became South Florida's trusted property management partner
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Alenley Property Management was created to redefine what South Florida property owners should expect from their management company. While many firms offer a one-size-fits-all approach, we deliver personalized, tech-enabled service built around transparency, responsiveness, and results. Our founder, a licensed Florida Realtor, recognized that the traditional percentage-based fee structure was creating misaligned incentives between property managers and owners.s between property managers and owners.nd a proactive mindset. Whether you're a first-time landlord or a seasoned investor, we help protect your asset, grow its value, and reduce your stress.\n\n. Our founder, a licensed Florida Realtor, recognized that the traditional percentage-based fee structure was creating misaligned incentives between property managers and owners."}erse South Florida community with dedication, maintaining a 95% average occupancy rate while
                    providing 24/7 emergency support to our clients.
                  </p>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">Our Core Values</h3>
                    <ul className="space-y-2 text-blue-800">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2" /> Transparency in all dealings
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2" /> Fair, flat-rate pricing
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2" /> Exceptional customer service
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2" /> Local market expertise
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "credentials" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-center">Licensed & Insured</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Fully licensed Florida Realtor with comprehensive insurance coverage for complete peace of mind.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Award className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-center">10+ Years Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Over a decade of experience managing real estate specifically in South Florida markets.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-center">Bilingual Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    English and Spanish speaking professionals to serve our diverse South Florida community.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Clock className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-center">24/7 Emergency Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Round-the-clock emergency maintenance coordination for all managed properties.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Home className="h-8 w-8 text-red-600" />
                  </div>
                  <CardTitle className="text-center">Local Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Deep knowledge of Miami-Dade and Broward County rental markets and regulations.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-yellow-600" />
                  </div>
                  <CardTitle className="text-center">Proven Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    95% average occupancy rate with over 200 properties successfully managed.
                  </p>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "stats" && (
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Track Record</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Numbers don't lie. Here's what we've accomplished for our property owners over the years.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="shadow-lg text-center">
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
                    <p className="text-gray-600">Properties Managed</p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg text-center">
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
                    <p className="text-gray-600">Average Occupancy Rate</p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg text-center">
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold text-purple-600 mb-2">10+</div>
                    <p className="text-gray-600">Years Experience</p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg text-center">
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold text-orange-600 mb-2">$150</div>
                    <p className="text-gray-600">Flat Monthly Fee</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">What This Means for You</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Cost Savings</h3>
                      <p className="text-gray-600 mb-4">
                        Our flat $150/month fee typically saves property owners $200-500+ monthly compared to
                        traditional percentage-based management companies.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500" /> No percentage fees
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500" /> No hidden costs
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500" /> Predictable monthly expense
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Peace of Mind</h3>
                      <p className="text-gray-600 mb-4">
                        With our proven track record and comprehensive services, you can rest assured your property
                        investment is in capable hands.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500" /> Professional tenant screening
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500" /> Timely rent collection
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500" /> Regular property inspections
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Alenley Difference?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join over 200 satisfied property owners who trust us with their investments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Link href="/contact">Get Your FREE 2 Months</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
            >
              <a href="tel:3056993437">
                <Phone className="mr-2 h-5 w-5" />
                Call (305) 699-3437
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
