import { expect } from '@jest/globals';

const person = {
  age: '12',
  name: 'Rokas',
};

it('should have correct age and name properties', () => {
  expect(person.age).toBe('12');
  expect(person.name).toBe('Rokas');
});
