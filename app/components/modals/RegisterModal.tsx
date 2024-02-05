'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';

type RegisterModalProps = {
  children: React.ReactNode;
  asChild: boolean;
};

const RegisterModal = ({ children, asChild }: RegisterModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle>Sign Up</DialogTitle>
        <DialogDescription>Make a new account</DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterModal;
