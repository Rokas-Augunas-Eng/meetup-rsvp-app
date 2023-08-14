export type InputProps = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
};

export const Input: React.FC<InputProps> = ({
  searchTerm,
  setSearchTerm,
  placeholder,
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={searchTerm}
      onChange={(event) => setSearchTerm(event.target.value)}
      className="px-4 py-2 rounded-md border focus:ring focus:outline-none focus:ring-primaryColor"
    />
  );
};
