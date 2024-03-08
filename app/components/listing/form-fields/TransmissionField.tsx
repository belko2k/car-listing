import { Transmission } from '@/types';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form';
import { Control } from 'react-hook-form';
import { z } from 'zod';
import { ListingSchema } from '@/schemas';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select';

type TransmissionFieldProps = {
  control: Control<z.infer<typeof ListingSchema>>;
  isSubmitting: boolean;
  transmission: Transmission[];
};

const TransmissionField = ({
  control,
  isSubmitting,
  transmission,
}: TransmissionFieldProps) => {
  return (
    <FormField
      control={control}
      name="transmission"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Transmission</FormLabel>
          <Select onValueChange={field.onChange} disabled={isSubmitting}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a transmission" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectGroup>
                {transmission?.map((t) => (
                  <SelectItem key={t.id} value={t.id.toString()}>
                    {t.transmission_type}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TransmissionField;
