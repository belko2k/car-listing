import { supabaseBrowser } from '@/lib/supabase/client';

const getListings = async () => {
  const supabase = supabaseBrowser();
  const { data, error } = await supabase.from('listings_view').select();
  if (error) {
    console.log(error.message);
  }
  return data || [];
};

export default getListings;
