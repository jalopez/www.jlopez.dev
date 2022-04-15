import { SectionTitle } from '../components/SectionTitle';

export default function Projects() {
  return (
    <>
      {' '}
      <section>
        <SectionTitle>Projects</SectionTitle>
        <ul className="mt-1">
          <li className="py-2">
            <div className="flex justify-between my-1">
              <strong>Lorem Ipsum</strong>
              <p className="flex">
                <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                  HTML
                </span>
                <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                  CSS
                </span>
                <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                  JS
                </span>
              </p>
            </div>
            <ul className="flex mb-2">
              <li>
                <a
                  className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded"
                  href="#"
                >
                  Live
                </a>
              </li>
              <li>
                <a
                  className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded"
                  href="#"
                >
                  Code
                </a>
              </li>
            </ul>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              delectus labore enim in minus quod vero dignissimos et, ratione
              obcaecati quis maiores? Voluptatem, natus cupiditate perferendis
              omnis ex hic incidunt! Earum dolore cupiditate sed et maxime
              distinctio iure fugiat aspernatur at veniam laudantium eveniet
              corporis dicta reiciendis quod consequatur, labore perferendis
              dolorum velit quibusdam minus iste dolorem! Officiis, obcaecati
              maxime
            </p>
          </li>
        </ul>
      </section>
    </>
  );
}
