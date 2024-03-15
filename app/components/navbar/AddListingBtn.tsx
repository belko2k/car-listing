'use client';

import { ListPlus } from 'lucide-react';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

type Props = {
  onClick: () => void;
};

const AddListingBtn = ({ onClick }: Props) => {
  return (
    <Button onClick={onClick} className="gap-3 text-xl">
      <ListPlus />
    </Button>
  );
};

export default AddListingBtn;
