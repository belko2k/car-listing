import { supabaseServer } from '@/lib/supabase/server';
import LogoutBtn from '../components/logout';

export default async function Home() {
  const supabase = supabaseServer();
  const { data } = await supabase.auth.getSession();

  console.log(data);

  return (
    <div>
      <h1>HOME</h1>
      <LogoutBtn />
    </div>
  );
}
