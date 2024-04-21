'use client';

import { z } from 'zod';
import { supabaseBrowser } from '@/lib/supabase/client';
import { email } from '@/schemas';
import { toast } from 'sonner';
import { User } from '@supabase/supabase-js';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
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
import FormError from '@/app/components/form-error';
import SubmitBtn from '@/app/components/SubmitBtn';
import { useState } from 'react';
import { useAccDelModal } from '@/store/use-acc-del-modal';

type AccDelReqFormProps = {
  user: User | null;
};

const AccDelReqForm = ({ user }: AccDelReqFormProps) => {
  const [error, setError] = useState<string | undefined>('');
  const accDelModal = useAccDelModal();

  const emailForm = useForm<z.infer<typeof email>>({
    resolver: zodResolver(email),
    defaultValues: {
      email: '',
    },
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = emailForm;

  const handleDeleteAccount = async (values: z.infer<typeof email>) => {
    const supabase = supabaseBrowser();
    try {
      if (values.email !== user?.email) {
        setError('Email does not match');
        return;
      }

      const { error } = await supabase.from('acc_del_req').insert({
        user_id: user?.id,
        req_email: values.email,
      });

      if (error) {
        console.log(error.message);
        toast.error(error.message, {});
      } else {
        setError('');
        toast.success('Account deletion request sent', {
          duration: 5000,
          position: 'top-right',
        });
        accDelModal.close();
      }
    } catch (error) {
      console.log('catch error', error);
    }
  };
  return (
    <Form {...emailForm}>
      <form onSubmit={handleSubmit(handleDeleteAccount)} className="space-y-6">
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} disabled={isSubmitting} />
              </FormControl>
              <FormDescription>
                Re-enter your email to confirm account deletion
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormError message={error} />

        <SubmitBtn
          label="Request account deletion"
          isSubmitting={isSubmitting}
          type="submit"
        />
      </form>
    </Form>
  );
};

export default AccDelReqForm;
