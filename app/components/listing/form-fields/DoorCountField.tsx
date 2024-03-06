import { ListingSchema } from '@/schemas';
import { FormField, FormItem, FormLabel, FormMessage } from '../../ui/form';
import { Input } from '../../ui/input';
import { Control } from 'react-hook-form';
import { z } from 'zod';

type DoorCountFieldProps = {
  control: Control<z.infer<typeof ListingSchema>>;
  isSubmitting: boolean;
};

const DoorCountField = ({ control, isSubmitting }: DoorCountFieldProps) => {
  return (
    <FormField
      control={control}
      name="door_count"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-base">Number of doors</FormLabel>
          <Input
            {...field}
            placeholder="Enter number of doors"
            type="text"
            disabled={isSubmitting}
            className="text-base"
          />
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default DoorCountField;
