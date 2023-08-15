import {
  FieldErrors,
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import { RegistrationFields } from './RegistrationFields/RegistrationFields';
import { inputFields } from './utitls/inputData';

type RegistrationFormProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  errors: FieldErrors;
  handleSubmit: UseFormHandleSubmit<T>;
  onSubmitForm: (data: T) => void;
  isSubmitting: boolean;
};

export const RegistrationForm = <T extends FieldValues>({
  handleSubmit,
  register,
  isSubmitting,
  onSubmitForm,
  errors,
}: RegistrationFormProps<T>) => {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-4 text-center">
        Hello, please fill out the registration form for the event!
      </h1>

      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="bg-white p-6 rounded-md shadow-md w-96"
      >
        {inputFields.map((field, index) => (
          <RegistrationFields
            key={index}
            field={field}
            register={register}
            errors={errors}
          />
        ))}

        <input
          type="submit"
          disabled={isSubmitting}
          value={isSubmitting ? 'Submitting...' : 'Submit'}
          className={`px-4 py-2 w-full cursor-pointer bg-primaryColor text-white rounded-md hover:opacity-70 ${
            isSubmitting && 'pointer-events-none disabled:opacity-30'
          }`}
        />
      </form>
    </>
  );
};
