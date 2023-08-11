import { FieldErrors, UseFormRegister } from 'react-hook-form';
import SelectInput from '../SelectInput/SelectInput';
import TextareaInput from '../TextAreaInput/TextAreaInput';
import { TextInput } from '../TextInput/TextInput';
import { Inputs } from '../utitls/types';
import { InputField, professionOptions } from '../utitls/inputData';

type RegistrationFieldProps = {
  field: InputField;
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
};

export const RegistrationFields: React.FC<RegistrationFieldProps> = ({
  field,
  register,
  errors,
}) => {
  if (field.component === 'textInput') {
    return (
      <TextInput
        label={field.label}
        name={field.name}
        type={field.type}
        register={register}
        errors={errors}
      />
    );
  } else if (field.component === 'selectInput') {
    return (
      <SelectInput
        label="Profession"
        name="profession"
        options={professionOptions}
        register={register}
        errors={errors}
      />
    );
  } else if (field.component === 'textareaInput') {
    return (
      <TextareaInput
        label="Address"
        name="address"
        register={register}
        errors={errors}
        value={50}
      />
    );
  } else return null;
};
