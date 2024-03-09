import { z } from 'zod';

import { Control } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormMessage } from '../../ui/form';
import { Input } from '../../ui/input';
import { ListingSchema } from '@/schemas';

type PowerFieldProps = {
  control: Control<z.infer<typeof ListingSchema>>;
  isSubmitting: boolean;
};

const PowerField = ({ control, isSubmitting }: PowerFieldProps) => {
  return (
    <FormField
      control={control}
      name="power"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-base">Power</FormLabel>
          <div className="flex">
            <Input
              {...field}
              placeholder="Enter horse power..."
              type="number"
              disabled={isSubmitting}
              className="text-base rounded-r-none focus-visible:ring-offset-0"
            />
            <div className="text-white text-center bg-foreground w-14 rounded-r-md grid items-center">
              hp
            </div>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default PowerField;
