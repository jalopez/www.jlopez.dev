import cn from 'classnames';
import { useState } from 'react';

import { NavLink } from '../components/NavLink';

export interface NavProps {
  menuItems?: {
    href: string;
    label: string;
  }[];
}

export function Nav({ menuItems = [] }: NavProps) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navClassName = cn('bg-gray-100', {
    hidden: !isNavOpen,
    mobileMenu: isNavOpen,
  });

  return (
    <nav className="mr-2">
      <section className="flex lg:hidden">
        <div
          className="space-y-1.5 px-8 py-8"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-6 bg-gray-600" />
          <span className="block h-0.5 w-6 bg-gray-600" />
          <span className="block h-0.5 w-6 bg-gray-600" />
        </div>

        <div className={navClassName}>
          <div
            className="absolute top-2 right-1 px-8 py-8"
            onClick={() => setIsNavOpen(false)}
          >
            <svg
              className="h-8 w-8 text-gray-600"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <line x1="18" x2="6" y1="6" y2="18" />
              <line x1="6" x2="18" y1="6" y2="18" />
            </svg>
          </div>
          <ul className="flex flex-col items-center justify-between min-h-[250px]">
            {menuItems.map(({ href, label }) => (
              <li className="my-8" key={href}>
                <NavLink href={href}>{label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ul className="hidden space-x-8 lg:flex">
        {menuItems.map(({ href, label }) => (
          <li key={href}>
            <NavLink href={href}>{label}</NavLink>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .mobileMenu {
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: white;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
    </nav>
  );
}
