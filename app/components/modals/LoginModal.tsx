'use client';

import React, { useState } from 'react';
import LoginForm from '../auth/LoginForm';
import MenuItem from '../navbar/MenuItem';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Separator } from '../ui/separator';
import Social from '../auth/Social';

type LoginModalProps = {
  onClose: () => void;
};

const LoginModal = React.forwardRef(({ onClose }: LoginModalProps, ref) => {
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
        <MenuItem label="Login" />
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Login</DialogTitle>
        <Separator />
        <DialogDescription>Welcome back</DialogDescription>
        <LoginForm />
        <Social />
        <Separator />
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
});

LoginModal.displayName = 'LoginModal';

export default LoginModal;
