import { supabaseBrowser } from '@/lib/supabase/client';

const getModels = async () => {
  const supabase = supabaseBrowser();
  const { data, error } = await supabase
    .from('model')
    .select(`id, model_name, brand:brand_id (brand_name, id))`);

  if (error) {
    console.error('Error fetching cars:', error.message);
    return [];
  }

  return data || [];
};

export default getModels;
