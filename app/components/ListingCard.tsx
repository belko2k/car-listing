import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import Image from 'next/image';
import { GiGearStickPattern } from 'react-icons/gi';
import { FaRoad } from 'react-icons/fa';
import { IoCalendarClearOutline } from 'react-icons/io5';
import { IoSpeedometer } from 'react-icons/io5';
import { BsFuelPump } from 'react-icons/bs';
import { HiOutlineUsers } from 'react-icons/hi2';
import { formatPrice, formattedDate } from '@/lib/utils';
import Link from 'next/link';
import { Listing } from '@/types';

const ListingCard = ({
  id,
  title,
  brand_name,
  model_name,
  mileage,
  first_registration,
  transmission_type,
  price,
  power,
  fuel_type_name,
  url,
  previous_owners,
}: Listing) => {
  return (
    <Link href={`/cars/${id}`}>
      <Card>
        <CardHeader className="bg-primary rounded-t-md py-3">
          <CardTitle className="text-white font-normal text-[1.3rem]">
            {brand_name} {model_name} {title ? `| ${title}` : ''}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid mt-6 gap-8 @[850px]:grid-cols-[1fr,1fr]">
            <div>
              <Image
                src={url}
                alt={`${brand_name} ${model_name}`}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full aspect-[16/10] object-cover rounded-md shadow-sm"
              />
            </div>
            <div className="grid gap-10">
              <div className="grid gap-6 items-center">
                <div className="grid gap-y-5 @[350px]:grid-cols-2  @[500px]:grid-cols-3 @[850px]:grid-cols-2">
                  <p className="flex gap-2 items-center text-[1.2rem] @[800px]:text-[1.35rem]">
                    <FaRoad /> {mileage} km
                  </p>
                  <p className="flex gap-2 items-center text-[1.2rem] @[800px]:text-[1.35rem]">
                    <IoCalendarClearOutline />
                    {formattedDate(first_registration)}
                  </p>

                  <p className="flex gap-2 items-center text-[1.2rem] @[800px]:text-[1.35rem]">
                    <GiGearStickPattern />
                    {transmission_type}
                  </p>
                  <p className="flex gap-2 items-center text-[1.2rem] @[800px]:text-[1.35rem]">
                    <BsFuelPump /> {fuel_type_name}
                  </p>
                  <p className="flex gap-2 items-center text-[1.2rem] @[800px]:text-[1.35rem]">
                    <IoSpeedometer /> {power} Hp
                  </p>
                  <p className="flex gap-2 items-center text-[1.2rem] @[800px]:text-[1.35rem]">
                    <HiOutlineUsers />
                    {previous_owners === 1
                      ? `${previous_owners} owner`
                      : `${previous_owners} owners`}
                  </p>
                </div>
              </div>
              <div className="grid w-fit h-fit justify-self-end self-end">
                <p className="text-[1.25rem] sm:text-[1.6rem] bg-primary py-3 px-5 rounded-xl text-primary-foreground">
                  {formatPrice(price)}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ListingCard;
