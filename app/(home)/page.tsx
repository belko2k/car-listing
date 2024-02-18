import { supabaseServer } from '@/lib/supabase/server';
import LogoutBtn from '../components/logout';

export default async function Home() {
  const supabase = supabaseServer();
  const { data } = await supabase.auth.getSession();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  let userEmail = data.session?.user.email;
  let getUser = user?.email;
  let getUserMeta = user?.user_metadata.address;
  let username = data.session?.user.user_metadata.username;
  console.log(getUser == null);

  return (
    <div>
      <h1>HOME</h1>
      <p>User: {userEmail}</p>
      <p>Usergetuser: {getUser}</p>
      <p>User metadata: {username}</p>
      <p>User metadata address: {getUserMeta}</p>
      <LogoutBtn />
    </div>
  );
}
