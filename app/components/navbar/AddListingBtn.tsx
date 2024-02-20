'use client';

import { Car } from 'lucide-react';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { Session } from '@supabase/supabase-js';

type AddListingBtnProps = {
  session: Session | null;
};

const AddListingBtn = ({ session }: AddListingBtnProps) => {
  const router = useRouter();

  const handleAddListing = () => {
    if (session) {
      console.log('Logged in'); // Perform desired action when logged in
    } else {
      router.push('/login'); // Redirect to login page if not logged in
    }
  };

  return (
    <Button onClick={handleAddListing} className="gap-3 text-md">
      <Car />
      List a car
    </Button>
  );
};

export default AddListingBtn;
