'use client';

import * as z from 'zod';
import { useState, useEffect } from 'react';
import getCarTypes from '@/actions/getCarTypes';
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
import getCarBrands from '@/actions/getCarBrands';

const AddListingForm = () => {
  const form = useForm<z.infer<typeof ListingSchema>>({
    resolver: zodResolver(ListingSchema),
    defaultValues: {
      title: '',
      brand: '',
      model: '',
    },
  });
  const [carType, setCarType] = useState<any>([]);
  const [carBrand, setCarBrand] = useState<any>([]);

  useEffect(() => {
    const fetchFormData = async () => {
      const fetchedCarTypes = await getCarTypes();
      const fetchedCarBrands = await getCarBrands();
      setCarType(fetchedCarTypes);
      setCarBrand(fetchedCarBrands);
    };

    fetchFormData();
  }, []);

  //   console.log(carBrand);
  //   console.log(carType);

  const onSubmit = () => {};

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* TITLE */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Title</FormLabel>
              <Input
                {...field}
                placeholder="Enter a title..."
                type="text"
                // disabled={isSubmitting}
                className="text-base"
              />
              <FormMessage />
            </FormItem>
          )}
        />
        {/* BRAND */}
        <FormField
          control={form.control}
          name="brand"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Brand</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a brand" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    {carBrand?.map((brand: any) => (
                      <SelectItem
                        key={brand.brand.id}
                        value={brand.brand.id.toString()}
                      >
                        {brand.brand.brand_name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* MODEL */}
        <FormField
          control={form.control}
          name="model"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Model</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a model" />
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
      </form>
    </Form>
  );
};

export default AddListingForm;
