'use client';
import { submitFormData } from '@/api/submitFormData';
import { LinkButton } from '@/components/LinkButton/LinkButton';
import { Modal } from '@/components/Modal/Modal';
import { RegistrationForm } from '@/components/RegistrationForm/RegistraionForm';
import { FormData, Inputs } from '@/components/RegistrationForm/utitls/types';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

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

  const onSubmitForm = async (data: FormData<Inputs>) => {
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
    <div className="min-h-screen bg-gray-100">
      <div className="w-full h-14 flex items-center bg-white shadow">
        <LinkButton name="Back" onClick={handleBackClick} />
      </div>
      {isFormSubmitted ? (
        <div className="text-center m-12">
          <h1 className="text-2xl font-semibold">
            Form Submitted Successfully!
          </h1>
          <p>Thank you for your submission.</p>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center py-8">
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

          <RegistrationForm
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
