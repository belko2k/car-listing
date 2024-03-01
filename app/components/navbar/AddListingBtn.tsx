'use client';

import { ListPlus } from 'lucide-react';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

const AddListingBtn = () => {
  const router = useRouter();

  const handleRoute = () => {
    router.push('/login');
  };

  return (
    <Button onClick={handleRoute} className="gap-3 text-xl">
      <ListPlus />
    </Button>
  );
};

export default AddListingBtn;
