import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';

export type NavLinkProps = PropsWithChildren<{
  href?: string;
  onClick?: () => void;
}>;

const NavLink: FC<NavLinkProps> = ({ href = '', children, onClick }) => {
  return (
    <Link href={href} passHref>
      <a
        className="inline-block mt-0 text-gray-600 hover:text-gray-800 mr-4"
        onClick={onClick}
      >
        {children}
      </a>
    </Link>
  );
};

export { NavLink };
