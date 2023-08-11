'use client';
import { Modal } from '@/components/Modal/Modal';
import { RegistrationFields } from '@/components/RegistrationForm/RegistrationFields/RegistrationFields';
import { inputFields } from '@/components/RegistrationForm/utitls/inputData';
import { FormData, Inputs } from '@/components/RegistrationForm/utitls/types';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

export default function Registration() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<Inputs>();

  const onSubmit = (data: FormData) => {
    data.dob = new Date(data.dob);
    reset();
  };

  const handleBackClick = (event: { preventDefault: () => void }) => {
    if (isSubmitting || isDirty) {
      event.preventDefault();
      setIsModalOpen(true);
    }
  };

  const handleConfirmBack = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen">
      <div className="w-full h-14 flex items-center ">
        <Link
          href="/"
          onClick={handleBackClick}
          className="flex justify-center p-2 border ml-5 w-20 rounded-md hover:opacity-70 bg-primaryColor text-white"
        >
          Back
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center mt-8">
        <Modal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          title="Unsaved Changes"
          text=" You have unsaved changes. Are you sure you want to leave?"
          confirmButton={{
            text: 'Yes, Discard Change',
            function: handleConfirmBack,
          }}
          cancelButton={{ text: 'Cancel' }}
        />
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
    </div>
  );
}
