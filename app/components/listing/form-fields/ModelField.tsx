import { z } from 'zod';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form';
import { Button } from '../../ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover';
import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown } from 'lucide-react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '../../ui/command';
import { Control, UseFormReturn } from 'react-hook-form';
import { ListingSchema } from '@/schemas';
import { useState } from 'react';
import { Model } from '@/types';
import { ScrollArea } from '../../ui/scroll-area';

type ModelFieldProps = {
  control: Control<z.infer<typeof ListingSchema>>;
  isSubmitting: boolean;
  filteredModels: Model[];
  form: UseFormReturn<z.infer<typeof ListingSchema>>;
};

const ModelField = ({
  control,
  isSubmitting,
  filteredModels,
  form,
}: ModelFieldProps) => {
  const [openModel, setOpenModel] = useState(false);
  const [selectedModelName, setSelectedModelName] = useState<string>('');

  return (
    <FormField
      control={control}
      name="model"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>Model</FormLabel>
          <Popover open={openModel} onOpenChange={setOpenModel} modal>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  disabled={isSubmitting}
                  variant="outline"
                  role="combobox"
                  aria-expanded={openModel}
                  className={cn(
                    'justify-between text-base',
                    !field.value && 'text-muted-foreground'
                  )}
                >
                  {field.value ? selectedModelName : 'Select model'}

                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="p-0 popover-content-width-same-as-its-trigger">
              <Command>
                <CommandInput placeholder="Search model..." />
                <CommandEmpty>No models found.</CommandEmpty>
                <ScrollArea className="h-[10rem]">
                  <CommandGroup>
                    {filteredModels?.map((m) => (
                      <CommandItem
                        value={m.model_name}
                        key={m.id}
                        onSelect={() => {
                          form.setValue('model', m.id);
                          setSelectedModelName(m.model_name);
                          setOpenModel(false);
                        }}
                      >
                        <Check
                          className={cn(
                            'mr-2 h-4 w-4',
                            m.id === field.value ? 'opacity-100' : 'opacity-0'
                          )}
                        />
                        {m.model_name}
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

export default ModelField;
