import { HelpCircle } from "lucide-react"

export default function FAQLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header skeleton */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 bg-gray-200 rounded animate-pulse"></div>
              <div>
                <div className="h-6 w-20 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-3 w-32 bg-gray-200 rounded animate-pulse mt-1"></div>
              </div>
            </div>
            <div className="hidden md:flex space-x-4">
              <div className="h-8 w-24 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-8 w-20 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb skeleton */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center space-x-2">
            <div className="h-4 w-12 bg-gray-200 rounded animate-pulse"></div>
            <span className="text-gray-300">›</span>
            <div className="h-4 w-8 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Hero skeleton */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-4 bg-blue-100 rounded-full w-fit mx-auto mb-6">
            <HelpCircle className="h-8 w-8 text-blue-600 animate-pulse" />
          </div>
          <div className="h-12 w-96 bg-gray-200 rounded mx-auto mb-6 animate-pulse"></div>
          <div className="h-6 w-full max-w-2xl bg-gray-200 rounded mx-auto mb-8 animate-pulse"></div>

          {/* Search bar skeleton */}
          <div className="max-w-md mx-auto mb-8">
            <div className="h-12 w-full bg-gray-200 rounded animate-pulse"></div>
          </div>

          {/* Badge skeleton */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-6 w-20 bg-gray-200 rounded-full animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick stats skeleton */}
      <div className="py-8 px-4 bg-white border-y">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="h-6 w-6 bg-gray-200 rounded animate-pulse mb-2"></div>
                <div className="h-8 w-12 bg-gray-200 rounded animate-pulse mb-1"></div>
                <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA skeleton */}
      <div className="py-8 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <div className="h-8 w-64 bg-white/20 rounded mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 w-96 bg-white/20 rounded mx-auto mb-6 animate-pulse"></div>
          <div className="flex justify-center space-x-3">
            <div className="h-12 w-40 bg-white/20 rounded animate-pulse"></div>
            <div className="h-12 w-48 bg-white/20 rounded animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* FAQ Categories skeleton */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {[...Array(5)].map((_, categoryIndex) => (
            <div key={categoryIndex} className="mb-8 bg-white rounded-lg shadow border">
              {/* Category header skeleton */}
              <div className="p-6 border-b bg-gray-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-5 w-5 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-6 w-48 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
              </div>

              {/* FAQ items skeleton */}
              <div className="divide-y">
                {[...Array(4)].map((_, questionIndex) => (
                  <div key={questionIndex} className="p-6">
                    <div className="h-5 w-full bg-gray-200 rounded animate-pulse mb-3"></div>
                    <div className="space-y-2">
                      <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Loading text */}
      <div className="text-center pb-8">
        <p className="text-gray-500 text-sm">Loading FAQ content...</p>
      </div>
    </div>
  )
}
