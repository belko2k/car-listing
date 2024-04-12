import { supabaseBrowser } from '@/lib/supabase/client';

const CarPage = async ({ params }: { params: { id: string } }) => {
  const supabase = supabaseBrowser();

  const { data, error } = await supabase
    .from('listing')
    .select('*')
    .eq('id', params.id);

  const listing = data?.[0];

  return (
    <div>
      <h1>{listing?.title}</h1>
      <h2>{listing?.description}</h2>
    </div>
  );
};

export default CarPage;
