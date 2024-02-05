'use client';

import React, { useState } from 'react';
import LoginForm from '../forms/LoginForm';
import MenuItem from '../navbar/MenuItem';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';

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
        <DialogDescription>Welcome back</DialogDescription>
        <LoginForm />
      </DialogContent>
    </Dialog>
  );
});

LoginModal.displayName = 'LoginModal';

export default LoginModal;
