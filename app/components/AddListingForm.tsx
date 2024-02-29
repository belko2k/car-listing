'use client';

import * as z from 'zod';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { ListingSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from './ui/input';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

import SubmitBtn from './SubmitBtn';

import getModels from '@/actions/getModels';
import getCarTypes from '@/actions/getCarTypes';
import getCondition from '@/actions/getCondition';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Button } from './ui/button';
import { Check, ChevronsUpDown } from 'lucide-react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from './ui/command';

import { cn } from '@/lib/utils';
import getBrands from '@/actions/getBrands';

const AddListingForm = () => {
  const form = useForm<z.infer<typeof ListingSchema>>({
    resolver: zodResolver(ListingSchema),
    defaultValues: {
      title: '',
      brand: '',
      model: 0,
      car_type: '',
    },
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = form;

  const [openBrand, setOpenBrand] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const [models, setModels] = useState<any>([]);
  const [selectedModelName, setSelectedModelName] = useState<string>('');
  const [brands, setBrands] = useState<any>([]);
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [carType, setCarType] = useState<any>([]);
  const [condition, setCondition] = useState<any>([]);

  useEffect(() => {
    const fetchFormData = async () => {
      const fetchedBrands = await getBrands();
      const fetchedModels = await getModels();
      const fetchedCarTypes = await getCarTypes();
      const fetchedCondition = await getCondition();
      setBrands(fetchedBrands);
      setModels(fetchedModels);
      setCarType(fetchedCarTypes);
      setCondition(fetchedCondition);
    };

    fetchFormData();
  }, []);

  // Function to filter models based on selected brand
  const filteredModels = models.filter(
    (model: any) => model.brand.id === selectedBrand
  );

  const handleBrandSelect = (brandId: string) => {
    setSelectedBrand(brandId);
    // Clear model when choosing brand again
    form.setValue('model', 0);
  };

  const onSubmit = (values: any) => {
    console.log('Form Submitted:', values);
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* TITLE */}
        <FormField
          control={control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Title</FormLabel>
              <Input
                {...field}
                placeholder="Enter a title..."
                type="text"
                disabled={isSubmitting}
                className="text-base"
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-3">
          {/* BRAND */}
          <FormField
            control={control}
            name="brand"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Brand</FormLabel>
                <Popover open={openBrand} onOpenChange={setOpenBrand}>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={openBrand}
                        className={cn(
                          ' justify-between',
                          !field.value && 'text-muted-foreground'
                        )}
                      >
                        {field.value ? field.value : 'Select brand'}

                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Search brand..." />
                      <CommandEmpty>No brands found.</CommandEmpty>
                      <CommandGroup>
                        {brands?.map((b: any) => (
                          <CommandItem
                            value={b.brand_name}
                            key={b.id}
                            onSelect={() => {
                              form.setValue('brand', b.brand_name);
                              handleBrandSelect(b.id);
                              setOpenBrand(false);
                            }}
                          >
                            <Check
                              className={cn(
                                'mr-2 h-4 w-4',
                                b.id === field.value
                                  ? 'opacity-100'
                                  : 'opacity-0'
                              )}
                            />
                            {b.brand_name}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* MODEL */}
          <FormField
            control={control}
            name="model"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Model</FormLabel>
                <Popover open={openModel} onOpenChange={setOpenModel}>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={openModel}
                        className={cn(
                          'justify-between',
                          !field.value && 'text-muted-foreground'
                        )}
                      >
                        {field.value ? selectedModelName : 'Select model'}

                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Search model..." />
                      <CommandEmpty>No models found.</CommandEmpty>
                      <CommandGroup>
                        {filteredModels?.map((m: any) => (
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
                                m.id === field.value
                                  ? 'opacity-100'
                                  : 'opacity-0'
                              )}
                            />
                            {m.model_name}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* CAR TYPE */}
        <FormField
          control={control}
          name="car_type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Car Type</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                disabled={isSubmitting}
              >
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
        <SubmitBtn
          label="Create a listing"
          type="submit"
          isSubmitting={isSubmitting}
        />
      </form>
    </Form>
  );
};

export default AddListingForm;
