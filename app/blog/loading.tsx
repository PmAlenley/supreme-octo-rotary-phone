import { BookOpen } from "lucide-react"

export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-white">
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

      {/* Hero skeleton */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="p-4 bg-blue-600 rounded-full w-fit mx-auto mb-6">
            <BookOpen className="h-8 w-8 text-white animate-pulse" />
          </div>
          <div className="h-8 w-64 bg-white/20 rounded mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 w-96 bg-white/20 rounded mx-auto animate-pulse"></div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main content skeleton */}
          <div className="lg:col-span-3">
            {/* Featured post skeleton */}
            <div className="mb-12 bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="aspect-video bg-gray-200 animate-pulse"></div>
              <div className="p-8">
                <div className="flex space-x-4 mb-4">
                  <div className="h-6 w-20 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div className="h-8 w-full bg-gray-200 rounded animate-pulse mb-4"></div>
                <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse mb-2"></div>
                <div className="h-6 w-1/2 bg-gray-200 rounded animate-pulse mb-6"></div>
                <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>

            {/* Recent posts skeleton */}
            <div className="grid md:grid-cols-2 gap-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="aspect-video bg-gray-200 animate-pulse"></div>
                  <div className="p-6">
                    <div className="flex justify-between mb-3">
                      <div className="h-5 w-20 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                    <div className="h-6 w-full bg-gray-200 rounded animate-pulse mb-2"></div>
                    <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse mb-4"></div>
                    <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-2"></div>
                    <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse mb-4"></div>
                    <div className="h-8 w-full bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar skeleton */}
          <div className="lg:col-span-1 space-y-8">
            {/* Newsletter skeleton */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="h-6 w-24 bg-gray-200 rounded animate-pulse mb-2"></div>
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-4"></div>
              <div className="h-10 w-full bg-gray-200 rounded animate-pulse mb-4"></div>
              <div className="h-10 w-full bg-gray-200 rounded animate-pulse"></div>
            </div>

            {/* Categories skeleton */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="h-6 w-20 bg-gray-200 rounded animate-pulse mb-4"></div>
              <div className="space-y-2">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-8 w-full bg-gray-200 rounded animate-pulse"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
