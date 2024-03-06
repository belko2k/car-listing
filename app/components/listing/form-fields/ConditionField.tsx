import { Condition } from '@/types';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form';
import { RadioGroup, RadioGroupItem } from '../../ui/radio-group';
import { Control } from 'react-hook-form';
import { z } from 'zod';
import { ListingSchema } from '@/schemas';

type ConditionFieldProps = {
  control: Control<z.infer<typeof ListingSchema>>;
  isSubmitting: boolean;
  condition: Condition[];
};

const ConditionField = ({
  control,
  isSubmitting,
  condition,
}: ConditionFieldProps) => {
  return (
    <FormField
      control={control}
      name="condition"
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>Condition</FormLabel>
          <FormControl>
            <RadioGroup onValueChange={field.onChange} className="flex gap-6">
              {condition?.map((c) => (
                <FormItem
                  key={c.id}
                  className="flex items-center gap-2 space-y-0"
                >
                  <FormControl>
                    <RadioGroupItem value={c.id.toString()} />
                  </FormControl>
                  <FormLabel className="font-normal">
                    {c.condition_type}
                  </FormLabel>
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

export default ConditionField;
