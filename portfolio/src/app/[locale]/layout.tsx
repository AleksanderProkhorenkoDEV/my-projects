import { NextUIProvider } from "@nextui-org/react";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { roboto } from "@/assets/fonts";
import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "APROKHORENKODEV",
  description: "Porfolio de Aleksander",
};

export default async function LocaleLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string }; }) {

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`bg-main-bg ${roboto.className}`}>
        <NextIntlClientProvider messages={messages}>
          <NextUIProvider>
            {children}
          </NextUIProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}