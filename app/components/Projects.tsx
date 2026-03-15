import Image from "next/image";
import { projects } from "../data/data";

type Project = {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  github: string;
  webapp: string | boolean;
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden flex flex-col">
      <div className="relative w-full h-36">
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
        ``
      </div>

      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-lg font-semibold mb-1">{project.title}</h2>
          <p className="text-xs text-gray-400 mb-2">{project.date}</p>
          <p className="text-gray-300 mb-2 line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1 mb-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-gray-700 rounded-md hover:bg-gray-600 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-gray-800 text-xs font-medium px-3 py-1 rounded-md hover:bg-gray-200 transition-colors"
          >
            GitHub
          </a>
          {project.webapp && typeof project.webapp === "string" && (
            <a
              href={project.webapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white text-xs font-medium px-3 py-1 rounded-md hover:bg-blue-600 transition-colors"
            >
              Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectSection = () => {
  return (
    <section className="flex flex-col gap-6 pt-6">
      <div className="text-center flex flex-col items-center justify-center gap-2">
        <h1 className="text-black text-xs bg-white rounded-md font-bold px-2 py-1 transition-colors">
          My Projects
        </h1>
        <h1 className="text-2xl font-semibold text-gray-100">
          Checkout Some of My Projects
        </h1>
        <p className="text-lg leading-relaxed text-gray-400">
          I&apos;ve worked on a variety of Projects, from simple to complex web
          applications. Here are some of my creations:
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {projects.map((project: Project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
