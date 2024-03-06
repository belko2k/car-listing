import { z } from 'zod';

import { Control } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormMessage } from '../../ui/form';
import { Input } from '../../ui/input';
import { ListingSchema } from '@/schemas';

type MileageFieldProps = {
  control: Control<z.infer<typeof ListingSchema>>;
  isSubmitting: boolean;
};

const MileageField = ({ control, isSubmitting }: MileageFieldProps) => {
  return (
    <FormField
      control={control}
      name="mileage"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-base">Mileage</FormLabel>
          <div className="flex">
            <Input
              {...field}
              placeholder="Enter a price..."
              type="text"
              disabled={isSubmitting}
              className="text-base rounded-r-none focus-visible:ring-offset-0"
            />
            <div className="text-white text-center w-14 bg-foreground px-3 rounded-r-md grid items-center">
              km
            </div>
          </div>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default MileageField;
