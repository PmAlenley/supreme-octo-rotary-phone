import OwnerPortalFinances from "@/components/owner-portal-finances"
import AIChatWidget from "@/components/ai-chat-widget"

export const metadata = {
  title: "Financial Dashboard | Alenley Owner Portal",
  description:
    "Track your Miami property investment performance with detailed financial reports, income tracking, and expense analysis.",
  keywords: "Miami property investment tracking, rental income dashboard, property expense management, ROI calculator",
}

export default function OwnerPortalFinancesPage() {
  return (
    <>
      <AIChatWidget />
      <OwnerPortalFinances />
    </>
  )
}
