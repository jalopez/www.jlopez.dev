import Link from 'next/link';
import { FC } from 'react';

export interface NavLinkProps {
  href?: string;
}

const NavLink: FC<NavLinkProps> = ({ href = '', children }) => {
  return (
    <Link href={href} passHref>
      <a className="inline-block mt-0 text-gray-600 hover:text-gray-800 mr-4">
        {children}
      </a>
    </Link>
  );
};

export { NavLink };
