import { render, screen } from '@testing-library/react';
import { InputField } from '../../utitls/inputData';
import { RegistrationFields } from '../RegistrationFields';

describe('RegistrationFields component', () => {
  const mockRegister = jest.fn();
  const mockErrors = {};
  const mockOptions = [{ value: '0', label: '0' }];

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
      label: 'Number of Guests',
      name: 'numberOfGuests',
      type: 'text',
      options: mockOptions,
    };

    render(
      <RegistrationFields
        field={field}
        register={mockRegister}
        errors={mockErrors}
      />
    );

    expect(screen.getByText('Number of Guests')).toBeInTheDocument();
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
