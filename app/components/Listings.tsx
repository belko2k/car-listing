import getListings from '@/actions/getListings';
import ListingCard from './ListingCard';

const Listings = async () => {
  const listings = await getListings();
  // await new Promise((resolve) => setTimeout(resolve, 10000));
  return (
    <div className="@container grid gap-8 my-12 w-full">
      {listings.map((listing: any) => (
        <ListingCard key={listing.id} {...listing} />
      ))}
    </div>
  );
};

export default Listings;
