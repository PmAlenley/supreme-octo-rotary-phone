import { Building2, Users, Phone, Mail, Calendar, Plus } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

export default function Tenants() {
  const tenants = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@email.com",
      phone: "(555) 123-4567",
      property: "Oak Street Apt 2B",
      rentAmount: "$1,200",
      leaseStart: "Jan 2024",
      leaseEnd: "Dec 2024",
      status: "active",
      paymentStatus: "current",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "(555) 234-5678",
      property: "Pine Ave House",
      rentAmount: "$2,200",
      leaseStart: "Mar 2023",
      leaseEnd: "Mar 2025",
      status: "active",
      paymentStatus: "current",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Mike Wilson",
      email: "m.wilson@email.com",
      phone: "(555) 345-6789",
      property: "Elm St Condo 3A",
      rentAmount: "$1,800",
      leaseStart: "Jun 2023",
      leaseEnd: "Jun 2024",
      status: "active",
      paymentStatus: "current",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "Lisa Brown",
      email: "lisa.brown@email.com",
      phone: "(555) 456-7890",
      property: "Maple Dr Duplex A",
      rentAmount: "$1,500",
      leaseStart: "Sep 2023",
      leaseEnd: "Sep 2024",
      status: "active",
      paymentStatus: "current",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      name: "Mark Davis",
      email: "mark.davis@email.com",
      phone: "(555) 567-8901",
      property: "Pine Ave House B",
      rentAmount: "$1,450",
      leaseStart: "Nov 2023",
      leaseEnd: "Nov 2024",
      status: "active",
      paymentStatus: "overdue",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 6,
      name: "Emma Wilson",
      email: "emma.w@email.com",
      phone: "(555) 678-9012",
      property: "Oak Street Apt 1A",
      rentAmount: "$1,100",
      leaseStart: "Mar 2023",
      leaseEnd: "Mar 2024",
      status: "expiring",
      paymentStatus: "current",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Building2 className="h-8 w-8 text-teal-600" />
              <h1 className="text-2xl font-bold text-gray-900">PropertyPro</h1>
            </div>

            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Dashboard
              </Link>
              <Link href="/properties" className="text-gray-600 hover:text-gray-900">
                Properties
              </Link>
              <Link href="/tenants" className="text-teal-600 font-medium">
                Tenants
              </Link>
              <Link href="/maintenance" className="text-gray-600 hover:text-gray-900">
                Maintenance
              </Link>
              <Link href="/finances" className="text-gray-600 hover:text-gray-900">
                Finances
              </Link>
            </nav>

            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Tenant
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Tenants</h2>
            <p className="text-gray-600">Manage your tenants and lease information</p>
          </div>
          <div className="flex gap-4">
            <Input placeholder="Search tenants..." className="w-64" />
            <Button variant="outline">Filter</Button>
          </div>
        </div>

        <div className="grid gap-6">
          {tenants.map((tenant) => (
            <Card key={tenant.id}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={tenant.avatar || "/placeholder.svg"} alt={tenant.name} />
                      <AvatarFallback>
                        {tenant.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{tenant.name}</h3>
                      <p className="text-gray-600">{tenant.property}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-lg font-semibold text-green-600">{tenant.rentAmount}/month</p>
                      <p className="text-sm text-gray-500">
                        Lease: {tenant.leaseStart} - {tenant.leaseEnd}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Badge
                        variant={
                          tenant.status === "active"
                            ? "default"
                            : tenant.status === "expiring"
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        {tenant.status}
                      </Badge>
                      <Badge variant={tenant.paymentStatus === "current" ? "default" : "destructive"}>
                        {tenant.paymentStatus}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Mail className="h-4 w-4" />
                    <span>{tenant.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Phone className="h-4 w-4" />
                    <span>{tenant.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>Lease expires {tenant.leaseEnd}</span>
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <Button variant="outline" size="sm">
                    View Profile
                  </Button>
                  <Button variant="outline" size="sm">
                    Send Message
                  </Button>
                  <Button variant="outline" size="sm">
                    Payment History
                  </Button>
                  {tenant.paymentStatus === "overdue" && (
                    <Button size="sm" variant="destructive">
                      Send Reminder
                    </Button>
                  )}
                  {tenant.status === "expiring" && <Button size="sm">Renew Lease</Button>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Tenants</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89</div>
              <p className="text-xs text-muted-foreground">+5 from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Leases</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">85</div>
              <p className="text-xs text-muted-foreground">4 expiring soon</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Payment Issues</CardTitle>
              <Badge className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">3</div>
              <p className="text-xs text-muted-foreground">Overdue payments</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Lease Length</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">14.2</div>
              <p className="text-xs text-muted-foreground">months</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
