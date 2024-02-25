import * as z from 'zod';

const bytesToMB = (bytes: number) => bytes / (1024 * 1024);

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

export const ListingSchema = z.object({
  title: z.string().min(1, {
    message: 'Title is required',
  }),
  brand: z.string().min(1, {
    message: 'Choose a brand',
  }),
  model: z.string().min(1, {
    message: 'Choose a model',
  }),
  // car_type: z.string().min(1, {
  //   message: 'Choose a car type',
  // }),
  // condition: z.string().min(1, {
  //   message: "Choose your car's condition",
  // }),
  // transmission: z.string().min(1, {
  //   message: 'Choose a transmission',
  // }),
  // fuel_type: z.string().min(1, {
  //   message: 'Choose a fuel type',
  // }),
  // color: z.string().min(1, {
  //   message: "Choose car's color",
  // }),
  // price: z.number().positive({
  //   message: 'Price must be a positive number',
  // }),
  // mileage: z.number().min(0),
  // power: z.number().min(1),
  // description: z.string(),
  // first_registration: z.string().refine((value) => {
  //   const dateRegex = /^\d{2}-\d{2}-\d{4}$/;
  //   return dateRegex.test(value);
  // }),
  // previous_owners: z.number().min(0),
  // door_count: z.number().min(1),
  // seat_count: z.number().min(1),
  // image: z
  //   .object({
  //     type: z.string(),
  //     size: z.number(),
  //   })
  //   .refine(
  //     (file) =>
  //       file?.type &&
  //       (file.type === 'image/jpeg' ||
  //         file.type === 'image/png' ||
  //         file.type === 'image/jpg' ||
  //         file.type === 'image/webp'),
  //     'Only JPEG, PNG, JPG, or WEBP images are allowed'
  //   )
  //   .refine(
  //     (file) => file?.size && bytesToMB(file.size) <= 7,
  //     'Image must be less than 7 MB'
  //   ),
});
