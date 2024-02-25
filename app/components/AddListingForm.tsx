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

import getCarTypes from '@/actions/getCarTypes';
import getModels from '@/actions/getModels';

const AddListingForm = () => {
  const form = useForm<z.infer<typeof ListingSchema>>({
    resolver: zodResolver(ListingSchema),
    defaultValues: {
      title: '',
      brand: '',
      model: '',
    },
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = form;

  const [carType, setCarType] = useState<any>([]);
  const [models, setModels] = useState<any>([]);
  const [selectedBrand, setSelectedBrand] = useState<string>('');

  useEffect(() => {
    const fetchFormData = async () => {
      const fetchedCarTypes = await getCarTypes();
      const fetchedCars = await getModels();
      setCarType(fetchedCarTypes);
      setModels(fetchedCars);
    };

    fetchFormData();
  }, []);

  const filteredModels = models.filter(
    (model: any) => model.brand.brand_name === selectedBrand
  );

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
        <div className="grid grid-cols-2 gap-4">
          {/* BRAND */}
          <FormField
            control={control}
            name="brand"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Brand</FormLabel>
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);
                    setSelectedBrand(value);
                  }}
                  defaultValue={field.value}
                  disabled={isSubmitting}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a brand" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      {models?.map((b: any) => (
                        <SelectItem key={b.brand.id} value={b.brand.brand_name}>
                          {b.brand.brand_name}
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
            control={control}
            name="model"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Model</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  disabled={isSubmitting}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a model" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      {filteredModels?.map((m: any) => (
                        <SelectItem key={m.id} value={m.id.toString()}>
                          {m.model_name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
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
