import HomeSection from "./components/Home";
import AboutSection from "./components/About";
import FloatingNavbar from "./components/Navbar";
import WorkExperience from "./components/WorkExp";
import EducationSection from "./components/Educations";
import SkillsSection from "./components/Skills";
import ProjectSection from "./components/Projects";
import ContactSection from "./components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-10 p-8 pb-20 sm:p-20 font-[var(--font-geist-sans)]">
      <div className="w-full max-w-[35rem]">
        <HomeSection />
      </div>
      <div className="w-full max-w-[35rem]">
        <AboutSection />
      </div>
      <div className="w-full max-w-[35rem]">
        <WorkExperience />
      </div>
      <div className="w-full max-w-[35rem]">
        <EducationSection />
      </div>
      <div className="w-full max-w-[35rem]">
        <SkillsSection />
      </div>
      <div className="w-full max-w-[37rem]">
        <ProjectSection />
      </div>
      <div className="w-full max-w-[37rem]">
        <ContactSection />
      </div>
      <FloatingNavbar />
    </div>
  );
}
