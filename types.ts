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
