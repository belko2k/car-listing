import ProfileForm from './components/ProfileForm';
import { supabaseServer } from '@/lib/supabase/server';

const Profile = async () => {
  const supabase = supabaseServer();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return <ProfileForm user={user} />;
};

export default Profile;
