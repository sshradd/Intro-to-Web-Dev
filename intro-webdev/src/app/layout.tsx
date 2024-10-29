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
  title: 'Frontend Mentor | Product preview card component',
  description:
    'A responsive product preview card component built for a Frontend Mentor challenge.',
  generator: 'Next.js',
  applicationName: 'Product Preview Card Component',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Frontend Mentor Challenge',
    'Product preview card component',
    'Next.js',
    'Tailwind CSS',
    'Typescript',
  ],
  authors: [
    {
      name: 'jaceleedev',
      url: 'https://github.com/jaceleedev/product-preview-card-component.git',
    },
  ],
  creator: 'jaceleedev',
  publisher: 'jaceleedev',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    'https://product-preview-card-component-lake-two.vercel.app'
  ),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Frontend Mentor | Product preview card component',
    description:
      'A responsive product preview card component built for a Frontend Mentor challenge.',
    url: 'https://product-preview-card-component-lake-two.vercel.app',
    siteName: 'Frontend Mentor | Product preview card component',
    images: [
      {
        url: 'https://res.cloudinary.com/dz209s6jk/image/upload/v1658144705/Challenges/fvv3coes3vm7ndnw6tml.jpg',
        width: 1440,
        height: 800,
        alt: 'Product preview card component desktop preview',
      },
      {
        url: 'https://res.cloudinary.com/dz209s6jk/image/upload/v1658144705/Challenges/i92pu1jsyjvdrv06rgbn.jpg',
        width: 375,
        height: 667,
        alt: 'Product preview card component mobile preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frontend Mentor | Product preview card component',
    description:
      'A responsive product preview card component built for a Frontend Mentor challenge.',
    images: [
      'https://res.cloudinary.com/dz209s6jk/image/upload/v1658144705/Challenges/fvv3coes3vm7ndnw6tml.jpg',
    ],
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