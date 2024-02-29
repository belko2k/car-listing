import { supabaseBrowser } from '@/lib/supabase/client';

const getTransmissions = async () => {
  const supabase = supabaseBrowser();
  const { data, error } = await supabase
    .from('transmission')
    .select('id, transmission_type');

  if (error) {
    console.log(error.message);
  }
  return (data as any) || [];
};

export default getTransmissions;
