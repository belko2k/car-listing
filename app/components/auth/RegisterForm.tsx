'use client';

import * as z from 'zod';

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { RegisterSchema } from '@/schemas';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import FormError from './forrm-error';
import FormSuccess from './form-success';
import { supabaseBrowser } from '@/lib/supabase/client';
import { toast } from 'sonner';
import SubmitBtn from '../SubmitBtn';

type RegisterFormProps = {
  onRegisterSuccess: () => void;
};

const RegisterForm = ({ onRegisterSuccess }: RegisterFormProps) => {
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  const supabase = supabaseBrowser();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
      username: '',
      address: '',
      contactNumber: '',
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
    setError('');
    setSuccess('');

    const { data, error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
      options: {
        data: {
          firstName: values.firstName,
          lastName: values.lastName,
          username: values.username,
          address: values.address,
          contactNumber: values.contactNumber,
        },
      },
    });

    if (error) {
      setError(error.message);
    } else if (data.user) {
      await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });
      toast.success('Registration successful!');
      onRegisterSuccess();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* EMAIL */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Enter an email address"
                  type="email"
                  disabled={isSubmitting}
                  className="text-base"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* FIRST NAME */}
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">First Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Enter your first name"
                  type="text"
                  disabled={isSubmitting}
                  className="text-base"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* LAST NAME */}
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Last Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Enter your last name"
                  type="text"
                  disabled={isSubmitting}
                  className="text-base"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* USERNAME */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Username</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Enter a username"
                  type="text"
                  disabled={isSubmitting}
                  className="text-base"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* CONTACT */}
        <FormField
          control={form.control}
          name="contactNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Contact</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="ex. 123-456-789"
                  type="tel"
                  disabled={isSubmitting}
                  className="text-base"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* ADDRESS */}
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Address</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Enter your address"
                  type="text"
                  disabled={isSubmitting}
                  className="text-base"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* PASSWORD */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Password</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Enter a password"
                  type="password"
                  disabled={isSubmitting}
                  className="text-base"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* CONFIRM PASSWORD */}
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Confirm password</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Confirm password"
                  type="password"
                  disabled={isSubmitting}
                  className="text-base"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormError message={error} />
        <FormSuccess message={success} />
        {/* SUBMIT BUTTON */}
        <SubmitBtn
          label="Create an accounTT"
          type="submit"
          isSubmitting={isSubmitting}
        />
      </form>
    </Form>
  );
};

export default RegisterForm;
