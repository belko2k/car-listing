import * as z from 'zod';

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
  password: z.string().min(1, {
    message: 'Password is required',
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
  password: z.string().min(6, {
    message: 'Minimum 6 characters',
  }),
  username: z.string().min(1, {
    message: 'Username is required',
  }),
  contactNumber: z
    .string()
    .min(8, {
      message: 'Number must contain at least 8 digits',
    })
    .regex(/^[0-9]+$/, {
      message: 'Only numbers are allowed',
    }),
  address: z.string().min(1, {
    message: 'Address is required',
  }),
});
