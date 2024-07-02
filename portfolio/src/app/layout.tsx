import ProviderNextUI from "@/Components/Providers/nextui-provider";
import Menu from "@/Components/UI/navbar";
import { montserrat } from "@/lib/Fonts";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "APROKHORENKODEV",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`bg-bg-grey text-color-text ${montserrat.className}`}>
        <ProviderNextUI>
          <Menu />
          {children}
        </ProviderNextUI>
      </body>
    </html>
  );
}
