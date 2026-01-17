'use client';

import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { format } from 'date-fns';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface Point {
    id: string;
    latitude: number;
    longitude: number;
    timestamp: string;
    type: string;
    distanceFromLocationMeters?: number;
    address?: string;
    employee: {
        name: string;
        position: string;
    };
}

interface LocationMapProps {
    points: Point[];
}

export default function LocationMap({ points }: LocationMapProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const container = containerRef.current;

        return () => {
            if (container) {
                const containers = container.getElementsByClassName('leaflet-container');
                Array.from(containers).forEach((element) => {
                    const anyElement: any = element;
                    if (anyElement && anyElement._leaflet_id) {
                        anyElement._leaflet_id = null;
                    }
                });
            }
        };
    }, []);

    const center = points.length > 0 
        ? [points[0].latitude, points[0].longitude] as [number, number]
        : [-23.55052, -46.633309] as [number, number]; // Default SP (or company HQ)

    return (
        <div ref={containerRef}>
            <MapContainer
                center={center}
                zoom={13}
                style={{ height: '500px', width: '100%', borderRadius: '0.5rem' }}
            >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {points.map(point => (
                <Marker key={point.id} position={[point.latitude, point.longitude]}>
                    <Popup>
                        <div className="text-sm">
                            <strong>{point.employee.name}</strong><br/>
                            {point.employee.position}<br/>
                            <hr className="my-1"/>
                            Tipo: <strong>{point.type}</strong><br/>
                            Hora: {format(new Date(point.timestamp), 'HH:mm')}<br/>
                            {typeof point.distanceFromLocationMeters === 'number' && (
                              <p
                                className={`text-[11px] mt-1 ${
                                  point.distanceFromLocationMeters < 10
                                    ? 'text-green-600'
                                    : point.distanceFromLocationMeters <= 50
                                    ? 'text-yellow-600'
                                    : 'text-red-600'
                                }`}
                              >
                                {point.distanceFromLocationMeters} m do posto
                              </p>
                            )}
                            <span className="text-xs text-muted-foreground block mt-1 max-w-[200px] truncate" title={point.address || ''}>
                                {point.address || 'Sem endereço'}
                            </span>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
        </div>
    );
}
