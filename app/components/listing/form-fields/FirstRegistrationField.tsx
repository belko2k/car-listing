import { CalendarIcon } from 'lucide-react';
import { Button } from '../../ui/button';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover';
import { Calendar } from '../../ui/calendar';

import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Control } from 'react-hook-form';
import { z } from 'zod';
import { ListingSchema } from '@/schemas';

type FirstRegistrationFieldProps = {
  control: Control<z.infer<typeof ListingSchema>>;
  isSubmitting: boolean;
};

const FirstRegistrationField = ({
  control,
  isSubmitting,
}: FirstRegistrationFieldProps) => {
  return (
    <FormField
      control={control}
      name="first_registration"
      render={({ field }) => (
        <FormItem>
          <FormLabel>First registration</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  disabled={isSubmitting}
                  variant={'outline'}
                  className={cn(
                    'w-full pl-3 text-left text-base font-normal',
                    !field.value && 'text-muted-foreground'
                  )}
                >
                  {field.value ? (
                    format(new Date(field.value), 'dd-MM-yyyy')
                  ) : (
                    <span>Pick a date</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 " align="start">
              <Calendar
                mode="single"
                captionLayout="dropdown-buttons"
                fromYear={1800}
                toYear={2025}
                selected={field.value}
                onSelect={field.onChange}
              />
            </PopoverContent>
          </Popover>
          <FormDescription>
            Pick any day of the month (only month and year matter)
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FirstRegistrationField;
