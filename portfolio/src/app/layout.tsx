import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "@/assets/fonts";

export const metadata: Metadata = {
  title: "APROKHORENKODEV",
  description: "Porfolio de Aleksander",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`bg-main-bg ${roboto.className}`} >{children}</body>
    </html>
  );
}
