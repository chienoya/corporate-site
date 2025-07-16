import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Breadcrumb from './components/Breadcrumb';
import StructuredData from './components/StructuredData';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '株式会社知恵乃屋 - ITシステム受託開発',
  description:
    'ソフトウェア及びAIの受託開発、コンサルティング、AIサービスの企画・開発を行う株式会社知恵乃屋のコーポレートサイト',
  keywords: 'ソフトウェア開発, AI開発, 受託開発, コンサルティング, 東京, 千代田区',
  authors: [{ name: '株式会社知恵乃屋' }],
  creator: '株式会社知恵乃屋',
  publisher: '株式会社知恵乃屋',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://chienoya.co.jp',
    siteName: '株式会社知恵乃屋',
    title: '株式会社知恵乃屋 - ITシステム受託開発',
    description:
      'ソフトウェア及びAIの受託開発、コンサルティング、AIサービスの企画・開発を行う株式会社知恵乃屋のコーポレートサイト',
  },
  twitter: {
    card: 'summary_large_image',
    title: '株式会社知恵乃屋 - ITシステム受託開発',
    description:
      'ソフトウェア及びAIの受託開発、コンサルティング、AIサービスの企画・開発を行う株式会社知恵乃屋のコーポレートサイト',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <head>
        <link rel='canonical' href='https://chienoya.co.jp' />
        <StructuredData />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <Breadcrumb />
        <main className='min-h-screen'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
