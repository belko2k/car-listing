import { supabaseServer } from '@/lib/supabase/server';

export default async function Home() {
  const supabase = supabaseServer();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const getUser2 = user;
  let getUserEmail = user?.email;
  let getUserMeta = user?.user_metadata.address;

  console.log('User has a session', getUser2 !== null);
  // console.log(getUser2);

  return (
    <div>
      <h1>HOME</h1>

      <p>Usergetuser: {getUserEmail}</p>

      <p>User metadata address: {getUserMeta}</p>
    </div>
  );
}
