const ContactSection = () => {
  return (
    <section className="flex flex-col gap-6 pt-6">
      <div className="text-center flex flex-col items-center justify-center gap-2">
        <h1 className="text-black text-xs bg-white rounded-md font-bold px-2 py-1 transition-colors">
          Contact
        </h1>
        <h1 className="text-2xl font-semibold text-gray-100">
          Get In Touch
        </h1>
        <p className="text-lg leading-relaxed text-gray-400">
  If you&apos;d like to collaborate with me or work on a project together, feel free to{" "}
  <a
    href="https://x.com/KenilJoshi3"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 underline hover:text-blue-500"
  >
    DM me on Twitter
  </a>
  .
</p>

      </div>
    </section>
  );
};

export default ContactSection;
