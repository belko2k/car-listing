import { supabaseBrowser } from '@/lib/supabase/client';

const getCarBrands = async () => {
  const supabase = supabaseBrowser();
  const { data, error } = await supabase.from('model').select(
    `model_name, 
      brand:brand_id(brand_name, id)
      `
  );

  if (error) {
    console.log(error.message);
  }
  return (data as any) || [];
};

export default getCarBrands;
