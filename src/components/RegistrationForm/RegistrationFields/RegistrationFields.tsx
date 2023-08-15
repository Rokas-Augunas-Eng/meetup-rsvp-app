import {
  FieldErrors,
  FieldPath,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form';
import { SelectInput } from '../SelectInput/SelectInput';
import { TextareaInput } from '../TextAreaInput/TextAreaInput';
import { TextInput } from '../TextInput/TextInput';
import { InputField, professionOptions } from '../utitls/inputData';

type RegistrationFieldProps<T extends FieldValues> = {
  field: InputField;
  register: UseFormRegister<T>;
  errors: FieldErrors;
};

export const RegistrationFields = <T extends FieldValues>({
  field,
  register,
  errors,
}: RegistrationFieldProps<T>) => {
  if (field.component === 'textInput') {
    return (
      <TextInput
        label={field.label}
        name={field.name as FieldPath<T>}
        type={field.type}
        register={register}
        errors={errors}
      />
    );
  } else if (field.component === 'selectInput') {
    return (
      <SelectInput
        label="Profession"
        name={'profession' as FieldPath<T>}
        options={professionOptions}
        register={register}
        errors={errors}
      />
    );
  } else if (field.component === 'textareaInput') {
    return (
      <TextareaInput
        label="Address"
        name={'address' as FieldPath<T>}
        register={register}
        errors={errors}
        value={50}
      />
    );
  } else return null;
};
