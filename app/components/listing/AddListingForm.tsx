'use client';

import * as z from 'zod';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Form, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import SubmitBtn from '../SubmitBtn';

import { ListingSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';

import getModels from '@/actions/getModels';
import getCarTypes from '@/actions/getCarTypes';
import getCondition from '@/actions/getCondition';
import getFuelType from '@/actions/getFuelType';
import getBrands from '@/actions/getBrands';
import getColors from '@/actions/getColors';
import getTransmissions from '@/actions/getTransmissions';

import TitleField from './form-fields/TitleField';
import BrandField from './form-fields/BrandField';
import ModelField from './form-fields/ModelField';
import MileageField from './form-fields/MileageField';
import PriceField from './form-fields/PriceField';
import PowerField from './form-fields/PowerField';
import PreviousOwnersField from './form-fields/PreviousOwnersField';
import DoorCountField from './form-fields/DoorCountField';
import SeatCountField from './form-fields/SeatCountField';
import CarTypeField from './form-fields/CarTypeField';
import ConditionField from './form-fields/ConditionField';
import TransmissionField from './form-fields/TransmissionField';
import FuelTypeField from './form-fields/FuelTypeField';
import FirstRegistrationField from './form-fields/FirstRegistrationField';
import DescriptioField from './form-fields/DescriptionField';
import ColorField from './form-fields/ColorField';
import {
  Brand,
  CarType,
  Color,
  Condition,
  FuelType,
  Model,
  Transmission,
} from '@/types';
import { Input } from '../ui/input';
import { supabaseBrowser } from '@/lib/supabase/client';
import { Button } from '../ui/button';
import { createListing, getSignedURL } from '@/actions/actions';
import { toast } from 'sonner';
import { useListingModal } from '@/store/use-listing-modal';

const AddListingForm = () => {
  const form = useForm<z.infer<typeof ListingSchema>>({
    resolver: zodResolver(ListingSchema),
    defaultValues: {
      title: '',
      brand: 0,
      model: 0,
      mileage: 0,
      price: 0,
      power: 0,
      previous_owners: 0,
      door_count: 0,
      seat_count: 0,
      car_type: 0,
      condition: 0,
      transmission: 0,
      fuel_type: 0,
      image: '',
    },
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = form;

  const listingModal = useListingModal();

  const [models, setModels] = useState<Model[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<number | undefined>();
  const [carType, setCarType] = useState<CarType[]>([]);
  const [condition, setCondition] = useState<Condition[]>([]);
  const [transmission, setTransmission] = useState<Transmission[]>([]);
  const [fuelType, setFuelType] = useState<FuelType[]>([]);
  const [color, setColor] = useState<Color[]>([]);
  const [file, setFile] = useState<File | undefined>(undefined);
  const [fileUrl, setFileUrl] = useState<string | undefined>(undefined);

  const imageInputRef = form.register('image');

  const computeSHA256 = async (file: File) => {
    const buffer = await file.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
    return hashHex;
  };

  useEffect(() => {
    const fetchFormData = async () => {
      const fetchedBrands = await getBrands();
      const fetchedModels = await getModels();
      const fetchedCarTypes = await getCarTypes();
      const fetchedConditions = await getCondition();
      const fetchedTransmissions = await getTransmissions();
      const fetchedFuelTypes = await getFuelType();
      const fetchedColors = await getColors();
      setBrands(fetchedBrands);
      setModels(fetchedModels);
      setCarType(fetchedCarTypes);
      setCondition(fetchedConditions);
      setTransmission(fetchedTransmissions);
      setFuelType(fetchedFuelTypes);
      setColor(fetchedColors);
    };

    fetchFormData();
  }, []);

  const handleBrandSelect = (brand: number) => {
    setSelectedBrand(brand);
    form.setValue('model', 0);
  };

  // Function to filter models based on selected brand
  const filteredModels = models.filter((m) => m.brand_id === selectedBrand);

  const handleImage = (e: React.FormEvent<HTMLInputElement>) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    setFile(file);

    if (fileUrl) {
      URL.revokeObjectURL(fileUrl);
    }

    if (file) {
      const url = URL.createObjectURL(file);
      setFileUrl(url);
    } else {
      setFileUrl(undefined);
    }
  };

  const onSubmit = async (values: z.infer<typeof ListingSchema>) => {
    // await new Promise((resolve) => setTimeout(resolve, 2000));

    const supabase = supabaseBrowser();
    const user = await supabase.auth.getUser();

    console.log('values', values);

    try {
      let mediaId: number | undefined = undefined;
      if (file) {
        const checksum = await computeSHA256(file);
        const signedURLResult = await getSignedURL(
          file.type,
          file.size,
          checksum
        );
        if (signedURLResult.failure !== undefined) {
          console.error('error');
          throw new Error(signedURLResult.failure);
        }
        const { url } = signedURLResult.success;
        mediaId = signedURLResult.success.mediaId;
        await fetch(url, {
          method: 'PUT',
          body: file,
          headers: {
            'Content-type': file.type,
          },
        });

        await createListing({
          title: values.title,
          price: values.price,
          availability: true,
          mileage: values.mileage,
          condition_id: values.condition,
          first_registration: values.first_registration,
          description: values.description,
          mediaId,
          model_id: values.model,
          fuel_type_id: values.fuel_type,
          transmission_id: values.transmission,
          color_id: values.color,
          car_type_id: values.car_type,
          seat_count: values.seat_count,
          door_count: values.door_count,
          power: values.power,
          previous_owners: values.previous_owners,
        });
      }

      toast.success('Created!');
    } catch (error) {
      toast.error('Error updating the data!');
      console.log(error);
    } finally {
      listingModal.close();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* TITLE */}
        <TitleField control={control} isSubmitting={isSubmitting} />
        <div className="grid grid-cols-2 grid-flow-row gap-6">
          {/* BRAND */}
          <BrandField
            control={control}
            isSubmitting={isSubmitting}
            brands={brands}
            handleBrandSelect={handleBrandSelect}
            form={form}
          />

          {/* MODEL */}
          <ModelField
            control={control}
            isSubmitting={isSubmitting}
            filteredModels={filteredModels}
            form={form}
          />

          {/* MILEAGE */}
          <MileageField control={control} isSubmitting={isSubmitting} />

          {/* PRICE */}
          <PriceField control={control} isSubmitting={isSubmitting} />

          {/* POWER */}
          <PowerField control={control} isSubmitting={isSubmitting} />

          {/* PREV. OWNERS */}
          <PreviousOwnersField control={control} isSubmitting={isSubmitting} />

          {/* Door count */}
          <DoorCountField control={control} isSubmitting={isSubmitting} />

          {/* SEAT count */}
          <SeatCountField control={control} isSubmitting={isSubmitting} />

          {/* CAR TYPE */}
          <CarTypeField
            control={control}
            carType={carType}
            isSubmitting={isSubmitting}
          />

          {/* CONDITION */}
          <ConditionField
            control={control}
            condition={condition}
            isSubmitting={isSubmitting}
          />

          {/* TRANSMISSION*/}
          <TransmissionField
            control={control}
            transmission={transmission}
            isSubmitting={isSubmitting}
          />

          {/* FUEL TYPE */}
          <FuelTypeField
            control={control}
            fuelType={fuelType}
            isSubmitting={isSubmitting}
          />

          {/* FIRST REGISTRATION */}
          <FirstRegistrationField
            control={control}
            isSubmitting={isSubmitting}
          />
        </div>
        {/* DESCRIPTION */}
        <DescriptioField control={control} isSubmitting={isSubmitting} />
        {/* COLOR */}
        <ColorField
          control={control}
          color={color}
          isSubmitting={isSubmitting}
        />

        <FormField
          control={control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Image</FormLabel>
              <Input
                {...imageInputRef}
                placeholder="Upload a file"
                type="file"
                onChange={handleImage}
                disabled={isSubmitting}
                accept="image/png, image/jpeg, image/webp, image/heic"
              />
              <FormMessage />
            </FormItem>
          )}
        />

        {fileUrl && file && (
          <div className="grid gap-2">
            <p className="mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={fileUrl} alt={file.name} />
            </p>
            <Button
              variant="destructive"
              disabled={isSubmitting}
              onClick={() => {
                setFile(undefined);
                setFileUrl(undefined);
                form.setValue('image', undefined);
              }}
            >
              Remove Image
            </Button>
          </div>
        )}

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
