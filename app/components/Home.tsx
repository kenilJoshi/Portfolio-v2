import Image from "next/image";
import { PersonalDetails } from "../data/data";

const HeroSection = () => {
  return (
    <section className="flex gap-10 items-center">
      <div>
        <h1 className="text-5xl font-bold text-gray-100">
          Hi, I'm {PersonalDetails.firstName} 👋
        </h1>
        <p className="text-xl text-gray-400">Full Stack Developer</p>
      </div>
      <div className="relative w-32 h-32 rounded-full overflow-hidden">
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
