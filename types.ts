export type Brand = {
  id: number;
  brand_name: string;
};

export type Model = {
  id: number;
  model_name: string;
  brand_id: number;
};

export type CarType = {
  id: number;
  car_type_name: string;
};

export type Condition = {
  id: number;
  condition_type: string;
};

export type Transmission = {
  id: number;
  transmission_type: string;
};

export type FuelType = {
  id: number;
  fuel_type_name: string;
};

export type Color = {
  id: number;
  color_name: string;
  color_code: string;
};

export type Listing = {
  id: number;
  title: string;
  brand_name: string;
  model_name: string;
  url: string;
  price: number;
  first_registration: Date;
  mileage: number;
  power: number;
  transmission_type: string;
  fuel_type_name: string;
  previous_owners: number;
  created_at: Date;
  car_type_name: string;
  description: string;
  condition_type: string;
  color_name: string;
  availability: boolean;
};
export type SingleListing = {
  id: number;
  title: string;
  brand_name: string;
  model_name: string;
  url: string;
  price: number;
  first_registration: Date;
  mileage: number;
  power: number;
  transmission_type: string;
  fuel_type_name: string;
  previous_owners: number;
  created_at: Date;
  car_type_name: string;
  description: string;
  condition_type: string;
  color_name: string;
  door_count: number;
  seat_count: number;
  email: string;
  username: string;
  first_name?: string;
  last_name?: string;
  address?: string;
  contact_number: string;
};
