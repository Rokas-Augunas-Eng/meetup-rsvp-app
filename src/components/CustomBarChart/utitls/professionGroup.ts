import { GUEST_DATA } from '@/data/GUEST_DATA';

const professionRanges = [
  { label: 'Students', name: 'student' },
  { label: 'Employed', name: 'employed' },
];

export const professionCounts = professionRanges.map(({ name, label }) => ({
  professionRange: label,
  count: GUEST_DATA.filter((person) => person.profession === name).length,
}));
