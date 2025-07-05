"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Sun, Clock, Star, Gift, Calendar } from "lucide-react"

export function SummerSale() {
  return (
    <section className="py-12 sm:py-16 bg-white relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-4 left-4 animate-bounce">
        <Sun className="h-8 w-8 text-blue-500" />
      </div>
      <div className="absolute top-8 right-8 animate-pulse">
        <Gift className="h-6 w-6 text-green-500" />
      </div>
      <div className="absolute bottom-4 left-8 animate-bounce delay-1000">
        <Star className="h-6 w-6 text-blue-500" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          {/* Summer Sale Badge */}
          <div className="inline-flex items-center mb-4">
            <Badge className="bg-green-400 text-blue-900 text-lg px-4 py-2 font-bold">
              <Sun className="h-5 w-5 mr-2" />🔥 SUMMER SALE 2025 🔥
            </Badge>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            First 2 Months
            <span className="block text-blue-600">Completely FREE!</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            Limited time offer for new property investors. Start your property management journey with zero cost!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 mb-8 max-w-4xl mx-auto">
          {/* Main Offer Card */}
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Summer Special Offer</h3>
                <Badge className="bg-blue-500 text-white">
                  <Clock className="h-4 w-4 mr-1" />
                  Limited Time
                </Badge>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border-2 border-green-200">
                  <div className="flex items-center mb-4">
                    <Gift className="h-8 w-8 text-green-600 mr-3" />
                    <h4 className="text-xl font-bold text-green-900">What You Get FREE</h4>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                      <span>
                        <strong>Month 1 & 2:</strong> Complete property management ($300 value)
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                      <span>
                        <strong>Tenant screening</strong> and placement
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                      <span>
                        <strong>Rent collection</strong> and financial reporting
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                      <span>
                        <strong>24/7 maintenance</strong> coordination
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                      <span>
                        <strong>AI-powered</strong> rent optimization
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-2 border-blue-200">
                  <div className="flex items-center mb-4">
                    <Star className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="text-xl font-bold text-blue-900">All We Ask In Return</h4>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Calendar className="h-5 w-5 text-blue-600 mr-3" />
                    <span>An honest review after 90 days of service</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Help other property owners discover quality management by sharing your experience
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 shadow-xl font-bold text-lg px-8 py-4 transform hover:scale-105 transition-all duration-200"
            >
              <Gift className="h-5 w-5 mr-2" />
              Claim Your FREE 2 Months
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 backdrop-blur-sm bg-white/10 font-bold text-lg px-8 py-4"
            >
              <Clock className="h-5 w-5 mr-2" />
              Learn More About Offer
            </Button>
          </div>

          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            * Offer valid for new clients only. Properties must be located in Miami-Dade or Broward County. Standard
            terms apply after promotional period.
          </p>
        </div>
      </div>
    </section>
  )
}
