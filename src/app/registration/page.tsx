'use client';
import { RegistrationFields } from '@/components/RegistrationForm/RegistrationFields/RegistrationFields';
import { inputFields } from '@/components/RegistrationForm/utitls/inputData';
import { FormData, Inputs } from '@/components/RegistrationForm/utitls/types';
import { useForm } from 'react-hook-form';

export default function Registration() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const onSubmit = (data: FormData) => {
    data.dob = new Date(data.dob);
    reset;
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-2xl font-semibold mb-4 text-center">
        Hello, please fill out the registration form for the event!
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
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
    </div>
  );
}
