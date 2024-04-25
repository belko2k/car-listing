'use client';

import { Dialog, DialogContent, DialogTitle } from '../ui/dialog';

import AddListingForm from '../listing/AddListingForm';
import { useListingModal } from '@/store/use-listing-modal';

const ListingModal = () => {
  const listingModal = useListingModal();

  return (
    <Dialog open={listingModal.isOpen} onOpenChange={listingModal.close}>
      <DialogContent className="max-w-[40rem]">
        <DialogTitle>List your car</DialogTitle>
        <AddListingForm />
      </DialogContent>
    </Dialog>
  );
};

export default ListingModal;
