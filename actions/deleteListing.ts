'use server';

import { supabaseBrowser } from '@/lib/supabase/client';

import { S3Client, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { revalidatePath } from 'next/cache';

const s3 = new S3Client({
  region: process.env.AWS_BUCKET_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function deleteListing(id: number) {
  const supabase = supabaseBrowser();

  const mediaItem = await supabase
    .from('media')
    .delete()
    .eq('listing_id', id)
    .select();

  await supabase.from('listing').delete().eq('id', id);

  //delete from s3 bucket

  const deleteObjectCommand = new DeleteObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME!,
    Key: mediaItem.data?.[0].url.split('/').pop(),
  });

  await s3.send(deleteObjectCommand);

  revalidatePath('/profile/my-listings');
}
