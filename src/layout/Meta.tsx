import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { FC } from 'react';

interface MetaProps {
  canonical?: string;
  description: string;
  title: string;
}

const Meta: FC<MetaProps> = (props) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          content="width=device-width,initial-scale=1"
          key="viewport"
          name="viewport"
        />
        <link
          href={`${router.basePath}/apple-touch-icon.png`}
          key="apple"
          rel="apple-touch-icon"
        />
        <link
          href={`${router.basePath}/favicon-32x32.png`}
          key="icon32"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href={`${router.basePath}/favicon-16x16.png`}
          key="icon16"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link
          href={`${router.basePath}/favicon.ico`}
          key="favicon"
          rel="icon"
        />
      </Head>
      <NextSeo
        canonical={props.canonical}
        description={props.description}
        openGraph={{
          description: props.description,
          locale: 'en',
          site_name: 'Javier López Pardo - Home Page',
          title: props.title,
          url: props.canonical,
        }}
        title={props.title}
      />
    </>
  );
};

export { Meta };
