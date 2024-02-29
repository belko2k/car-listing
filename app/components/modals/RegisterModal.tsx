'use client';

import React, { useState } from 'react';
import RegisterForm from '../auth/RegisterForm';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Separator } from '../ui/separator';
import Link from 'next/link';
import Social from '../auth/Social';
import { useRouter } from 'next/navigation';

type RegisterModalProps = {
  onClose: () => void;
  children?: React.ReactNode;
};

const RegisterModal = React.forwardRef(
  ({ onClose, children }: RegisterModalProps, ref) => {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const handleRegisterSuccess = () => {
      setOpen(false); // Close the dialog
      onClose(); // Call onClose to notify parent component
      router.push('/');
      router.refresh();
    };

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
        <DialogTrigger>{children}</DialogTrigger>
        <DialogContent>
          <DialogTitle>Sign Up</DialogTitle>
          <DialogDescription>Create an account</DialogDescription>
          <Separator />
          <RegisterForm onRegisterSuccess={handleRegisterSuccess} />
          <Separator />
          {/* <Social google="Register with Google" /> */}
          <Link
            href="/login"
            onClick={() => {
              onClose();
            }}
            className="text-center hover:underline hover:underline-offset-[6px]"
          >
            Already have an account?
          </Link>
        </DialogContent>
      </Dialog>
    );
  }
);

RegisterModal.displayName = 'RegisterModal';

export default RegisterModal;
