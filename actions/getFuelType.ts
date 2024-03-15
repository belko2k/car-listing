import { supabaseBrowser } from '@/lib/supabase/client';

const getFuelType = async () => {
  const supabase = supabaseBrowser();
  const { data, error } = await supabase
    .from('fuel_type')
    .select('id, fuel_type_name')
    .order('fuel_type_name', { ascending: true });
  if (error) {
    console.log(error.message);
  }
  return data || [];
};

export default getFuelType;
