"use client"

import { useState } from "react"
import { Building2, Phone, ChevronDown, ChevronUp, HelpCircle, Search, Menu, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function FAQPageClient() {
  const [searchTerm, setSearchTerm] = useState("")
  const [openItems, setOpenItems] = useState<number[]>([])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqCategories = [
    {
      category: "Getting Started",
      icon: "🚀",
      questions: [
        {
          question: "How do I get started with Alenley Property Management?",
          answer:
            "Getting started is easy! Contact us at (305) 699-3437 or fill out our online form. We'll schedule a free property evaluation, discuss your needs, and provide a customized management proposal. Once you approve, we can typically start managing your property within 7-10 business days. We also offer a FREE 2-month trial for new clients!",
        },
        {
          question: "What areas do you serve?",
          answer:
            "We provide comprehensive property management services throughout Miami-Dade and Broward Counties, including Miami, Miami Beach, Fort Lauderdale, Hollywood, Coral Gables, Aventura, Brickell, Doral, Kendall, Plantation, Sunrise, and surrounding areas. We specialize in waterfront properties and HOA communities.",
        },
        {
          question: "What types of properties do you manage?",
          answer:
            "We manage various property types including single-family homes, luxury condominiums, townhouses, duplexes, waterfront properties, and small apartment buildings. We specialize in residential rental properties from 1 to 50 units, with particular expertise in Miami's luxury and waterfront markets.",
        },
        {
          question: "Do you offer a trial period?",
          answer:
            "Yes! We're currently offering the first 2 months completely FREE for new property owners. This allows you to experience our professional service with no upfront cost. After the trial period, our standard $150/month flat fee applies.",
        },
      ],
    },
    {
      category: "Pricing & Fees",
      icon: "💰",
      questions: [
        {
          question: "What are your management fees?",
          answer:
            "Our management fee is $150 per month flat fee - no percentage of rent! This is significantly lower than traditional companies that charge 8-12% of monthly rent. For example, on a $3,000/month property, you save over $2,000 annually compared to 10% management fees. Additional units have portfolio discounts.",
        },
        {
          question: "Are there any hidden fees?",
          answer:
            "Absolutely no hidden fees! We believe in complete transparency. All fees are clearly outlined in your management agreement. The only additional charges are for specific services you request or approve, such as maintenance work, legal proceedings, or special marketing requests. Our flat fee includes all standard management services.",
        },
        {
          question: "When do you collect your management fees?",
          answer:
            "Management fees are automatically deducted from the rent we collect each month before disbursing funds to you. This ensures consistent payment without any additional effort on your part. You'll receive detailed monthly statements showing all transactions.",
        },
        {
          question: "How do your fees compare to other companies?",
          answer:
            "Traditional property management companies charge 8-12% of monthly rent. Our $150 flat fee saves most property owners 40-60% annually. For a $2,500/month rental, traditional companies charge $2,400-$3,600/year vs. our $1,800/year - saving you $600-$1,800 annually!",
        },
      ],
    },
    {
      category: "Tenant Management",
      icon: "👥",
      questions: [
        {
          question: "How do you screen tenants?",
          answer:
            "We conduct comprehensive tenant screening including credit checks (minimum 650 score), employment verification (2+ years stable employment), rental history verification, criminal background checks, and income verification (3x monthly rent minimum). We also check references and use professional screening services for consistency and legal compliance.",
        },
        {
          question: "How quickly can you find tenants?",
          answer:
            "On average, we fill vacant properties within 15-30 days in Miami-Dade and 10-20 days in Broward County, depending on property condition, pricing, and market conditions. Our extensive marketing reach includes MLS, Zillow, Apartments.com, and 50+ rental websites, plus professional photography and virtual tours.",
        },
        {
          question: "What happens if a tenant doesn't pay rent?",
          answer:
            "We have a systematic approach to late rent collection: Day 1 - automated reminder, Day 3 - personal contact, Day 5 - late fee applied, Day 10 - formal notice. If necessary, we coordinate eviction proceedings in accordance with Florida law, keeping you informed throughout the process. We handle all legal paperwork and court appearances.",
        },
        {
          question: "Do you handle international tenants?",
          answer:
            "Yes! Miami's international market is our specialty. We have extensive experience with international tenants including alternative credit verification, employment verification for international companies, additional security deposit options, co-signer arrangements, and bank statement analysis. We're familiar with consulate and diplomatic housing requirements.",
        },
      ],
    },
    {
      category: "Property Maintenance",
      icon: "🔧",
      questions: [
        {
          question: "How do you handle maintenance requests?",
          answer:
            "Tenants can submit maintenance requests through our online portal, mobile app, or 24/7 phone line. We prioritize requests by urgency (emergency, urgent, routine), coordinate with our network of licensed contractors, and keep you informed of all work performed. Emergency repairs are handled immediately, often within 2-4 hours.",
        },
        {
          question: "Do I need to approve all maintenance work?",
          answer:
            "You set the approval threshold in your management agreement. Typically, we can approve routine maintenance up to $500 without prior approval for efficiency. Larger repairs or improvements require your written consent before proceeding. Emergency repairs for habitability are handled immediately with immediate notification to you.",
        },
        {
          question: "Do you have preferred contractors?",
          answer:
            "Yes, we work with a network of licensed, insured contractors who provide quality work at competitive prices. Our contractors are experienced with Miami's unique challenges including hurricane preparation, salt-air corrosion, and HOA requirements. However, you can also specify preferred vendors or contractors you'd like us to use.",
        },
        {
          question: "How do you handle hurricane preparation?",
          answer:
            "We have comprehensive hurricane protocols: 72-hour advance notice to tenants, coordination of shutter installation, securing outdoor furniture, checking emergency supplies, insurance documentation, and 24/7 emergency contact during storms. We maintain relationships with emergency contractors for post-storm repairs and handle insurance claims coordination.",
        },
      ],
    },
    {
      category: "Financial Management",
      icon: "📊",
      questions: [
        {
          question: "When do I receive rental income?",
          answer:
            "We disburse rental income within 3-5 business days of collecting rent from tenants. Payments are made via direct deposit to your designated bank account, along with detailed financial statements. You can also access real-time financial information through our online owner portal 24/7.",
        },
        {
          question: "What financial reports do you provide?",
          answer:
            "You receive comprehensive monthly statements showing rent collected, expenses paid, maintenance costs, and net disbursements. We also provide annual tax summaries (1099s), detailed expense categorization for tax purposes, and can generate custom reports as needed. All information is accessible through our online owner portal.",
        },
        {
          question: "How are security deposits handled?",
          answer:
            "Security deposits are held in separate FDIC-insured trust accounts as required by Florida law. We handle all deposit-related matters including collection, proper escrow accounting, deductions for damages (with photo documentation), and timely return to tenants at lease end. Annual interest payments are made where required by local ordinance.",
        },
        {
          question: "Do you provide tax documentation?",
          answer:
            "Yes! We provide comprehensive tax documentation including annual 1099s, detailed expense reports categorized for tax purposes, depreciation schedules, and can work with your CPA or tax preparer. Our detailed record-keeping makes tax preparation much easier for property owners.",
        },
      ],
    },
    {
      category: "Legal & Compliance",
      icon: "⚖️",
      questions: [
        {
          question: "Are you licensed and insured?",
          answer:
            "Yes, Alenley Property Management is fully licensed by the State of Florida (Real Estate License) and maintains comprehensive general liability insurance, professional liability insurance, and errors & omissions coverage. We also carry a fidelity bond for additional financial protection of client funds.",
        },
        {
          question: "How do you ensure Fair Housing compliance?",
          answer:
            "All our team members are trained in Fair Housing laws and receive ongoing education. We follow strict non-discriminatory practices in marketing, tenant screening, and all tenant interactions. Our processes are regularly reviewed by legal counsel to ensure full compliance with federal, state, and local fair housing requirements.",
        },
        {
          question: "What happens if legal action is needed?",
          answer:
            "While we handle most tenant issues administratively, we coordinate with qualified Florida real estate attorneys when legal action is necessary. We'll keep you informed of all developments and work with legal counsel to protect your interests while minimizing costs. We handle evictions, lease violations, and property damage claims.",
        },
        {
          question: "Do you handle HOA compliance?",
          answer:
            "We manage all HOA interactions including rental applications, tenant background submissions, lease compliance verification, amenity coordination, architectural reviews, and violation resolution. We maintain relationships with major HOA management companies throughout Miami-Dade and Broward Counties.",
        },
      ],
    },
  ]

  const filteredFAQs = faqCategories
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.questions.length > 0)

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
              <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
                Blog
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </Link>
              <Link href="/faq" className="text-blue-600 font-medium">
                FAQ
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
                  className="text-gray-600 hover:text-gray-900 px-4 py-2 transition-colors"
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
                  href="/faq"
                  className="text-blue-600 font-medium px-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
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

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span>›</span>
            <span className="text-gray-900">FAQ</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-4 bg-blue-800 rounded-full w-fit mx-auto mb-6">
            <HelpCircle className="h-12 w-12" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-6">
            Find answers to common questions about our Miami property management services.
          </p>
          <Badge className="bg-blue-600 text-white">FREE 2 Months Available</Badge>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg"
            />
          </div>
          {searchTerm && (
            <p className="text-center text-gray-600 mt-2">
              {filteredFAQs.reduce((total, category) => total + category.questions.length, 0)} results for "{searchTerm}
              "
            </p>
          )}
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {filteredFAQs.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-2xl">{category.icon}</span>
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 100 + questionIndex
                  const isOpen = openItems.includes(globalIndex)
                  return (
                    <Card key={questionIndex} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                      <CardHeader
                        className="cursor-pointer hover:bg-gray-50 transition-colors"
                        onClick={() => toggleItem(globalIndex)}
                      >
                        <CardTitle className="flex items-center justify-between text-left">
                          <span className="text-lg text-gray-900 pr-4">{faq.question}</span>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-blue-600 flex-shrink-0" />
                          )}
                        </CardTitle>
                      </CardHeader>
                      {isOpen && (
                        <CardContent className="pt-0">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </CardContent>
                      )}
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredFAQs.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-600 mb-6">
              We couldn't find any FAQs matching "{searchTerm}". Try a different search term or contact us directly.
            </p>
            <Button asChild>
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}

        {/* Contact CTA */}
        <Card className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-0">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-blue-100 mb-6">
              Can't find what you're looking for? Our Miami property management experts are here to help with any
              questions about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                <a href="tel:+13056993437">
                  <Phone className="h-5 w-5 mr-2" />
                  Call (305) 699-3437
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                asChild
              >
                <Link href="/contact">
                  Contact Us Online
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-blue-100 mt-4">🎉 Ask about our FREE 2-month trial for new property owners!</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
