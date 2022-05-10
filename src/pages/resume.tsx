import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';

import { ResumeCard } from '../components/ResumeCard';
import { SectionTitle } from '../components/SectionTitle';
import resumeJson from '../data/resume.json';

export const getStaticProps = (_ctx: GetStaticPropsContext) => {
  return {
    props: {
      resume: resumeJson,
    },
  };
};

export default function Resume({
  resume,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return resume.map((section) => (
    <section key={section.title}>
      <SectionTitle>{section.title}</SectionTitle>
      <ul className="mt-2">
        {section.items.map(({ body, ...rest }) => (
          <ResumeCard key={rest.title} {...rest}>
            {body}
          </ResumeCard>
        ))}
      </ul>
    </section>
  ));
}
