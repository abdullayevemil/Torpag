"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import dynamic from "next/dynamic";

const WeatherMap = dynamic(() => import("@/components/WeatherMap"), { ssr: false });

export default function Home() {
  return (
    <div className="p-6 space-y-6">
      <Card className="rounded-2xl">
        <CardHeader>
          <CardTitle>Farming Dashboard Map</CardTitle>
        </CardHeader>
        <CardContent>
          <WeatherMap />
        </CardContent>
      </Card>
    </div>
  );
}