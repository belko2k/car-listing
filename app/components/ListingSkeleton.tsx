import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Skeleton } from './ui/skeleton';

const ListingSkeleton = () => {
  return (
    <Card>
      <CardHeader className="rounded-t-md py-3">
        <CardTitle>
          <Skeleton className="w-full h-[20px]" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid mt-6 gap-8 @[850px]:grid-cols-[1fr,1fr,auto]">
          <div>
            <Skeleton className="w-full h-[300px] rounded-md" />
          </div>
          <div className="grid gap-6">
            <div className="grid gap-6 items-center">
              <div className="grid gap-y-5 @[350px]:grid-cols-2  @[500px]:grid-cols-3 @[850px]:grid-cols-2">
                <Skeleton className="w-[120px] h-[20px]" />
                <Skeleton className="w-[120px] h-[20px]" />
                <Skeleton className="w-[120px] h-[20px]" />
                <Skeleton className="w-[120px] h-[20px]" />
                <Skeleton className="w-[120px] h-[20px]" />
                <Skeleton className="w-[120px] h-[20px]" />
              </div>
            </div>
            <div className="flex flex-col items-start min-[750px]:self-end">
              <Skeleton className="w-[150px] h-[60px]" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ListingSkeleton;
