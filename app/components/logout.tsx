'use client';
import { supabaseBrowser } from '@/lib/supabase/client';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

const LogoutBtn = () => {
  const router = useRouter();
  const handleLogout = async () => {
    const supabase = supabaseBrowser();
    await supabase.auth.signOut();
    router.refresh();
  };
  return <Button onClick={handleLogout}>Log out</Button>;
};

export default LogoutBtn;
