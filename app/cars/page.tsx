import getListings from '@/actions/getListings';
import Wrapper from '../components/Wrapper';
import ListingCard from '../components/ListingCard';

const CarsPage = async () => {
  const listings = await getListings();
  return (
    <Wrapper>
      <div className="grid grid-cols-1 gap-3">
        {listings.map((listing) => (
          <ListingCard key={listing.id} {...listing} />
        ))}
      </div>
    </Wrapper>
  );
};

export default CarsPage;
