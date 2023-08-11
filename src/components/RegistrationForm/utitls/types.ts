import { FieldErrors } from 'react-hook-form';

export type ErrorProps = {
  errors: FieldErrors;
  name: string;
};

export type FormData = {
  [key: string]: string | number | Date;
};
export type Inputs = {
  fullName: string;
  age: string;
  dob: Date;
  profession: string;
  locality: string;
  numberOfGuests: string;
  address: string;
};
