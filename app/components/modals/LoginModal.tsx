import React, { useState } from 'react';
import LoginForm from '../auth/LoginForm';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Separator } from '../ui/separator';
import Social from '../auth/Social';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type LoginModalProps = {
  onClose: () => void;
  children?: React.ReactNode;
};

const LoginModal = React.forwardRef(
  ({ onClose, children }: LoginModalProps, ref) => {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const handleLoginSuccess = () => {
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
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>Welcome back</DialogDescription>
          <Separator />
          <LoginForm onLoginSuccess={handleLoginSuccess} />
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
  }
);

LoginModal.displayName = 'LoginModal';

export default LoginModal;
