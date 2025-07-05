"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Calculator, DollarSign, TrendingUp } from "lucide-react"

export function ROICalculator() {
  const [monthlyRent, setMonthlyRent] = useState(2500)
  const [competitorFee, setCompetitorFee] = useState([10])

  const annualRent = monthlyRent * 12
  const competitorCost = (annualRent * competitorFee[0]) / 100
  const alenleyCost = 150 * 12
  const savings = competitorCost - alenleyCost

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Calculate Your Investment Returns</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            See how much you can save with our flat-fee property management vs traditional percentage-based fees
          </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center p-6 sm:p-8">
            <div className="p-4 bg-gradient-to-br from-green-100 to-blue-100 rounded-full w-fit mx-auto mb-4">
              <Calculator className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl sm:text-3xl font-bold text-gray-900">ROI Calculator</CardTitle>
            <p className="text-lg text-gray-600">
              See how much you save with our flat-fee structure vs traditional percentage-based management
            </p>
          </CardHeader>

          <CardContent className="p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="monthlyRent" className="text-base font-semibold text-gray-900">
                    Monthly Rent Amount
                  </Label>
                  <div className="relative mt-2">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="monthlyRent"
                      type="number"
                      min="500"
                      max="10000"
                      step="50"
                      value={monthlyRent}
                      onChange={(e) => setMonthlyRent(Number(e.target.value))}
                      className="pl-10 text-lg font-semibold"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-base font-semibold text-gray-900">
                    Competitor Management Fee: {competitorFee[0]}%
                  </Label>
                  <div className="mt-2">
                    <Slider
                      value={competitorFee}
                      onValueChange={setCompetitorFee}
                      max={15}
                      min={5}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>5%</span>
                      <span>15%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-900 mb-2">Alenley Flat Fee</h3>
                  <div className="text-2xl font-bold text-blue-600">$150/month</div>
                  <p className="text-sm text-blue-700">No percentage fees. Simple and transparent.</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border border-red-200">
                  <h3 className="font-semibold text-red-900 mb-2 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Traditional Management ({competitorFee[0]}%)
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Annual Rent:</span>
                      <span className="font-semibold">${annualRent.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Management Fee:</span>
                      <span className="font-semibold text-red-600">${competitorCost.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border border-green-200">
                  <h3 className="font-semibold text-green-900 mb-2 flex items-center">
                    <DollarSign className="h-5 w-5 mr-2" />
                    Alenley Management
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Annual Rent:</span>
                      <span className="font-semibold">${annualRent.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Management Fee:</span>
                      <span className="font-semibold text-green-600">${alenleyCost.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-green-50 p-6 rounded-xl border-2 border-green-300">
                  <h3 className="font-bold text-green-900 mb-2 text-lg">Your Annual Savings</h3>
                  <div className="text-3xl font-bold text-green-600 mb-2">${savings.toLocaleString()}</div>
                  <p className="text-sm text-green-700">That's ${Math.round(savings / 12)} saved every month!</p>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3">
                  <Calculator className="h-5 w-5 mr-2" />
                  Get Your Free Property Analysis
                </Button>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-3">Why Choose Flat-Fee Management?</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Predictable Costs</p>
                    <p className="text-gray-600">Know exactly what you'll pay each month</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Higher ROI</p>
                    <p className="text-gray-600">Keep more of your rental income</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">No Hidden Fees</p>
                    <p className="text-gray-600">Transparent pricing structure</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
