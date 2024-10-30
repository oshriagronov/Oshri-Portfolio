import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid  md:grid-cols-2 items-center gap-16">
        <img
          src={aboutSvg}
          alt="Moonlight on a forest"
          className="w-full h-64"
        />
        <article>
          <SectionTitle title="about me" />
          <p className="text mt-8 leading-loose">
            Hi there! 👋 <br></br>I’m Oshri Agronov, a passionate software
            enthusiast and aspiring developer. In my free time, I enjoy working
            on new projects and continuously learning through courses and
            self-study to expand my skill set.<br></br> Currently pursuing a BSc
            in Software Engineering(second year), I’m seeking an internship
            where I can grow as a developer and contribute to innovative
            projects.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
