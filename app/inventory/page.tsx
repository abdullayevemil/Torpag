"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Trash2, FileText } from "lucide-react"

export default function InventoryPage() {
  const [filter, setFilter] = useState("all")

  const items = [
    { id: "S01", name: "Soil Sensor", category: "Sensor", status: "active", farm: "Farm A", installed: "2024-01-10" },
    { id: "S02", name: "Temperature Sensor", category: "Sensor", status: "active", farm: "Farm A", installed: "2024-01-12" },
    { id: "S03", name: "Humidity Sensor", category: "Sensor", status: "faulty", farm: "Farm B", installed: "2023-12-01" },
    { id: "S12", name: "NPK Sensor", category: "Sensor", status: "active", farm: "Farm C", installed: "2024-03-12" },

    { id: "M01", name: "Irrigation Motor", category: "Motor", status: "active", farm: "Farm B", installed: "2023-09-18" },
    { id: "M02", name: "Backup Motor", category: "Motor", status: "storage", farm: "Warehouse", installed: "2022-07-22" },
    { id: "M03", name: "Pump Motor", category: "Motor", status: "faulty", farm: "Farm C", installed: "2023-11-02" },

    { id: "V01", name: "Main Water Valve", category: "Valve", status: "active", farm: "Farm A", installed: "2023-05-05" },
    { id: "V04", name: "Zone B Valve", category: "Valve", status: "active", farm: "Farm B", installed: "2023-08-19" },
    { id: "V07", name: "Emergency Valve", category: "Valve", status: "storage", farm: "Warehouse", installed: "2022-06-18" },

    { id: "P01", name: "High Pressure Pump", category: "Pump", status: "active", farm: "Farm C", installed: "2024-01-08" },
    { id: "P04", name: "Drip Irrigation Pump", category: "Pump", status: "faulty", farm: "Farm B", installed: "2023-10-11" },

    { id: "SP10", name: "Rubber Seal Kit", category: "Spare Part", status: "storage", farm: "Warehouse", installed: "2023-04-14" },
    { id: "SP12", name: "Valve Spring", category: "Spare Part", status: "storage", farm: "Warehouse", installed: "2023-06-01" },
    { id: "SP22", name: "Pump Filter", category: "Spare Part", status: "active", farm: "Farm A", installed: "2024-02-20" }
  ]

  const visibleItems =
    filter === "all" ? items : items.filter(i => i.status === filter)

  return (
    <div className="min-h-screen bg-white p-8">
      <Card className="rounded-2xl">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl text-green-700">
            Inventory Management
          </CardTitle>
          <div className="flex gap-3">
            <Select defaultValue="all" onValueChange={setFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="faulty">Faulty</SelectItem>
                <SelectItem value="storage">In Storage</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-green-600 hover:bg-green-700">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Farm</TableHead>
                <TableHead>Installed</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {visibleItems.map(item => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        item.status === "active"
                          ? "bg-green-600"
                          : item.status === "faulty"
                          ? "bg-red-600"
                          : "bg-gray-500"
                      }
                    >
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{item.farm}</TableCell>
                  <TableCell>{item.installed}</TableCell>
                  <TableCell className="text-right flex justify-end gap-2">
                    <Button size="icon" variant="outline">
                      <FileText className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}