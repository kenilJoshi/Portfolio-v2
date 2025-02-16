import Image from "next/image";
import { experiences } from "../data/data";

const WorkExperience = () => {
  return (
    <section className="flex flex-col gap-2">
      <div>
        <h1 className="text-2xl font-semibold text-gray-100">
          Work Experience
        </h1>
      </div>
      <div className="flex flex-col">
        {experiences.map((experience) => (
          <div key={experience.id} className="flex items-center gap-2 p-2">
            {/* Responsive Image Size */}
            <div className="w-16 sm:w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={experience.img}
                alt={`${experience.role} logo`}
                width={64} // Matches 4rem (64px)
                height={64}
                className="object-cover"
              />
            </div>

            <div className="flex flex-col px-2">
              <h2 className="text-md font-semibold text-gray-100">
                {experience.company}
              </h2>
              <p className="text-gray-400">{experience.role}</p>
            </div>

            <div className="ml-auto">
              <p className="text-gray-400">{experience.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
