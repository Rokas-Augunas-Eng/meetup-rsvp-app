import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SelectInput } from '../SelectInput';

describe('SelectInput component', () => {
  const mockRegister = jest.fn();
  const mockErrors = {};

  beforeEach(() => {
    mockRegister.mockClear();
  });

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ];

  it('renders correctly with default props', () => {
    render(
      <SelectInput
        label="Test Label"
        name="numberOfGuests"
        options={options}
        register={mockRegister}
        errors={mockErrors}
      />
    );

    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('calls the register function with the correct parameters', () => {
    render(
      <SelectInput
        label="Test Label"
        name="numberOfGuests"
        options={options}
        register={mockRegister}
        errors={mockErrors}
      />
    );

    const select = screen.getByRole('combobox');
    userEvent.selectOptions(select, 'option1');

    expect(mockRegister).toHaveBeenCalledWith('numberOfGuests', {
      required: expect.any(String),
    });
  });
});
