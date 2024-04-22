'use client';

import { Button } from '@/app/components/ui/button';
import { User } from '@supabase/supabase-js';

import { MdDelete } from 'react-icons/md';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/app/components/ui/dialog';
import AccDelReqForm from './AccDelReqForm';

import { useAccDelModal } from '@/store/use-acc-del-modal';
import UpdateEmailForm from './UpdateEmailForm';

type ProfileFormProps = {
  user: User | null;
};

const ProfileForm = ({ user }: ProfileFormProps) => {
  const accDelModal = useAccDelModal();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Update your profile data</h2>
      <p className="text-muted-foreground mb-4">
        Here you can update your account email
      </p>

      <UpdateEmailForm user={user} />

      <div>
        <h2 className="text-2xl font-bold mt-10 mb-4">Delete your account</h2>
        <p className="text-muted-foreground mb-6">
          Request account deletion. This action cannot be undone.
        </p>

        <Dialog open={accDelModal.isOpen} onOpenChange={accDelModal.close}>
          <Button
            variant="destructive"
            className="text-md"
            size="lg"
            onClick={() => accDelModal.open()}
          >
            <MdDelete size={25} /> Delete your account
          </Button>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Delete account</DialogTitle>
            </DialogHeader>
            <AccDelReqForm user={user} />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default ProfileForm;
