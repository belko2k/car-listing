'use server';

import * as z from 'zod';
import bcrypt from 'bcrypt';

import { db } from '@/lib/db';
import { RegisterSchema } from '@/schemas';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(values);

  if (!validateFields.success) {
    return {
      error: 'Invalid fields!',
    };
  }

  const { email, password, username, contactNumber, address } =
    validateFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUserEmail = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUserEmail) {
    return {
      error: 'Email already in use!',
    };
  }

  const existingUserUsername = await db.user.findUnique({
    where: {
      username,
    },
  });

  if (existingUserUsername) {
    return {
      error: 'Username already taken!',
    };
  }

  await db.user.create({
    data: {
      email,
      username,
      password: hashedPassword,
      contactNumber,
      address,
    },
  });

  return { success: 'Account created!' };
};
