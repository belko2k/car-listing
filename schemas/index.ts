import * as z from 'zod';

const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_MIME_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

const ACCEPTED_IMAGE_TYPES = ['jpeg', 'jpg', 'png', 'webp'];

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
  brand: z.number().min(1, {
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
    .lt(1000000000, 'Price must be less than 1,000,000,000 €'),
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
  image: z
    .any()
    .refine((files) => {
      return files?.[0]?.size <= MAX_FILE_SIZE;
    }, `Max image size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
      'Only .jpg, .jpeg, .png and .webp formats are supported.'
    ),
});
