import Link from "next/link"
import { Phone, Mail, Home } from "lucide-react"
import { BUSINESS_INFO } from "./business-info"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Home className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">{BUSINESS_INFO.name}</h3>
                <p className="text-xs text-gray-400">{BUSINESS_INFO.license}</p>
              </div>
            </div>
            <div className="space-y-1 text-sm text-gray-400">
              <p className="font-semibold text-white">{BUSINESS_INFO.name}</p>
              <p>{BUSINESS_INFO.address.street}</p>
              <p>{BUSINESS_INFO.address.suite}</p>
              <p>
                {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}
              </p>
            </div>
            <div className="mt-4 space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, "")}`} className="hover:text-white">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Property Management
                </Link>
              </li>
              <li>
                <Link href="/owner-portal/tenants" className="hover:text-white transition-colors">
                  Tenant Services
                </Link>
              </li>
              <li>
                <Link href="/owner-portal/maintenance" className="hover:text-white transition-colors">
                  Maintenance
                </Link>
              </li>
              <li>
                <Link href="/owner-portal/finances" className="hover:text-white transition-colors">
                  Financial Reporting
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/virtual-tours" className="hover:text-white transition-colors">
                  Virtual Tours
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <div className="flex justify-between">
                <span>Mon - Fri:</span>
                <span>9AM - 6PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>By Appointment</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
              <div className="mt-3 p-2 bg-red-900 rounded text-red-200 text-xs">
                <p className="font-medium">🚨 Emergency: 24/7</p>
                <p>For current clients only</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; 2024 {BUSINESS_INFO.name}. All rights reserved. Licensed Realtor with 10+ years experience managing
            real estate.
          </p>
        </div>
      </div>
    </footer>
  )
}

// Default export for compatibility
export default Footer
