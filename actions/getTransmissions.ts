import { supabaseBrowser } from '@/lib/supabase/client';

const getTransmissions = async () => {
  const supabase = supabaseBrowser();
  const { data, error } = await supabase.from('transmission').select('*');

  if (error) {
    console.log(error.message);
  }
  return data || [];
};

export default getTransmissions;
