import '@/app/globals.css';
import Providers from '@/app/providers';
import Header from '@/components/Header';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import { ReactNode } from 'react';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Trello Appwrite Clone',
  description: 'NextJS 13.4 course program',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={nunito.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
