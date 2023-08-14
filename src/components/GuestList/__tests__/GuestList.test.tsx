import { render } from '@testing-library/react';
import { GuestListProps, GuestList } from '../GuestLIst';

describe('GuestList', () => {
  const mockFilteredGuests: GuestListProps['filteredGuests'] = [
    {
      id: 1,
      full_name: 'John Doe',
      dob: '1990-01-01',
      address: '123 Main St',
      locality: 'Cityville',
      country: 'Countryland',
      profession: 'student',
      number_of_guests: 2,
    },
  ];

  it('renders correctly with filtered guests', () => {
    const { getByText } = render(
      <GuestList filteredGuests={mockFilteredGuests} />
    );

    const guestFullName = getByText('John Doe - Cityville');
    expect(guestFullName).toBeInTheDocument();
  });
});
