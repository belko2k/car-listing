import { Color } from '@/types';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form';
import {
  RadioGroupColor,
  RadioGroupItemColor,
} from '../../ui/color-radio-group';
import { ListingSchema } from '@/schemas';
import { Control } from 'react-hook-form';
import { z } from 'zod';
import { useState } from 'react';

type ColorFieldProps = {
  control: Control<z.infer<typeof ListingSchema>>;
  isSubmitting: boolean;
  color: Color[];
};

const ColorField = ({ control, color, isSubmitting }: ColorFieldProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <FormField
      control={control}
      name="color"
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>Color</FormLabel>
          <FormControl>
            <RadioGroupColor
              onValueChange={field.onChange}
              className="grid gap-6 grid-cols-4"
              disabled={isSubmitting}
            >
              {color?.map((c) => (
                <FormItem
                  key={c.id}
                  className="flex items-center gap-2 space-y-0"
                >
                  <FormControl>
                    <RadioGroupItemColor
                      value={c.id.toString()}
                      style={{ backgroundColor: c.color_code }}
                      colorName={c.color_name}
                      checked={checked}
                      onClick={() => setChecked(!checked)}
                    />
                  </FormControl>
                  <FormLabel className="font-normal cursor-pointer">
                    {c.color_name}
                  </FormLabel>
                </FormItem>
              ))}
            </RadioGroupColor>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ColorField;
