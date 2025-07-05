"use client"

import { useState } from "react"
import {
  Building2,
  Wrench,
  AlertTriangle,
  Clock,
  CheckCircle,
  Plus,
  Search,
  Filter,
  Phone,
  MapPin,
  Calendar,
  DollarSign,
  Camera,
  User,
  Waves,
  Shield,
  Zap,
  Star,
  MessageSquare,
  FileText,
  TrendingUp,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

export default function OwnerPortalMaintenance() {
  const [selectedProperty, setSelectedProperty] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedPriority, setSelectedPriority] = useState("all")

  const properties = [
    { id: "all", name: "All Properties" },
    { id: "1", name: "Biscayne Bay Condo 12A" },
    { id: "2", name: "South Beach Penthouse" },
    { id: "3", name: "Coral Gables Villa" },
    { id: "4", name: "Key Biscayne Waterfront" },
    { id: "5", name: "Aventura High-Rise 25B" },
    { id: "6", name: "Brickell City Centre 18F" },
    { id: "7", name: "Coconut Grove Townhouse" },
    { id: "8", name: "Downtown Miami Loft" },
  ]

  const maintenanceRequests = [
    {
      id: 1,
      title: "Hurricane Shutter Motor Repair",
      property: "Biscayne Bay Condo 12A",
      tenant: "Maria Rodriguez",
      tenantPhone: "(305) 555-0123",
      priority: "urgent",
      status: "open",
      dateReported: "2024-01-15",
      description:
        "Hurricane shutters on east-facing windows won't close properly. Motor appears to be malfunctioning. Need immediate repair before storm season peaks.",
      category: "Hurricane Prep",
      estimatedCost: 850,
      actualCost: null,
      photos: 3,
      contractor: null,
      contractorPhone: null,
      notes: "Tenant reports grinding noise when attempting to close shutters. Safety priority.",
      lastUpdated: "2024-01-15",
    },
    {
      id: 2,
      title: "Salt Air AC Unit Corrosion",
      property: "Key Biscayne Waterfront",
      tenant: "Robert Chen",
      tenantPhone: "(305) 555-0124",
      priority: "high",
      status: "in-progress",
      dateReported: "2024-01-14",
      description:
        "AC unit showing significant salt air corrosion damage. Cooling efficiency decreased by 30%. Refrigerant lines need replacement.",
      category: "HVAC",
      estimatedCost: 1200,
      actualCost: 1150,
      photos: 5,
      contractor: "Miami HVAC Specialists",
      contractorPhone: "(305) 555-0200",
      notes: "Contractor on-site. Parts ordered. Expected completion by Friday.",
      lastUpdated: "2024-01-16",
      progress: 65,
    },
    {
      id: 3,
      title: "Pool Equipment Malfunction",
      property: "Coral Gables Villa",
      tenant: "Jennifer Walsh",
      tenantPhone: "(305) 555-0125",
      priority: "medium",
      status: "scheduled",
      dateReported: "2024-01-13",
      description:
        "Pool pump making unusual grinding noises. Water circulation appears reduced. Filter system may need replacement.",
      category: "Pool/Spa",
      estimatedCost: 650,
      actualCost: null,
      photos: 2,
      contractor: "Aqua Tech Miami",
      contractorPhone: "(305) 555-0201",
      notes: "Scheduled for inspection tomorrow at 10 AM.",
      lastUpdated: "2024-01-16",
    },
    {
      id: 4,
      title: "Waterfront Dock Repair",
      property: "Key Biscayne Waterfront",
      tenant: "Michael Torres",
      tenantPhone: "(305) 555-0126",
      priority: "medium",
      status: "open",
      dateReported: "2024-01-12",
      description:
        "Dock planking loose after recent storm. Several boards need replacement. Safety concern for tenant's boat access.",
      category: "Waterfront",
      estimatedCost: 800,
      actualCost: null,
      photos: 4,
      contractor: null,
      contractorPhone: null,
      notes: "Waiting for marine contractor availability. High tide access required.",
      lastUpdated: "2024-01-15",
    },
    {
      id: 5,
      title: "Flood Sensor Alert - Resolved",
      property: "South Beach Penthouse",
      tenant: "Lisa Martinez",
      tenantPhone: "(305) 555-0127",
      priority: "high",
      status: "completed",
      dateReported: "2024-01-10",
      dateCompleted: "2024-01-14",
      description:
        "Flood sensor triggered in laundry room. Minor leak detected behind washing machine. Pipe joint replacement needed.",
      category: "Plumbing",
      estimatedCost: 300,
      actualCost: 275,
      photos: 3,
      contractor: "Miami Plumbing Pro",
      contractorPhone: "(305) 555-0202",
      notes: "Completed successfully. No water damage. Sensor reset.",
      lastUpdated: "2024-01-14",
      rating: 5,
    },
    {
      id: 6,
      title: "Emergency Generator Service",
      property: "Aventura High-Rise 25B",
      tenant: "David Kim",
      tenantPhone: "(305) 555-0128",
      priority: "medium",
      status: "scheduled",
      dateReported: "2024-01-11",
      description:
        "Annual generator maintenance due. Hurricane season preparation. Oil change, filter replacement, and load testing required.",
      category: "Hurricane Prep",
      estimatedCost: 400,
      actualCost: null,
      photos: 1,
      contractor: "Power Systems Miami",
      contractorPhone: "(305) 555-0203",
      notes: "Scheduled for next Tuesday. 2-hour service window.",
      lastUpdated: "2024-01-15",
    },
    {
      id: 7,
      title: "Balcony Railing Corrosion",
      property: "Brickell City Centre 18F",
      tenant: "Sarah Wilson",
      tenantPhone: "(305) 555-0129",
      priority: "high",
      status: "in-progress",
      dateReported: "2024-01-09",
      description:
        "Balcony railing showing severe salt air corrosion. Safety concern. Needs immediate attention and protective coating.",
      category: "Waterfront",
      estimatedCost: 950,
      actualCost: null,
      photos: 6,
      contractor: "Coastal Repairs Inc",
      contractorPhone: "(305) 555-0204",
      notes: "Sandblasting completed. Applying marine-grade coating today.",
      lastUpdated: "2024-01-16",
      progress: 80,
    },
    {
      id: 8,
      title: "Smart Thermostat Installation",
      property: "Coconut Grove Townhouse",
      tenant: "Carlos Mendez",
      tenantPhone: "(305) 555-0130",
      priority: "low",
      status: "completed",
      dateReported: "2024-01-08",
      dateCompleted: "2024-01-12",
      description: "Tenant requested smart thermostat upgrade for energy efficiency. Installation and setup required.",
      category: "HVAC",
      estimatedCost: 350,
      actualCost: 325,
      photos: 2,
      contractor: "Smart Home Solutions",
      contractorPhone: "(305) 555-0205",
      notes: "Installation complete. Tenant trained on app usage.",
      lastUpdated: "2024-01-12",
      rating: 5,
    },
  ]

  const contractors = [
    {
      name: "Miami HVAC Specialists",
      specialty: "HVAC Systems",
      rating: 4.9,
      responseTime: "2 hours",
      completedJobs: 45,
      phone: "(305) 555-0200",
    },
    {
      name: "Coastal Repairs Inc",
      specialty: "Waterfront Maintenance",
      rating: 4.8,
      responseTime: "4 hours",
      completedJobs: 32,
      phone: "(305) 555-0204",
    },
    {
      name: "Aqua Tech Miami",
      specialty: "Pool & Spa",
      rating: 4.7,
      responseTime: "Same day",
      completedJobs: 28,
      phone: "(305) 555-0201",
    },
    {
      name: "Power Systems Miami",
      specialty: "Generators & Electrical",
      rating: 4.6,
      responseTime: "24 hours",
      completedJobs: 38,
      phone: "(305) 555-0203",
    },
    {
      name: "Miami Plumbing Pro",
      specialty: "Plumbing & Water Systems",
      rating: 4.8,
      responseTime: "3 hours",
      completedJobs: 52,
      phone: "(305) 555-0202",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "urgent":
        return "destructive"
      case "open":
        return "secondary"
      case "in-progress":
        return "default"
      case "scheduled":
        return "outline"
      case "completed":
        return "default"
      default:
        return "secondary"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "text-red-600 bg-red-50 border-red-200"
      case "high":
        return "text-orange-600 bg-orange-50 border-orange-200"
      case "medium":
        return "text-yellow-600 bg-yellow-50 border-yellow-200"
      case "low":
        return "text-green-600 bg-green-50 border-green-200"
      default:
        return "text-gray-600 bg-gray-50 border-gray-200"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "urgent":
        return AlertTriangle
      case "open":
        return Clock
      case "in-progress":
        return Wrench
      case "scheduled":
        return Calendar
      case "completed":
        return CheckCircle
      default:
        return Clock
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Hurricane Prep":
        return Shield
      case "HVAC":
        return Zap
      case "Waterfront":
        return Waves
      case "Pool/Spa":
        return Waves
      case "Plumbing":
        return Wrench
      default:
        return Wrench
    }
  }

  const filteredRequests = maintenanceRequests.filter((request) => {
    const matchesProperty =
      selectedProperty === "all" ||
      request.property.includes(properties.find((p) => p.id === selectedProperty)?.name || "")
    const matchesPriority = selectedPriority === "all" || request.priority === selectedPriority
    const matchesSearch =
      request.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.property.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.tenant.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesProperty && matchesPriority && matchesSearch
  })

  const stats = {
    open: filteredRequests.filter((r) => r.status === "open").length,
    urgent: filteredRequests.filter((r) => r.priority === "urgent").length,
    inProgress: filteredRequests.filter((r) => r.status === "in-progress").length,
    completed: filteredRequests.filter((r) => r.status === "completed").length,
    scheduled: filteredRequests.filter((r) => r.status === "scheduled").length,
    avgResolutionTime: 3.2,
    totalCostThisMonth: filteredRequests.reduce((sum, r) => sum + (r.actualCost || 0), 0),
    avgContractorRating: 4.8,
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hurricane Season Alert Banner */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5" />
            <span className="font-medium">Hurricane Season Active: June 1 - November 30</span>
            <Badge variant="outline" className="border-white text-white bg-transparent">
              2 Active Prep Items
            </Badge>
          </div>
          <Button
            size="sm"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
          >
            View Preparation Checklist
          </Button>
        </div>
      </div>

      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Building2 className="h-8 w-8 text-teal-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Alenley Property Management</h1>
                <p className="text-sm text-gray-600">Miami Property Owner Portal</p>
              </div>
            </div>

            <nav className="hidden md:flex space-x-8">
              <Link href="/owner-portal" className="text-gray-600 hover:text-gray-900 transition-colors">
                Dashboard
              </Link>
              <Link href="/owner-portal/properties" className="text-gray-600 hover:text-gray-900 transition-colors">
                Properties
              </Link>
              <Link href="/owner-portal/tenants" className="text-gray-600 hover:text-gray-900 transition-colors">
                Tenants
              </Link>
              <Link href="/owner-portal/maintenance" className="text-teal-600 font-medium">
                Maintenance
              </Link>
              <Link href="/owner-portal/finances" className="text-gray-600 hover:text-gray-900 transition-colors">
                Finances
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                className="text-red-600 border-red-600 hover:bg-red-50 bg-transparent"
              >
                <Phone className="h-4 w-4 mr-2" />
                24/7 Emergency
              </Button>
              <Button className="bg-teal-600 hover:bg-teal-700">
                <Plus className="h-4 w-4 mr-2" />
                New Request
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Maintenance Management</h2>
            <p className="text-gray-600">
              Track and manage maintenance requests across your Miami properties with real-time updates
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search requests, properties, tenants, or categories..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <Select value={selectedProperty} onValueChange={setSelectedProperty}>
            <SelectTrigger className="w-64">
              <SelectValue placeholder="Filter by property" />
            </SelectTrigger>
            <SelectContent>
              {properties.map((property) => (
                <SelectItem key={property.id} value={property.id}>
                  {property.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={selectedPriority} onValueChange={setSelectedPriority}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Priorities</SelectItem>
              <SelectItem value="urgent">Urgent</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="low">Low</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            More Filters
          </Button>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Open</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.open}</div>
              <p className="text-xs text-muted-foreground">{stats.urgent} urgent</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">In Progress</CardTitle>
              <Wrench className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.inProgress}</div>
              <p className="text-xs text-muted-foreground">Active work</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Scheduled</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.scheduled}</div>
              <p className="text-xs text-muted-foreground">Upcoming</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.completed}</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Resolution</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.avgResolutionTime}</div>
              <p className="text-xs text-muted-foreground">days</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Cost</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${stats.totalCostThisMonth.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">vs budget</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Contractor Rating</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.avgContractorRating}</div>
              <p className="text-xs text-muted-foreground">average</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Hurricane Prep</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">active items</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="all">All ({filteredRequests.length})</TabsTrigger>
            <TabsTrigger value="urgent">
              Urgent ({filteredRequests.filter((r) => r.priority === "urgent").length})
            </TabsTrigger>
            <TabsTrigger value="open">Open ({filteredRequests.filter((r) => r.status === "open").length})</TabsTrigger>
            <TabsTrigger value="in-progress">
              In Progress ({filteredRequests.filter((r) => r.status === "in-progress").length})
            </TabsTrigger>
            <TabsTrigger value="scheduled">
              Scheduled ({filteredRequests.filter((r) => r.status === "scheduled").length})
            </TabsTrigger>
            <TabsTrigger value="completed">
              Completed ({filteredRequests.filter((r) => r.status === "completed").length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {filteredRequests.map((request) => {
              const StatusIcon = getStatusIcon(request.status)
              const CategoryIcon = getCategoryIcon(request.category)

              return (
                <Card
                  key={request.id}
                  className={`hover:shadow-lg transition-shadow ${
                    request.priority === "urgent" ? "border-red-200 bg-red-50/30" : ""
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <div
                          className={`p-3 rounded-lg ${request.priority === "urgent" ? "bg-red-100" : "bg-gray-100"}`}
                        >
                          <CategoryIcon
                            className={`h-6 w-6 ${request.priority === "urgent" ? "text-red-600" : "text-gray-600"}`}
                          />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <h3 className="text-lg font-semibold text-gray-900">{request.title}</h3>
                            <Badge variant={getStatusColor(request.status)}>
                              <StatusIcon className="h-3 w-3 mr-1" />
                              {request.status.replace("-", " ")}
                            </Badge>
                            <span
                              className={`text-xs font-medium px-2 py-1 rounded-full border ${getPriorityColor(
                                request.priority,
                              )}`}
                            >
                              {request.priority.toUpperCase()}
                            </span>
                          </div>

                          <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div className="space-y-2 text-sm text-gray-600">
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                <span>
                                  <strong>Property:</strong> {request.property}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <User className="h-4 w-4" />
                                <span>
                                  <strong>Tenant:</strong> {request.tenant}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Wrench className="h-4 w-4" />
                                <span>
                                  <strong>Category:</strong> {request.category}
                                </span>
                              </div>
                            </div>

                            <div className="space-y-2 text-sm text-gray-600">
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>
                                  <strong>Reported:</strong> {new Date(request.dateReported).toLocaleDateString()}
                                </span>
                              </div>
                              {request.dateCompleted && (
                                <div className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4" />
                                  <span>
                                    <strong>Completed:</strong> {new Date(request.dateCompleted).toLocaleDateString()}
                                  </span>
                                </div>
                              )}
                              <div className="flex items-center gap-2">
                                <DollarSign className="h-4 w-4" />
                                <span>
                                  <strong>Est:</strong> ${request.estimatedCost}
                                  {request.actualCost && (
                                    <span className="text-green-600 ml-2">| Actual: ${request.actualCost}</span>
                                  )}
                                </span>
                              </div>
                            </div>
                          </div>

                          <p className="text-gray-700 mb-3">{request.description}</p>

                          {request.notes && (
                            <div className="bg-blue-50 p-3 rounded-lg mb-3">
                              <p className="text-sm">
                                <strong className="text-blue-800">Latest Update:</strong> {request.notes}
                              </p>
                            </div>
                          )}

                          {request.contractor && (
                            <div className="bg-green-50 p-3 rounded-lg mb-3">
                              <div className="flex items-center justify-between">
                                <p className="text-sm">
                                  <strong className="text-green-800">Assigned:</strong> {request.contractor}
                                </p>
                                {request.progress && (
                                  <div className="flex items-center gap-2">
                                    <Progress value={request.progress} className="w-20" />
                                    <span className="text-xs text-green-600">{request.progress}%</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}

                          <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-1">
                              <Camera className="h-4 w-4" />
                              <span>{request.photos} photos</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>Updated {new Date(request.lastUpdated).toLocaleDateString()}</span>
                            </div>
                            {request.rating && (
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                <span>{request.rating}/5</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 ml-4">
                        {request.status !== "completed" && (
                          <>
                            {request.priority === "urgent" && (
                              <Button size="sm" className="bg-red-600 hover:bg-red-700">
                                <AlertTriangle className="h-4 w-4 mr-1" />
                                Emergency Response
                              </Button>
                            )}
                            {!request.contractor && (
                              <Button size="sm" variant="outline">
                                Assign Contractor
                              </Button>
                            )}
                            <Button size="sm" variant="outline">
                              Update Status
                            </Button>
                            <Button size="sm" variant="outline">
                              <Phone className="h-4 w-4 mr-1" />
                              Contact Tenant
                            </Button>
                            {request.contractor && (
                              <Button size="sm" variant="outline">
                                <MessageSquare className="h-4 w-4 mr-1" />
                                Contact Contractor
                              </Button>
                            )}
                          </>
                        )}
                        <Button size="sm" variant="outline">
                          <FileText className="h-4 w-4 mr-1" />
                          View Details
                        </Button>
                        <Button size="sm" variant="outline">
                          <Camera className="h-4 w-4 mr-1" />
                          Photos ({request.photos})
                        </Button>
                        {request.status === "completed" && (
                          <>
                            <Button size="sm" variant="outline">
                              View Invoice
                            </Button>
                            <Button size="sm" variant="outline">
                              <Star className="h-4 w-4 mr-1" />
                              Rate Service
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </TabsContent>

          {/* Similar structure for other tabs with filtered content */}
          <TabsContent value="urgent">
            <div className="space-y-4">
              {filteredRequests
                .filter((request) => request.priority === "urgent")
                .map((request) => {
                  const StatusIcon = getStatusIcon(request.status)
                  const CategoryIcon = getCategoryIcon(request.category)

                  return (
                    <Card key={request.id} className="border-red-200 bg-red-50/50">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-4 flex-1">
                            <div className="p-3 bg-red-100 rounded-lg">
                              <CategoryIcon className="h-6 w-6 text-red-600" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-3">
                                <h3 className="text-lg font-semibold text-gray-900">{request.title}</h3>
                                <Badge variant="destructive">
                                  <AlertTriangle className="h-3 w-3 mr-1" />
                                  URGENT
                                </Badge>
                              </div>
                              <div className="space-y-2 text-sm text-gray-600 mb-4">
                                <div className="flex items-center gap-2">
                                  <MapPin className="h-4 w-4" />
                                  <span>
                                    <strong>Property:</strong> {request.property}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <User className="h-4 w-4" />
                                  <span>
                                    <strong>Tenant:</strong> {request.tenant}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Calendar className="h-4 w-4" />
                                  <span>
                                    <strong>Reported:</strong> {new Date(request.dateReported).toLocaleDateString()}
                                  </span>
                                </div>
                              </div>
                              <p className="text-gray-700">{request.description}</p>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 ml-4">
                            <Button size="sm" className="bg-red-600 hover:bg-red-700">
                              <AlertTriangle className="h-4 w-4 mr-1" />
                              Emergency Response
                            </Button>
                            <Button size="sm" variant="outline">
                              <Phone className="h-4 w-4 mr-1" />
                              Call Tenant
                            </Button>
                            <Button size="sm" variant="outline">
                              <Camera className="h-4 w-4 mr-1" />
                              Photos ({request.photos})
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
            </div>
          </TabsContent>

          {/* Add similar TabsContent for other statuses */}
        </Tabs>

        {/* Preferred Contractors */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wrench className="h-5 w-5" />
              Preferred Miami Contractors
            </CardTitle>
            <p className="text-sm text-gray-600">Our vetted network of licensed, insured contractors</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {contractors.map((contractor, index) => (
                <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900 text-sm">{contractor.name}</h4>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span className="text-xs text-gray-600">{contractor.rating}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">{contractor.specialty}</p>
                  <div className="flex justify-between text-xs text-gray-500 mb-2">
                    <span>{contractor.responseTime} response</span>
                    <span>{contractor.completedJobs} jobs</span>
                  </div>
                  <Button size="sm" variant="outline" className="w-full text-xs bg-transparent">
                    <Phone className="h-3 w-3 mr-1" />
                    Contact
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Miami-Specific Maintenance Tips */}
        <div className="mt-12 bg-gradient-to-r from-teal-50 to-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-teal-900 flex items-center gap-2">
            <Waves className="h-6 w-6" />
            Miami Property Maintenance Expertise
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-3 text-teal-800 flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Hurricane Season (June-Nov)
              </h4>
              <ul className="text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Test hurricane shutters and generators monthly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Trim trees and secure outdoor furniture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Inspect roof, gutters, and drainage systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Review emergency supply inventory</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-teal-800 flex items-center gap-2">
                <Waves className="h-5 w-5" />
                Waterfront Properties
              </h4>
              <ul className="text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Monthly salt air corrosion inspection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Dock and seawall maintenance checks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Marine-grade materials for all repairs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Flood sensor monitoring and testing</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-teal-800 flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Year-Round Essentials
              </h4>
              <ul className="text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>AC maintenance every 3 months</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Pool equipment weekly inspections</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Pest control monthly treatments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Humidity control system monitoring</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-white/50 rounded-lg">
            <p className="text-sm text-teal-800">
              <strong>Pro Tip:</strong> Miami's tropical climate requires proactive maintenance. Our team schedules
              preventive services to avoid costly emergency repairs and ensure your properties remain profitable
              year-round.
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid md:grid-cols-4 gap-4">
          <Button className="h-16 flex-col gap-2 bg-teal-600 hover:bg-teal-700">
            <Plus className="h-5 w-5" />
            <span className="text-sm">Submit New Request</span>
          </Button>
          <Button variant="outline" className="h-16 flex-col gap-2 bg-transparent">
            <Calendar className="h-5 w-5" />
            <span className="text-sm">Schedule Inspection</span>
          </Button>
          <Button variant="outline" className="h-16 flex-col gap-2 bg-transparent">
            <FileText className="h-5 w-5" />
            <span className="text-sm">View Reports</span>
          </Button>
          <Button variant="outline" className="h-16 flex-col gap-2 bg-transparent">
            <Phone className="h-5 w-5" />
            <span className="text-sm">Emergency Hotline</span>
          </Button>
        </div>
      </main>
    </div>
  )
}
