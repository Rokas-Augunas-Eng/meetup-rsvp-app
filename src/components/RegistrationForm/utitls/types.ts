import { FieldErrors } from 'react-hook-form';

export type ErrorProps = {
  errors: FieldErrors;
  name: string;
};

export type FormData<T> = {
  [key in keyof T]: string | number | Date;
};

export type InputType = 'text' | 'date' | undefined;

export type Inputs = {
  fullName: string;
  age: string;
  dob: Date;
  profession: string;
  locality: string;
  numberOfGuests: string;
  address: string;
};
