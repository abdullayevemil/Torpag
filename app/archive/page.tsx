"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Trash, Edit, Plus } from "lucide-react";

// Pre-filled mock logs
const MOCK_LOGS = [
  { id: 1, type: "Sensor data history", message: "Temperature sensor reading 24°C", date: "2025-12-12T08:12:00" },
  { id: 2, type: "Motor ON/OFF logs", message: "Motor started at 08:15", date: "2025-12-12T08:15:00" },
  { id: 3, type: "Water usage logs", message: "Water pump 30 liters", date: "2025-12-12T08:20:00" },
  { id: 4, type: "Energy consumption logs", message: "Energy consumed 5kWh", date: "2025-12-12T08:30:00" },
  { id: 5, type: "Alert history", message: "Low humidity alert triggered", date: "2025-12-12T08:40:00" },
  { id: 6, type: "User activity logs", message: "Admin logged in", date: "2025-12-12T08:50:00" },
  { id: 7, type: "Fertilizer logs", message: "Added 10kg fertilizer", date: "2025-12-12T09:00:00" },
  { id: 8, type: "Irrigation logs", message: "Irrigation started in field 3", date: "2025-12-12T09:15:00" },
  { id: 9, type: "Soil humidity logs", message: "Humidity at 35%", date: "2025-12-12T09:30:00" },
  { id: 10, type: "Temperature logs", message: "Ambient temp 25°C", date: "2025-12-12T09:45:00" },
  { id: 11, type: "Light exposure logs", message: "Sunlight 6h", date: "2025-12-12T10:00:00" },
  { id: 12, type: "Pesticide usage logs", message: "Pesticide applied to field 2", date: "2025-12-12T10:15:00" },
  { id: 13, type: "Equipment maintenance logs", message: "Tractor serviced", date: "2025-12-12T10:30:00" },
  { id: 14, type: "Crop growth logs", message: "Corn height 1.2m", date: "2025-12-12T10:45:00" },
  { id: 15, type: "Weather logs", message: "Rainfall 5mm", date: "2025-12-12T11:00:00" },
  { id: 16, type: "Inventory logs", message: "Seeds stock updated", date: "2025-12-12T11:15:00" },
  { id: 17, type: "Revenue logs", message: "Sold 20kg produce", date: "2025-12-12T11:30:00" },
  { id: 18, type: "Expense logs", message: "Bought fertilizer 200 AZN", date: "2025-12-12T11:45:00" },
  { id: 19, type: "Admin actions", message: "New user added", date: "2025-12-12T12:00:00" },
  { id: 20, type: "System errors", message: "Pump disconnected", date: "2025-12-12T12:15:00" },
];

export default function FarmingLogsPage() {
  const [logs, setLogs] = useState(MOCK_LOGS);

  const usedSpace = 400; // in MB (mock)
  const maxSpace = 1024; // 1GB

  const handleAdd = () => {
    const newLog = {
      id: logs.length + 1,
      type: "Sensor data history",
      message: `New log entry #${logs.length + 1}`,
      date: new Date().toISOString(),
    };
    setLogs([newLog, ...logs]);
  };

  const handleEdit = (id: number) => {
    const edited = logs.map((log) =>
      log.id === id ? { ...log, message: log.message + " (edited)" } : log
    );
    setLogs(edited);
  };

  const handleRemove = (id: number) => {
    setLogs(logs.filter((log) => log.id !== id));
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Archive & Logs</h1>
        <Button onClick={handleAdd}>
          <Plus className="mr-2 h-4 w-4" /> Add Log
        </Button>
      </div>

      {/* Storage Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Storage Usage</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between mb-2">
            <span>{usedSpace} MB used</span>
            <span>{maxSpace - usedSpace} MB free</span>
          </div>
          <Progress value={(usedSpace / maxSpace) * 100} className="h-4 rounded-lg" />
        </CardContent>
      </Card>

      {/* Filters & Export */}
      <Card>
        <CardHeader>
          <CardTitle>Filters & Export</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col sm:flex-row sm:items-end sm:space-x-4 space-y-4 sm:space-y-0">
          <div>
            <Label htmlFor="from">From</Label>
            <Input type="date" id="from" />
          </div>
          <div>
            <Label htmlFor="to">To</Label>
            <Input type="date" id="to" />
          </div>
          <Button>Export CSV</Button>
          <Button>Export PDF</Button>
        </CardContent>
      </Card>

      {/* Logs Table */}
      <Card>
        <CardHeader>
          <CardTitle>Logs ({logs.length})</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {logs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell>{log.id}</TableCell>
                  <TableCell>{log.type}</TableCell>
                  <TableCell>{log.message}</TableCell>
                  <TableCell>{new Date(log.date).toLocaleString()}</TableCell>
                  <TableCell className="space-x-2">
                    <Button variant="outline" size="sm" onClick={() => handleEdit(log.id)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="destructive" size="sm" onClick={() => handleRemove(log.id)}>
                      <Trash className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}