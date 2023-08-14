'use client';
import { submitFormData } from '@/api/submitFormData';
import { Modal } from '@/components/Modal/Modal';
import { FormData, Inputs } from '@/components/RegistrationForm/utitls/types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { RegistraionForm } from '@/components/RegistrationForm/RegistraionForm';

export default function RegistrationPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<Inputs>();

  const onSubmitForm = async (data: FormData) => {
    data.dob = new Date(data.dob);
    const isSuccess = await submitFormData(data);
    if (isSuccess) {
      reset();
      setIsFormSubmitted(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
      {isFormSubmitted ? (
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">
            Form Submitted Successfully!
          </h1>
          <p>Thank you for your submission.</p>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center mt-8">
          <Modal
            isModalOpen={isModalOpen}
            title="Unsaved Changes"
            text=" You have unsaved changes. Are you sure you want to leave?"
            confirmButton={{
              text: 'Yes, Discard Change',
              onPrimaryAction: handleConfirmBack,
            }}
            cancelButton={{ text: 'Cancel', onClose: closeModal }}
          />

          <RegistraionForm
            handleSubmit={handleSubmit}
            register={register}
            isSubmitting={isSubmitting}
            onSubmitForm={onSubmitForm}
            errors={errors}
          />
        </div>
      )}
    </div>
  );
}
