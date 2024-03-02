'use server';

import { supabaseServer } from '@/lib/supabase/server';
import Navbar from './Navbar';

const Header = async () => {
  const supabase = supabaseServer();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const user = session?.user.user_metadata.username;
  return (
    <header className="shadow-md bg-white sticky top-0">
      <Navbar session={session} user={user} />
    </header>
  );
};

export default Header;
