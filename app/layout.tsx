import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BLstudio — Diseño y desarrollo web",
  description:
    "Diseñamos y desarrollamos sitios web modernos, rápidos y profesionales para empresas que quieren crecer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}