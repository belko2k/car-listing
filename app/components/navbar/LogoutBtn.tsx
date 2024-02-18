import { supabaseBrowser } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const LogoutBtn = () => {
  const router = useRouter();
  const handleLogout = async () => {
    const supabase = supabaseBrowser();
    await supabase.auth.signOut();
    toast.info('Logged out');
    router.refresh();
  };

  return (
    <div
      onClick={handleLogout}
      className="text-base text-center font-semi-bold py-2.5 cursor-pointer hover:bg-neutral-100"
    >
      Log out
    </div>
  );
};

export default LogoutBtn;
