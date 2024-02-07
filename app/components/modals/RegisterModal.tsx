'use client';

import React, { useState } from 'react';
import RegisterForm from '../auth/RegisterForm';
import MenuItem from '../navbar/MenuItem';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';

type RegisterModalProps = {
  onClose: () => void;
};

const RegisterModal = React.forwardRef(
  ({ onClose }: RegisterModalProps, ref) => {
    const [open, setOpen] = useState(false);

    return (
      <Dialog
        open={open}
        onOpenChange={(newOpenState) => {
          setOpen(newOpenState);
          if (!newOpenState) {
            onClose();
          }
        }}
      >
        <DialogTrigger>
          <MenuItem label="Register" />
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Sign Up</DialogTitle>
          <DialogDescription>Create an account</DialogDescription>
          <RegisterForm />
        </DialogContent>
      </Dialog>
    );
  }
);

RegisterModal.displayName = 'RegisterModal';

export default RegisterModal;
