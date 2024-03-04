import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';
import { Toaster } from './components/ui/sonner';
import { supabaseServer } from '@/lib/supabase/server';

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
      <body className={`${inter.className} bg-[#f4f5f6]`}>
        <Navbar user={user} />
        <main>{children}</main>
        {/* <Footer /> */}
        <Toaster richColors position="bottom-center" />
      </body>
    </html>
  );
}
