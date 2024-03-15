import { z } from 'zod';

import { Control } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormMessage } from '../../ui/form';
import { Input } from '../../ui/input';
import { ListingSchema } from '@/schemas';

type PriceFieldProps = {
  control: Control<z.infer<typeof ListingSchema>>;
  isSubmitting: boolean;
};

const PriceField = ({ control, isSubmitting }: PriceFieldProps) => {
  return (
    <FormField
      control={control}
      name="price"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-base">Price</FormLabel>
          <div className="flex">
            <Input
              {...field}
              placeholder="Enter price..."
              type="number"
              disabled={isSubmitting}
              className="text-base rounded-r-none focus-visible:ring-offset-0"
            />
            <div className="text-white bg-foreground w-14 text-center rounded-r-md grid items-center">
              €
            </div>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default PriceField;
