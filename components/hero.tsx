import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Summer Special Banner */}
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-2 rounded-full text-sm font-semibold mb-8">
            <span className="mr-2">🌞</span>
            SUMMER SPECIAL: First 2 Months FREE - Limited Time!
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Property Management
            <span className="block text-yellow-400">Starting at $150/Month</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Alenley Management Property Management - Licensed Realtor with 10+ years experience managing real estate in
            Miami-Dade & Broward Counties
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
              <Link href="/contact">
                <ArrowRight className="mr-2 h-5 w-5" />
                Get Your FREE 2 Months
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg bg-transparent"
            >
              <a href="tel:3056993437">
                <Phone className="mr-2 h-5 w-5" />
                Call (305) 699-3437
              </a>
            </Button>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Flat Rate Pricing</h3>
              <p className="opacity-90">$150/month - No percentage fees or hidden costs</p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">95% Occupancy Rate</h3>
              <p className="opacity-90">Proven track record of keeping properties rented</p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">24/7 Emergency Support</h3>
              <p className="opacity-90">Round-the-clock maintenance coordination</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
