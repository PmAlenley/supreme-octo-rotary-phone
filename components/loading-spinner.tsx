import { Building2 } from "lucide-react"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  text?: string
}

export function LoadingSpinner({ size = "md", text }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  }

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="relative">
        <Building2 className={`${sizeClasses[size]} text-blue-600 animate-pulse`} />
        <div
          className={`absolute inset-0 ${sizeClasses[size]} border-2 border-blue-600 rounded-full animate-spin border-t-transparent`}
        ></div>
      </div>
      {text && <p className="text-gray-500 text-sm mt-4">{text}</p>}
    </div>
  )
}
