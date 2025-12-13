"use client";

import { MapContainer, TileLayer, LayersControl, CircleMarker, Tooltip } from "react-leaflet";
import { LatLngExpression } from "leaflet";

const { Overlay } = LayersControl;

// Mock overlay data for farming
const precipitationData = [
  { position: [40.5, 49.8], value: 12 },
  { position: [40.3, 50.0], value: 25 },
  { position: [40.4, 49.9], value: 8 },
];

const temperatureData = [
  { position: [40.5, 49.8], value: 28 },
  { position: [40.3, 50.0], value: 32 },
  { position: [40.4, 49.9], value: 25 },
];

const windData = [
  { position: [40.5, 49.8], value: 15 },
  { position: [40.3, 50.0], value: 20 },
  { position: [40.4, 49.9], value: 10 },
];

export default function WeatherMap() {
  return (
    <MapContainer
      center={[40.4093, 49.8671]}
      zoom={7}
      scrollWheelZoom={true}
      className="w-full h-[700px] rounded-2xl shadow-xl"
    >
      <LayersControl position="topright">
        {/* Base Map */}
        <Overlay checked name="Base Map">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
        </Overlay>

        {/* Precipitation Overlay */}
        <Overlay checked name="Precipitation (mm)">
          {precipitationData.map((p, idx) => (
            <CircleMarker
              key={idx}
              center={p.position as LatLngExpression}
              radius={p.value / 2}
              pathOptions={{ color: "#1E90FF", fillColor: "#1E90FF", fillOpacity: 0.4 }}
            >
              <Tooltip direction="top" offset={[0, -10]} opacity={0.9} permanent>
                🌧 {p.value} mm
              </Tooltip>
            </CircleMarker>
          ))}
        </Overlay>

        {/* Temperature Overlay */}
        <Overlay name="Temperature (°C)">
          {temperatureData.map((t, idx) => (
            <CircleMarker
              key={idx}
              center={t.position as LatLngExpression}
              radius={t.value / 3}
              pathOptions={{ color: "#FF4500", fillColor: "#FF6347", fillOpacity: 0.4 }}
            >
              <Tooltip direction="top" offset={[0, -10]} opacity={0.9} permanent>
                🌡 {t.value} °C
              </Tooltip>
            </CircleMarker>
          ))}
        </Overlay>

        {/* Wind Overlay */}
        <Overlay name="Wind Speed (km/h)">
          {windData.map((w, idx) => (
            <CircleMarker
              key={idx}
              center={w.position as LatLngExpression}
              radius={w.value / 2}
              pathOptions={{ color: "#32CD32", fillColor: "#32CD32", fillOpacity: 0.4 }}
            >
              <Tooltip direction="top" offset={[0, -10]} opacity={0.9} permanent>
                💨 {w.value} km/h
              </Tooltip>
            </CircleMarker>
          ))}
        </Overlay>
      </LayersControl>
    </MapContainer>
  );
}