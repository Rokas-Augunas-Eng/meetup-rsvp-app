import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextareaInput } from '../TextAreaInput';

describe('TextareaInput component', () => {
  const mockRegister = jest.fn();
  const mockErrors = {};

  beforeEach(() => {
    mockRegister.mockClear();
  });

  it('renders correctly with default props', () => {
    render(
      <TextareaInput
        label="Test Label"
        name="address"
        register={mockRegister}
        errors={mockErrors}
        value={50}
      />
    );

    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: '' })).toBeInTheDocument();
  });

  it('calls the register function with the correct parameters', () => {
    render(
      <TextareaInput
        label="Test Label"
        name="address"
        register={mockRegister}
        errors={mockErrors}
        value={100}
      />
    );

    const textarea = screen.getByRole('textbox');
    userEvent.type(textarea, 'Test Value');

    expect(mockRegister).toHaveBeenCalledWith('address', {
      required: expect.any(String),
      maxLength: {
        value: 100,
        message: expect.any(String),
      },
    });
  });
});
