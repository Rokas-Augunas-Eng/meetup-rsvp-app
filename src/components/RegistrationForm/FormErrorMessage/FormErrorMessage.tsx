import { ErrorMessage } from '@hookform/error-message';
import { FieldErrors } from 'react-hook-form';

type FormErrorMessageProps = {
  name: string;
  errors: FieldErrors;
};

export const FormErrorMessage: React.FC<FormErrorMessageProps> = ({
  errors,
  name,
}) => {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => <p className="text-red-500 pb-2">{message}</p>}
    />
  );
};
