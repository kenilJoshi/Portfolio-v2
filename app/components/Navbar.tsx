import { FaHome, FaLinkedin, FaGithub, FaGoogleDrive, FaBlogger } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

export default function FloatingNavbar() {
  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50 bg-black/80 backdrop-blur-lg rounded-full px-6 py-4 shadow-lg flex items-center space-x-6">
      <div className="transform transition-transform duration-300 hover:scale-125 hover:bg-gray-800 rounded-full
hover:p-2">
        <a href="/" className="text-white text-lg">
          <FaHome />
        </a>
      </div>
      {/* <div className="">
        <a
          href="/blogs"
          className="text-white text-lg hover:text-gray-300 transform transition-transform duration-300 hover:scale-125"
        >
          <FaBlogger />
        </a>
      </div> */}
      <div className="">
        <a
          href="https://www.linkedin.com/in/kenil-joshi-2536741ab/"
          className="text-white text-lg hover:text-gray-300 transform transition-transform duration-300 hover:scale-125"
        >
          <FaLinkedin />
        </a>
      </div>
      <div className="transform transition-transform duration-300 hover:scale-125">
        <a
          href="https://x.com/KenilJoshi3"
          className="text-white text-lg hover:text-gray-300"
        >
          <FaSquareXTwitter />
        </a>
      </div>
      <div className="transform transition-transform duration-300 hover:scale-125">
        <a
          href="https://github.com/kenilJoshi"
          className="text-white text-lg hover:text-gray-300"
        >
          <FaGithub />
        </a>
      </div>
      <div className="transform transition-transform duration-300 hover:scale-125">
      <a
        href="https://drive.google.com/file/d/1_pAri8vG2cwnkLYs_YXl9FkWStoUPP2U/view?usp=drive_link"
        className="text-white text-lg hover:text-gray-300"
      >
        <FaGoogleDrive />
      </a>
      </div>
    </div>
  );
}
