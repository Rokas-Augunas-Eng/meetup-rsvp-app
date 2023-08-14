import { calculateAge } from '@/helpers/calculateAge';
import { capitalize } from 'lodash';

export type GuestProps = {
  guest: {
    id: number;
    full_name: string;
    dob: string;
    address: string;
    locality: string;
    country: string;
    profession: string;
    number_of_guests: number;
  };
};

export const GuestInfo: React.FC<GuestProps> = ({ guest }) => {
  console.log(guest);
  const age = calculateAge(guest.dob);

  return (
    <div className="flex flex-col items-center py-8">
      <div className="bg-white p-6 rounded-md shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">{guest.full_name}</h1>
        <p className="text-gray-600 mb-2">Age: {age}</p>
        <p className="text-gray-600 mb-2">Date of Birth: {guest.dob}</p>
        <p className="text-gray-600 mb-2">
          Profession: {capitalize(guest.profession)}
        </p>
        <p className="text-gray-600 mb-2">Locality: {guest.locality}</p>
        <p className="text-gray-600 mb-2">Guests: {guest.number_of_guests}</p>
        <p className="text-gray-600 mb-2">
          Address: {guest.address}, {guest.locality}, {guest.country}
        </p>
      </div>
    </div>
  );
};
