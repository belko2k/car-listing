'use client';

import { Separator } from '@/app/components/ui/separator';
import Link from 'next/link';
import LoginForm from '@/app/components/auth/LoginForm';
import Social from '@/app/components/auth/Social';
import Wrapper from '@/app/components/Wrapper';

const LoginPage = () => {
  return (
    <Wrapper>
      <div className="max-w-[30rem] mx-auto grid gap-8 mt-[5rem]">
        <h2 className="text-4xl font-semibold text-center">Sign-in</h2>
        <Separator />
        <LoginForm />
        <Separator />
        <Social google="Sign in with Google" />
        <Link
          href="/signup"
          className="block text-center hover:underline hover:underline-offset-[6px]"
        >
          Don&apos;t have an account?
        </Link>
      </div>
    </Wrapper>
  );
};

export default LoginPage;
