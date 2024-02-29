import { supabaseBrowser } from '@/lib/supabase/client';

const getBrands = async () => {
  const supabase = supabaseBrowser();
  const { data, error } = await supabase.from('brand').select('*');

  if (error) {
    console.log('Error fetching brands: ', error.message);
  }

  return (data as any) || [];
};

export default getBrands;
