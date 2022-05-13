import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';

import { ProjectCard } from '../components/ProjectCard';
import { SectionTitle } from '../components/SectionTitle';
import projectsJson from '../data/projects.json';

export const getStaticProps = (_ctx: GetStaticPropsContext) => {
  return {
    props: {
      projects: projectsJson,
    },
  };
};

export default function Projects({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <SectionTitle>Projects</SectionTitle>
      <ul className="mt-1">
        {projects.map(({ description, ...project }) => (
          <ProjectCard key={project.title} {...project}>
            {description}
          </ProjectCard>
        ))}
      </ul>
    </>
  );
}
