import { GuestProps } from '../GuestInfo/GuestInfo';

export type GuestListProps = {
  filteredGuests: GuestProps['guest'][];
};

export const GuestList: React.FC<GuestListProps> = ({ filteredGuests }) => {
  return (
    <>
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
    </>
  );
};
