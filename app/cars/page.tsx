import getListings from '@/actions/getListings';
import Wrapper from '../components/Wrapper';
import Image from 'next/image';

const CarsPage = async () => {
  const listings = await getListings();
  return (
    <Wrapper>
      <ul className="grid grid-cols-1 gap-8">
        {listings.map((listing) => {
          return (
            <li key={listing.id}>
              <p>{listing.title}</p>
              <p>{listing.price}</p>
              <p>{listing.brand_name}</p>
              <p>{listing.model_name}</p>
              <Image
                src={listing.url}
                alt="car"
                width="0"
                height="0"
                sizes="100vw"
                className="w-[500px] h-[300px] object-cover"
              />
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default CarsPage;
