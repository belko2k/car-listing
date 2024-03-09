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
  model: z.number().min(1, {
    message: 'Choose a model',
  }),
  car_type: z.coerce.number().int().min(1, {
    message: 'Choose a car type',
  }),
  condition: z.coerce.number().int().min(1, {
    message: "Choose your car's condition",
  }),
  transmission: z.coerce.number().int().min(1, {
    message: 'Choose a transmission',
  }),
  fuel_type: z.coerce.number().int().min(1, {
    message: 'Choose a fuel type',
  }),
  mileage: z.coerce
    .number()
    .gte(0)
    .lt(1000000000, 'Mileage must be less than 1,000,000,000 km')
    .refine((value) => (Object.is(value, -0) ? false : true), {
      path: ['mileage'],
    }),
  price: z.coerce
    .number()
    .gte(1)
    .lt(1000000000, 'Price must be less than 1,000,000,000 €')
    .refine((value) => {
      if (typeof value !== 'number') {
        throw new Error('Expected number for price.');
      }
      return true;
    }),

  power: z.coerce.number().int().gt(1).lt(3000),
  description: z.string().optional(),
  first_registration: z.date(),
  previous_owners: z.coerce
    .number()
    .int()
    .gte(0)
    .lte(100)
    .refine((value) => (Object.is(value, -0) ? false : true), {
      path: ['previous_owners'],
    }),
  door_count: z.coerce.number().int().gte(1).lte(9),
  seat_count: z.coerce.number().int().gte(1).lte(9),
  color: z.coerce.number().int().optional(),
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
