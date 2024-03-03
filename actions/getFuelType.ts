import { supabaseBrowser } from '@/lib/supabase/client';

const getFuelType = async () => {
  const supabase = supabaseBrowser();
  const { data, error } = await supabase.from('fuel_type').select('*');

  if (error) {
    console.log(error.message);
  }
  return (data as any) || [];
};

export default getFuelType;
