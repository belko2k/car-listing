import { ListingSchema } from '@/schemas';
import { FormField, FormItem, FormLabel, FormMessage } from '../../ui/form';
import { Input } from '../../ui/input';
import { Control } from 'react-hook-form';
import { z } from 'zod';

type SeatCountFieldProps = {
  control: Control<z.infer<typeof ListingSchema>>;
  isSubmitting: boolean;
};

const SeatCountField = ({ control, isSubmitting }: SeatCountFieldProps) => {
  return (
    <FormField
      control={control}
      name="seat_count"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-base">Number of seats</FormLabel>
          <Input
            {...field}
            placeholder="Enter number of seats"
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

export default SeatCountField;
