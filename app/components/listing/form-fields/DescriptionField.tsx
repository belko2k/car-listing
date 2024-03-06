import { ListingSchema } from '@/schemas';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form';
import { Textarea } from '../../ui/textarea';
import { Control } from 'react-hook-form';
import { z } from 'zod';

type DescriptionFieldProps = {
  control: Control<z.infer<typeof ListingSchema>>;
  isSubmitting: boolean;
};

const DescriptioField = ({ control, isSubmitting }: DescriptionFieldProps) => {
  return (
    <FormField
      control={control}
      name="description"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Description</FormLabel>
          <FormControl>
            <Textarea
              placeholder="You can write more information here"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default DescriptioField;
