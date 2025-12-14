"use client";

import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { Droplet, Zap, AlertTriangle, Leaf, Calendar } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AnalyticsPage: React.FC = () => {
  const [selectedFarm, setSelectedFarm] = useState("Farm A");
  const [startDate, setStartDate] = useState("2025-12-01");
  const [endDate, setEndDate] = useState("2025-12-14");

  // Mock data
  const waterUsageData = [
    { date: "2025-12-01", usage: 1200, rainfall: 30 },
    { date: "2025-12-02", usage: 1100, rainfall: 20 },
    { date: "2025-12-03", usage: 1300, rainfall: 10 },
    { date: "2025-12-04", usage: 1250, rainfall: 25 },
    { date: "2025-12-05", usage: 1400, rainfall: 0 },
    { date: "2025-12-06", usage: 1350, rainfall: 15 },
    { date: "2025-12-07", usage: 1280, rainfall: 5 },
  ];

  const energyData = [
    { date: "2025-12-01", solar: 500, grid: 300 },
    { date: "2025-12-02", solar: 600, grid: 250 },
    { date: "2025-12-03", solar: 550, grid: 280 },
    { date: "2025-12-04", solar: 580, grid: 310 },
    { date: "2025-12-05", solar: 620, grid: 290 },
    { date: "2025-12-06", solar: 610, grid: 270 },
    { date: "2025-12-07", solar: 630, grid: 300 },
  ];

  const soilData = [
    { date: "2025-12-01", moisture: 35, temperature: 22, humidity: 60 },
    { date: "2025-12-02", moisture: 37, temperature: 23, humidity: 58 },
    { date: "2025-12-03", moisture: 34, temperature: 21, humidity: 62 },
    { date: "2025-12-04", moisture: 36, temperature: 22, humidity: 61 },
    { date: "2025-12-05", moisture: 38, temperature: 24, humidity: 57 },
    { date: "2025-12-06", moisture: 33, temperature: 23, humidity: 59 },
    { date: "2025-12-07", moisture: 35, temperature: 22, humidity: 60 },
  ];

  const alertsData = [
    { type: "Water", count: 5 },
    { type: "Energy", count: 2 },
    { type: "Soil", count: 3 },
    { type: "Pest", count: 1 },
  ];

  const farmEfficiency = [
    { farm: "Farm A", efficiency: 85 },
    { farm: "Farm B", efficiency: 72 },
    { farm: "Farm C", efficiency: 90 },
    { farm: "Farm D", efficiency: 78 },
  ];

  // Color palettes
  const lineColors = ["#34D399", "#10B981", "#3B82F6"]; // green, teal, blue
  const barColors = ["#FBBF24", "#F87171"]; // yellow, red
  const pieColors = ["#34D399", "#60A5FA", "#FBBF24", "#F87171"]; // green, blue, yellow, red

  return (
    <div className="p-6 space-y-6 bg-white min-h-screen">
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
        <Select
          value={selectedFarm}
          onValueChange={(val) => setSelectedFarm(val)}
        >
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Select Farm" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Farm A">Farm A</SelectItem>
            <SelectItem value="Farm B">Farm B</SelectItem>
            <SelectItem value="Farm C">Farm C</SelectItem>
            <SelectItem value="Farm D">Farm D</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex gap-2 items-center">
          <Calendar className="w-5 h-5 text-gray-600" />
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1"
          />
          <span className="mx-1">to</span>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1"
          />
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="rounded-xl shadow">
          <CardHeader className="flex items-center gap-2">
            <Droplet className="w-5 h-5 text-green-500" />
            <CardTitle>Water Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-semibold">1,280 L/day</p>
          </CardContent>
        </Card>

        <Card className="rounded-xl shadow">
          <CardHeader className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-green-500" />
            <CardTitle>Energy Consumption</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-semibold">1,200 kWh</p>
          </CardContent>
        </Card>

        <Card className="rounded-xl shadow">
          <CardHeader className="flex items-center gap-2">
            <Leaf className="w-5 h-5 text-green-500" />
            <CardTitle>Farm Efficiency</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-semibold">85%</p>
          </CardContent>
        </Card>

        <Card className="rounded-xl shadow">
          <CardHeader className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-green-500" />
            <CardTitle>Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-semibold">11</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Water Usage */}
        <Card className="rounded-xl shadow">
          <CardHeader>
            <CardTitle>Water Usage Analytics</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={waterUsageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="usage" stroke={lineColors[0]} strokeWidth={2} activeDot={{ r: 5 }} />
                <Bar dataKey="rainfall" fill={barColors[0]} barSize={12} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Energy Consumption */}
        <Card className="rounded-xl shadow">
          <CardHeader>
            <CardTitle>Energy Consumption</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={energyData} stackOffset="expand">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="solar" stackId="a" fill={barColors[0]} />
                <Bar dataKey="grid" stackId="a" fill={barColors[1]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Soil & Environment */}
        <Card className="rounded-xl shadow">
          <CardHeader>
            <CardTitle>Soil & Environment</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={soilData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="moisture" stroke={lineColors[0]} strokeWidth={2} />
                <Line type="monotone" dataKey="temperature" stroke={lineColors[1]} strokeWidth={2} />
                <Line type="monotone" dataKey="humidity" stroke={lineColors[2]} strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Alerts Overview */}
        <Card className="rounded-xl shadow">
          <CardHeader>
            <CardTitle>Alerts Overview</CardTitle>
          </CardHeader>
          <CardContent className="h-64 flex flex-col md:flex-row items-center justify-around">
            <ResponsiveContainer width="50%" height={200}>
              <PieChart>
                <Pie
                  data={alertsData}
                  dataKey="count"
                  nameKey="type"
                  cx="50%"
                  cy="50%"
                  outerRadius={50}
                  label={({ name }) => name}
                  labelLine={false}
                >
                  {alertsData.map((entry, index) => (
                    <Cell key={index} fill={pieColors[index % pieColors.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <ResponsiveContainer width="50%" height={200}>
              <BarChart data={alertsData}>
                <XAxis dataKey="type" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill={pieColors[1]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Farm Efficiency */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {farmEfficiency.map((farm) => (
          <Card key={farm.farm} className="rounded-xl shadow flex flex-col items-center justify-center p-6">
            <CardTitle>{farm.farm}</CardTitle>
            <div className="relative w-24 h-24">
              <svg viewBox="0 0 36 36" className="w-full h-full">
                <path
                  className="text-gray-200"
                  strokeWidth="3"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-green-500"
                  strokeWidth="3"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  strokeDasharray={`${farm.efficiency}, 100`}
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text
                  x="18"
                  y="20.35"
                  className="text-xs font-semibold text-black"
                  textAnchor="middle"
                >
                  {farm.efficiency}%
                </text>
              </svg>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AnalyticsPage;