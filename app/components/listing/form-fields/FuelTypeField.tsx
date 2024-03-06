import { FuelType } from '@/types';
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

type FuelTypeFieldProps = {
  control: Control<z.infer<typeof ListingSchema>>;
  isSubmitting: boolean;
  fuelType: FuelType[];
};

const FuelTypeField = ({
  control,
  fuelType,
  isSubmitting,
}: FuelTypeFieldProps) => {
  return (
    <FormField
      control={control}
      name="fuel_type"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Fuel Type</FormLabel>
          <Select onValueChange={field.onChange} disabled={isSubmitting}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a fuel type" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectGroup>
                {fuelType?.map((f) => (
                  <SelectItem key={f.id} value={f.id.toString()}>
                    {f.fuel_type_name}
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

export default FuelTypeField;
