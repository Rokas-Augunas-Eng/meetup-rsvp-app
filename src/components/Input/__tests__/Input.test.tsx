import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input, InputProps } from '../Input';

describe('Input component', () => {
  const mockInputProps: InputProps = {
    searchTerm: 'Initial Value',
    setSearchTerm: jest.fn(),
    placeholder: 'Search...',
  };

  it('calls setSearchTerm on input change', async () => {
    const { getByPlaceholderText } = render(<Input {...mockInputProps} />);

    const inputElement = getByPlaceholderText('Search...');
    await userEvent.type(inputElement, 'New Value');

    expect(mockInputProps.setSearchTerm).toHaveBeenCalled();
  });
});
