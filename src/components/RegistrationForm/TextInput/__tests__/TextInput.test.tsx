import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextInput } from '../TextInput';

describe('TextInput component', () => {
  const mockRegister = jest.fn();
  const mockErrors = {};

  beforeEach(() => {
    mockRegister.mockClear();
  });

  it('renders label and input correctly', () => {
    render(
      <TextInput
        label="Test Label"
        name="fullName"
        register={mockRegister}
        errors={mockErrors}
        type="text"
      />
    );

    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: '' })).toBeInTheDocument();
  });

  it('does not display error message when there are no errors', () => {
    render(
      <TextInput
        label="Test Label"
        name="fullName"
        register={mockRegister}
        errors={mockErrors}
        type="text"
      />
    );

    const errorElement = screen.queryByText('This field is required');
    expect(errorElement).toBeNull();
  });

  it('calls the register function with the correct parameters', () => {
    render(
      <TextInput
        label="Test Label"
        name="fullName"
        register={mockRegister}
        errors={{}}
        type="text"
      />
    );

    const input = screen.getByRole('textbox');
    userEvent.type(input, 'Test Value');

    expect(mockRegister).toHaveBeenCalledWith('fullName', {
      required: expect.any(String),
      valueAsDate: false,
    });
  });
});
