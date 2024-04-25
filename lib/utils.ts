import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const formatPrice = (price: number) =>
  new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(price);

// Function to format date to MM/YYYY
export const formattedDate = (date: Date) => {
  return new Date(date).toLocaleDateString('en-US', {
    month: '2-digit',
    year: 'numeric',
  });
};

// Function to format date to DD/MM/YYYY HH:mm in CET timezone
export const formattedDateTime = (dateTime: Date) => {
  const date = new Date(dateTime);
  return new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }).format(date);
};

// Function to format date to DD. MM. YYYY
export const formattedDateTimeSm = (dateTime: Date) => {
  const date = new Date(dateTime);
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  })
    .format(date)
    .replace(/\//g, '. ');
};

export const formattedPhoneNumber = (phoneNumber: string) => {
  const formatted = phoneNumber
    .toString()
    .replace(/(\d{3})(\d{3})(\d{3})/, '$1  $2  $3');
  return formatted;
};
