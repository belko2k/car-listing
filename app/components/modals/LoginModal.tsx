'use client';

import LoginForm from '../auth/LoginForm';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '../ui/dialog';
import { Separator } from '../ui/separator';
import Social from '../auth/Social';
import { useRouter } from 'next/navigation';
import { useLoginModal } from '@/store/use-login-modal';
import { useRegisterModal } from '@/store/use-register-modal';

const LoginModal = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const handleLoginSuccess = () => {
    loginModal.close();
    router.push('/');
    router.refresh();
  };

  const onToggle = () => {
    loginModal.close();
    registerModal.open();
  };

  return (
    <Dialog open={loginModal.isOpen} onOpenChange={loginModal.close}>
      <DialogContent>
        <DialogTitle>Login</DialogTitle>
        <DialogDescription>Welcome back</DialogDescription>
        <Separator />
        <LoginForm onLoginSuccess={handleLoginSuccess} />
        <Social google="Sign in with Google" />
        <Separator />
        <p
          onClick={onToggle}
          className="text-center hover:underline hover:underline-offset-[6px] cursor-pointer"
        >
          Don&apos;t have an account?
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
