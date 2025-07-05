import FAQPageClient from "@/components/faq-page-client"
import AIChatWidget from "@/components/ai-chat-widget"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Miami Property Management FAQ | Alenley Property Management",
  description:
    "Frequently asked questions about property management in Miami-Dade and Broward County. Get answers about pricing, tenant screening, maintenance, and more.",
  keywords:
    "Miami property management FAQ, Florida rental laws, property management questions, tenant screening, maintenance, pricing",
}

export default function FAQPage() {
  return (
    <>
      <AIChatWidget />
      <FAQPageClient />
      <Footer />
    </>
  )
}
