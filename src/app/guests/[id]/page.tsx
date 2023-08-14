'use client';
import { GUEST_DATA } from '@/data/GUEST_DATA';
import Link from 'next/link';
import { capitalize } from 'lodash';
import { calculateAge } from '@/helpers/calculateAge';

export default function GuestPage({ params }: { params: { id: string } }) {
  const guest = GUEST_DATA.find((guest) => guest.id === parseInt(params.id));

  if (!guest) {
    return <div>User not found</div>;
  }
  const age = calculateAge(guest.dob);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="w-full h-14 flex items-center bg-white shadow">
        <Link
          href="/guests"
          className="flex items-center justify-center p-2 w-20 ml-5 text-white bg-primaryColor rounded-md hover:opacity-70"
        >
          Back
        </Link>
      </div>

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
    </div>
  );
}
