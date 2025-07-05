import { Shield, Award, Users, TrendingUp } from "lucide-react"

export function Credentials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Alenley Management</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Licensed Realtor with 10+ years experience managing real estate in South Florida
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Licensed & Insured</h3>
            <p className="text-gray-600">
              Fully licensed Florida Realtor with comprehensive insurance coverage for your peace of mind.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Award className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">10+ Years Experience</h3>
            <p className="text-gray-600">
              Over a decade of experience managing real estate in Miami-Dade and Broward Counties.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">200+ Properties Managed</h3>
            <p className="text-gray-600">
              Successfully managing a diverse portfolio of residential and commercial properties.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <TrendingUp className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">95% Occupancy Rate</h3>
            <p className="text-gray-600">
              Consistently maintaining high occupancy rates through effective marketing and tenant retention.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Alenley Management Property Management</h3>
            <p className="text-lg text-gray-600 mb-6">
              Professional property management services tailored to maximize your investment returns while minimizing
              your stress.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Transparent Pricing</h4>
                <p className="text-gray-600 text-sm">
                  Flat $150/month fee with no hidden costs or percentage-based charges.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">24/7 Support</h4>
                <p className="text-gray-600 text-sm">
                  Round-the-clock emergency maintenance support for all managed properties.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Local Expertise</h4>
                <p className="text-gray-600 text-sm">Deep knowledge of Miami-Dade and Broward County rental markets.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
