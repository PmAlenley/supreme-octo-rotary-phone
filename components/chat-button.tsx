import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function ChatButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse">
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">Open chat</span>
      </Button>
      <div className="absolute -top-12 right-0 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap">
        Need help? Chat with us!
      </div>
    </div>
  )
}
