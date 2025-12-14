"use client";

import {
  DollarSign,
  Tractor,
  Droplets,
  Leaf,
  MapPin,
  PieChart as PieIcon,
  ClipboardList,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  YAxis,
  Legend,
  XAxis,
  CartesianGrid,
} from "recharts";

const stats = [
  {
    title: "Revenue",
    amount: "$12,500",
    desc: "This month",
    icon: DollarSign,
    bg: "bg-yellow-500/15",
  },
  {
    title: "Active Fields",
    amount: "18",
    desc: "Currently monitored",
    icon: Leaf,
    bg: "bg-green-500/15",
  },
  {
    title: "Water Usage",
    amount: "32%",
    desc: "Compared to last week",
    icon: Droplets,
    bg: "bg-blue-500/15",
  },
  {
    title: "Connected devices",
    amount: "6",
    desc: "Operational units",
    icon: Tractor,
    bg: "bg-red-500/15",
  },
];

const revenueData = [
  { month: "Jan", value: 4000 },
  { month: "Feb", value: 3000 },
  { month: "Mar", value: 5000 },
  { month: "Apr", value: 4200 },
  { month: "May", value: 6100 },
];

const pieData = [
  { name: "Harvesting", value: 40 },
  { name: "Irrigation", value: 25 },
  { name: "Planting", value: 20 },
  { name: "Maintenance", value: 15 },
];

const COLORS = ["green", "purple", "red", "orange"];

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-[7fr_3fr]">
      {/* LEFT COLUMN */}
      <div className="flex flex-col gap-6">
        {/* Stats cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((s) => (
            <Card key={s.title} className="rounded-2xl w-full">
              <CardContent className="flex items-center justify-between p-5 gap-2">
                <div>
                  <p className="text-sm text-black/60">{s.title}</p>
                  <p className="text-2xl font-bold text-black">{s.amount}</p>
                  <p className="text-xs text-black/40">{s.desc}</p>
                </div>
                <div className={`rounded-xl p-3 ${s.bg}`}>
                  <s.icon className="h-5 w-5 text-black" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Farm Map */}
        <Card className="rounded-2xl p-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <MapPin className="h-4 w-4" /> Farm Map Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="h-[300px] overflow-hidden rounded-xl p-0">
            {/* Leaflet placeholder */}
            <iframe src="leaflet-map.html" className="h-full w-full border-0" sandbox="allow-scripts allow-same-origin allow-forms allow-popups"/>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-lg">
          <CardHeader>
            <CardTitle className="text-base font-semibold">
              Revenue Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={revenueData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                {/* Grid */}
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

                {/* Axes */}
                <XAxis
                  dataKey="month"
                  tick={{ fill: "#374151", fontSize: 12 }}
                />
                <YAxis tick={{ fill: "#374151", fontSize: 12 }} />

                {/* Tooltip */}
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#f9fafb",
                    borderRadius: "8px",
                  }}
                  cursor={{ stroke: "#16a34a", strokeWidth: 1 }}
                />

                {/* Legend */}

                {/* Area */}
                <Area
                  type="linear" // straight lines instead of smooth curve
                  dataKey="value"
                  stroke="#16a34a"
                  fill="#16a34a"
                  fillOpacity={0.15}
                  activeDot={{ r: 6, stroke: "#16a34a", strokeWidth: 2 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* RIGHT COLUMN */}
      <div className="flex flex-col gap-6">
        {/* Pie chart */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <PieIcon className="h-4 w-4" /> Work Distribution
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <div className="relative h-48 w-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    innerRadius={60}
                    outerRadius={90}
                    dataKey="value"
                  >
                    {pieData.map((_, i) => (
                      <Cell key={i} fill={COLORS[i]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
                100%
              </div>
            </div>

            <div className="w-full space-y-2 text-sm">
              {pieData.map((p, i) => (
                <div key={p.name} className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: COLORS[i] }}
                    />
                    {p.name}
                  </span>
                  <span className="text-black/60">{p.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Jobs */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <ClipboardList className="h-4 w-4" /> Recent Jobs
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              "Planted wheat in Field A",
              "Irrigation system check",
              "Harvested corn Field C",
            ].map((job) => (
              <div
                key={job}
                className="flex items-center gap-3 rounded-xl bg-black/5 p-3"
              >
                <div className="rounded-lg bg-green-500/20 p-2">
                  <Tractor className="h-4 w-4" />
                </div>
                <span className="text-sm text-black/70">{job}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
