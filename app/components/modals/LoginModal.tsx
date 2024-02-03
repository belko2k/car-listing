'use client';

import { ReactNode } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';

type LoginModalProps = {
  children: React.ReactNode;
  asChild: boolean;
};

const LoginModal = ({ children, asChild }: LoginModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
      <DialogContent>
        <div>Login Form</div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
