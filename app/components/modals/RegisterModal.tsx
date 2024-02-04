'use client';

import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';

type RegisterModalProps = {
  children: React.ReactNode;
  asChild: boolean;
};

const RegisterModal = ({ children, asChild }: RegisterModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
      <DialogContent>
        <div>Register Form</div>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterModal;
