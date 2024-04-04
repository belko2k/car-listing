'use client';

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';

import { Button } from '../ui/button';
import { ListPlus } from 'lucide-react';
import { Progress } from '../ui/progress';
import { useState } from 'react';
import AddListingForm from '../listing/AddListingForm';
import { useListingModal } from '@/store/use-listing-modal';

const ListingModal = () => {
  // const [progress, setProgress] = useState(13);
  const listingModal = useListingModal();

  return (
    <Dialog open={listingModal.isOpen} onOpenChange={listingModal.close}>
      <DialogContent className="max-w-[40rem]">
        <DialogTitle>List your car</DialogTitle>

        {/* <Progress value={progress} /> */}

        <AddListingForm />
      </DialogContent>
    </Dialog>
  );
};

export default ListingModal;
