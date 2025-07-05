import { MapPin } from "lucide-react"

export default function NeighborhoodsLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header skeleton */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 bg-gray-200 rounded animate-pulse"></div>
              <div>
                <div className="h-6 w-20 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-3 w-32 bg-gray-200 rounded animate-pulse mt-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero skeleton */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="h-12 w-96 bg-gray-200 rounded mx-auto mb-6 animate-pulse"></div>
          <div className="h-6 w-full max-w-3xl bg-gray-200 rounded mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 w-2/3 bg-gray-200 rounded mx-auto mb-8 animate-pulse"></div>
          <div className="flex justify-center space-x-4">
            <div className="h-12 w-32 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-12 w-40 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Stats skeleton */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow p-6 text-center">
                <div className="h-12 w-12 bg-gray-200 rounded mx-auto mb-4 animate-pulse"></div>
                <div className="h-8 w-16 bg-gray-200 rounded mx-auto mb-2 animate-pulse"></div>
                <div className="h-4 w-24 bg-gray-200 rounded mx-auto animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cities grid skeleton */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="h-8 w-64 bg-gray-200 rounded mx-auto mb-12 animate-pulse"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="h-4 w-4 text-gray-300 animate-pulse" />
                  <div className="h-5 w-24 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mb-4"></div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-12 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                  <div className="flex justify-between">
                    <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-10 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
