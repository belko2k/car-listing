import { supabaseBrowser } from '@/lib/supabase/client';

const getCondition = async () => {
  const supabase = supabaseBrowser();
  const { data, error } = await supabase.from('condition').select('*');

  if (error) {
    console.log(error.message);
  }
  return data || [];
};

export default getCondition;
