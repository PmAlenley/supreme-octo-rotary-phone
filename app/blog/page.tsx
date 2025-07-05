import BlogPageClient from "@/components/blog-page-client"
import AIChatWidget from "@/components/ai-chat-widget"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Property Investment Blog | Alenley Property Management",
  description:
    "Expert analysis, market trends, and actionable advice for South Florida property investors. Stay informed with our latest insights.",
  keywords:
    "Miami property investment blog, real estate market analysis, property management tips, Florida rental market",
}

export default function BlogPage() {
  return (
    <>
      <AIChatWidget />
      <BlogPageClient />
      <Footer />
    </>
  )
}
