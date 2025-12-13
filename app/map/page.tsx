import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import WeatherMap from "@/components/WeatherMap";

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