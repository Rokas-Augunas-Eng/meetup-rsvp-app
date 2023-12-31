import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RegistrationForm } from '../RegistraionForm';

describe('RegistrationForm component', () => {
  const mockHandleSubmit = jest.fn();
  const mockRegister = jest.fn();
  const mockErrors = {};
  const mockOnSubmit = jest.fn();

  beforeEach(() => {
    mockHandleSubmit.mockClear();
    mockRegister.mockClear();
    mockOnSubmit.mockClear();
  });

  it('renders correctly with default props', () => {
    render(
      <RegistrationForm
        handleSubmit={mockHandleSubmit}
        register={mockRegister}
        isSubmitting={false}
        onSubmitForm={mockOnSubmit}
        errors={mockErrors}
      />
    );

    expect(
      screen.getByText(
        'Hello, please fill out the registration form for the event!'
      )
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('submits the form on button click', async () => {
    render(
      <RegistrationForm
        handleSubmit={mockHandleSubmit}
        register={mockRegister}
        isSubmitting={false}
        onSubmitForm={mockOnSubmit}
        errors={mockErrors}
      />
    );

    userEvent.click(screen.getByRole('button', { name: 'Submit' }));

    await waitFor(() => {
      expect(mockHandleSubmit).toHaveBeenCalled();
    });
  });

  it('disables the submit button while submitting', async () => {
    render(
      <RegistrationForm
        handleSubmit={mockHandleSubmit}
        register={mockRegister}
        isSubmitting={true}
        onSubmitForm={mockOnSubmit}
        errors={mockErrors}
      />
    );

    expect(
      screen.getByRole('button', { name: 'Submitting...' })
    ).toBeDisabled();
  });
});
