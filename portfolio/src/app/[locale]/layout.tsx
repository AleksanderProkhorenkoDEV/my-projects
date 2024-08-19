import { Providers } from '../../Providers/next-ui/provider';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { montserrat } from "@/assets/fonts";
import type { Metadata } from "next";
import Nav from '@/components/nav';
import './globals.css';

export const metadata: Metadata = {
  title: "APROKHORENKODEV",
  description: "Porfolio de Aleksander",
};

export default async function LocaleLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string }; }) {

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`bg-main-bg ${montserrat.className} min-h-screen` }>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <Nav />
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}