import '../styles/main.css';

import { AppProps } from 'next/app';

import { Layout, LayoutProps } from '../layout/Layout';

const menuItems: LayoutProps['menuItems'] = [];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout menuItems={menuItems}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
