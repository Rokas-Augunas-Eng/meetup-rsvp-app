'use client';
import { GuestList } from '@/components/GuestList/GuestLIst';
import { Input } from '@/components/Input/Input';
import { LinkButton } from '@/components/LinkButton/LinkButton';
import { GUEST_DATA } from '@/data/GUEST_DATA';
import { useState } from 'react';
import unidecode from 'unidecode';

const removeAccents = (text: string) => unidecode(text);

export default function GuestsPage() {
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
        <LinkButton name="Back" />
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
