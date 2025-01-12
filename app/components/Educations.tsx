import Image from "next/image";
import { education } from "../data/data";

const WorkExperience = () => {
  return (
    <section className="flex flex-col gap-2">
      <div>
        <h1 className="text-2xl font-semibold text-gray-100">
          Education
        </h1>
      </div>
      <div className="flex flex-col">
        {education.map((education) => (
          <div key={education.id} className="flex items-center gap-2 p-2">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={education.img}
                alt={`${education.school} logo`}
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col px-2">
              <h2 className="text-md font-semibold text-gray-100">
                {education.school}
              </h2>
              <p className="text-gray-400">{education.degree}</p>
            </div>
            <div className="ml-auto">
              <p className="text-gray-400">{education.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
