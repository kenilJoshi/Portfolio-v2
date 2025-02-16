import Image from "next/image";
import { PersonalDetails } from "../data/data";

const HeroSection = () => {
  return (
    <section className="flex flex-row items-center justify-between gap-4 md:gap-10 w-full px-4">
      <div className="flex flex-col">
        <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold text-gray-100">
          Hi, I&apos;m {PersonalDetails.firstName} 👋
        </h1>
        <p className="text-sm sm:text-lg md:text-xl text-gray-400">
          Full Stack Developer
        </p>
      </div>
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full overflow-hidden shrink-0">
        <Image
          src={PersonalDetails.profilePhoto}
          alt={`${PersonalDetails.firstName}'s profile picture`}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
