import React from 'react';
import { render } from '@testing-library/react';
import { GuestProps, GuestInfo } from '../GuestInfo';

describe('GuestInfo', () => {
  const mockGuest: GuestProps['guest'] = {
    id: 1,
    full_name: 'John Doe',
    dob: '1990-01-01',
    address: '123 Main St',
    locality: 'Cityville',
    country: 'Countryland',
    profession: 'Engineer',
    number_of_guests: 2,
  };

  it('renders guest information correctly', () => {
    const { getByText } = render(<GuestInfo guest={mockGuest} />);

    expect(getByText('John Doe')).toBeInTheDocument();
    expect(getByText('Date of Birth: 1990-01-01')).toBeInTheDocument();
    expect(getByText('Profession: Engineer')).toBeInTheDocument();
    expect(getByText('Locality: Cityville')).toBeInTheDocument();
    expect(getByText('Guests: 2')).toBeInTheDocument();
    expect(
      getByText('Address: 123 Main St, Cityville, Countryland')
    ).toBeInTheDocument();
  });
});
