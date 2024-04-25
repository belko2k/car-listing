import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/components/ui/table';

import { formatPrice, formattedDateTimeSm } from '@/lib/utils';
import { Listing } from '@/types';
import Image from 'next/image';
import NotFoundAny from './NotFoundAny';
import { EyeIcon, MoreHorizontalIcon } from 'lucide-react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/app/components/ui/dropdown-menu';
import { Button } from '@/app/components/ui/button';
import { supabaseBrowser } from '@/lib/supabase/client';
import DeleteBtn from './DeleteBtn';

const UserListingsTable = ({ listings }: any) => {
  const handleDelete = async (id: string) => {
    const supabase = supabaseBrowser();
    await supabase.from('listings_view').delete().eq('id', id);
  };

  return (
    <>
      {listings && listings.length > 0 && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="md:text-lg">View</TableHead>
              <TableHead className="md:text-lg hidden sm:block">
                Image
              </TableHead>
              <TableHead className="md:text-lg">Car</TableHead>
              <TableHead className="md:text-lg">Price</TableHead>
              <TableHead className="md:text-lg">Created at</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {listings.map((listing: Listing) => (
              <TableRow key={listing.id}>
                <TableCell>
                  <Link href={`/cars/${listing.id}`}>
                    <EyeIcon className="hover:text-neutral-500 w-6 h-6 md:w-8 md:h-8" />
                  </Link>
                </TableCell>
                <TableCell className="hidden sm:block">
                  <Image
                    src={listing.url}
                    alt={`${listing.brand_name} ${listing.model_name}`}
                    width={200}
                    height={200}
                    className="aspect-[16/10] object-cover rounded-md"
                  />
                </TableCell>
                <TableCell className="md:text-lg">{`${listing.brand_name} ${listing.model_name}`}</TableCell>
                <TableCell className="md:text-lg">
                  {formatPrice(listing.price)}
                </TableCell>
                <TableCell className="md:text-lg">
                  {formattedDateTimeSm(listing.created_at)}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontalIcon className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem className="cursor-pointer">
                        Edit
                      </DropdownMenuItem>

                      <DeleteBtn id={listing.id} />
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      {listings && listings.length < 1 && <NotFoundAny />}
    </>
  );
};

export default UserListingsTable;
