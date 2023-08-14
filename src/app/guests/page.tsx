'use client';
import React, { useState } from 'react';
import unidecode from 'unidecode';
import { GUEST_DATA } from '@/data/GUEST_DATA';
import Link from 'next/link';
import { GuestList } from '@/components/GuestList/GuestLIst';
import { Input } from '@/components/Input/Input';

const removeAccents = (text: string) => unidecode(text);

export default function GuestsPage(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const filteredGuests = GUEST_DATA.filter(
    (guest) =>
      removeAccents(guest.full_name.toLowerCase()).includes(
        removeAccents(searchTerm.toLowerCase())
      ) ||
      removeAccents(guest.locality.toLowerCase()).includes(
        removeAccents(searchTerm.toLowerCase())
      )
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="w-full h-14 flex items-center bg-white shadow">
        <Link
          href="/"
          className="flex items-center justify-center p-2 w-20 ml-5 text-white bg-primaryColor rounded-md hover:opacity-70"
        >
          Back
        </Link>
      </div>

      <div className="flex flex-col items-center py-8">
        <h1 className="text-2xl font-semibold mb-4">RSVP List</h1>
        <Input
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          placeholder="Search by name or locality"
        />
        <GuestList filteredGuests={filteredGuests} />
      </div>
    </div>
  );
}
