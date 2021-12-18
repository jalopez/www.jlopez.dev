import { FC } from 'react';

const Main: FC = ({ children }) => {
  return <main className="py-6 px-4 sm:px-6 lg:px-8 flex-1">{children}</main>;
};

export { Main };
