import Navbar from '@/components/ui/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/ui/Footer';
import IndexPage from '@/components/metaData/Head';
import { SessionProvider } from 'next-auth/react';
import { ReduxProvider } from '@/store/provider';

export const metadata: Metadata = {
  title: 'Versatility - Bla bkla bka',
  description: 'Больше, чем просто блог'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
