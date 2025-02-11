import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MaximBarbs',
  description: 'Men Barber Shop in London',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`{inter.className} `}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
