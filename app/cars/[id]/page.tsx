import Wrapper from '@/app/components/Wrapper';
import { Separator } from '@/app/components/ui/separator';
import { supabaseBrowser } from '@/lib/supabase/client';
import {
  formatPrice,
  formattedDate,
  formattedDateTime,
  formattedPhoneNumber,
} from '@/lib/utils';
import { SingleListing } from '@/types';
import Image from 'next/image';
import { BsFuelPump } from 'react-icons/bs';
import { FaRoad } from 'react-icons/fa';
import { GiGearStickPattern } from 'react-icons/gi';
import { HiOutlineUsers } from 'react-icons/hi2';
import { FaSquarePhone, FaSquareEnvelope } from 'react-icons/fa6';
import { IoCalendarClearOutline, IoSpeedometer } from 'react-icons/io5';

const CarPage = async ({ params }: { params: { id: string } }) => {
  const supabase = supabaseBrowser();

  const { data, error } = await supabase
    .from('single_listing_view')
    .select('*')
    .eq('id', params.id);

  const listing: SingleListing = data?.[0];

  return (
    <Wrapper>
      <div className="grid gap-6 lg:grid-areas-layout my-8">
        <div className="lg:grid-in-header">
          <h2 className="bg-primary text-background text-xl font-semibold py-4 px-4 rounded-lg shadow-md">
            {listing.brand_name} {listing.model_name} {listing.title}
          </h2>
        </div>
        <div className="lg:grid-in-img">
          <Image
            src={listing.url}
            alt={`${listing.brand_name} ${listing.model_name}`}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full aspect-[16/9] object-cover rounded-xl shadow-lg"
          />
        </div>
        <div className="grid lg:grid-in-data grid-cols-1 min-[380px]:grid-cols-2 gap-4 bg-background py-6 px-6 rounded-lg shadow-md min-[870px]:grid-cols-3">
          <div className="flex gap-4 items-center">
            <FaRoad size={40} className="shrink-0" />
            <div>
              <p className="text-gray-600 md:text-lg">Mileage</p>
              <p className="sm:text-lg font-semibold">{listing.mileage} km</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <IoCalendarClearOutline size={40} className="shrink-0" />
            <div>
              <p className="text-gray-600 md:text-lg">First Registration</p>
              <p className="md:text-lg font-semibold">
                {formattedDate(listing.first_registration)}
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <IoSpeedometer size={40} className="shrink-0" />
            <div>
              <p className="text-gray-600 md:text-lg">Power</p>
              <p className="md:text-lg font-semibold">{listing.power} Hp</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <HiOutlineUsers size={40} className="shrink-0" />
            <div>
              <p className="text-gray-600 md:text-lg">Previous Owners</p>
              <p className="md:text-lg font-semibold">
                {listing.previous_owners}
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <BsFuelPump size={40} className="shrink-0" />
            <div>
              <p className="text-gray-600 md:text-lg">Fuel</p>
              <p className="md:text-lg font-semibold">
                {listing.fuel_type_name}
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <GiGearStickPattern size={45} className="shrink-0" />
            <div>
              <p className="text-gray-600 md:text-lg">Transmission</p>
              <p className="md:text-lg font-semibold">
                {listing.transmission_type}
              </p>
            </div>
          </div>
        </div>
        <div className="lg:grid-in-tData bg-background py-6 px-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Tehnical Data</h3>
          <Separator className="my-4" />
          <div className="[&>*:nth-child(even)]:bg-neutral-100 [&>*:nth-child(even)]:rounded-lg">
            <div className="grid grid-cols-2 p-3 ">
              <p className="font-medium md:text-lg">Brand</p>
              <p className="md:text-lg max-[500px]:justify-self-end">
                {listing.brand_name}
              </p>
            </div>
            <div className="grid grid-cols-2 p-3 ">
              <p className="font-medium md:text-lg">Model</p>
              <p className="md:text-lg max-[500px]:justify-self-end">
                {listing.model_name}
              </p>
            </div>
            <div className="grid grid-cols-2 p-3 ">
              <p className="font-medium md:text-lg">Category</p>
              <p className="md:text-lg max-[500px]:justify-self-end">
                {listing.car_type_name}
              </p>
            </div>
            <div className="grid grid-cols-2 p-3 ">
              <p className="font-medium md:text-lg">Condition</p>
              <p className="md:text-lg max-[500px]:justify-self-end">
                {listing.condition_type}
              </p>
            </div>
            <div className="grid grid-cols-2 p-3 ">
              <p className="font-medium md:text-lg">Color</p>
              <p className="md:text-lg max-[500px]:justify-self-end">
                {listing.color_name}
              </p>
            </div>
            <div className="grid grid-cols-2 p-3 ">
              <p className="font-medium md:text-lg">Door Count</p>
              <p className="md:text-lg max-[500px]:justify-self-end">
                {listing.door_count}
              </p>
            </div>
            <div className="grid grid-cols-2 p-3 ">
              <p className="font-medium md:text-lg">Seat Count</p>
              <p className="md:text-lg max-[500px]:justify-self-end">
                {listing.seat_count}
              </p>
            </div>
          </div>
          {listing.description && (
            <>
              <div>
                <p className="font-semibold mt-5 mb-3 text-lg">Description:</p>
                <p className="text-lg">{listing.description}</p>
              </div>
            </>
          )}
          <Separator className="my-4" />
          <p className="text-center">
            Listing created on {formattedDateTime(listing.created_at)}
          </p>
        </div>

        <div className="lg:grid-in-price bg-background py-6 px-4 rounded-lg shadow-md">
          <p className="text-3xl font-bold text-center ">
            {formatPrice(listing.price)}
          </p>
        </div>

        <div className="lg:grid-in-seller bg-background py-6 px-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Seller</h3>
          <Separator className="my-4" />
          <div className="grid gap-4">
            <p className="text-lg text-center">{listing.username}</p>
            <div className="flex items-center lg:text-left justify-center lg:justify-start gap-2">
              <FaSquarePhone size={25} />
              <a
                href={`tel:${listing.contact_number}`}
                className="hover:underline"
              >
                <p className="text-lg">
                  {formattedPhoneNumber(listing.contact_number)}
                </p>
              </a>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <FaSquareEnvelope size={25} />
              <a href={`mailto:${listing.email}`} className="hover:underline">
                <p className="text-lg">{listing.email}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CarPage;
