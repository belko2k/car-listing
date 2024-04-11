import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import Image from 'next/image';
import { GiGearStickPattern } from 'react-icons/gi';
import { GiPathDistance } from 'react-icons/gi';
import { IoCalendarClearOutline } from 'react-icons/io5';
import { FaBolt } from 'react-icons/fa6';
import { BsFuelPump } from 'react-icons/bs';
import { formatPrice } from '@/lib/utils';
import Link from 'next/link';

type Props = {
  title?: string;
  brand_name: string;
  model_name: string;
  url: string;
  price: number;
  first_registration: Date;
  mileage: number;
  power: number;
  transmission_type: string;
  fuel_type_name: string;
};

const ListingCard = ({
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
}: Props) => {
  const formattedDate = new Date(first_registration).toLocaleDateString(
    'en-US',
    { month: '2-digit', year: 'numeric' }
  );

  return (
    <Link href={`/cars`}>
      <Card>
        <CardHeader className="bg-primary rounded-t-md py-3">
          <CardTitle className="text-white font-normal text-[1.3rem]">
            {brand_name} {model_name} {title ? `| ${title}` : ''}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid mt-6 gap-8 @[850px]:grid-cols-[1fr,1fr,auto]">
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
            <div className="grid gap-6">
              <div className="grid gap-6  items-center">
                <div className="grid gap-y-5 @[350px]:grid-cols-2  @[500px]:grid-cols-3 @[850px]:grid-cols-2">
                  <p className="flex gap-2 items-center text-[1.2rem] min-[950px]:text-[1.35rem]">
                    <GiPathDistance /> {mileage} km
                  </p>
                  <p className="flex gap-2 items-center text-[1.2rem] min-[950px]:text-[1.35rem]">
                    <IoCalendarClearOutline /> {formattedDate}
                  </p>

                  <p className="flex gap-2 items-center text-[1.2rem] min-[950px]:text-[1.35rem]">
                    <GiGearStickPattern />
                    {transmission_type}
                  </p>
                  <p className="flex gap-2 items-center text-[1.2rem] min-[950px]:text-[1.35rem]">
                    <BsFuelPump /> {fuel_type_name}
                  </p>
                  <p className="flex gap-2 items-center text-[1.2rem] min-[950px]:text-[1.35rem]">
                    <FaBolt /> {power} Hp
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start min-[750px]:self-end">
                <p className="text-[1.25rem]  sm:text-[1.6rem] bg-primary py-3 px-5 rounded-xl text-primary-foreground">
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
