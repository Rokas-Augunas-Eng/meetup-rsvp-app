import Link from 'next/link';
import React, { MouseEventHandler } from 'react';

type LinkButtonProps = {
  name: string;
  link?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export const LinkButton: React.FC<LinkButtonProps> = ({
  name,
  link = '/',
  onClick,
}) => {
  return (
    <Link
      href={link}
      className="flex items-center justify-center p-2 w-20 ml-5 text-white bg-primaryColor rounded-md hover:opacity-70"
      onClick={onClick}
    >
      {name}
    </Link>
  );
};
