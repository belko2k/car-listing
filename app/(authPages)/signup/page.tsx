'use client';

import Wrapper from '@/app/components/Wrapper';
import RegisterForm from '@/app/components/auth/RegisterForm';
import Social from '@/app/components/auth/Social';
import { Separator } from '@/app/components/ui/separator';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
  const router = useRouter();
  const handleRegisterSuccess = () => {
    router.push('/');
    router.refresh();
  };

  return (
    <Wrapper>
      <div className="max-w-[30rem] mx-auto grid gap-8 mt-[5rem] pb-[5rem]">
        <h2 className="text-4xl font-semibold text-center">Sign Up</h2>
        <Separator />
        <RegisterForm onRegisterSuccess={handleRegisterSuccess} />
        <Separator />
        <Social google="Sign up with Google" />
        <Link
          href="/login"
          className="block text-center hover:underline hover:underline-offset-[6px]"
        >
          Already have an account?
        </Link>
      </div>
    </Wrapper>
  );
};

export default RegisterPage;
