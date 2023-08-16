import { FormErrorMessage } from '@/components/RegistrationForm/FormErrorMessage/FormErrorMessage';
import { ValidationErrorMessages } from '@/components/RegistrationForm/utitls/enums';
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';

export type SelectInputProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  options: { value: string; label: string }[];
  register: UseFormRegister<T>;
  errors: FieldErrors;
};

export const SelectInput = <T extends FieldValues>({
  label,
  name,
  options,
  register,
  errors,
}: SelectInputProps<T>) => {
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
