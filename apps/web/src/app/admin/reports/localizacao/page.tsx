"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";
import dynamic from "next/dynamic";
import { api } from "@/lib/api";

// Dynamically import the map component to avoid SSR issues with Leaflet
const LocationMap = dynamic(
  () => import("@/components/reports/LocationMap"),
  { 
    ssr: false,
    loading: () => <div className="h-[600px] w-full flex items-center justify-center bg-muted/20">Carregando mapa...</div>
  }
);

interface LocationPoint {
  id: string;
  latitude: number;
  longitude: number;
  timestamp: string;
  type: string;
  employee: {
    name: string;
    cpf: string;
    position: string;
  };
}

export default function LocationReportPage() {
  const [points, setPoints] = useState<LocationPoint[]>([]);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState<string>(new Date().toISOString().split("T")[0]);
  const [employeeId, setEmployeeId] = useState("");

  const fetchPoints = useCallback(async () => {
    setLoading(true);
    try {
      // Build query string
      const params = new URLSearchParams();
      if (date) params.append("date", date);
      if (employeeId) params.append("employeeId", employeeId);

      const response = await api.get(`/reports/locations?${params.toString()}`);
      setPoints(response.data);
    } catch (error) {
      console.error("Erro ao buscar pontos de localização:", error);
    } finally {
      setLoading(false);
    }
  }, [date, employeeId]);

  useEffect(() => {
    fetchPoints();
  }, [fetchPoints]); // Initial load

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Localização & Evidências</h2>
          <p className="text-muted-foreground">
            Visualize os registros de ponto no mapa e identifique inconsistências de local.
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Filtros</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="space-y-2">
              <Label htmlFor="date">Data</Label>
              <Input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="employeeId">ID do Colaborador (Opcional)</Label>
              <Input
                id="employeeId"
                placeholder="Filtrar por ID..."
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
              />
            </div>

            <Button onClick={fetchPoints} disabled={loading} className="w-full">
              {loading ? "Carregando..." : (
                <>
                  <Search className="mr-2 h-4 w-4" />
                  Filtrar
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          <LocationMap points={points} />
        </CardContent>
      </Card>
    </div>
  );
}
