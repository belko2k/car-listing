import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar/Navbar';

import { Toaster } from './components/ui/sonner';
import { supabaseServer } from '@/lib/supabase/server';
import { Footer } from './components/Footer';
import LoginModal from './components/modals/LoginModal';
import RegisterModal from './components/modals/RegisterModal';
import ListingModal from './components/modals/ListingModal';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Infinite Drive',
  description: 'Web App created with Nextjs for car listings',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = supabaseServer();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#f4f5f6] flex flex-col min-h-[100vh]`}
      >
        <LoginModal />
        <RegisterModal />
        <ListingModal />
        <Navbar user={user} />
        <main>{children}</main>
        <Footer />
        <Toaster richColors position="bottom-center" />
      </body>
    </html>
  );
}
