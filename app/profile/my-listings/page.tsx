import { supabaseServer } from '@/lib/supabase/server';
import NotFoundAny from './components/NotFoundAny';
import UserListings from './components/UserListings';

const MyListings = async () => {
  const supabase = supabaseServer();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-14">My Listings</h2>
      <UserListings user={user} />
    </div>
  );
};

export default MyListings;
