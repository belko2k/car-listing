'use client';

import { z } from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/app/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { supabaseBrowser } from '@/lib/supabase/client';
import { User } from '@supabase/supabase-js';
import { useState } from 'react';

import { MdDelete } from 'react-icons/md';

import SubmitBtn from '@/app/components/SubmitBtn';
import { email } from '@/schemas';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/app/components/ui/dialog';
import AccDelReqForm from './AccDelReqForm';
import FormError from '@/app/components/form-error';
import FormSuccess from '@/app/components/form-success';
import { useAccDelModal } from '@/store/use-acc-del-modal';

type ProfileFormProps = {
  user: User | null;
};

const ProfileForm = ({ user }: ProfileFormProps) => {
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  const accDelModal = useAccDelModal();

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

  const supabase = supabaseBrowser();

  const submitEmail = async (values: z.infer<typeof email>) => {
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
    <div>
      <h2 className="text-2xl font-bold mb-4">Update your profile data</h2>
      <p className="text-muted-foreground mb-4">
        Here you can update your account email
      </p>
      <Form {...emailForm}>
        <form onSubmit={handleSubmit(submitEmail)} className="space-y-6">
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
                <FormDescription>This is your current email.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormError message={error} />
          <FormSuccess message={success} />

          <SubmitBtn
            label="Update email"
            isSubmitting={isSubmitting}
            width="fit-content"
            type="submit"
          />
        </form>
      </Form>

      <div>
        <h2 className="text-2xl font-bold mt-10 mb-4">Delete your account</h2>
        <p className="text-muted-foreground mb-4">
          This action cannot be undone.
        </p>

        <Dialog open={accDelModal.isOpen} onOpenChange={accDelModal.close}>
          <Button
            variant="destructive"
            className="text-md"
            size="lg"
            onClick={() => accDelModal.open()}
          >
            <MdDelete size={25} /> Request to delete an account
          </Button>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Delete account</DialogTitle>
            </DialogHeader>
            <AccDelReqForm user={user} />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default ProfileForm;
