"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Plus, Trash2, Eye, ClipboardList } from "lucide-react"

export default function CollaborationPage() {
  const tasks = [
    { id: 1, task: "Check valve in Zone B", assignee: "Ali", farm: "Farm B", status: "open" },
    { id: 2, task: "Replace soil sensor S03", assignee: "Leyla", farm: "Farm B", status: "in progress" },
    { id: 3, task: "Inspect pump pressure", assignee: "Murad", farm: "Farm C", status: "completed" },
    { id: 4, task: "Clean pump filter", assignee: "Nigar", farm: "Farm A", status: "open" },
    { id: 5, task: "Upload irrigation report", assignee: "Elvin", farm: "Farm A", status: "completed" },
    { id: 6, task: "Test backup motor", assignee: "Samir", farm: "Warehouse", status: "open" },
    { id: 7, task: "Inspect main valve", assignee: "Aysel", farm: "Farm C", status: "in progress" },
    { id: 8, task: "Replace valve spring V04", assignee: "Kamran", farm: "Farm B", status: "open" },
    { id: 9, task: "Calibrate NPK sensor", assignee: "Rashad", farm: "Farm C", status: "completed" },
    { id: 10, task: "Check irrigation schedule", assignee: "Fidan", farm: "Farm A", status: "open" },
    { id: 11, task: "Inspect pump seals", assignee: "Orkhan", farm: "Farm B", status: "in progress" }
  ]

  return (
    <div className="min-h-screen bg-white p-8">
      <Card className="rounded-2xl">
        <CardHeader>
          <CardTitle className="text-xl text-green-700">
            Collaboration & Tasks
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="grid grid-cols-4 gap-3">
            <Input placeholder="Task description" />
            <Input placeholder="Assign to" />
            <Input placeholder="Farm" />
            <Button className="bg-green-600 hover:bg-green-700">
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Task</TableHead>
                <TableHead>Assigned To</TableHead>
                <TableHead>Farm</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tasks.map(task => (
                <TableRow key={task.id}>
                  <TableCell>{task.task}</TableCell>
                  <TableCell>{task.assignee}</TableCell>
                  <TableCell>{task.farm}</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        task.status === "completed"
                          ? "bg-green-600"
                          : task.status === "in progress"
                          ? "bg-yellow-500"
                          : "bg-gray-500"
                      }
                    >
                      {task.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right flex justify-end gap-2">
                    <Button size="icon" variant="outline">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="outline">
                      <ClipboardList className="h-4 w-4" />
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