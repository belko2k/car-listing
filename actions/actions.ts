'use server';

import { supabaseServer } from '@/lib/supabase/server';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

import crypto from 'crypto';

const supabase = supabaseServer();

const generateFileName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString('hex');

const s3 = new S3Client({
  region: process.env.AWS_BUCKET_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const acceptedTypes = ['image/png', 'image/jpeg', 'image/png', 'image/webp'];

const maxFileSize = 10 * 1024 * 1024;

export async function getSignedURL(
  type: string,
  size: number,
  checksum: string
) {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (!user) {
    return { failure: 'Not authenticated', error };
  }

  if (!acceptedTypes.includes(type)) {
    return { failure: 'Invalid file type' };
  }

  if (size > maxFileSize) {
    return { failure: 'File too large' };
  }

  const putObjectCommand = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME!,
    Key: generateFileName(),
    ContentType: type,
    ContentLength: size,
    ChecksumSHA256: checksum,
    Metadata: {
      user_id: user.id,
    },
  });

  const signedURL = await getSignedUrl(s3, putObjectCommand, {
    expiresIn: 60,
  });

  const mediaResult = await supabase
    .from('media')
    .insert({
      user_id: user.id,
      type: 'image',
      url: signedURL.split('?')[0],
    })
    .select();

  return { success: { url: signedURL, mediaId: mediaResult.data?.[0].id } };
}
type Props = {
  title: string;
  price: number;
  availability: boolean;
  condition_id: number;
  first_registration: any;
  description: string | undefined;
  mediaId?: number;
  mileage: number;
  model_id: number;
  fuel_type_id: number;
  transmission_id: number;
  color_id: number | undefined;
  car_type_id: number;
  seat_count: number;
  door_count: number;
  power: number;
  previous_owners: number;
};

export async function createListing({
  title,
  price,
  availability,
  condition_id,
  mileage,
  first_registration,
  description,
  mediaId,
  model_id,
  fuel_type_id,
  transmission_id,
  color_id,
  car_type_id,
  seat_count,
  door_count,
  power,
  previous_owners,
}: Props) {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (!user) {
    return { failure: 'Not authenticated', error };
  }

  if (mediaId) {
    const mediaItem = await supabase
      .from('media')
      .select()
      .match({ id: mediaId, user_id: user.id });

    if (!mediaItem) {
      console.error('some stuff');
      return { failure: 'Media not found' };
    }
  }

  const listingItem = await supabase
    .from('listing')
    .insert({
      user_id: user.id,
      title,
      price,
      mileage,
      availability,
      condition_id,
      description,
      media_id: mediaId,
      model_id,
      fuel_type_id,
      transmission_id,
      color_id,
      car_type_id,
      seat_count,
      door_count,
      power,
      previous_owners,
      first_registration,
    })
    .select();

  if (mediaId) {
    await supabase
      .from('media')
      .update({ listing_id: listingItem.data?.[0].id })
      .eq('id', mediaId);
  }
}
