"use client"

import type React from "react"

import { useState } from "react"
import { Building2, Calendar, User, ArrowRight, Phone, Menu, X, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function BlogPageClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [email, setEmail] = useState("")

  const featuredPost = {
    title: "Miami Real Estate Market Report: Q4 2024 Trends and 2025 Outlook",
    excerpt:
      "Comprehensive analysis of Miami-Dade and Broward County rental markets, including pricing trends, inventory levels, and investment opportunities for property owners.",
    image: "/placeholder.svg?height=400&width=600&text=Miami+Skyline+Market+Report",
    date: "December 15, 2024",
    author: "Alenley Research Team",
    category: "Market Reports",
    readTime: "8 min read",
    slug: "miami-market-report-2024",
  }

  const recentPosts = [
    {
      title: "5 Tax Benefits Every Property Investor Should Know",
      excerpt:
        "Maximize your returns with these essential tax deductions and strategies for rental property owners in Florida.",
      image: "/placeholder.svg?height=300&width=400&text=Tax+Benefits+Financial+Growth",
      date: "December 10, 2024",
      author: "Tax Advisory Team",
      category: "Investment Tips",
      readTime: "6 min read",
      slug: "tax-benefits-property-investors",
    },
    {
      title: "Property Management Technology: Smart Home Features That Increase Rent",
      excerpt: "Discover which smart home upgrades provide the best ROI and attract quality tenants in South Florida.",
      image: "/placeholder.svg?height=300&width=400&text=Smart+Home+Technology",
      date: "December 5, 2024",
      author: "Technology Team",
      category: "Property Tech",
      readTime: "5 min read",
      slug: "smart-home-features-increase-rent",
    },
    {
      title: "Tenant Screening Best Practices: Avoiding Problem Renters",
      excerpt:
        "Learn the legal and effective methods for screening tenants to protect your investment and ensure reliable income.",
      image: "/placeholder.svg?height=300&width=400&text=Tenant+Screening+Process",
      date: "November 28, 2024",
      author: "Leasing Team",
      category: "Tenant Management",
      readTime: "7 min read",
      slug: "tenant-screening-best-practices",
    },
    {
      title: "Florida Landlord Laws: 2024 Updates You Need to Know",
      excerpt:
        "Stay compliant with the latest changes to Florida rental property regulations and tenant rights legislation.",
      image: "/placeholder.svg?height=300&width=400&text=Florida+Legal+Updates",
      date: "November 20, 2024",
      author: "Legal Team",
      category: "Legal Updates",
      readTime: "9 min read",
      slug: "florida-landlord-laws-2024",
    },
    {
      title: "Maintenance Cost Planning: Budgeting for Property Upkeep",
      excerpt:
        "Create realistic maintenance budgets and learn when to repair vs. replace to maximize your property's value.",
      image: "/placeholder.svg?height=300&width=400&text=Property+Maintenance+Planning",
      date: "November 15, 2024",
      author: "Maintenance Team",
      category: "Property Care",
      readTime: "6 min read",
      slug: "maintenance-cost-planning",
    },
  ]

  const categories = [
    "Market Reports",
    "Investment Tips",
    "Property Tech",
    "Tenant Management",
    "Legal Updates",
    "Property Care",
    "Miami Neighborhoods",
    "ROI Strategies",
  ]

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Here you would integrate with your email service
      console.log("Newsletter signup:", email)
      alert("Thanks for subscribing! You'll receive our weekly market updates.")
      setEmail("")
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3">
              <Building2 className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
              <div>
                <h1 className="text-lg sm:text-2xl font-bold text-gray-900">Alenley</h1>
                <p className="text-xs text-gray-600">Property Management</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-gray-900 transition-colors">
                Services
              </Link>
              <Link href="/neighborhoods" className="text-gray-600 hover:text-gray-900 transition-colors">
                Neighborhoods
              </Link>
              <Link href="/blog" className="text-blue-600 font-medium">
                Blog
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </Link>
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" size="sm" asChild>
                <a href="tel:+13056993437">
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="hidden lg:inline">(305) 699-3437</span>
                  <span className="lg:hidden">Call</span>
                </a>
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="/contact">Get Quote</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-gray-600 hover:text-gray-900 px-4 py-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-gray-900 px-4 py-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/neighborhoods"
                  className="text-gray-600 hover:text-gray-900 px-4 py-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Neighborhoods
                </Link>
                <Link
                  href="/blog"
                  className="text-blue-600 font-medium px-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/pricing"
                  className="text-gray-600 hover:text-gray-900 px-4 py-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-900 px-4 py-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-gray-900 px-4 py-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-gray-200">
                  <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                    <a href="tel:+13056993437">
                      <Phone className="h-4 w-4 mr-2" />
                      (305) 699-3437
                    </a>
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 w-full" asChild>
                    <Link href="/contact">Get Free Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-4 bg-blue-600 rounded-full w-fit mx-auto mb-6">
            <BookOpen className="h-8 w-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Property Investment Insights</h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
            Expert analysis, market trends, and actionable advice for South Florida property investors
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            <Card className="mb-12 shadow-xl border-0 overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100">
                <img
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <Badge className="bg-blue-600">{featuredPost.category}</Badge>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <User className="h-4 w-4 mr-1" />
                    {featuredPost.author}
                  </div>
                  <span className="text-gray-500 text-sm">{featuredPost.readTime}</span>
                </div>

                <CardTitle className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </CardTitle>

                <CardDescription className="text-lg text-gray-600 mb-6">{featuredPost.excerpt}</CardDescription>

                <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href={`/blog/${featuredPost.slug}`}>
                    Read Full Report
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>

            {/* Recent Posts */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Recent Articles</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {recentPosts.map((post, index) => (
                  <Card
                    key={index}
                    className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden group"
                  >
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline" className="text-blue-600 border-blue-600">
                          {post.category}
                        </Badge>
                        <span className="text-xs text-gray-500">{post.readTime}</span>
                      </div>

                      <CardTitle className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </CardTitle>

                      <CardDescription className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </CardDescription>

                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <User className="h-3 w-3 mr-1" />
                          {post.author}
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="p-6 pt-0">
                      <Button
                        variant="outline"
                        className="w-full bg-transparent hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600"
                        asChild
                      >
                        <Link href={`/blog/${post.slug}`}>
                          Read Article
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8 sticky top-24">
              {/* Newsletter Signup */}
              <Card className="shadow-lg border-0">
                <CardHeader className="p-6">
                  <CardTitle className="text-lg font-bold text-gray-900">Stay Informed</CardTitle>
                  <CardDescription className="text-gray-600">
                    Get weekly market updates and investment tips delivered to your inbox
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <form onSubmit={handleNewsletterSignup} className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Subscribe to Newsletter
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card className="shadow-lg border-0">
                <CardHeader className="p-6">
                  <CardTitle className="text-lg font-bold text-gray-900">Categories</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        className="w-full justify-start text-left hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        asChild
                      >
                        <Link href={`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`}>{category}</Link>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* CTA Card */}
              <Card className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white border-0">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Need Expert Advice?</h3>
                  <p className="text-blue-100 mb-4 text-sm">
                    Get personalized investment guidance from our property management experts
                  </p>
                  <Button className="w-full bg-white text-blue-600 hover:bg-gray-100" asChild>
                    <Link href="/contact">
                      <Phone className="h-4 w-4 mr-2" />
                      Schedule Consultation
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
