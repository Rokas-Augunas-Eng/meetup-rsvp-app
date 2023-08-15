import Link from 'next/link';

export default function Home() {
  const links = [
    { href: '/registration', text: 'RSVP to the Event' },
    { href: '/guests', text: 'View Guests' },
    { href: '/admin', text: 'Admin Access' },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="bg-gradient-to-r from-blue-800 to-cyan-700 text-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-4">
          Welcome to the Event Page
        </h1>
        <p className="text-lg mb-8">Join us for an exciting event!</p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="bg-primaryColor hover:opacity-70 text-white py-2 px-4 rounded-md block text-center"
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
