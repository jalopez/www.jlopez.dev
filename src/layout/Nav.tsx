import { FC } from 'react';

import { NavLink } from '../components/NavLink';

const Nav: FC = () => {
  return (
    <nav className="max-w-7xl">
      <div className="mx-auto py-6 px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-full flex-grow items-center block mt-0">
            <div className="text-sm">
              <NavLink href="/">About</NavLink>
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Nav };
