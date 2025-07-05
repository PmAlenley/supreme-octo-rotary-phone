"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"

interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hi! I'm your AI property management assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const quickReplies = [
    "What's your pricing?",
    "How do you screen tenants?",
    "Tell me about your services",
    "Schedule a consultation",
  ]

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getBotResponse(content),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    if (input.includes("pricing") || input.includes("cost") || input.includes("fee")) {
      return "Our pricing is simple and transparent: $150/month flat fee. No percentage fees, no hidden costs. Plus, we're offering the first 2 months FREE for new clients!"
    }

    if (input.includes("tenant") || input.includes("screen")) {
      return "We conduct comprehensive tenant screening including credit checks, employment verification, rental history, and background checks. All screening complies with Florida fair housing laws."
    }

    if (input.includes("service") || input.includes("what do you do")) {
      return "We offer full property management services: tenant screening, rent collection, 24/7 maintenance coordination, financial reporting, and AI-powered rent optimization. We're licensed Realtors with 15+ years experience."
    }

    if (input.includes("consultation") || input.includes("schedule") || input.includes("call")) {
      return "I'd be happy to schedule a free consultation! You can call us at (305) 699-3437 or I can have one of our property managers contact you. What works better for you?"
    }

    if (input.includes("area") || input.includes("location") || input.includes("where")) {
      return "We serve Miami-Dade and Broward Counties, including Miami, Miami Beach, Fort Lauderdale, Coral Gables, Aventura, Hollywood, Doral, and surrounding areas."
    }

    return "That's a great question! For detailed information, I'd recommend speaking with one of our property management experts. You can call (305) 699-3437 or schedule a free consultation. Is there anything specific about property management you'd like to know?"
  }

  return (
    <>
      {/* Chat Widget Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 bg-blue-600 hover:bg-blue-700 shadow-lg"
          size="lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-96 h-[500px] shadow-2xl border-0">
          <CardHeader className="bg-blue-600 text-white rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-lg">Alenley AI Assistant</CardTitle>
                  <p className="text-xs text-blue-100">Property Management Expert</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex flex-col h-[400px] p-0">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`flex items-start gap-2 max-w-[80%] ${message.sender === "user" ? "flex-row-reverse" : ""}`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        message.sender === "user" ? "bg-blue-600" : "bg-gray-200"
                      }`}
                    >
                      {message.sender === "user" ? (
                        <User className="h-3 w-3 text-white" />
                      ) : (
                        <Bot className="h-3 w-3 text-gray-600" />
                      )}
                    </div>
                    <div
                      className={`rounded-lg p-3 ${
                        message.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                      <Bot className="h-3 w-3 text-gray-600" />
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="p-4 border-t">
                <p className="text-xs text-gray-600 mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="cursor-pointer hover:bg-blue-50 text-xs"
                      onClick={() => handleSendMessage(reply)}
                    >
                      {reply}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage(inputValue)}
                  placeholder="Ask about property management..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button
                  size="sm"
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={!inputValue.trim()}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}
