import React from 'react';
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import { RegistrationFields } from './RegistrationFields/RegistrationFields';
import { inputFields } from './utitls/inputData';
import { FormData, Inputs } from '@/components/RegistrationForm/utitls/types';

type RegistrationFormProps = {
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
  handleSubmit: UseFormHandleSubmit<Inputs>;
  // eslint-disable-next-line no-unused-vars
  onSubmitForm: (data: FormData) => void;
  isSubmitting: boolean;
};

export const RegistraionForm: React.FC<RegistrationFormProps> = ({
  handleSubmit,
  register,
  isSubmitting,
  onSubmitForm,
  errors,
}) => {
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
