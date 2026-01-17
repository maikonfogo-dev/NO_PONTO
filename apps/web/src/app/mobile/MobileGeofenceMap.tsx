"use client";

import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Circle, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

interface MobileGeofenceMapProps {
  employeeCoords: { lat: number; long: number; acc: number } | null;
  workLocation?: {
    latitude: number | null;
    longitude: number | null;
    radius?: number | null;
  } | null;
}

export default function MobileGeofenceMap({
  employeeCoords,
  workLocation,
}: MobileGeofenceMapProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    return () => {
      if (container) {
        const containers = container.getElementsByClassName("leaflet-container");
        Array.from(containers).forEach((element) => {
          const anyElement: any = element;
          if (anyElement && anyElement._leaflet_id) {
            anyElement._leaflet_id = null;
          }
        });
      }
    };
  }, []);

  const defaultCenter: [number, number] = [-23.55052, -46.633309];

  const workLat =
    typeof workLocation?.latitude === "number" ? workLocation.latitude : null;
  const workLng =
    typeof workLocation?.longitude === "number" ? workLocation.longitude : null;

  let center: [number, number] = defaultCenter;

  if (workLat !== null && workLng !== null) {
    center = [workLat, workLng];
  } else if (employeeCoords) {
    center = [employeeCoords.lat, employeeCoords.long];
  }

  const radius =
    typeof workLocation?.radius === "number" && workLocation.radius > 0
      ? workLocation.radius
      : 50;

  const hasEmployeePoint =
    !!employeeCoords &&
    typeof employeeCoords.lat === "number" &&
    typeof employeeCoords.long === "number";

  const hasWorkLocationPoint = workLat !== null && workLng !== null;

  let distanceMeters: number | null = null;

  if (hasEmployeePoint && hasWorkLocationPoint) {
    const R = 6371e3;
    const φ1 = (employeeCoords!.lat * Math.PI) / 180;
    const φ2 = (workLat as number * Math.PI) / 180;
    const Δφ = ((workLat as number - employeeCoords!.lat) * Math.PI) / 180;
    const Δλ = ((workLng as number - employeeCoords!.long) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    distanceMeters = Math.round(R * c);
  }

  const distanceColor =
    distanceMeters === null
      ? "text-slate-500"
      : distanceMeters < 10
      ? "text-green-600"
      : distanceMeters <= 50
      ? "text-yellow-600"
      : "text-red-600";

  return (
    <div ref={containerRef}>
      <MapContainer
        center={center}
        zoom={15}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {hasWorkLocationPoint && (
          <>
            <Circle
              center={[workLat as number, workLng as number]}
              radius={radius}
              pathOptions={{
                color: "#16A34A",
                fillColor: "#16A34A",
                fillOpacity: 0.15,
              }}
            />
            <Marker position={[workLat as number, workLng as number]}>
              <Popup>
                <div className="text-xs">
                  <p className="font-semibold">Posto de Trabalho</p>
                  {typeof radius === "number" && (
                    <p className="text-[11px] text-slate-500">
                      Raio configurado: {radius} m
                    </p>
                  )}
                </div>
              </Popup>
            </Marker>
          </>
        )}
        {hasEmployeePoint && (
          <Marker position={[employeeCoords!.lat, employeeCoords!.long]}>
            <Popup>
              <div className="text-xs">
                <p className="font-semibold">Sua posição aproximada</p>
                {distanceMeters !== null && (
                  <p className={`text-[11px] mt-1 ${distanceColor}`}>
                    {distanceMeters} m do posto
                  </p>
                )}
              </div>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}
