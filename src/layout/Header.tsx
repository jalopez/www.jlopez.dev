import Link from 'next/link';
import { FC } from 'react';

import { Nav } from './Nav';

const Header: FC = () => {
  return (
    <header className="bg-gray-100 sticky top-0 flex flex-wrap justify-between items-center">
      <div className="max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-gray-900">
          <Link href="/" passHref>
            <a className="text-gray-900">
              <span className="font-bold">Javier López Pardo</span>
            </a>
          </Link>
        </h1>
        <p className="text-base leading-6 text-gray-500">FullStack Developer</p>
      </div>
      <Nav />
    </header>
  );
};

export { Header };
