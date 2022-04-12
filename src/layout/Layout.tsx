import { FC, PropsWithChildren } from 'react';

import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';
import { Meta } from './Meta';

export type LayoutProps = PropsWithChildren<{
  description?: string;
  title?: string;
}>;

const Layout: FC<LayoutProps> = ({
  title = 'Javier López Pardo - Home Page',
  description = 'Home page about Javier López Pardo - FullStack Developer',
  children,
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Meta description={description} title={title} />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export { Layout };
