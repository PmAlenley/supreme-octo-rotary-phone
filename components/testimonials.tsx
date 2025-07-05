import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Maria Rodriguez",
    location: "Miami Beach",
    properties: "2 Properties",
    rating: 5,
    text: "Alenley has been managing my condo for 3 years. They consistently find quality tenants and handle everything professionally. My property stays occupied and profitable.",
  },
  {
    name: "James Thompson",
    location: "Fort Lauderdale",
    properties: "5 Properties",
    rating: 5,
    text: "Switched to Alenley after poor experience with another company. Night and day difference! They actually care about your investment and communicate regularly.",
  },
  {
    name: "Carlos Mendez",
    location: "Aventura",
    properties: "1 Property",
    rating: 5,
    text: "As a first-time investor, Alenley guided me through everything. Their market knowledge in Miami-Dade is exceptional. Highly recommend!",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Property Owner Success Stories</h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Real testimonials from satisfied property owners across South Florida
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Badge className="text-green-600 border-green-600 bg-green-50 text-xs">Verified Owner</Badge>
                </div>

                <blockquote className="text-gray-700 mb-4 italic text-sm sm:text-base">"{testimonial.text}"</blockquote>

                <div className="border-t pt-4">
                  <cite className="font-semibold text-gray-900 text-sm sm:text-base not-italic">
                    {testimonial.name}
                  </cite>
                  <p className="text-xs sm:text-sm text-gray-600">{testimonial.location}</p>
                  <p className="text-xs sm:text-sm text-blue-600">{testimonial.properties}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Button
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent w-full sm:w-auto"
          >
            <Star className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
            Read More Success Stories
          </Button>
        </div>
      </div>
    </section>
  )
}
