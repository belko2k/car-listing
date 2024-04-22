import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/app/components/ui/form';

import { Input } from '@/app/components/ui/input';
import SubmitBtn from '@/app/components/SubmitBtn';
import FormError from '@/app/components/form-error';
import FormSuccess from '@/app/components/form-success';
import { supabaseBrowser } from '@/lib/supabase/client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { email } from '@/schemas';
import { z } from 'zod';

import { User } from '@supabase/supabase-js';
import { X } from 'lucide-react';

type UpdateEmailFormProps = {
  user: User | null;
};

const UpdateEmailForm = ({ user }: UpdateEmailFormProps) => {
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  const emailForm = useForm<z.infer<typeof email>>({
    resolver: zodResolver(email),
    defaultValues: {
      email: user?.email,
    },
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = emailForm;

  const submitEmail = async (values: z.infer<typeof email>) => {
    const supabase = supabaseBrowser();
    try {
      if (values.email === user?.email) {
        setError('Email is the same');
        return;
      }

      const { error } = await supabase.auth.updateUser({
        email: values.email,
      });

      console.log(values);

      if (error) {
        setSuccess('');
        setError(error.message);
      } else {
        setError('');
        setSuccess('Email verification sent to your new email');
      }
    } catch (error) {
      console.log('catch error', error);
    }
  };

  return (
    <Form {...emailForm}>
      <form onSubmit={handleSubmit(submitEmail)} className="space-y-3">
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={isSubmitting}
                  className="max-w-sm"
                />
              </FormControl>
              <FormDescription>Enter your new email.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="max-w-sm">
          <FormError message={error} />

          <FormSuccess message={success} />
        </div>

        <SubmitBtn
          label="Update email"
          isSubmitting={isSubmitting}
          width="fit-content"
          type="submit"
        />
      </form>
    </Form>
  );
};

export default UpdateEmailForm;
