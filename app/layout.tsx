import Breadcrumb from '@/components/breadcrumb';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import type React from 'react';
import './globals.css';

// Configure Interstate font for body text
const interstate = localFont({
  src: [
    {
      path: '../public/fonts/Interstate.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-interstate',
  display: 'swap',
});

// Configure Lucida font for headers
const lucida = localFont({
  src: [
    {
      path: '../public/fonts/Lucida.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-lucida',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Africa Aviation Innovation Summit 2025',
  description:
    "Investing in Africa's Aviation Future: Unlocking Opportunities for Growth and Transformation through Innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${interstate.variable} ${lucida.variable} font-body`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Breadcrumb />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
