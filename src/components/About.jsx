import aboutSvg from "../assets/about.svg";

const About = () => {
  return (
    <section className="scroll-mt-20 py-20" id="about">
      {/* Container for aligning content vertically and centering items */}
      <div className="align-element items-center">
          {/* Section title */}
          <h2 className="text-3xl title mb-6">About me 👨‍💻</h2>
          {/* Paragraph describing personal background and aspirations */}
          <p className="space-y-6 text-lg sub-text">
            I’m a passionate software enthusiast and aspiring developer. Since my early teens, I’ve been building projects for myself.<br/> 
            In my free time, I enjoy working on new projects and continuously learning through courses and
            self-study to expand my skill set.<br/>
            I finished my <b>Practical Engineer in Electronics and Computers</b> and <b>Currently pursuing a BSc
            in Software Engineering</b>, I’m seeking an internship
            where I can grow as a developer and contribute to innovative
            projects.
          </p>
          {/* Image illustrating the about section content */}
          <img
            src={aboutSvg}
            alt="Moonlight on a forest"
            className="w-full h-64 mt-20"
          />
      </div>
    </section>
  );
};

export default About;
