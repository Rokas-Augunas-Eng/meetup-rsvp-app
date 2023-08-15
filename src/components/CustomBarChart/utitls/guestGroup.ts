import { GUEST_DATA } from '@/data/GUEST_DATA';

const guestRanges = [
  { name: 'No guest', min: 0, max: 0 },
  { name: 'One guest', min: 1, max: 1 },
  { name: 'Two guests', min: 2, max: 2 },
];
export const guestCount = guestRanges.map(({ name, min, max }) => ({
  guestRange: name,
  count: GUEST_DATA.filter((person) => {
    return person.number_of_guests >= min && person.number_of_guests <= max;
  }).length,
}));
