import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Link href="/registration">RSVP to the event</Link>
      <Link href="/guests">Guests</Link>
      <Link href="/admin">Admin</Link>
    </main>
  );
}
