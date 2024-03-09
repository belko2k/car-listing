import { ListingSchema } from '@/schemas';
import { FormField, FormItem, FormLabel, FormMessage } from '../../ui/form';
import { Input } from '../../ui/input';
import { Control } from 'react-hook-form';
import { z } from 'zod';

type PreviousOwnersFieldProps = {
  control: Control<z.infer<typeof ListingSchema>>;
  isSubmitting: boolean;
};

const PreviousOwnersField = ({
  control,
  isSubmitting,
}: PreviousOwnersFieldProps) => {
  return (
    <FormField
      control={control}
      name="previous_owners"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-base">Previous owners</FormLabel>
          <Input
            {...field}
            placeholder="Enter number of owners"
            type="number"
            disabled={isSubmitting}
            className="text-base"
          />
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default PreviousOwnersField;
