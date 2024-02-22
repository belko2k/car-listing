'use client';

import React, { useState } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Separator } from '../ui/separator';
import AddListingBtn from '../navbar/AddListingBtn';
import { Session } from '@supabase/supabase-js';
import { Button } from '../ui/button';
import { Car } from 'lucide-react';

type ListingModalProps = {
  session: Session | null;
};

const ListingModal = ({ session }: ListingModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="gap-3 text-md">
          <Car />
          List a car
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Add</DialogTitle>
        <DialogDescription>add listing</DialogDescription>
        <Separator />

        <Separator />
      </DialogContent>
    </Dialog>
  );
};

export default ListingModal;
