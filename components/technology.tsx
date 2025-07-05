import { Card, CardContent } from "@/components/ui/card"
import { Zap, Calculator, Globe } from "lucide-react"

export function Technology() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Advanced Property Management Technology</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Modern tools and systems to maximize your property's performance and your peace of mind
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4 sm:p-6">
              <div className="p-3 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg w-fit mx-auto mb-4">
                <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Home Integration</h3>
              <p className="text-gray-600 text-sm">
                Keyless entry, smart thermostats, and automated property monitoring for your rental properties
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4 sm:p-6">
              <div className="p-3 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg w-fit mx-auto mb-4">
                <Calculator className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Rent Pricing</h3>
              <p className="text-gray-600 text-sm">
                Dynamic pricing optimization to maximize your rental income based on real-time market data
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4 sm:p-6">
              <div className="p-3 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg w-fit mx-auto mb-4">
                <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Digital Property Management</h3>
              <p className="text-gray-600 text-sm">
                Online owner portal, digital lease management, and automated reporting systems
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
