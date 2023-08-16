import { FormErrorMessage } from '@/components/RegistrationForm/FormErrorMessage/FormErrorMessage';
import { ValidationErrorMessages } from '@/components/RegistrationForm/utitls/enums';
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';
import { InputType } from '../utitls/types';

type TextInputProps<T extends FieldValues> = {
  label: string;
  type: InputType;
  name: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors;
  valueAsDate?: boolean;
};

export const TextInput = <T extends FieldValues>({
  label,
  type = 'text',
  name,
  register,
  errors,
  valueAsDate = false,
}: TextInputProps<T>) => {
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
