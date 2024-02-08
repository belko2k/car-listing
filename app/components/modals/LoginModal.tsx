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
import Link from 'next/link';

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
        <Separator />
        <LoginForm />
        <Social google="Sign in with Google" />
        <Separator />
        <Link
          href="/signup"
          onClick={() => {
            onClose();
          }}
          className="text-center hover:underline hover:underline-offset-[6px]"
        >
          Don&apos;t have an account?
        </Link>
      </DialogContent>
    </Dialog>
  );
});

LoginModal.displayName = 'LoginModal';

export default LoginModal;
