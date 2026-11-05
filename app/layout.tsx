import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import './globals.css';
export const metadata: Metadata = {
  title: 'Airbnb UI · Find your next stay',
  description: 'A 4Geeks student interface study with fictional stays and demo bookings.',
};
const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="en"><body className="font-sans">
    <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-4">Skip to content</a>
    <Navbar />{children}<Footer />
  </body></html>
);
export default RootLayout;
