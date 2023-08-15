import { GUEST_DATA } from '@/data/GUEST_DATA';
import { calculateAge } from '@/helpers/calculateAge';

const ageRanges = [
  { name: '13-18', min: 13, max: 18 },
  { name: '18-25', min: 18, max: 25 },
  { name: '25+', min: 25, max: 999 },
];

export const ageCounts = ageRanges.map(({ name, min, max }) => ({
  ageRange: name,
  count: GUEST_DATA.filter((person) => {
    const age = calculateAge(person.dob);
    return age >= min && age <= max;
  }).length,
}));
