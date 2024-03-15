import { supabaseBrowser } from '@/lib/supabase/client';

const getModels = async () => {
  const supabase = supabaseBrowser();
  const { data, error } = await supabase
    .from('model')
    .select(
      `
    *,
    brand(*)
    `
    )
    .order('model_name', { ascending: true });

  if (error) {
    console.error('Error fetching models:', error.message);
    return [];
  }

  return data || [];
};

export default getModels;
