"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Building2 } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-blue-600" />
            <div>
              <span className="text-xl font-bold text-gray-900">Alenley</span>
              <div className="text-xs text-gray-500">Property Management</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link href="/neighborhoods" className="text-gray-700 hover:text-blue-600 transition-colors">
              Areas
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-blue-600 transition-colors">
              Pricing
            </Link>
            <Link href="/virtual-tours" className="text-gray-700 hover:text-blue-600 transition-colors">
              Virtual Tours
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Summer Special Badge & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
              🌞 Summer Special: 2 Months FREE!
            </div>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">
                <Phone className="h-4 w-4 mr-2" />
                Get Free Quote
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-blue-600 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/neighborhoods"
                className="text-gray-700 hover:text-blue-600 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Areas
              </Link>
              <Link
                href="/pricing"
                className="text-gray-700 hover:text-blue-600 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/virtual-tours"
                className="text-gray-700 hover:text-blue-600 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Virtual Tours
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 hover:text-blue-600 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile Summer Special */}
              <div className="px-2 py-4 border-t border-gray-200">
                <div className="bg-yellow-100 text-yellow-800 px-3 py-2 rounded-lg text-sm font-medium text-center mb-3">
                  🌞 Summer Special: 2 Months FREE!
                </div>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    <Phone className="h-4 w-4 mr-2" />
                    Get Free Quote
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

// Default export for compatibility
export default Header
