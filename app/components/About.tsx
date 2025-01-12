import { PersonalDetails } from "../data/data";

const AboutSection = () => {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-2xl font-semibold text-gray-100">About</h2>
      <p className="text-base leading-relaxed text-gray-400">
        {PersonalDetails.description}
      </p>
    </section>
  );
};

export default AboutSection;
