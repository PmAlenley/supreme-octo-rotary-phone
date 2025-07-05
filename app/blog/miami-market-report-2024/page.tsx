import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, Home, Calendar, Phone, ArrowRight, Download, Share2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import AIChatWidget from "@/components/ai-chat-widget"

export const metadata: Metadata = {
  title: "Miami Real Estate Market Report Q4 2024 | Alenley Property Management",
  description:
    "Comprehensive Miami-Dade and Broward County rental market analysis for Q4 2024. Rent trends, occupancy rates, and 2025 outlook.",
  keywords:
    "Miami real estate market report 2024, Miami rental market, property management market analysis, Miami rent trends",
}

export default function MiamiMarketReport2024() {
  const marketData = {
    miamiDade: {
      avgRent: 2850,
      rentGrowth: 4.2,
      occupancyRate: 93.5,
      daysOnMarket: 18,
      topNeighborhoods: [
        { name: "Brickell", avgRent: 3200, growth: 5.1 },
        { name: "South Beach", avgRent: 3500, growth: 3.8 },
        { name: "Coral Gables", avgRent: 2600, growth: 4.5 },
        { name: "Aventura", avgRent: 2900, growth: 4.0 },
      ],
    },
    broward: {
      avgRent: 2450,
      rentGrowth: 5.8,
      occupancyRate: 94.2,
      daysOnMarket: 15,
      topNeighborhoods: [
        { name: "Fort Lauderdale", avgRent: 2600, growth: 6.2 },
        { name: "Hollywood", avgRent: 2200, growth: 5.5 },
        { name: "Pompano Beach", avgRent: 2100, growth: 6.8 },
        { name: "Coral Springs", avgRent: 2300, growth: 4.9 },
      ],
    },
  }

  const marketTrends = [
    {
      trend: "Waterfront Premium",
      impact: "High",
      description: "Waterfront properties commanding 25-40% premium over inland properties",
      outlook: "Positive",
    },
    {
      trend: "Remote Work Demand",
      impact: "Medium",
      description: "Continued demand for home offices and flexible spaces",
      outlook: "Stable",
    },
    {
      trend: "Luxury Market Growth",
      impact: "High",
      description: "High-end rentals ($4,000+) seeing strongest demand",
      outlook: "Very Positive",
    },
    {
      trend: "Inventory Shortage",
      impact: "High",
      description: "Limited new construction keeping vacancy rates low",
      outlook: "Ongoing",
    },
  ]

  const predictions2025 = [
    {
      category: "Rent Growth",
      prediction: "3-5% annual increase",
      confidence: "High",
      factors: ["Limited supply", "Population growth", "Economic stability"],
    },
    {
      category: "Occupancy Rates",
      prediction: "92-95% average",
      confidence: "High",
      factors: ["Strong demand", "Job market growth", "Tourism recovery"],
    },
    {
      category: "New Construction",
      prediction: "Moderate increase",
      confidence: "Medium",
      factors: ["Zoning approvals", "Construction costs", "Developer interest"],
    },
    {
      category: "Investment Activity",
      prediction: "Continued growth",
      confidence: "High",
      factors: ["International buyers", "Cash purchases", "Rental yields"],
    },
  ]

  return (
    <>
      <AIChatWidget />
      <Header />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Header */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-blue-600 text-white">Market Report Q4 2024</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Miami Real Estate Market Report</h1>
              <p className="text-xl text-gray-600 mb-6">
                Comprehensive analysis of Miami-Dade and Broward County rental markets
              </p>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  December 2024
                </span>
                <span>•</span>
                <span>By Alenley Property Management</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF Report
                </Button>
                <Button variant="outline">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Report
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Highlights */}
        <section className="py-8 px-4 bg-white border-y">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">$2,650</div>
                <div className="text-sm text-gray-600">Avg Regional Rent</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">5.0%</div>
                <div className="text-sm text-gray-600">Annual Growth</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">93.9%</div>
                <div className="text-sm text-gray-600">Occupancy Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">16.5</div>
                <div className="text-sm text-gray-600">Days on Market</div>
              </div>
            </div>
          </div>
        </section>

        {/* Executive Summary */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Executive Summary</h2>

            {/* Market Overview Text */}
            <div className="mb-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <p className="text-gray-700 leading-relaxed">
                The South Florida rental market continues to demonstrate resilience and growth in Q4 2024. Miami-Dade
                and Broward counties are experiencing strong rental demand driven by population growth, limited
                inventory, and continued economic expansion. Property owners are benefiting from both rent appreciation
                and high occupancy rates, making this an opportune time for strategic property management.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="h-6 w-6 text-blue-600" />
                    Miami-Dade County
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Average Rent</span>
                      <span className="font-bold text-2xl">${marketData.miamiDade.avgRent.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Annual Growth</span>
                      <span className="flex items-center gap-1 text-green-600 font-semibold">
                        <TrendingUp className="h-4 w-4" />
                        {marketData.miamiDade.rentGrowth}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Occupancy Rate</span>
                      <span className="font-semibold">{marketData.miamiDade.occupancyRate}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Days on Market</span>
                      <span className="font-semibold">{marketData.miamiDade.daysOnMarket} days</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-teal-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="h-6 w-6 text-teal-600" />
                    Broward County
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Average Rent</span>
                      <span className="font-bold text-2xl">${marketData.broward.avgRent.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Annual Growth</span>
                      <span className="flex items-center gap-1 text-green-600 font-semibold">
                        <TrendingUp className="h-4 w-4" />
                        {marketData.broward.rentGrowth}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Occupancy Rate</span>
                      <span className="font-semibold">{marketData.broward.occupancyRate}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Days on Market</span>
                      <span className="font-semibold">{marketData.broward.daysOnMarket} days</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Top Performing Neighborhoods */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Top Performing Neighborhoods</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-6 text-blue-600">Miami-Dade County</h3>
                <div className="space-y-4">
                  {marketData.miamiDade.topNeighborhoods.map((neighborhood, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-semibold">{neighborhood.name}</h4>
                            <p className="text-sm text-gray-600">${neighborhood.avgRent.toLocaleString()}/month avg</p>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-1 text-green-600 font-semibold">
                              <TrendingUp className="h-4 w-4" />
                              {neighborhood.growth}%
                            </div>
                            <p className="text-xs text-gray-500">annual growth</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6 text-teal-600">Broward County</h3>
                <div className="space-y-4">
                  {marketData.broward.topNeighborhoods.map((neighborhood, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-semibold">{neighborhood.name}</h4>
                            <p className="text-sm text-gray-600">${neighborhood.avgRent.toLocaleString()}/month avg</p>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-1 text-green-600 font-semibold">
                              <TrendingUp className="h-4 w-4" />
                              {neighborhood.growth}%
                            </div>
                            <p className="text-xs text-gray-500">annual growth</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Trends */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Key Market Trends</h2>
            <div className="space-y-6">
              {marketTrends.map((trend, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold">{trend.trend}</h3>
                      <div className="flex gap-2">
                        <Badge variant={trend.impact === "High" ? "default" : "secondary"}>{trend.impact} Impact</Badge>
                        <Badge
                          variant={
                            trend.outlook === "Positive" || trend.outlook === "Very Positive" ? "default" : "outline"
                          }
                        >
                          {trend.outlook}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-gray-600">{trend.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 2025 Predictions */}
        <section className="py-12 px-4 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">2025 Market Predictions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {predictions2025.map((prediction, index) => (
                <Card key={index} className="bg-white/10 border-white/20 hover:bg-white/15 transition-colors">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{prediction.category}</h3>
                    <p className="text-2xl font-bold mb-2">{prediction.prediction}</p>
                    <p className="text-blue-100 mb-4">Confidence: {prediction.confidence}</p>
                    <div>
                      <p className="text-sm font-semibold mb-2">Key Factors:</p>
                      <ul className="text-sm space-y-1">
                        {prediction.factors.map((factor, idx) => (
                          <li key={idx}>• {factor}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Recommendations */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Investment Recommendations</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-green-200 bg-green-50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-green-800">Buy Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Emerging Broward neighborhoods</li>
                    <li>• Waterfront properties under $500K</li>
                    <li>• Multi-family properties in Kendall</li>
                    <li>• Renovation opportunities in Hollywood</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-yellow-200 bg-yellow-50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-yellow-800">Hold Strategies</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Prime Miami Beach properties</li>
                    <li>• Established Coral Gables rentals</li>
                    <li>• Fort Lauderdale waterfront</li>
                    <li>• Luxury Aventura condos</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-red-800">Caution Areas</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Overpriced downtown Miami</li>
                    <li>• Flood-prone areas without elevation</li>
                    <li>• Properties with major HOA issues</li>
                    <li>• Oversupplied luxury markets</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Property Management Insights */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Property Management Market Insights</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-green-600">Tenant Preferences 2024</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>In-unit washer/dryer (95% preference)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>High-speed internet included (88%)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>Parking included (92%)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>Pet-friendly policies (76%)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>Gym/fitness amenities (68%)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Management Challenges</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>Rising maintenance costs (+12%)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>Contractor availability issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>Insurance premium increases (+18%)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>Hurricane preparation costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>Tenant screening complexity</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need Expert Property Management in This Market?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Navigate the 2025 Miami rental market with professional property management. Flat $150/month fee - no
              percentage charges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Phone className="mr-2 h-5 w-5" />
                Call (305) 699-3437
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
              >
                Get Market Analysis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
