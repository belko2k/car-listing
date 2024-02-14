import * as z from 'zod';

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
  password: z.string().min(1, {
    message: 'Password is required',
  }),
});

export const RegisterSchema = z
  .object({
    email: z.string().email({
      message: 'Email is required',
    }),
    username: z.string().min(1, {
      message: 'Username is required',
    }),
    firstName: z.string().min(1, {
      message: 'First name is required',
    }),
    lastName: z.string().min(1, {
      message: 'Last name is required',
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
    password: z.string().min(6, {
      message: 'Password needs to contain at least 6 characters',
    }),
    confirmPassword: z.string().min(6, {
      message: 'Password needs to contain at least 6 characters',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
