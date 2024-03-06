import { ListingSchema } from '@/schemas';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form';
import { Control } from 'react-hook-form';
import { z } from 'zod';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select';
import { CarType } from '@/types';

type CarTypeFieldProps = {
  control: Control<z.infer<typeof ListingSchema>>;
  isSubmitting: boolean;
  carType: CarType[];
};

const CarTypeField = ({
  control,
  isSubmitting,
  carType,
}: CarTypeFieldProps) => {
  return (
    <FormField
      control={control}
      name="car_type"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Car Type</FormLabel>
          <Select onValueChange={field.onChange} disabled={isSubmitting}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a car type" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectGroup>
                {carType?.map((ct: any) => (
                  <SelectItem key={ct.id} value={ct.id.toString()}>
                    {ct.car_type_name}
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

export default CarTypeField;
