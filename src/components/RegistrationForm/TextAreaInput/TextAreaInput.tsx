import { FormErrorMessage } from '@/components/RegistrationForm/FormErrorMessage/FormErrorMessage';
import { ValidationErrorMessages } from '@/components/RegistrationForm/utitls/enums';
import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { Inputs } from '../utitls/types';

export type TextareaInputProps = {
  label: string;
  name: keyof Inputs;
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
  value: number;
};

const TextareaInput: React.FC<TextareaInputProps> = ({
  label,
  name,
  register,
  errors,
  value,
}) => {
  return (
    <div className="mb-4">
      <label>{label}</label>
      <textarea
        {...register(name, {
          required: ValidationErrorMessages.required,
          maxLength: {
            value: value,
            message: ValidationErrorMessages.maxLength,
          },
        })}
        className="mt-1p-2 border rounded-md w-full bg-white focus:outline-none focus:ring focus:border-primaryColor"
      />
      <FormErrorMessage errors={errors} name={name} />
    </div>
  );
};

export default TextareaInput;
