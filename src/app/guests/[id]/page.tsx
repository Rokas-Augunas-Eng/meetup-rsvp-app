'use client';
import { GuestInfo } from '@/components/GuestInfo/GuestInfo';
import { LinkButton } from '@/components/LinkButton/LinkButton';
import { GUEST_DATA } from '@/data/GUEST_DATA';

export default function GuestPage({ params }: { params: { id: string } }) {
  const guest = GUEST_DATA.find((user) => user.id === parseInt(params.id));

  if (!guest) {
    return <div>Guest not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="w-full h-14 flex items-center bg-white shadow">
        <LinkButton link="/guests" name="Back" />
      </div>
      <GuestInfo guest={guest} />
    </div>
  );
}
