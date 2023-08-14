import { FormErrorMessage } from '@/components/RegistrationForm/FormErrorMessage/FormErrorMessage';
import { ValidationErrorMessages } from '@/components/RegistrationForm/utitls/enums';
import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { Inputs } from '../utitls/types';

export type SelectInputProps = {
  label: string;
  name: keyof Inputs;
  options: { value: string; label: string }[];
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
};

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  name,
  options,
  register,
  errors,
}) => {
  return (
    <div className="mb-4">
      <label>{label}</label>
      <select
        {...register(name, {
          required: ValidationErrorMessages.required,
        })}
        className="mt-1 p-2 border rounded-md w-full bg-white focus:outline-none focus:ring focus:ring-primaryColor"
      >
        <option value=""></option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <FormErrorMessage errors={errors} name={name} />
    </div>
  );
};

export default SelectInput;
