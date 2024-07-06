import ProviderNextUI from "@/Components/Providers/nextui-provider";
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
      <body>
        <ProviderNextUI>
          {children}
        </ProviderNextUI>
      </body>
    </html>
  );
}
