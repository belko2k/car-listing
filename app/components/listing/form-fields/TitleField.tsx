import { z } from 'zod';
import { ListingSchema } from '@/schemas';
import { FormField, FormItem, FormLabel, FormMessage } from '../../ui/form';
import { Input } from '../../ui/input';
import { Control } from 'react-hook-form';

type TitleFieldProps = {
  control: Control<z.infer<typeof ListingSchema>>;
  isSubmitting: boolean;
};

const TitleField = ({ control, isSubmitting }: TitleFieldProps) => {
  return (
    <FormField
      control={control}
      name="title"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-base">Title</FormLabel>
          <Input
            {...field}
            placeholder="Enter a title..."
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

export default TitleField;
