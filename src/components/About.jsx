import aboutSvg from "../assets/about.svg";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element items-center">
          <h2 className="text-3xl font-bold mb-6">About me 👨‍💻</h2>
          <p className="space-y-6 text-lg text-gray-600">
            I’m a passionate software enthusiast and aspiring developer. Since my early teens, I’ve been building projects for myself.<br/> 
            In my free time, I enjoy working on new projects and continuously learning through courses and
            self-study to expand my skill set.<br/>
            I finished my Practical Engineer in Electronics and Computers and <b>Currently pursuing a BSc
            in Software Engineering</b>, I’m seeking an internship
            where I can grow as a developer and contribute to innovative
            projects.
          </p>
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
