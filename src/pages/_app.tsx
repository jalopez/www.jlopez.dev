import '../styles/main.css';

import type { NextPage } from 'next';
import { AppProps } from 'next/app';

import { Layout, LayoutProps } from '../layout/Layout';

const menuItems: LayoutProps['menuItems'] = [
  {
    href: '/resume',
    label: 'Resume',
  },
  {
    href: '/projects',
    label: 'Projects',
  },
  // {
  //   href: '/blog',
  //   label: 'Blog',
  // },
];

export type NextPageWithLayout = NextPage & {
  layoutConfig?: LayoutProps;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <Layout menuItems={menuItems} {...Component.layoutConfig}>
      <Component {...pageProps} />
    </Layout>
  );
}

export { reportWebVitals } from 'next-axiom';

export default MyApp;
