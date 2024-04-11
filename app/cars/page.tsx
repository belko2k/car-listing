import Wrapper from '../components/Wrapper';
import Listings from '../components/Listings';
import { Suspense } from 'react';
import ListingSkeleton from '../components/ListingSkeleton';

const CarsPage = () => {
  return (
    <Wrapper>
      <main className="flex gap-4">
        <div className="relative hidden min-[800px]:block w-[300px] shrink-0 bg-red-400">
          <div className="sticky top-0">
            <h2>Filters</h2>
          </div>
        </div>

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
      </main>
    </Wrapper>
  );
};

export default CarsPage;
