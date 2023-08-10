import { FormErrorMessage } from '@/components/RegistrationForm/FormErrorMessage/FormErrorMessage';
import { ValidationErrorMessages } from '@/components/RegistrationForm/utitls/enums';
import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { Inputs } from '../utitls/types';

export type TextInputProps = {
  label: string;
  type: 'text' | 'date' | undefined;
  name: keyof Inputs;
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
  valueAsDate?: boolean;
};

export const TextInput: React.FC<TextInputProps> = ({
  label,
  type = 'text',
  name,
  register,
  errors,
  valueAsDate = false,
}) => {
  return (
    <div className="mb-4">
      <label>{label}</label>
      <input
        type={type}
        {...register(name, {
          required: ValidationErrorMessages.required,
          valueAsDate: valueAsDate,
        })}
        className="mt-1 p-2 border rounded-md w-full bg-white focus:outline-none focus:ring focus:ring-primaryColor"
      />
      <FormErrorMessage errors={errors} name={name} />
    </div>
  );
};
