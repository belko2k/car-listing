'use client';

import { ListPlus } from 'lucide-react';
import { Button } from '../ui/button';

type Props = {
  onClick: () => void;
  label?: string;
};

const AddListingBtn = ({ onClick, label }: Props) => {
  return (
    <Button onClick={onClick} className="gap-3 text-xl">
      <ListPlus />
      {label}
    </Button>
  );
};

export default AddListingBtn;
