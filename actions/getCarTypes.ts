import { supabaseBrowser } from '@/lib/supabase/client';

const getCarTypes = async () => {
  const supabase = supabaseBrowser();
  const { data, error } = await supabase
    .from('car_type')
    .select('*')
    .order('car_type_name, id', { ascending: true });

  if (error) {
    console.log(error.message);
  }
  return (data as any) || [];
};

export default getCarTypes;
