import { supabaseBrowser } from '@/lib/supabase/client';
import UserListingsTable from './UserListingsTable';

const UserListings = async ({ user }: { user: any }) => {
  const supabase = supabaseBrowser();

  const { data: listings, error } = await supabase
    .from('listings_view')
    .select()
    .eq('user_id', user.id);

  return (
    <div>
      <UserListingsTable listings={listings} />
    </div>
  );
};

export default UserListings;
