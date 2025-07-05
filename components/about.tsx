import { CheckCircle, Users, Home, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function About() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Alenley Management</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2014, Alenley Management has been providing professional property management services
              throughout Miami-Dade and Broward Counties. As a licensed Realtor with 10+ years experience managing real
              estate, we understand the unique challenges and opportunities in the South Florida market.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">Transparent Pricing</h3>
                  <p className="text-gray-600">Flat $150/month fee - no percentage-based charges or hidden costs</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">Local Expertise</h3>
                  <p className="text-gray-600">Deep knowledge of Miami-Dade and Broward County rental markets</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">24/7 Support</h3>
                  <p className="text-gray-600">Round-the-clock emergency maintenance for all managed properties</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">Bilingual Service</h3>
                  <p className="text-gray-600">English and Spanish speaking team to serve our diverse community</p>
                </div>
              </div>
            </div>

            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Get Your Free Consultation</Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Home className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">200+</h3>
              <p className="text-gray-600">Properties Managed</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">95%</h3>
              <p className="text-gray-600">Occupancy Rate</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">10+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">$150</h3>
              <p className="text-gray-600">Flat Monthly Fee</p>
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Story</h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 mb-4">
              Alenley Management was born from a simple belief: property management should be transparent, affordable,
              and focused on maximizing your investment returns. After years of seeing property owners frustrated with
              high percentage-based fees and poor communication, we decided to do things differently.
            </p>
            <p className="text-gray-600 mb-4">
              Our founder, a licensed Florida Realtor with over 10 years of experience managing real estate, established
              Alenley Management in 2014 with a mission to provide professional property management services at a fair,
              flat rate. We believe that your success is our success, and we're committed to treating your property as
              if it were our own.
            </p>
            <p className="text-gray-600">
              Today, we proudly manage over 200 properties throughout Miami-Dade and Broward Counties, maintaining a 95%
              average occupancy rate while providing 24/7 emergency support to our clients. Our bilingual team serves
              the diverse South Florida community with dedication, integrity, and expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
