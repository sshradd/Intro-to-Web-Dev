import type { Metadata } from 'next';
import { Montserrat, Fraunces } from 'next/font/google';
import './globals.css';

const montSerrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  style: 'normal',
  variable: '--font-montSerrat',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  style: 'normal',
  variable: '--font-fraunces',
});

export const metadata: Metadata = {
  title: 'Todo List App',
  description:
    'This is a todo list app.',
  generator: 'Next.js',
  applicationName: 'Todo List App',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'ToDo List',
    'Productivity',
    'Next.js',
    'Tailwind CSS',
    'Typescript',
  ],
  
  creator: '',
  publisher: '',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montSerrat.variable} ${fraunces.variable}`}>
        {children}
      </body>
    </html>
  );
}