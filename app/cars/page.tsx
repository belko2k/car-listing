import Wrapper from '../components/Wrapper';
import Listings from '../components/Listings';
import { Suspense } from 'react';
import ListingSkeleton from '../components/ListingSkeleton';

const CarsPage = () => {
  return (
    <Wrapper>
      <main className="flex items-start gap-4">
        <div className="p-6 sticky max-[800px]:hidden top-[2rem] w-[300px] shrink-0 bg-background shadow-lg mt-12 rounded-md">
          <h2>Filters</h2>
        </div>

        <Suspense
          fallback={
            <div className="@container grid gap-8 my-12 w-full">
              <ListingSkeleton />
              <ListingSkeleton />
              <ListingSkeleton />
              <ListingSkeleton />
              <ListingSkeleton />
            </div>
          }
        >
          <Listings />
        </Suspense>
      </main>
    </Wrapper>
  );
};

export default CarsPage;
