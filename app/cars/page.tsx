import Wrapper from '../components/Wrapper';
import Listings from '../components/Listings';
import { Suspense } from 'react';
import ListingSkeleton from '../components/ListingSkeleton';

const CarsPage = () => {
  return (
    <Wrapper>
      <main className="flex justify-between items-start gap-4">
        <div className="p-6 sticky max-[800px]:hidden top-[2rem] w-[300px] shrink-0 bg-background shadow-lg mt-12 rounded-md">
          <h2>Filters</h2>
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
