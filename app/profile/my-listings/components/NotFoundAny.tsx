'use client';

import { Button } from '@/app/components/ui/button';
import { useListingModal } from '@/store/use-listing-modal';
import { FaClipboardQuestion } from 'react-icons/fa6';
import { FiPlusCircle } from 'react-icons/fi';

const NotFoundAny = () => {
  const listingModal = useListingModal();
  const handleListingModal = () => {
    listingModal.open();
  };

  return (
    <div className="py-10">
      <FaClipboardQuestion size={60} className="mx-auto mb-6" />
      <div className="flex flex-col items-center gap-3">
        <p className="font-semibold text-2xl">No listings added</p>
        <p className="text-muted-foreground text-lg">
          You have not added any listings. Add one below.
        </p>
        <Button
          size="lg"
          className="text-md flex items-center gap-2"
          onClick={handleListingModal}
        >
          <FiPlusCircle size={25} />
          Add Listing
        </Button>
      </div>
    </div>
  );
};

export default NotFoundAny;
