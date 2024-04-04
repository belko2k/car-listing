import Wrapper from '../components/Wrapper';
import Listings from '../components/Listings';
import { Suspense } from 'react';
import ListingSkeleton from '../components/ListingSkeleton';

const CarsPage = () => {
  return (
    <Wrapper>
      <h2>Listings</h2>
      <Suspense
        fallback={
          <>
            <ListingSkeleton />
            <ListingSkeleton />
            <ListingSkeleton />
            <ListingSkeleton />
            <ListingSkeleton />
          </>
        }
      >
        <Listings />
      </Suspense>
    </Wrapper>
  );
};

export default CarsPage;
