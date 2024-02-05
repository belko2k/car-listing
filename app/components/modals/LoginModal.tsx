'use client';

import LoginForm from '../forms/LoginForm';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';

type LoginModalProps = {
  children: React.ReactNode;
  asChild: boolean;
};

const LoginModal = ({ children, asChild }: LoginModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle>Login</DialogTitle>
        <DialogDescription>Welcome back</DialogDescription>
        <LoginForm />
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
