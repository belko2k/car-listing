import { z } from 'zod';
import { Check, ChevronsUpDown } from 'lucide-react';
import { Button } from '../../ui/button';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '../../ui/command';
import { cn } from '@/lib/utils';
import { ListingSchema } from '@/schemas';
import { Control, UseFormReturn } from 'react-hook-form';
import { Brand } from '@/types';
import { useState } from 'react';
import { ScrollArea } from '../../ui/scroll-area';

type BrandFieldProps = {
  control: Control<z.infer<typeof ListingSchema>>;
  isSubmitting: boolean;
  brands: Brand[];
  handleBrandSelect: (brand: number) => void;
  form: UseFormReturn<z.infer<typeof ListingSchema>>;
};

const BrandField = ({
  control,
  isSubmitting,
  brands,
  handleBrandSelect,
  form,
}: BrandFieldProps) => {
  const [openBrand, setOpenBrand] = useState(false);
  const [selectedBrandName, setSelectedBrandName] = useState<string>('');

  return (
    <FormField
      control={control}
      name="brand"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>Brand</FormLabel>
          <Popover open={openBrand} onOpenChange={setOpenBrand} modal>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={openBrand}
                  disabled={isSubmitting}
                  className={cn(
                    ' justify-between text-base',
                    !field.value && 'text-muted-foreground'
                  )}
                >
                  {field.value ? selectedBrandName : 'Select brand'}

                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="p-0 popover-content-width-same-as-its-trigger">
              <Command>
                <CommandInput placeholder="Search brand..." />
                <CommandEmpty>No brands found.</CommandEmpty>
                <ScrollArea className="h-[10rem]">
                  <CommandGroup>
                    {brands?.map((b) => (
                      <CommandItem
                        value={b.brand_name}
                        key={b.id}
                        onSelect={() => {
                          form.setValue('brand', b.id);
                          handleBrandSelect(b.id);
                          setSelectedBrandName(b.brand_name);
                          setOpenBrand(false);
                        }}
                      >
                        <Check
                          className={cn(
                            'mr-2 h-4 w-4',
                            b.id === field.value ? 'opacity-100' : 'opacity-0'
                          )}
                        />
                        {b.brand_name}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </ScrollArea>
              </Command>
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default BrandField;
