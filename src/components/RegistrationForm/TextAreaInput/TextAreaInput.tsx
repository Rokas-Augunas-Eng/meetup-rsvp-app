import { FormErrorMessage } from '@/components/RegistrationForm/FormErrorMessage/FormErrorMessage';
import { ValidationErrorMessages } from '@/components/RegistrationForm/utitls/enums';
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';

export type TextareaInputProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors;
  value: number;
};

export const TextareaInput = <T extends FieldValues>({
  label,
  name,
  register,
  errors,
  value,
}: TextareaInputProps<T>) => {
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
