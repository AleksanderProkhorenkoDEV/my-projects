import { getMessages, getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import Footer from '@/components/footer/footer';
import Return from '@/components/return';
import Nav from '@/components/nav';
import { locales } from '@/config';
import { ReactNode } from 'react';
import { Toaster } from 'sonner';


type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale }
}: Omit<Props, 'children'>) {
  const t = await getTranslations({ locale, namespace: 'LocaleLayout' });

  return {
    title: t('title')
  };
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html className="h-full bg-main-bg" lang={locale}>
      <body className={'flex h-full flex-col'}>
        <NextIntlClientProvider messages={messages}>
          <Nav />
          <Toaster position="bottom-right"  richColors/>
          {children}
          <Return />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}