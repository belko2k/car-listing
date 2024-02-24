'use client';

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';

import { Button } from '../ui/button';
import { Car } from 'lucide-react';
import { Progress } from '../ui/progress';
import { useState } from 'react';
import AddListingForm from '../AddListingForm';

const ListingModal = () => {
  const [progress, setProgress] = useState(13);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="gap-3 text-md">
          <Car />
          List a car
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>List your car</DialogTitle>

        <Progress value={progress} />

        <AddListingForm />
      </DialogContent>
    </Dialog>
  );
};

export default ListingModal;
