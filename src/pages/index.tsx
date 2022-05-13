import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = function Home() {
  return (
    <>
      <h2 className="my-6 text-center font-semibold text-4xl text-primary-400">
        <span aria-label="hello" role="img">
          👋
        </span>{' '}
        Hello! I&apos;m Javi
      </h2>
      <p className="text-center text-primary-700">
        I am a senior FullStack Developer and <strong>TypeScript</strong>{' '}
        architect, currently working on <strong>React</strong> and{' '}
        <strong>Node.js</strong> web applications. I am a highly motivated
        developer, focused on improve overall application architecture and
        deliver clean code. I love to participate in all application development
        steps, from product definition to delivery and deployment.
      </p>
    </>
  );
};

Home.layoutConfig = {
  contentProps: {
    sectionClassName: 'justify-center max-w-2xl',
  },
};

export default Home;
