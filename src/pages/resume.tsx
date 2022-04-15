import { ResumeCard } from '../components/ResumeCard';
import { SectionTitle } from '../components/SectionTitle';

export default function Resume() {
  return (
    <>
      <section>
        <SectionTitle>Work Experience</SectionTitle>
        <ul className="mt-2">
          <ResumeCard
            subtitle="Grafana Labs"
            subtitleRight="Remote"
            title="Senior Engineer"
            titleRight="January 2022 - Present"
          />
          <ResumeCard
            subtitle="Cabify"
            subtitleRight="Madrid / Remote"
            title="Principal Engineer"
            titleRight="April 2017 - December 2021"
          >
            Worked as a JavaScript specialist, focused mainly in web app
            development with React+Redux as technological stack. Also working in
            backend side with Elixir/Phoenix
          </ResumeCard>
        </ul>
      </section>
      <section>
        <SectionTitle>Education</SectionTitle>
      </section>
    </>
  );
}
