'use server';

import { supabaseServer } from '@/lib/supabase/server';
import Navbar from './Navbar';

const Header = async () => {
  const supabase = supabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const username = user?.user_metadata.username;
  return (
    <header className="shadow-md bg-white sticky top-0">
      <Navbar user={user} username={username} />
    </header>
  );
};

export default Header;
