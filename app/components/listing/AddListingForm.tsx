'use client';

import * as z from 'zod';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Form } from '../ui/form';
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

const AddListingForm = () => {
  const form = useForm<z.infer<typeof ListingSchema>>({
    resolver: zodResolver(ListingSchema),
    defaultValues: {
      title: '',
      brand: '',
      model: 0,
      mileage: 0,
      price: 0,
      car_type: 0,
      power: 0,
      previous_owners: 0,
      door_count: 0,
      seat_count: 0,
      condition: 0,
      transmission: 0,
      fuel_type: 0,
    },
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = form;

  const [models, setModels] = useState<any>([]);
  const [brands, setBrands] = useState<any>([]);
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [carType, setCarType] = useState<any>([]);
  const [condition, setCondition] = useState<any>([]);
  const [transmission, setTransmission] = useState<any>([]);
  const [fuelType, setFuelType] = useState<any>([]);
  const [color, setColor] = useState<any>([]);

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

  // Function to filter models based on selected brand
  const filteredModels = models.filter(
    (model: any) => model.brand.id === selectedBrand
  );

  const handleBrandSelect = (brand: string) => {
    setSelectedBrand(brand);
    // Clear model when choosing brand again
    form.setValue('model', 0);
  };

  const onSubmit = (values: z.infer<typeof ListingSchema>) => {
    console.log('Form Submitted:', values);
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
