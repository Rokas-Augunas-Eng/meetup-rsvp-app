'use client';
import { GuestInfo } from '@/components/GuestInfo/GuestInfo';
import { GUEST_DATA } from '@/data/GUEST_DATA';
import Link from 'next/link';

export default function GuestPage({ params }: { params: { id: string } }) {
  const guest = GUEST_DATA.find((guest) => guest.id === parseInt(params.id));

  if (!guest) {
    return <div>User not found</div>;
  }

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
      <GuestInfo guest={guest} />
    </div>
  );
}
