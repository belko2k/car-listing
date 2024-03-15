'use client';

import * as z from 'zod';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from '@/schemas';
import { Form, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import SubmitBtn from '../SubmitBtn';
import FormError from './form-error';
import { supabaseBrowser } from '@/lib/supabase/client';
import { toast } from 'sonner';
import HCaptcha from '@hcaptcha/react-hcaptcha';

type LoginFormProps = {
  onLoginSuccess: () => void;
};

const LoginForm = ({ onLoginSuccess }: LoginFormProps) => {
  const [error, setError] = useState<string | undefined>('');
  const [captchaToken, setCaptchaToken] = useState();

  const captcha = useRef<HCaptcha | null>(null);

  const supabase = supabaseBrowser();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    setError('');

    const { data, error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
      options: {
        captchaToken,
      },
    });

    if (captcha.current !== null) {
      captcha.current.resetCaptcha();
    }
    if (error) {
      setError(error.message);
    } else if (data.user) {
      toast.success('Logged in');
      onLoginSuccess();
    } else {
      setError('Some error');
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Email</FormLabel>
              <Input
                {...field}
                placeholder="Enter an email address"
                type="email"
                disabled={isSubmitting}
                className="text-base"
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Password</FormLabel>
              <Input
                {...field}
                placeholder="Enter a password"
                type="password"
                disabled={isSubmitting}
                className="text-base"
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormError message={error} />

        {/* CAPTCHA */}
        <HCaptcha
          ref={captcha}
          sitekey="b77060c1-946b-4f06-9cad-66edb8b17647"
          onVerify={(token: any) => {
            setCaptchaToken(token);
          }}
        />

        {/* SUBMIT */}
        <SubmitBtn label="Login" type="submit" isSubmitting={isSubmitting} />
      </form>
    </Form>
  );
};

export default LoginForm;
