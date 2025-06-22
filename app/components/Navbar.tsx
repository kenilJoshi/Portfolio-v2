import {
  FaHome,
  FaLinkedin,
  FaGithub,
  FaGoogleDrive,
  FaBlogger,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { PersonalDetails } from "app/data/data";

export default async function FloatingNavbar() {


  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50 bg-black/80 backdrop-blur-lg rounded-full px-6 py-4 shadow-lg flex items-center space-x-6">
      <div className="">
        <Link href="/" className="text-white text-lg">
          <FaHome />
        </Link>
      </div>
      <div className="">
        <Link
          href="/blogs"
          className="text-white text-lg hover:text-gray-300 transform transition-transform duration-300 hover:scale-125"
        >
          <FaBlogger />
        </Link>
      </div>
      <div className="">
        <Link
          href={PersonalDetails.linkedin}
          className="text-white text-lg hover:text-gray-300 transform transition-transform duration-300 hover:scale-125"
        >
          <FaLinkedin />
        </Link>
      </div>
      <div className="transform transition-transform duration-300 hover:scale-125">
        <Link
          href={PersonalDetails.twitter}
          className="text-white text-lg hover:text-gray-300"
        >
          <FaSquareXTwitter />
        </Link>
      </div>
      <div className="transform transition-transform duration-300 hover:scale-125">
        <Link
          href={PersonalDetails.github}
          className="text-white text-lg hover:text-gray-300"
        >
          <FaGithub />
        </Link>
      </div>
      <div className="transform transition-transform duration-300 hover:scale-125">
        <Link
          href={PersonalDetails.resume}
          className="text-white text-lg hover:text-gray-300"
        >
          <FaGoogleDrive />
        </Link>
      </div>
    </div>
  );
}
