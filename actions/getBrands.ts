import { supabaseBrowser } from '@/lib/supabase/client';
import { Brand } from '@/types';

const getBrands = async (): Promise<Brand[]> => {
  const supabase = supabaseBrowser();
  const { data, error } = await supabase
    .from('brand')
    .select('id, brand_name')
    .order('brand_name', { ascending: true });
  if (error) {
    console.log('Error fetching brands: ', error.message);
  }

  return (data as any) || [];
};

export default getBrands;
