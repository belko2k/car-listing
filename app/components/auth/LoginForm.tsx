import * as z from 'zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from '@/schemas';
import { Form, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import SubmitBtn from '../SubmitBtn';
import FormError from './form-error';
import { supabaseBrowser } from '@/lib/supabase/client';
import { toast } from 'sonner';

type LoginFormProps = {
  onLoginSuccess: () => void;
};

const LoginForm = ({ onLoginSuccess }: LoginFormProps) => {
  const [error, setError] = useState<string | undefined>('');
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
    });
    error
      ? setError(error.message)
      : data.user
      ? (toast.success('Logged in'), onLoginSuccess())
      : setError('Some error');
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
        <SubmitBtn label="Login" type="submit" isSubmitting={isSubmitting} />
      </form>
    </Form>
  );
};

export default LoginForm;
