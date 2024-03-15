'use client';

import RegisterForm from '../auth/RegisterForm';
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

const RegisterModal = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const onToggle = () => {
    registerModal.close();
    loginModal.open();
  };

  const handleRegisterSuccess = () => {
    registerModal.close();
    router.push('/');
    router.refresh();
  };

  return (
    <Dialog open={registerModal.isOpen} onOpenChange={registerModal.close}>
      <DialogContent>
        <DialogTitle>Sign Up</DialogTitle>
        <DialogDescription>Create an account</DialogDescription>
        <Separator />
        <RegisterForm onRegisterSuccess={handleRegisterSuccess} />
        <Separator />
        {/* <Social google="Register with Google" /> */}
        <p
          onClick={onToggle}
          className="text-center hover:underline hover:underline-offset-[6px] cursor-pointer"
        >
          Already have an account?
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterModal;
