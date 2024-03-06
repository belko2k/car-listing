import { Color } from '@/types';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form';
import { RadioGroup, RadioGroupItem } from '../../ui/radio-group';
import { ListingSchema } from '@/schemas';
import { Control } from 'react-hook-form';
import { z } from 'zod';

type ColorFieldProps = {
  control: Control<z.infer<typeof ListingSchema>>;
  isSubmitting: boolean;
  color: Color[];
};

const ColorField = ({ control, color, isSubmitting }: ColorFieldProps) => {
  return (
    <FormField
      control={control}
      name="color"
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>Color</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              className="grid gap-6 grid-cols-4"
            >
              {color?.map((c) => (
                <FormItem
                  key={c.id}
                  className="flex items-center gap-2 space-y-0"
                >
                  <FormControl>
                    <RadioGroupItem value={c.id.toString()} />
                  </FormControl>
                  <FormLabel className="font-normal">{c.color_name}</FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ColorField;
