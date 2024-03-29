import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const ListingCard = ({
  title,
  brand_name,
  model_name,
  mileage,
  first_registration,
  transmission_type,
  price,
  url,
}: any) => {
  return (
    <Card>
      <CardHeader className="bg-primary rounded-md py-3">
        <CardTitle className="text-white font-normal">
          {brand_name} {model_name} | {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid mt-4 gap-4">
          <div>
            <Image
              src={url}
              alt={`${brand_name} ${model_name}`}
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto sm:w-[50%] object-cover rounded-md shadow-sm"
            />
          </div>
          <div>
            <p>{mileage}</p>
            <p>{first_registration}</p>
            <p>{transmission_type}</p>
          </div>
          <div>
            <p className="rounded-md shadow-md p-4">{price}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ListingCard;
