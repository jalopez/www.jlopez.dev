import Head from 'next/head';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Javier López Pardo</title>
        <meta content="Javier López Pardo home page" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <div className={styles.container}>jlopez home page</div>
    </>
  );
}
