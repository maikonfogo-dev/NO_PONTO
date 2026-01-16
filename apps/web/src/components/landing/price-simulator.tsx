"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface PriceSimulatorProps {
  onRequestDemo?: () => void;
}

export function PriceSimulator({ onRequestDemo }: PriceSimulatorProps) {
  const [employees, setEmployees] = useState<number>(50)
  const [planPrice, setPlanPrice] = useState<number>(3.90) // Default to Basic

  const calculatePrice = (count: number, price: number) => {
    return count * price
  }

  const total = calculatePrice(employees, planPrice)

  return (
    <Card className="w-full max-w-md mx-auto border-2 border-primary/20 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Simule seu Preço</CardTitle>
        <CardDescription className="text-center">
          Valor Mensal = Nº de Colaboradores × Plano
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="employees">Quantidade de Colaboradores</Label>
            <Input 
              id="employees" 
              type="number" 
              min="1" 
              value={employees} 
              onChange={(e) => setEmployees(Number(e.target.value))}
              className="text-lg"
              placeholder="Nº de colaboradores"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="plan">Escolha o Plano</Label>
            <Select 
              value={planPrice.toString()} 
              onValueChange={(value) => setPlanPrice(Number(value))}
            >
              <SelectTrigger id="plan" className="text-lg">
                <SelectValue placeholder="Selecione o plano" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3.90">Básico (R$ 3,90/colab)</SelectItem>
                <SelectItem value="6.90">Profissional (R$ 6,90/colab)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-lg text-center space-y-2 border">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Valor Mensal Estimado</p>
          <div className="flex items-center justify-center text-4xl font-bold text-green-600">
            <span className="text-xl mr-1">R$</span>
            {total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
        </div>
        
        <div className="text-center text-sm text-muted-foreground italic">
          &quot;Você paga apenas pelos colaboradores ativos no sistema.&quot;
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full text-lg h-12 bg-green-600 hover:bg-green-700" 
          size="lg"
          onClick={onRequestDemo}
        >
          Solicitar Demonstração
        </Button>
      </CardFooter>
    </Card>
  )
}
