import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { Contact } from "@/components/contact"

export const metadata: Metadata = {
  title: "Contact Alenley Property Management | Miami & Fort Lauderdale",
  description:
    "Contact Alenley Property Management for professional property management services in Miami-Dade and Broward Counties. Ask about our Summer Special - 2 months FREE!",
}

export default function ContactPage() {
  return (
    <>
      <Contact />
      <Footer />
    </>
  )
}
