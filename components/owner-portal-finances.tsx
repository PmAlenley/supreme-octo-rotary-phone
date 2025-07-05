"use client"

import { useState } from "react"
import { Building2, DollarSign, TrendingUp, TrendingDown, Plus, Download, Filter, Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function OwnerPortalFinances() {
  const [selectedProperty, setSelectedProperty] = useState("all")
  const [dateRange, setDateRange] = useState("current-month")

  const recentTransactions = [
    {
      id: 1,
      type: "income",
      description: "Rent Payment - Brickell Bay Condo 2B",
      tenant: "Maria Rodriguez",
      property: "Brickell Bay Condo",
      amount: 3200,
      date: "2024-01-15",
      status: "completed",
    },
    {
      id: 2,
      type: "expense",
      description: "Hurricane Shutter Maintenance",
      vendor: "Miami Storm Protection",
      property: "Fort Lauderdale Waterfront",
      amount: 850,
      date: "2024-01-14",
      status: "completed",
    },
    {
      id: 3,
      type: "income",
      description: "Rent Payment - Coral Gables House",
      tenant: "James Thompson",
      property: "Coral Gables House",
      amount: 2800,
      date: "2024-01-13",
      status: "completed",
    },
    {
      id: 4,
      type: "expense",
      description: "Property Management Fee",
      vendor: "Alenley Management",
      property: "All Properties",
      amount: 450,
      date: "2024-01-12",
      status: "completed",
    },
    {
      id: 5,
      type: "income",
      description: "Rent Payment - Aventura Luxury Apt",
      tenant: "Carlos Mendez",
      property: "Aventura Luxury Apt",
      amount: 4500,
      date: "2024-01-11",
      status: "completed",
    },
    {
      id: 6,
      type: "expense",
      description: "Pool Maintenance - HOA Required",
      vendor: "Aqua Clean Services",
      property: "Hollywood Beach Condo",
      amount: 275,
      date: "2024-01-10",
      status: "completed",
    },
  ]

  const monthlyData = [
    { month: "Jan 2024", income: 52800, expenses: 8450, profit: 44350, occupancy: "96%" },
    { month: "Dec 2023", income: 51200, expenses: 12200, profit: 39000, occupancy: "94%" },
    { month: "Nov 2023", income: 50800, expenses: 9800, profit: 41000, occupancy: "95%" },
    { month: "Oct 2023", income: 51500, expenses: 11200, profit: 40300, occupancy: "93%" },
  ]

  const expenseCategories = [
    { category: "Property Management", amount: 2800, percentage: 33, description: "Alenley flat fee" },
    { category: "Maintenance & Repairs", amount: 2250, percentage: 27, description: "Hurricane prep, AC service" },
    { category: "Insurance", amount: 1850, percentage: 22, description: "Property & flood insurance" },
    { category: "HOA Fees", amount: 900, percentage: 11, description: "Community assessments" },
    { category: "Property Taxes", amount: 650, percentage: 7, description: "Miami-Dade County" },
  ]

  const properties = [
    { id: "all", name: "All Properties" },
    { id: "brickell", name: "Brickell Bay Condo" },
    { id: "coral-gables", name: "Coral Gables House" },
    { id: "fort-lauderdale", name: "Fort Lauderdale Waterfront" },
    { id: "aventura", name: "Aventura Luxury Apt" },
    { id: "hollywood", name: "Hollywood Beach Condo" },
  ]

  const filteredTransactions =
    selectedProperty === "all"
      ? recentTransactions
      : recentTransactions.filter((t) => t.property.toLowerCase().includes(selectedProperty))

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Building2 className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Alenley</h1>
                <p className="text-xs text-gray-600">Owner Portal</p>
              </div>
            </div>

            <nav className="hidden md:flex space-x-8">
              <Link href="/owner-portal" className="text-gray-600 hover:text-gray-900">
                Dashboard
              </Link>
              <Link href="/owner-portal/properties" className="text-gray-600 hover:text-gray-900">
                Properties
              </Link>
              <Link href="/owner-portal/tenants" className="text-gray-600 hover:text-gray-900">
                Tenants
              </Link>
              <Link href="/owner-portal/maintenance" className="text-gray-600 hover:text-gray-900">
                Maintenance
              </Link>
              <Link href="/owner-portal/finances" className="text-blue-600 font-medium">
                Finances
              </Link>
              <Link href="/owner-portal/reports" className="text-gray-600 hover:text-gray-900">
                Reports
              </Link>
            </nav>

            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Transaction
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Financial Dashboard</h2>
            <p className="text-gray-600">Track income, expenses, and profitability across your Miami properties</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Select value={selectedProperty} onValueChange={setSelectedProperty}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select property" />
              </SelectTrigger>
              <SelectContent>
                {properties.map((property) => (
                  <SelectItem key={property.id} value={property.id}>
                    {property.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={dateRange} onValueChange={setDateRange}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Date range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="current-month">This Month</SelectItem>
                <SelectItem value="last-month">Last Month</SelectItem>
                <SelectItem value="quarter">This Quarter</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>

            <Input placeholder="Search transactions..." className="w-64" />
          </div>
        </div>

        {/* Financial Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Income</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">$52,800</div>
              <p className="text-xs text-muted-foreground">+8.2% from last month</p>
              <p className="text-xs text-blue-600 mt-1">96% occupancy rate</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Expenses</CardTitle>
              <TrendingDown className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">$8,450</div>
              <p className="text-xs text-muted-foreground">-31% from last month</p>
              <p className="text-xs text-gray-600 mt-1">16% of gross income</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Net Profit</CardTitle>
              <DollarSign className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">$44,350</div>
              <p className="text-xs text-muted-foreground">+13.6% from last month</p>
              <p className="text-xs text-green-600 mt-1">Strong performance</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">ROI Annual</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12.8%</div>
              <p className="text-xs text-muted-foreground">Above Miami average</p>
              <p className="text-xs text-blue-600 mt-1">Excellent returns</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Monthly Performance */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Monthly Performance</CardTitle>
              <CardDescription>Income, expenses, and profit trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monthlyData.map((month, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border"
                  >
                    <div>
                      <p className="font-medium text-gray-900">{month.month}</p>
                      <div className="flex gap-4 text-sm text-gray-600 mt-1">
                        <span className="text-green-600 font-medium">Income: ${month.income.toLocaleString()}</span>
                        <span className="text-red-600">Expenses: ${month.expenses.toLocaleString()}</span>
                      </div>
                      <p className="text-xs text-blue-600 mt-1">Occupancy: {month.occupancy}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600 text-lg">${month.profit.toLocaleString()}</p>
                      <p className="text-xs text-gray-500">Net Profit</p>
                      <Badge variant="outline" className="mt-1 text-xs">
                        {Math.round((month.profit / month.income) * 100)}% margin
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Expense Breakdown */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Expense Categories</CardTitle>
              <CardDescription>January 2024 expense breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {expenseCategories.map((category, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <div>
                        <span className="font-medium text-gray-900">{category.category}</span>
                        <p className="text-xs text-gray-500">{category.description}</p>
                      </div>
                      <span className="text-gray-900 font-semibold">${category.amount.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-cyan-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${category.percentage}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500">{category.percentage}% of total expenses</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="text-sm font-medium text-green-800">💡 Cost Savings Insight</p>
                <p className="text-xs text-green-700 mt-1">
                  Your flat $150/month management fee saves you $1,200+ annually vs. traditional 10% fees!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Transactions */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Latest income and expense transactions</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  Date Range
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <TabsList className="mb-4">
                <TabsTrigger value="all">All Transactions</TabsTrigger>
                <TabsTrigger value="income">Income</TabsTrigger>
                <TabsTrigger value="expense">Expenses</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <div className="space-y-3">
                  {filteredTransactions.map((transaction) => (
                    <div
                      key={transaction.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`p-2 rounded-lg ${
                            transaction.type === "income"
                              ? "bg-green-100 border border-green-200"
                              : "bg-red-100 border border-red-200"
                          }`}
                        >
                          <DollarSign
                            className={`h-4 w-4 ${transaction.type === "income" ? "text-green-600" : "text-red-600"}`}
                          />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{transaction.description}</p>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span>{transaction.tenant || transaction.vendor}</span>
                            <span>•</span>
                            <span>{transaction.property}</span>
                            <span>•</span>
                            <span>{new Date(transaction.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p
                            className={`font-bold text-lg ${
                              transaction.type === "income" ? "text-green-600" : "text-red-600"
                            }`}
                          >
                            {transaction.type === "income" ? "+" : "-"}${transaction.amount.toLocaleString()}
                          </p>
                        </div>
                        <Badge
                          variant={transaction.status === "completed" ? "default" : "secondary"}
                          className={transaction.status === "completed" ? "bg-green-600" : ""}
                        >
                          {transaction.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="income">
                <div className="space-y-3">
                  {filteredTransactions
                    .filter((t) => t.type === "income")
                    .map((transaction) => (
                      <div
                        key={transaction.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-green-50 transition-colors"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="p-2 rounded-lg bg-green-100 border border-green-200">
                            <DollarSign className="h-4 w-4 text-green-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{transaction.description}</p>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <span>{transaction.tenant}</span>
                              <span>•</span>
                              <span>{transaction.property}</span>
                              <span>•</span>
                              <span>{new Date(transaction.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg text-green-600">+${transaction.amount.toLocaleString()}</p>
                          <Badge className="bg-green-600">{transaction.status}</Badge>
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="expense">
                <div className="space-y-3">
                  {filteredTransactions
                    .filter((t) => t.type === "expense")
                    .map((transaction) => (
                      <div
                        key={transaction.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-red-50 transition-colors"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="p-2 rounded-lg bg-red-100 border border-red-200">
                            <DollarSign className="h-4 w-4 text-red-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{transaction.description}</p>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <span>{transaction.vendor}</span>
                              <span>•</span>
                              <span>{transaction.property}</span>
                              <span>•</span>
                              <span>{new Date(transaction.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg text-red-600">-${transaction.amount.toLocaleString()}</p>
                          <Badge variant="secondary">{transaction.status}</Badge>
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Miami Market Insights */}
        <Card className="mt-8 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">🏖️ Miami Market Performance</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-semibold mb-1">Your Portfolio vs. Market</p>
                <p className="text-blue-100">12.8% ROI vs. 9.2% Miami average</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Occupancy Rate</p>
                <p className="text-blue-100">96% vs. 91% market average</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Rent Growth</p>
                <p className="text-blue-100">+8.2% vs. +5.1% market average</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
