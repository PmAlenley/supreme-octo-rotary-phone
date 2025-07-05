"use client"

import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, AlertCircle, Loader2, Phone, Mail } from "lucide-react"
import { submitQuickContact } from "@/app/actions/contact-actions"

export default function CTA() {
  const [state, formAction, isPending] = useActionState(submitQuickContact, null)

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Summer Special Badge */}
          <div className="inline-flex items-center bg-yellow-400 text-yellow-900 px-6 py-3 rounded-full text-lg font-bold mb-8 animate-pulse">
            🌞 SUMMER SPECIAL: 2 MONTHS FREE MANAGEMENT!
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Maximize Your Rental Income?</h2>

          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join 500+ satisfied property owners in Miami-Dade and Broward Counties. Get professional property management
            with our exclusive Summer Special - your first 2 months are completely FREE!
          </p>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <CheckCircle className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">$300+ Value FREE</h3>
              <p className="text-blue-100 text-sm">First 2 months of professional management at no cost</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <CheckCircle className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-blue-100 text-sm">Emergency maintenance and tenant support around the clock</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <CheckCircle className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Hurricane Ready</h3>
              <p className="text-blue-100 text-sm">Specialized South Florida property protection and preparation</p>
            </div>
          </div>

          {/* Quick Contact Form */}
          <Card className="max-w-2xl mx-auto bg-white shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your FREE Property Analysis</h3>
              <p className="text-gray-600 mb-6">
                Enter your details below and we'll call you within the hour to discuss your Summer Special benefits.
              </p>

              <form action={formAction} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    name="name"
                    type="text"
                    placeholder="Your Full Name"
                    required
                    disabled={isPending}
                    className="h-12 text-lg"
                  />
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Your Phone Number"
                    required
                    disabled={isPending}
                    className="h-12 text-lg"
                  />
                </div>

                {/* Status Messages */}
                {state?.success === false && (
                  <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    <p>{state.message}</p>
                  </div>
                )}

                {state?.success === true && (
                  <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    <p>{state.message}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 text-lg font-bold bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900"
                  disabled={isPending}
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>🔥 CLAIM MY SUMMER SPECIAL NOW!</>
                  )}
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-4">Or contact us directly:</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+1-305-555-0123"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    (305) 555-0123
                  </a>
                  <a
                    href="mailto:info@alenley.com"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    info@alenley.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Urgency Message */}
          <div className="mt-8 p-4 bg-red-600 text-white rounded-lg max-w-2xl mx-auto">
            <p className="font-bold">⏰ LIMITED TIME OFFER</p>
            <p className="text-red-100">
              Only 25 properties accepted for Summer Special. Don't miss out on 2 months FREE management!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
