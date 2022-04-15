export default function Home() {
  return (
    <section className="flex-1 flex flex-col justify-center m-4 p-4">
      <h2 className="my-6 text-center font-semibold text-4xl text-primary-400">
        Hello! I&apos;m Javi
      </h2>
      <p className="text-center text-primary-700">
        I am a senior FullStack Developer and TypeScript architect, currently
        working on React/Node web applications. I am a highly motivated
        developer, focused on improve overall application architecture and
        deliver clean code. I love to participate in all application development
        steps, from product definition to delivery and deployment.
      </p>
    </section>
  );
}

Home.layoutConfig = {
  mainClassName: 'flex',
};
