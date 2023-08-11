import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import { ErrorProps } from '../utitls/types';

export const FormErrorMessage: React.FC<ErrorProps> = ({ errors, name }) => {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => <p className="text-red-500 pb-2">{message}</p>}
    />
  );
};
