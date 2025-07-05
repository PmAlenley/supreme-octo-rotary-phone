import { MapPin } from "lucide-react"

const areas = [
  "Miami",
  "Miami Beach",
  "Coral Gables",
  "Aventura",
  "Fort Lauderdale",
  "Hollywood",
  "Pembroke Pines",
  "Davie",
  "Doral",
  "Kendall",
  "Homestead",
  "Plantation",
  "Sunrise",
  "Weston",
  "Cooper City",
  "Miramar",
]

export function ServiceAreas() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Service Areas in South Florida</h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Professional property management across Miami-Dade and Broward Counties
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 p-3 sm:p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mx-auto mb-2" />
              <p className="font-medium text-gray-900 text-sm sm:text-base">{area}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
