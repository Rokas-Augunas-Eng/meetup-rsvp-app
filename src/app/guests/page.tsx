'use client';
import React, { useState } from 'react';
import unidecode from 'unidecode';
import { GUEST_DATA } from '@/data/GUEST_DATA';
import Link from 'next/link';

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

      <div className=" flex flex-col items-center py-8">
        <h1 className="text-2xl font-semibold mb-4">RSVP List</h1>
        <input
          type="text"
          placeholder="Search by name or locality"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-1/5 px-4 py-2 rounded-md border focus:ring focus:outline-none focus:ring-primaryColor"
        />
        <ul className="mt-6 w-full max-w-md">
          {filteredGuests.map((guest) => (
            <li key={guest.id} className="border-b py-3">
              <a
                href={`/guests/${guest.id}`}
                className=" hover:text-primaryColor"
              >
                {guest.full_name} - {guest.locality}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
