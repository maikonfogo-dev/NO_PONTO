import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NO PONTO — Controle de jornada por contrato",
  description: "O NO PONTO é um sistema de ponto eletrônico feito para empresas terceirizadas que precisam de controle, transparência e segurança jurídica.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
