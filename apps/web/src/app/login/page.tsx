"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { authService } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await authService.login(email, password);
      // Salvar token e redirecionar
      localStorage.setItem("auth_token", data.access_token);
      localStorage.setItem("user_data", JSON.stringify(data.user));
      
      if (data.user.role === 'EMPLOYEE') {
        router.push("/mobile");
      } else {
        router.push("/admin");
      }
    } catch (err) {
      setError("Credenciais inválidas. Tente demo@noponto.com / 123456");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">NP</span>
            </div>
          </div>
          <CardTitle className="text-2xl text-center">NO PONTO</CardTitle>
          <CardDescription className="text-center">
            Entre com suas credenciais para acessar
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4">
            {error && (
              <div className="bg-destructive/15 text-destructive text-sm p-3 rounded-md text-center">
                {error}
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input 
                id="password" 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" type="submit" disabled={loading}>
              {loading ? "Entrando..." : "Entrar"}
            </Button>
          </CardFooter>
        </form>
        <div className="px-6 pb-6 text-center text-xs text-muted-foreground">
          <p>Para teste use: demo@noponto.com / 123456</p>
        </div>
      </Card>
    </div>
  );
}
