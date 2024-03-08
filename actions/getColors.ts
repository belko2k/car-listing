import { supabaseBrowser } from '@/lib/supabase/client';

const getColors = async () => {
  const supabase = supabaseBrowser();
  const { data, error } = await supabase
    .from('color')
    .select('id, color_name, color_code')
    .order('color_name', { ascending: true });
  if (error) {
    console.log(error.message);
  }
  return (data as any) || [];
};

export default getColors;
