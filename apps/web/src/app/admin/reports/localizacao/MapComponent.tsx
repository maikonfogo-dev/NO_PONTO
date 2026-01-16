"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import Image from "next/image";

// Fix Leaflet marker icons
const icon = L.icon({
  iconUrl: "/images/marker-icon.png",
  shadowUrl: "/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Since we can't easily put images in public right now without download, 
// we can use a CDN or default Leaflet paths if we had the assets.
// A common workaround for React Leaflet missing icons:
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});


interface Punch {
  id: string;
  timestamp: string;
  type: string;
  latitude: number | null;
  longitude: number | null;
  address?: string | null;
  photoUrl?: string | null;
}

interface MapComponentProps {
  punches: Punch[];
}

export default function MapComponent({ punches }: MapComponentProps) {
  // Filter punches with valid coordinates
  const validPunches = punches.filter(p => p.latitude && p.longitude);

  if (validPunches.length === 0) {
    return (
      <div className="h-[500px] w-full bg-slate-100 flex items-center justify-center text-slate-500">
        Nenhum ponto com localização válida neste período.
      </div>
    );
  }

  // Calculate center (average of all points)
  const centerLat = validPunches.reduce((sum, p) => sum + (p.latitude || 0), 0) / validPunches.length;
  const centerLng = validPunches.reduce((sum, p) => sum + (p.longitude || 0), 0) / validPunches.length;

  return (
    <MapContainer 
      center={[centerLat, centerLng]} 
      zoom={13} 
      style={{ height: "500px", width: "100%", borderRadius: "0.5rem" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {validPunches.map((punch) => (
        <Marker 
          key={punch.id} 
          position={[punch.latitude!, punch.longitude!]}
        >
          <Popup>
            <div className="text-sm">
              <p className="font-bold mb-1">{punch.type}</p>
              <p className="mb-1">{format(parseISO(punch.timestamp), "dd/MM/yyyy HH:mm", { locale: ptBR })}</p>
              {punch.address && <p className="text-xs text-slate-500 mb-2">{punch.address}</p>}
              {punch.photoUrl && (
                <div className="mt-2 relative w-full h-32">
                    <Image 
                      src={punch.photoUrl} 
                      alt="Evidência" 
                      fill
                      className="object-cover rounded" 
                    />
                </div>
              )}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
