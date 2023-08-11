import { render, screen } from '@testing-library/react';
import { InputField } from '../../utitls/inputData';
import { RegistrationFields } from '../RegistrationFields';

describe('RegistrationFields component', () => {
  const mockRegister = jest.fn();
  const mockErrors = {};

  beforeEach(() => {
    mockRegister.mockClear();
  });

  it('renders TextInput component correctly', () => {
    const field: InputField = {
      component: 'textInput',
      label: 'Name',
      name: 'fullName',
      type: 'text',
    };

    render(
      <RegistrationFields
        field={field}
        register={mockRegister}
        errors={mockErrors}
      />
    );

    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders SelectInput component correctly', () => {
    const field: InputField = {
      component: 'selectInput',
      label: 'Name',
      name: 'numberOfGuests',
      type: 'text',
    };

    render(
      <RegistrationFields
        field={field}
        register={mockRegister}
        errors={mockErrors}
      />
    );

    expect(screen.getByText('Profession')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('renders TextareaInput component correctly', () => {
    const field: InputField = {
      component: 'textareaInput',
      label: 'Name',
      name: 'address',
      type: 'text',
    };

    render(
      <RegistrationFields
        field={field}
        register={mockRegister}
        errors={mockErrors}
      />
    );

    expect(screen.getByText('Address')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
