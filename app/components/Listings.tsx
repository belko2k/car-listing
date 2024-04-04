import getListings from '@/actions/getListings';
import ListingCard from './ListingCard';

const Listings = async () => {
  await new Promise((resolve) => setTimeout(resolve, 15000));
  const listings = await getListings();
  return (
    <div className="grid grid-cols-1 gap-8 my-12">
      {listings.map((listing) => (
        <ListingCard key={listing.id} {...listing} />
      ))}
    </div>
  );
};

export default Listings;
