import { Building2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        {/* Logo with animation */}
        <div className="flex items-center justify-center mb-6">
          <div className="relative">
            <Building2 className="h-12 w-12 text-blue-600 animate-pulse" />
            <div className="absolute inset-0 h-12 w-12 border-2 border-blue-600 rounded-full animate-spin border-t-transparent"></div>
          </div>
        </div>

        {/* Brand name */}
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-gray-900">Alenley</h1>
          <p className="text-sm text-gray-600">Property Management</p>
        </div>

        {/* Loading dots */}
        <div className="flex items-center justify-center space-x-1">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
        </div>

        {/* Loading text */}
        <p className="text-gray-500 text-sm mt-4">Loading your property management experience...</p>
      </div>
    </div>
  )
}
