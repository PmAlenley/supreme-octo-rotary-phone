import type { Metadata } from "next"
import OwnerPortalMaintenance from "@/components/owner-portal-maintenance"

export const metadata: Metadata = {
  title: "Maintenance Management | Alenley Property Management Owner Portal",
  description:
    "Track and manage maintenance requests for your Miami properties. Hurricane preparation, waterfront maintenance, and 24/7 emergency response.",
  keywords:
    "Miami property maintenance, hurricane preparation, waterfront property maintenance, property management portal, maintenance tracking",
}

export default function MaintenancePage() {
  return <OwnerPortalMaintenance />
}
