'use client';

import * as z from 'zod';

import { useState, useEffect, useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Form } from '../ui/form';
import SubmitBtn from '../SubmitBtn';

import Dropzone from 'react-dropzone';

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
import Image from 'next/image';

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
      image: undefined,
    },
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = form;

  const [models, setModels] = useState<Model[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<number | undefined>();
  const [carType, setCarType] = useState<CarType[]>([]);
  const [condition, setCondition] = useState<Condition[]>([]);
  const [transmission, setTransmission] = useState<Transmission[]>([]);
  const [fuelType, setFuelType] = useState<FuelType[]>([]);
  const [color, setColor] = useState<Color[]>([]);

  const [myFiles, setMyFiles] = useState<(File & { preview: string })[]>([]);
  const removeAll = () => {
    setMyFiles([]);
    form.setValue('image', undefined);
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
    // Clear model when choosing brand again
    form.setValue('model', 0);
  };

  // Function to filter models based on selected brand
  const filteredModels = models.filter((m) => m.brand_id === selectedBrand);

  const onSubmit = async (values: z.infer<typeof ListingSchema>) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
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
        <Controller
          control={control}
          name="image"
          rules={{
            required: { value: true, message: 'This field is required' },
          }}
          render={({ field: { onChange, onBlur }, fieldState }) => (
            <Dropzone
              multiple
              noClick
              maxSize={7242880}
              accept={{
                'image/jpeg': [],
                'image/png': [],
              }}
              onDrop={(acceptedFiles) => {
                form.setValue('image', acceptedFiles as unknown as FileList, {
                  shouldValidate: true,
                });
                setMyFiles(
                  acceptedFiles.map((file) =>
                    Object.assign(file, { preview: URL.createObjectURL(file) })
                  )
                );
              }}
            >
              {({
                getRootProps,
                getInputProps,
                open,
                isDragActive,
                acceptedFiles,
              }) => (
                <>
                  <div>
                    <div {...getRootProps()}>
                      <input
                        {...getInputProps({
                          id: 'spreadsheet',
                          onChange,
                          onBlur,
                        })}
                      />

                      <p>
                        <button type="button" onClick={open}>
                          Choose a file
                        </button>
                        or drag and drop
                      </p>

                      {myFiles.length
                        ? myFiles.map((file) => (
                            <li key={file.name}>
                              <img src={file.preview} alt={file.name} />
                              {file.name} - {file.size} bytes
                            </li>
                          ))
                        : 'No file selected.'}

                      <div>
                        {fieldState.error && (
                          <span role="alert">{fieldState.error.message}</span>
                        )}
                      </div>
                      {myFiles.length > 0 && (
                        <button onClick={removeAll}>Remove All</button>
                      )}
                    </div>
                  </div>
                  <div></div>
                </>
              )}
            </Dropzone>
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
