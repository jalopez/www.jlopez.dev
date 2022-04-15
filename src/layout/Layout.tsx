import { FC, PropsWithChildren } from 'react';

import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';
import { Meta } from './Meta';
import { NavProps } from './Nav';

export type LayoutProps = PropsWithChildren<{
  description?: string;
  menuItems?: NavProps['menuItems'];
  title?: string;
}>;

const Layout: FC<LayoutProps> = ({
  title = 'Javier López Pardo - Home Page',
  description = 'Home page about Javier López Pardo - FullStack Developer',
  menuItems = [],
  children,
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Meta description={description} title={title} />
      <Header menuItems={menuItems} />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export { Layout };
